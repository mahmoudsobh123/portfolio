// document.addEventListener('DOMContentLoaded', (event) => {
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             // Remove the active class from all links
//             navLinks.forEach(link => link.classList.remove('active-link'));
            
//             // Add the active class to the clicked link
//             e.target.classList.add('active-link');
//         });
//     });
// });

/////////////// Carsol Pictures //////////////////////
var images = ["images/Rectangle 4153.png" ,"images/img3.jpg", "images/pic2.jpg"];
var currentIndex = 0;

function showNextImage() {
    var img = document.getElementById("slideshow-img");
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
}

setInterval(showNextImage, 1000);

/////////////////////// Add Cross ///////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.about-review-info-card .cross1');
    const rightArrow = document.querySelector('.about-review-info-card .cross2');
    const reviewCards = document.querySelector('.about-review-info-card .about-review-info-card');

    // حساب مقدار التمرير بناءً على عرض البطاقة
    function getScrollAmount() {
        return reviewCards.clientWidth * 0.8; // يمكنك تغيير النسبة كما تريد
    }

    leftArrow.addEventListener('click', function() {
        reviewCards.scrollBy({
            top: 0,
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function() {
        reviewCards.scrollBy({
            top: 0,
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });
});

//////////////////// Contact section ///////////////////////////
function clearInput(id) {
    document.getElementById(id).value = "";
  }
  function addShadow(id) {
    document.getElementById(id).classList.add("box-shadow");
  }

  function removeShadow(id) {
    document.getElementById(id).classList.remove("box-shadow");
  }
  
