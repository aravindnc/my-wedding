// (function ($) {
//     "use strict";
//       $('.sakura-falling').sakura();
// })(jQuery);

(function ($) {
    $('.sakura-falling').sakura('start', {
        blowAnimations: [
            'blow-soft-left'
        ], // Horizontal movement animation names
        className: 'sakura', // Class name to use
        fallSpeed: 1, // Factor for petal fall speed
        maxSize: 14, // Maximum petal size
        minSize: 9, // Minimum petal size
        newOn: 300, // Interval after which a new petal is added
        swayAnimations: [ // Swaying animation names
            'sway-0'
        ]
    });
})(jQuery);

// $(document).on('click', function(){
//    document.getElementById("my_audio").play();
// });

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
// }


var countDownDate = new Date("Sep 12, 2022 11:50:00").getTime();

var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='custom-container'><div class='days block'>" + days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)', 'border: 4px solid #3E0E02', 'color: white', 'display: block', 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)', 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset', 'line-height: 40px', 'text-align: center', 'font-weight: bold', 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37', 'display: block', 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)', 'line-height: 40px', 'font-weight: bold', 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal', 'display: block', 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)', 'line-height: 40px', 'font-weight: bold', 'font-size: 32px'
].join(';');