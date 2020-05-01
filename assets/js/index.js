$(document).keydown(function (e) {
    if (e.which === 123) {

        return false;

    }

});

$(document).bind("contextmenu", function (e) {
    e.preventDefault();

});