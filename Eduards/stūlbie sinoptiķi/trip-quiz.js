const toggleTheme = document.getElementById("toggle-theme");

const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const theme = localStorage.getItem("theme");

if (theme == "light" || !theme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  document.getElementById("toggle-theme").checked = true;
}
const aus = document.getElementById("check1");
const rome = document.getElementById("check2");
const indo = document.getElementById("check3");
const liep = document.getElementById("check4");

function getValue() {
  var result = 0;
  if (aus.checked == true) {
    result = result + 1;
  }
  if (indo.checked == true) {
    result = result + 1;
  }
  if (liep.checked == true) {
    result = result + 1;
  }
  if (rome.checked == true) {
    result = "Ne jau Roma!";
  }
  if (rome.checked != true) {
    document.getElementById("1").innerHTML =
      "Pareizi izvelejies " + result + " no 3";
  } else {
    document.getElementById("1").innerHTML = result;
  }
}

function getValue() {
  var checkbox = document.getElementById("check4");
  var label = document.querySelector('label[for="check4"]');

  if (checkbox.checked) {
    label.style.color = "green";
  } else {
    label.style.color = "";
  }
}



//function getValue() {
//var checkboxes = document.getElementsByName("check");
//var result = 0;
//for (var i = 0; i < checkboxes.length; i++) {
//  if (checkboxes[0].checked && rome.checked == false) {
// result += 1;
// var Text = " Tu izvelejies : " + result + " pareizus";
// } else {
//   var Text = " NEJAU ROMA!";
//  }
//}
// document.write(Text);
//}
//var par = document.getElementById("1");
//var text = document.createTextNode(result);
//par.appendChild(text);
