/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // When you click the button
    var button = document.getElementById("run");
    button.addEventListener("click", function () {

        // generate 10 random nr (between 1 and 100), and put in the table&array (for loop)
        // place for new empty array
        // use right loop for that
        let tenRandom = [];
        for(let i=1; i < 11; i++){
            // generate random nr
            let randomnr = Math.floor((Math.random() * 100) + 1);
            // console.log(randomnr);
            // push the nr to the array (new array should be made before for loop)
            tenRandom.push(randomnr);
            // display that nr in td
            document.getElementById("n-"+i).innerHTML = randomnr;

        }
        //console.log(tenRandom);


        // display the smallest number

        document.getElementById("min").innerHTML = Math.min(...tenRandom);


        // display the biggest number

        document.getElementById("max").innerHTML = Math.max(...tenRandom);


        // display the sum of all numbers

        document.getElementById("sum").innerHTML = tenRandom.reduce( (a,b) => a+b, 0);


        // display their average.

        document.getElementById("average").innerHTML =tenRandom.reduce( (a,b) => a+b, 0) / tenRandom.length;


    })

})();
