const JsonPost = "https://jsonplaceholder.typicode.com/posts";

fetch(JsonPost)
    .then(response => response.json())
    .then(data => appendPost(data))
    .catch(err => {console.log('error:' + err)})

function appendPost(data){
    // Extract value from table header. 
    var col = [];
    for (var i=0; i<data.length; i++) {
        for (var key in data[i]){
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    // Create a table.
    var table = document.createElement("table");

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);      
    
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // Add json data to the table as rows.
    for (var i = 0; i < data.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }

    // Created table with json data, to a container.
    var divPost = document.getElementById('post');
    divPost.innerHTML = "";
    divPost.appendChild(table);
}