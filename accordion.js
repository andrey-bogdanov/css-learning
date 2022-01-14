let acc = document.getElementsByClassName("accordion-title");
var i;

for (i = 0; i < acc.length; i++) { 
  acc[i].addEventListener("click", function ()  {
    this.parentNode.classList.toggle("active");
  });
}