/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var ima = document.getElementsByTagName("img");
    // console.log(ima);
    var cont = ima[0].getAttribute("data-hover");
    // console.log(cont);
    im = ima[0].src;
    // console.log(im);

    ima[0].addEventListener("mouseout", myFunction);
    ima[0].addEventListener("mouseover", myFunction2);

    function myFunction2() {
        ima[0].src = cont;
    }

    function myFunction() {
        ima[0].src = im;
    }

})();

