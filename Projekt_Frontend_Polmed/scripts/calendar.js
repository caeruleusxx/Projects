let date = new Date();
let dayOfWeek = date.getDay(); // 1 - pon, 2 - wt...
let days = {
  1 : "pon",
  2 : "wt",
  3 : "sr",
  4 : "czw",
  5 : "pt",
  6 : "sob",
  0 : "nd"};
let element = document.querySelectorAll(`[id="${days[dayOfWeek]}"]`);
    
for(var i = 0; i < element.length; i++) {
  element[i].textContent = "Dziś";
  element[i].style.color = "#0ea35b";
  element[i].style.borderBottom = "solid 1px";
}

