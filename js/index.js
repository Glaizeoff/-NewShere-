window.onscroll = function () { myFunction() };

var header = document.querySelector("#main-menu");
var sticky = header.offsetTop;


new Swiper(".swiper-container", {
  loop: true,                         
  direction: "vertical", 
  slidesPerView: 3,

  autoplay: {                        
      delay: 2000,  
  },   



});

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


