/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {

    // your code here
    var validity = document.getElementById("validity");

    document.getElementById("pass-one").addEventListener("input", function () {

        var input = document.getElementById("pass-one").value;
        var counter = 0;

        for(var i =0; i < input.length; i++){
            var check = input.charAt(i);

            if (!isNaN(check)){
                counter++;
            }
        }


        if (input.length >= 8 && counter >= 2){
            validity.innerHTML = "ok"
        }
        else {
            validity.innerHTML = "not ok"
        }

    })

})();