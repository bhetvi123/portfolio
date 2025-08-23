
    //   const mobileMenuButton = document.getElementById('mobile-menu-button');
    //   const mobileMenu = document.getElementById('mobile-menu');

    //   mobileMenuButton.addEventListener('click', () => {
    //     mobileMenu.classList.toggle('hidden');
    //   });
    
        //  function toggleMenu() {
    //   document.getElementById("showw").classList.toggle("show");
    // }
// start navigation
// Start navigation toggle using class
const mainIcon = document.getElementById('toggleMenu');
const mobileDrawer = document.getElementById('mobileDrawer');

mainIcon.addEventListener('click', () => {
  mobileDrawer.classList.toggle('drawer-open');
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



