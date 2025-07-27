
    //   const mobileMenuButton = document.getElementById('mobile-menu-button');
    //   const mobileMenu = document.getElementById('mobile-menu');

    //   mobileMenuButton.addEventListener('click', () => {
    //     mobileMenu.classList.toggle('hidden');
    //   });
    
        //  function toggleMenu() {
    //   document.getElementById("showw").classList.toggle("show");
    // }
// start navigation
    const mainIcon = document.getElementById('toggleMenu');
    const moreIcons = document.getElementById('showw');

    mainIcon.addEventListener('click', () => {
      if (moreIcons.style.display === 'block') {
        moreIcons.style.display = 'none';
      } else {
        moreIcons.style.display = 'block';
      }
    });
// stop navigation
    
// start arrow
function functionscroll() {
  const nextSection = document.getElementById("section2");
  nextSection.scrollIntoView({ behavior: "smooth" });
}


// stop arrow

// Go to Projects function - Fixed
function goToProjects() {
  const projectsSection = document.querySelector(".projects-container");
  if (projectsSection) {
    projectsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  }
}

// Navigation scroll function - Fixed
function scrollToSection(selector) {
  const section = document.querySelector(selector);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  // Close mobile menu
  const mobileMenu = document.getElementById('showw');
  if (window.innerWidth <= 768) {
    mobileMenu.style.display = 'none';
  }
}
