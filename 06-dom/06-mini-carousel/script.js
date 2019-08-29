/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let button = document.getElementById("next");
    let image = document.getElementsByTagName("img");
    var i = 0;

    button.addEventListener("click", function () {

        if (i === gallery.length -1){
            i = 0;
            image[0].src = gallery[i];
        } else {
            i++;
            image[0].src = gallery[i];
        }

    })

})();
