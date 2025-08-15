particlesJS("particles", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "push"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

const blogContents = {
  "bmu-inha": {
    title: "Getting Accepted to BMU-INHA",
    text: `
Getting accepted to BMU-INHA University was both an exciting and challenging experience for me. 
The admission process involved several stages: filling out the application form, submitting documents, 
and taking entrance exams.

From my experience, careful planning and consistent preparation are key to success. 
I dedicated specific hours each day to studying English and my major-related subjects. 
I also used online resources provided by the university and tips from past students.

The day I received my acceptance was incredibly joyful and rewarding. 
This achievement gave me a strong motivation for both academic and personal growth. 
BMU-INHA is not just an educational institution for me; it is a solid foundation for my future career.

If you are aiming to get accepted to this university, stay organized, study consistently, and keep your motivation high!
    `
  },
  post2: {
    title: "Project Case Studies",
    text: "Detailed breakdowns of my projects, how they were built and the challenges I faced. This is the full content..."
  }
};

const modal = document.getElementById('blog-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.blog-modal .close');

document.querySelectorAll('.open-blog').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const postKey = card.getAttribute('data-blog');
    modalTitle.textContent = blogContents[postKey].title;
    modalText.innerHTML = blogContents[postKey].text;

    if(postKey === "bmu-inha"){
      modalText.innerHTML += `
        <img src="indir.jpg" alt="BMU-INHA" style="width:100%; margin-top:20px; border-radius:10px;">
      `;
    }

    modal.style.display = "block";
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

window.addEventListener('scroll', function () {
  var scrollTopButton = document.querySelector('.scroll-top');
  if (this.window.pageYOffset > 200) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

