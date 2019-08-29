/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here





    function tableCreate(){
        let body = document.getElementById('target');
        let tbl = document.createElement("table");
        tbl.style.width  = '100%';
        tbl.style.border = '1px solid black';

        for(var i = 1; i < 11; i++){
            var tr = tbl.insertRow();
            for(var j = 1; j < 11; j++){
                if(i == 0 && j == 0){
                    break;
                } else {
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(i*j));
                    td.style.border = '1px solid black';
                    if(i == 0 && j == 0){
                        td.setAttribute('rowSpan', '10');
                    }
                }
            }
        }
        body.appendChild(tbl);
    }
    tableCreate();


})();
