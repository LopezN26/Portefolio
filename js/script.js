/*new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 3,
    breakpoints: {
    890: {
        perView: 1
        }
    }
}).mount(); //création du glider*/

AOS.init(); //pour faire marcher AOS

var rellax = new Rellax('.rellax', {
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});// pour faire marcher la parallax, cible la classe rellax ici


// GESTION DU SCROLL

//récupération du header pour modifier sa classe ensuite
var header = $("#header");
//récupération des positions des sections

var accueil = $("#accueil")[0].offsetTop;
var aboutMe = $("#aboutMe")[0].offsetTop;
//var slider =$("#slider")[0].offsetTop;
var projects =$("#projects")[0].offsetTop;


//conditions pour affichage du Background ou non dans le header
$(window).scroll(function() {
    if ($(window).scrollTop() < aboutMe) {
        header.removeClass("backgroundWhite");
        header.removeClass("backgroundBlue");
    }
    else if ($(window).scrollTop() > aboutMe && $(window).scrollTop() < projects)
    {
        header.removeClass("backgroundWhite");
        header.addClass("backgroundBlue");
    }
    else if ($(window).scrollTop() > projects)
    {
        header.removeClass("backgroundWhite");
        header.addClass("backgroundBlue");
    }

    if ($(window).scrollTop() > 100)
    {
        $("#progressBarFillHtmlCss").addClass("fill80");
        $("#progressBarFillHtmlCss>p").addClass("appear");
        $("#progressBarFillHtmlCss").removeClass("empty");
    }
    if ($(window).scrollTop() > 165)
    {
        $("#progressBarFillJs").addClass("fill70");
        $("#progressBarFillJs>p").addClass("appear");
        $("#progressBarFillJs").removeClass("empty");
    }
    if ($(window).scrollTop() > 230)
    {
        $("#progressBarFillPhp").addClass("fill75");
        $("#progressBarFillPhp>p").addClass("appear");
        $("#progressBarFillPhp").removeClass("empty");
    }
    if ($(window).scrollTop() > 295)
    {
        $("#progressBarFillSql").addClass("fill60");
        $("#progressBarFillSql>p").addClass("appear");
        $("#progressBarFillSql").removeClass("empty");
    }

});


$(function(){
    $.scrollIt();
    // upKey: 38,             // key code to navigate to the next section
    //     downKey: 40,           // key code to navigate to the previous section
    //     easing: 'linear',      // the easing function for animation
    //     scrollTime: 600,       // how long (in ms) the animation takes
    //     activeClass: 'active', // class given to the active nav element
    //     onPageChange: null,    // function(pageIndex) that is called when page is changed
    //     topOffset: 0           // offste (in px) for fixed top navigation
});
