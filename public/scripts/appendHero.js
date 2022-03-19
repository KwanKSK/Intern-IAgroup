fetch('hero.json')
    .then(response => response.json())
    .then(data => appendHero(data))
    .catch(err => {console.log('error:' + err)})

function appendHero(data){
    var mainContainer = document.getElementById("heroList");
    for(var i=0; i<data.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = data[i].id + " " + data[i].name;
        li.setAttribute("data-id", data[i].name);
        mainContainer.appendChild(li);
    }

    $('#heroList li').click(function() {
        var textLoaded =  $(this).data('id');
        $('#heroName').text(textLoaded);
    });
}