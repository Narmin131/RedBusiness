// Fixed nav
$(document).ready(function() {
  $(window).scroll(function () { 
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 550) {
      $('header').addClass('fixed-nav');
    }

    if ($(window).scrollTop() < 551) {
      $('header').removeClass('fixed-nav');
    }
  });
});

// Faq accordion added
 const faqs = document.querySelectorAll(".faq");
 faqs.forEach((faq) =>{
     faq.addEventListener("click",() => {
       faq.classList.toggle("active");
     });
 });