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


  $(document).ready(function () {
    // Select all <a> elements
    $("a").each(function () {
      // Get the content of the <a> element
      var content = $(this).text();
      // Add the 'title' attribute with the same content
      $(this).attr("title", content);
      console.log("title  ", content)
    });
  })

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
