/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var target = document.getElementById("target");
    var wave = "Woo-hoo! I'm making waves! Wéééé!\n" + "Oh ... I think I'm having seasickness ...";
    target.innerHTML = "";
    var pos = 0;

    for (var i =0; i < wave.length; i++){
        pos++;

        let char = wave.charAt(i);

        if (pos === 1) {
            char = "<span class = '1'>" + char + "</span>";
        }

        if (pos === 2 || pos === 8) {
            char = "<span class = '2'>" + char + "</span>";
        }

        if (pos === 3 || pos === 7) {
            char = "<span class = '3'>" + char + "</span>";
        }

        if (pos === 4 || pos === 6) {
            char = "<span class = '4'>" + char + "</span>";
        }

        if (pos === 5) {
            char = "<span class = '5'>" + char + "</span>";
        }

        if (pos === 8) {
            pos = 0;
        }

        target.innerHTML += char;

        var first = document.getElementsByClassName('1');
        for (var n = 0; n < first.length; n++) {
            first[n].style.fontSize = "0.5em";
        }

        var second = document.getElementsByClassName('2');
        for (var n = 0; n < second.length; n++) {
            second[n].style.fontSize = "1em";
        }

        var third = document.getElementsByClassName('3');
        for (var n = 0; n < third.length; n++) {
            third[n].style.fontSize = "1.5em";
        }

        var fourth = document.getElementsByClassName('4');
        for (var n = 0; n < fourth.length; n++) {
            fourth[n].style.fontSize = "2em";
        }

        var fifth = document.getElementsByClassName('5');
        for (var n = 0; n < fifth.length; n++) {
            fifth[n].style.fontSize = "2.5em";
        }

    }

})();
