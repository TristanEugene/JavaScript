/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
// to get the value of an input: document.getElementById("element-id").value

    var performOperation = function (mame) {

        var first = parseInt(document.getElementById("op-one").value);
        var second = parseInt(document.getElementById("op-two").value);

        // perform the operation
        switch (mame) {
            case 'addition':
                alert(first + second);
                break;
            case 'substraction':
                alert(first - second);
                break;
            case 'multiplication':
                alert(first * second);
                break;
            case 'division':
                alert(first / second);
                break;
            default:
                alert("Please full each bottom with number")
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });
    });

})();
