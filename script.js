// $(document).ready(function () {
//   $(".wrapper").css("display", "none")
//   setTimeout(() => {
//     $(".wrapper").css("display", "block")
//     $("#preloader").css("display", "none")
//   }, 1200)
// })

$(window).scroll(function () {
  if ($(document).scrollTop() > 55) {
    $('nav').css('opacity', '1')
  } else {
    $('nav').css('opacity', '.7')
  }
});

$('.nav-link').click(function () {
  $('.active').removeClass("active")
  $(this).addClass("active")
})