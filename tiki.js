
 function hamDropdown() {
    document.querySelector(".nut_dropdown").classList.toggle("hienThi");
}
$(document).ready(function(){
  $(".nut_dropdown").hover(function(){
      $(".backdrop").show();
      }, function(){
      $(".backdrop").hide();
  });
});
function hamDropdown2() {
  document.querySelector(".noidung_dropdown2").classList.toggle("hienThi");
}
 var current_level = 7200;
 if(localStorage.getItem("current_level")){
  var total_seconds = localStorage.getItem("current_level");
} else {
  var total_seconds = 7200;
}
 function timer() {
    //if (days <= 0){
    //    days = current_level;
    //}

    var hours = Math.floor(current_level/3600);
    var remainingHours = current_level - (hours * 3600);
 

    //if (hours >= 24){
    //     hours = 23;
    //}

    var minutes = Math.floor(remainingHours/60);
    var remainingMinutes = remainingHours - (minutes * 60);

    //if (minutes >= 60) {
    //     minutes = 59;
    //}

    var seconds = remainingMinutes;
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;}

    document.getElementById('h').innerText = hours.toString();
    document.getElementById('m').innerText = minutes.toString();
    document.getElementById('s').innerText = seconds.toString();

    //if (seconds == 0) {
    //    clearInterval(countdownTimer);
    //     document.getElementById('countdown').innerHTML = "Completed";
    //}

    current_level--;
 }
 var countdownTimer = setInterval(timer, 1000);
 ///////////////////////////////////////////////////////////////////////



$(document).ready(function(){
  $('.slideshow-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots :true,
    autoplaySpeed: 1500,
  });
  $('.slick_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {      
        breakpoint: 1250,
         settings:{
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: false
        }
      },
      {
      breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 827,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint:630 ,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint:320 ,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      } 
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.slick_slider_wrapper').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 12,
      slidesToScroll: 12,
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      
  });
  $('.brand_static_widget_container_body_banner').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
          breakpoint: 1250,
            settings: {
              slidesToShow: 1 ,
              slidesToScroll: 1,
              infinite: false,
              dots: true
          }
          },
          {
            breakpoint: 827,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint:630 ,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint:400 ,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });  
  });
