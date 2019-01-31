// JavaScript Document
//scroll page top button
$(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $("#top-btn").fadeIn();
      } else {
          $("#top-btn").fadeOut();
      }
});
    $("#top-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
});
