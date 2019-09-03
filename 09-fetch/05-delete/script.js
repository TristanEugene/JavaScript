/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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


            let id = document.getElementById("hero-id").value;

            data.heroes.splice(data.heroes.findIndex(hero => hero.id == id),1);
            console.log(data.heroes);

            });
        });
})();
