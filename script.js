(function showCursor() {

    'use strict';

    // Variables
    var boxes = document.querySelectorAll('.row__box'),
        cursor = document.querySelector('.cursor'),
        boxPos = [];

    // Get coordinates for the current cursor position
    function getPos(e, el) {

        var xPos = 0,
            yPos = 0;

        xPos = (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos = (el.offsetTop - el.scrollTop + el.clientTop);

        var mouseX = e.clientX - xPos,
            mouseY = e.clientY - yPos;

        cursor.style.top = '' + mouseY + 'px';
        cursor.style.left = '' + mouseX + 'px';

    }

    // Add event listeners and call fns for the corresponding box
    for (var i = 0; i < boxes.length; i++) {

        boxes[i].addEventListener('mousemove', function(event) {

            var currentBox = this;
            boxPos = getPos(event, currentBox);

        }, false);

        boxes[i].addEventListener('mouseenter', function() {

            this.appendChild(cursor);

            setTimeout(function() {

                cursor.classList.add('cursor--is-visible')

            }, 10);

        }, false);

        boxes[i].addEventListener('mouseleave', function() {

            cursor.classList.remove('cursor--is-visible');

        }, false);

    }

})();
var hold = [];
var op = 1.0;
$(document).ready(function() {

  var x = Math.floor($(window).width()/12);
  $("#nav_bar").css('font-size', x);


  $(window).scroll(function () {
    $("#arrow").fadeOut();
$("#wrapper").fadeOut();
$("#allbox").fadeIn();
if ($(window).scrollTop() < 250) {
$('#nav_bar').css('font-size', x - Math.floor(($(window).scrollTop()/2)));
}

if($(window).scrollTop() === 0){
  $("#arrow").fadeIn();
  $("#wrapper").fadeIn();
}

    if ($(window).scrollTop() >= 40 && $(window).scrollTop() < $("#back").height() -200) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 40) {
      $('#nav_bar').removeClass('navbar-fixed');
      $('#nav_bar').removeClass('navbar_done');
    }
    if($(window).scrollTop() >= $("#back").height() - 200){
      $('#nav_bar').addClass('navbar_done');
    }
  });
});
