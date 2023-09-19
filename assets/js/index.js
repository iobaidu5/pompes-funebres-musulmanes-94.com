$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });
  
  const nav = document.querySelector(".Navbar");
  const form = document.querySelector(".to-fixed");
  window.addEventListener("scroll", fixNav);
  // window.addEventListener("scroll", fixForm);
  
  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add("navbar-active");
     nav.removeAttribute('clip-path');
    } else {
      nav.classList.remove("navbar-active");
    }
  }

  
  var owl = $("#owl");
  owl.owlCarousel({
    items: 1,
    navigation: false,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fal fa-caret-left owlNav'></i>",
      "<i class='fal fa-caret-right owlNav'></i>",
    ],
    responsiveClass: true,
    responsive: {
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
        nav: false,
      },
      1600: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });


  $(document).ready(function() {
    // Select all anchor elements
    $("a").each(function() {
      // Extract the href attribute value and remove any leading/trailing spaces
      var href = $(this).attr("href").trim();

      // Remove the '{%', '%}' and spaces from the href value to get the title
      var title = href.replace(/\{%\s*|\s*%\}/g, '').trim();

      // Set the title attribute of the anchor element
      $(this).attr("title", title);
    });
  });


  $(document).ready(function() {
    // Get the current page's URL
    var currentPageUrl = window.location.pathname;

    // Loop through each link in the footer menu
    $(".footer_links-ul--link").each(function() {
        // Get the link's href attribute
        var linkHref = $(this).attr("href");

        // Check if the link's href matches the current page's URL
        if (linkHref === currentPageUrl) {
            // If they match, add the "active" class
            $(this).addClass("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img[src]").forEach(image => {
      const altText = generateAltText(image.getAttribute("src"));
      image.alt = altText;
  });
});

function generateAltText(src) {
  return src.split('/').pop().split('.')[0].replace(/[-\/_*]/g, ' ');
}