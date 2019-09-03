/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        fetch("http://localhost:63342/becode_projects/JavaScript/_shared/api.json")
            .then(function (response) {
                return response.json();

            })
            .then(function (data) {

                let input = document.getElementById("hero-id").value;


                    let temp = document.getElementById("tpl-hero");
                    let tempName = temp.content.querySelector(".name");
                    let tempAlter = temp.content.querySelector(".alter-ego");
                    let tempPowers = temp.content.querySelector(".powers");

                    tempName.innerHTML = data.heroes[input].name;
                    tempAlter.innerHTML = data.heroes[input].alterEgo;
                    tempPowers.innerHTML = data.heroes[input].abilities;

                    let clone = temp.content.cloneNode(true);
                    document.getElementById("target").appendChild(clone);


            });

    });

})();
