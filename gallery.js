let currentIndex = 0;
const images = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg', '../images/5.jpg', '../images/6.jpg','../images/7.jpg', '../images/8.jpg', '../images/9.jpg', '../images/10.jpg', '../images/11.jpg', '../images/12.jpg','../images/13.jpg', '../images/14.jpg', '../images/15.jpg', '../images/16.jpg', '../images/17.jpg', '../images/18.jpg','../images/19.jpg', '../images/20.jpg'];
const focusedImage = document.getElementById('focusedImage');

function changeFocus() {
   console.log('Changing focus to index:', currentIndex);
   focusedImage.src = images[currentIndex];
}

function prevImage() {
   currentIndex = (currentIndex - 1 + images.length) % images.length;
   console.log('Previous button clicked. New index:', currentIndex);
   changeFocus();
}

function nextImage() {
   currentIndex = (currentIndex + 1) % images.length;
   console.log('Next button clicked. New index:', currentIndex);
   changeFocus();
}

changeFocus();
