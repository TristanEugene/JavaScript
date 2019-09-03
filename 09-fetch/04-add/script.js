/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    fetch("http://localhost:63342/becode_projects/JavaScript/_shared/api.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            document.getElementById("run").addEventListener("click", function () {

            let heroName = document.getElementById("hero-name").value;
            let alter = document.getElementById("hero-alter-ego").value;
            let power = document.getElementById("hero-powers").value;


                let newid = data.heroes.length + 1;

                data.heroes.push({id: newid, name: heroName, alterEgo: alter, abilities: power});

                console.log(data)
            });
    });
})();
