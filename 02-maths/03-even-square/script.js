/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        {
            var n=prompt ("calculate and display the square numbers between 1 and 21:","click ok");
            var msg="";
            var res= "0";

            for(var x= 2; x<21; x++)
            {
                res = x * x;
                msg = msg + " " + x + " * "+ x + " = " + res + "\n";
            }

            alert(msg);

        }
    });

})();
