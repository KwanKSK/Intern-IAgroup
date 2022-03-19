function Area() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);
    var area = 0.5 * base * height;

    document.getElementById("display").innerHTML = area; 
}