(function ($) {
    "use strict";

    $("#educationSection").hide();
    $("#workSection").hide();
    $("#skillsSection").hide();
    $("#projectsSection").hide();
    $("#awards-certificationsSection").hide();

    // Overview clicked
    $('#overview').click(function () {
        $("#overviewSection").show();
        $("#educationSection").hide();
        $("#workSection").hide();
        $("#skillsSection").hide();
        $("#projectsSection").hide();
        $("#awards-certificationsSection").hide();
        $("#overview").addClass("active");
        $("#education").removeClass("active");
        $("#work").removeClass("active");
        $("#skills").removeClass("active");
        $("#projects").removeClass("active");
        $("#awards-certifications").removeClass("active");
    });

    // Education clicked
    $('#education').click(function () {
        $("#overviewSection").hide();
        $("#educationSection").show();
        $("#workSection").hide();
        $("#skillsSection").hide();
        $("#projectsSection").hide();
        $("#awards-certificationsSection").hide();
        $("#education").addClass("active");
        $("#overview").removeClass("active");
        $("#work").removeClass("active");
        $("#skills").removeClass("active");
        $("#projects").removeClass("active");
        $("#awards-certifications").removeClass("active");
    });

    // Work clicked
    $('#work').click(function () {
        $("#workSection").show();
        $("#educationSection").hide();
        $("#overviewSection").hide();
        $("#skillsSection").hide();
        $("#projectsSection").hide();
        $("#awards-certificationsSection").hide();
        $("#work").addClass("active");
        $("#education").removeClass("active");
        $("#overview").removeClass("active");
        $("#skills").removeClass("active");
        $("#projects").removeClass("active");
        $("#awards-certifications").removeClass("active");
    });

    // Skills clicked
    $('#skills').click(function () {
        $("#skillsSection").show();
        $("#educationSection").hide();
        $("#workSection").hide();
        $("#overviewSection").hide();
        $("#projectsSection").hide();
        $("#awards-certificationsSection").hide();
        $("#skills").addClass("active");
        $("#education").removeClass("active");
        $("#work").removeClass("active");
        $("#overview").removeClass("active");
        $("#projects").removeClass("active");
        $("#awards-certifications").removeClass("active");
    });

    // Projects clicked
    $('#projects').click(function () {
        $("#projectsSection").show();
        $("#educationSection").hide();
        $("#workSection").hide();
        $("#skillsSection").hide();
        $("#overviewSection").hide();
        $("#awards-certificationsSection").hide();
        $("#projects").addClass("active");
        $("#education").removeClass("active");
        $("#work").removeClass("active");
        $("#skills").removeClass("active");
        $("#overview").removeClass("active");
        $("#awards-certifications").removeClass("active");
    });

    // Awards & Certifications clicked
    $('#awards-certifications').click(function () {
        $("#awards-certificationsSection").show();
        $("#educationSection").hide();
        $("#workSection").hide();
        $("#skillsSection").hide();
        $("#projectsSection").hide();
        $("#overviewSection").hide();
        $("#overview").removeClass("active");
        $("#education").removeClass("active");
        $("#work").removeClass("active");
        $("#skills").removeClass("active");
        $("#projects").removeClass("active");
        $("#awards-certifications").addClass("active");
    });

    // Prevent Default
    $("#overview").click(function (ev) {
        ev.preventDefault();
    });
    $("#education").click(function (ev) {
        ev.preventDefault();
    });
    $("#work").click(function (ev) {
        ev.preventDefault();
    });
    $("#skills").click(function (ev) {
        ev.preventDefault();
    });
    $("#projects").click(function (ev) {
        ev.preventDefault();
    });
    $("#awards-certifications").click(function (ev) {
        ev.preventDefault();
    });

})(jQuery);

console.clear();