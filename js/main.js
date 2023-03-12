$('.news-carousel').owlCarousel({
    loop:true,
    margin:10,
    rtl: true,
    autoplay:true,
    nav:true,
    navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.partners-carousel').owlCarousel({
    loop:true,
    margin:40,
    rtl: true,
    dots:false,
    autoplay:true,
    nav:true,
    navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.ceo-carousel').owlCarousel({
    loop:true,
    margin:20,
    rtl: true,
    dots:false,
    nav:true,
    navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$('.prizes-carousel').owlCarousel({
    loop:true,
    margin:20,
    rtl: true,
    dots:false,
    nav:true,
    navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.events-carousel').owlCarousel({
    loop:true,
    margin:20,
    rtl: true,
    dots:false,
    nav:true,
    navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// Get the button:
let mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}