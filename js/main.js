(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);




function nameValid() {
    var text = document.getElementById("name").value;
    var letters = /^[a-zA-Z\s]*$/;

    if (text == "") {
      document.getElementById("nameReq").style.display = "block";
      document.getElementById("nameLen").style.display = "none";
      document.getElementById("nameErr").style.display = "none";
    } else if (!text.match(letters)) {
      document.getElementById("nameErr").style.display = "block";
      document.getElementById("nameReq").style.display = "none";
      document.getElementById("nameLen").style.display = "none";

    }
    else if (text.length < 5) {
      document.getElementById("nameLen").style.display = "block";
      document.getElementById("nameReq").style.display = "none";
      document.getElementById("nameErr").style.display = "none";
    }
    else {
      document.getElementById("nameReq").style.display = "none";
      document.getElementById("nameLen").style.display = "none";
      document.getElementById("nameErr").style.display = "none";

    }
  }

  function emailValid() {
    var text = document.getElementById("email").value;
    var letters = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (text == "") {
      document.getElementById("emailReq").style.display = "block";
       document.getElementById("emailErr").style.display = "none";
    } 
    else if (!text.match(letters)) {
      document.getElementById("emailErr").style.display = "block";
      document.getElementById("emailReq").style.display = "none";

     }
    else {
      document.getElementById("emailErr").style.display = "none";
      document.getElementById("emailReq").style.display = "none";

    }
  }

// function emailValid() {
//     var text = document.getElementById("email").value;
//     var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     if (text == "") {
//       document.getElementById("emailReq").style.display = "block";
//       document.getElementById("emailErr").style.display = "none";
//     } else if (!text.match(regx)) {
//       document.getElementById("emailErr").style.display = "block";
//       document.getElementById("emailReq").style.display = "none";
//     }else{
//       document.getElementById("emailReq").style.display = "none";
//       document.getElementById("emailErr").style.display = "none";

//     }
//   }






$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbynwqh4FsWhKv1vMhLXQMdxyAhj8P6FSXAPc5Rk8S6nib8IhotFEV1F7OnHzNOr5RcE/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
    