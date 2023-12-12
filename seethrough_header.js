// script.js

window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var mainContent = document.querySelector('.content');
    var dropdownContent = document.querySelector('.dropdown .content');
    var scrollDifference = window.scrollY;
  
    if (scrollDifference > 50) {
      header.style.background = 'rgba(128, 0, 0, 0.9)';
    } else {
      header.style.background = 'rgba(128, 0, 0, 1)';
    }
  
    mainContent.style.marginTop = header.offsetHeight + 'px';
  
    // Adjust dropdown position based on the header's transparency
    dropdownContent.style.top = '-' + (header.offsetHeight - 35) + 'px'; // Adjust this value based on your needs
  });
  