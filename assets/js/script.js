
// import axios from 'axios'

// const baseApi = "http://hrd-adminweb";
// const masterApiKeyHeader = {
//   headers: { "master-api": "db588403f0a1d3b897442a28724166b4" },
// };

// axios.get(
//     `${baseApi}/api/company/department/section/30`,
//     masterApiKeyHeader
//   ).then(res => {
//     console.log(res);
//   })

$(document).ready(function () {

  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

      // scroll spy
      $('section').each(function () {
          let height = $(this).height();
          let offset = $(this).offset().top - 200;
          let top = $(window).scrollTop();
          let id = $(this).attr('id');

          if (top > offset && top < offset + height) {
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }
      });
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear')
  });

  // <!-- emailjs to mail contact form data -->
  // $("#contact-form").submit(function (event) {
  //     emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

  //     emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
  //         .then(function (response) {
  //             console.log('SUCCESS!', response.status, response.text);
  //             document.getElementById("contact-form").reset();
  //             alert("Form Submitted Successfully");
  //         }, function (error) {
  //             console.log('FAILED...', error);
  //             alert("Form Submission Failed! Try Again");
  //         });
  //     event.preventDefault();
  // });
  // <!-- emailjs to mail contact form data -->

});

function showSkills() {
  let data = [
      {
          "name": "HTML5",
          "icon": "./assets/images/html-5.png"
      },
      {
          "name": "CSS3",
          "icon": "./assets/images/css-3.png"
      },
      {
          "name": "JavaScript",
          "icon": "./assets/images/js.png"
      },
      {
          "name": "Bootstrap",
          "icon": "./assets/images/bootstrap.png"
      },
      {
          "name": "Vue",
          "icon": "./assets/images/vue.png"
      },
      {
        "name": "Vuetify",
        "icon": "./assets/images/vuetify.png"
      },
      {
        "name": "Ant Design",
        "icon": "./assets/images/antdesign.png"
      },
      {
          "name": "PHP",
          "icon": "./assets/images/php.png"
      },
      {
          "name": "Laravel",
          "icon": "./assets/images/laravel.png"
      },
      {
        "name": "XAMPP",
        "icon": "./assets/images/xampp.png"
      },
      {
          "name": "MySQL",
          "icon": "./assets/images/mysql.png"
      },
      {
          "name": "SQL Server",
          "icon": "./assets/images/sqlserver.png"
      },
      {
          "name": "MS Access",
          "icon": "./assets/images/access.png"
      },
      {
          "name": "VisualBasic",
          "icon": "./assets/images/vb.png"
      },
      {
          "name": "Git",
          "icon": "./assets/images/git.png"
      },
      {
          "name": "GitHub",
          "icon": "./assets/images/github.png"
      }, 
      {
          "name": "GitLab",
          "icon": "./assets/images/gitlab.png"
      }, 
      {
          "name": "SourceTree",
          "icon": "./assets/images/sourcetree.png"
      }, 
  ]
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  data.forEach(skill => {
      skillHTML += `
        <div class="bar">
            <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}

showSkills()

var typed = new Typed(".typing-text", {
  strings: ["coding", "web development", "sql development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the modal elements
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var closeButton = document.getElementsByClassName("close-button")[0];

    // Get all project images
    var projectImages = document.querySelectorAll('.project-image');

    // Loop through all images and add click event listeners
    projectImages.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = "block"; // Show the modal
            modalImage.src = this.getAttribute('data-image'); // Set modal image source
            captionText.innerHTML = this.alt; // Set modal caption from image alt text
        });
    });

    // When the user clicks on <span> (x), close the modal
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the image, close the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Optional: Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" || event.key === "Esc") {
            if (modal.style.display === "block") {
                modal.style.display = "none";
            }
        }
    });
});

// sending email
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submitButton');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending... <i class="fa fa-spinner fa-spin"></i>';

    const formData = new FormData(this); // 'this' refers to the form element

    // Prepare template parameters for EmailJS
    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('subject') || 'N/A', 
        message: formData.get('message')
    };
    console.log(templateParams);
    
    // Send the email using EmailJS
    emailjs.send(
        "alcedoronnrick@gmail.com",
        "template_htgz0dj",
        templateParams
    )
    .then(function(response) {
        // Success callback
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset(); 

        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = 'Submit <i class="fa fa-paper-plane"></i>';
    }, function(error) {
        // Error callback
        console.error('FAILED...', error);
        alert('Oops! Something went wrong. Please try again later.');

        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = 'Submit <i class="fa fa-paper-plane"></i>';
    });
});