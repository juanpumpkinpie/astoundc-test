//togle shar-it
var sharethis = document.getElementById('show'),
    toggle = document.getElementById('toggle');
        
  sharethis.addEventListener('click', function(){
        toggle.style.display =  (toggle.style.display == 'none') ? 'flex' : 'none';
  });


//carrousel 
var carrousel = document.querySelector('.grid-slider'),
    car = document.querySelector('.grid-slider__product')
           
           var ActualImage = 0
           
           var amongImages = document.querySelectorAll('.grid-slider img').length
           
           document.querySelector('.prev').addEventListener('click', function () {
             if (ActualImage > 0) {
               ActualImage--
             } else {
               ActualImage = amongImages - 1
             }
               car.style.transform = 'translateX(' + (-carrousel.offsetWidth * ActualImage) + 'px)';
           })
           
           document.querySelector('.next').addEventListener('click', function () {
             if (ActualImage < (amongImages - 1)) {
               ActualImage++
             } else {
               ActualImage = 0
             }
             car.style.transform = 'translateX(' + (-carrousel.offsetWidth * ActualImage) + 'px)';
           })
           
           car.addEventListener('transitionend', function () {
             console.log('Astound comeerce')
           })