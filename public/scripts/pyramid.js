let n = 4;
let string = "";

// Upside pyramid
for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) string += "&nbsp;&nbsp;";
  string += i;
  for (let k = 0; k < (i - 1) * 2; k++) string += "*";
  string += i;
  string += "<br>";
}
// downside pyramid
for (let i = n-1; i >= 1; i--) {
  for (let j = 0; j < n-i; j++)string += "&nbsp;&nbsp;";
  string += i;
  for (let k = (i - 1) * 2; k > 0; k--) string += "*";
  string += i;
  string += "<br>";
}
document.getElementById("pyramid").innerHTML = string; 