const toggleTheme = document.getElementById("toggle-theme");

const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler );

function toggleThemeHandler(){
    if(toggleTheme.checked){
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
    }
    else{
        html.dataset.theme = "light";
        localStorage.setItem("theme", "light");
    }
}

const theme = localStorage.getItem("theme");

if (theme == "light" || !theme){
    html.dataset.theme = "light";
}
else{
    html.dataset.theme = "dark";
    document.getElementById("toggle-theme").checked = true;
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
  