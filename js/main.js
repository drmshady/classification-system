// // active
// let list = document.querySelectorAll(".navbar .nav-link")
// list.forEach(element =>
//     {
//         element.addEventListener('click',function(){
//             removeClass()
//             this.classList.add('active')
//         })
//     })
// function removeClass(){
//     for(let i = 0; i< list.length; i++){
//         list[i].classList.remove('active');
//     }
// }

// slideshow
const slideshowImages = document.querySelectorAll(".home img");
const nextImageDelay = 2000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

slideshowImages[currentImageCounter].style.display = "block";
// slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);


function nextImage() {
  slideshowImages[currentImageCounter].style.display = "none";
//   slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  slideshowImages[currentImageCounter].style.display = "block";
//   slideshowImages[currentImageCounter].style.opacity = 1;
}


