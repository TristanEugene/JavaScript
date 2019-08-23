/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    //On click to the button,
    document.getElementById("run").addEventListener("click", function() {

        //get the numbers displayed in the input
        var numbers = document.getElementById("numbers").value;
        console.log(numbers + " " + typeof(numbers));

        // display them sorted in ascending order

        // split
        var numbersArray = numbers.split(",");
        console.log(numbersArray);
        // let numbersArray = [ "2", " 4", " 14", " 10", " 90", " 23", " 16" ]

        // sort
        var changedArray = numbersArray.sort(function (a, b){return a-b});
        console.log(changedArray);
        //var changeArray = [ "2", " 4", " 10", " 14", " 16", " 23", " 90" ]

        //display
        alert(changedArray)

    });

})();
