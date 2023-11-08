$("#submit").click(function (e) {
  e.preventDefault();
  const arrayData = $("#mess-contact").serializeArray();
  const data = arrayData.reduce((prev, curr) => {
    prev[curr.name] = curr.value;
    return prev;
  }, {});
  fetch(
    "https://script.google.com/macros/s/AKfycbzC59JQmunD-HU2lLx5gl5BY9F1z3C2AZEV9CNEch-bgvXlyQfaqqXykopSZvkTw8GjDA/exec",
    {
      redirect: "follow",
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      mode: "no-cors",
      body: JSON.stringify(data),
    }
  );
});
$(".between-header-bg").click(function (e) {
  e.preventDefault();
  $("#main").removeClass("hidden");
  $("#main").addClass("animate__fadeInUp main-position");
  $("#header").addClass("animate__fadeOutUp");
  $(window).on("load scroll", function () {
    if ($(window).scrollTop() > 900) {
      $(".fixed").removeClass("hidden");
    }
  });
});
$(window).on("load scroll", function () {
  if (
    $(window).scrollTop() > $(".frame-1").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".frame-1").addClass("animate__bounceInLeft");
  }
  if (
    $(window).scrollTop() > $(".frame-2").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".frame-2").addClass("animate__bounceInRight");
  }
  if (
    $(window).scrollTop() >
      $(".title-invite").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".title-invite").addClass("animate__bounceInUp");
  }
  if (
    $(window).scrollTop() >
      $(".bride-home").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".bride-home").addClass("animate__bounceInRight");
  }
  if (
    $(window).scrollTop() >
      $(".groom-home").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".groom-home").addClass("animate__bounceInLeft");
  }
  if (
    $(window).scrollTop() >
      $(".contact-animate").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".contact-animate").addClass("animate__fadeInUp");
  }
  if (
    $(window).scrollTop() >
      $(".form-animate").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".form-animate").addClass("animate__fadeInBottomRight");
  }
  if (
    $(window).scrollTop() >
      $(".date-invite").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".date-invite").addClass("animate__bounceInUp");
  }
  if (
    $(window).scrollTop() >
      $(".groom-address").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".groom-address").addClass("animate__fadeInRight");
  }
  if (
    $(window).scrollTop() >
      $(".thank-invite").offset().top - $(window).height() &&
    $(window).scrollTop() > 0
  ) {
    $(".thank-invite").addClass("animate__fadeInLeft");
  }
});

$(".box span").click(function () {
  if ($(this).hasClass("spin")) {
    $(".box span").removeClass("spin");
  } else {
    $(".box span").removeClass("spin");
    $(this).addClass("spin");
  }
});
