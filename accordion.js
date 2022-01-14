let acc = document.getElementsByClassName("accordion-title");
var i;

for (i = 0; i < acc.length; i++) { 
  acc[i].addEventListener("click", function ()  {
    this.classList.toggle("active");
    const chevron = this.querySelector(".chevron");
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    if (chevron.style.transform === "rotate(180deg)") {
      chevron.style.transform = "none"
    } else {
      chevron.style.transform = "rotate(180deg)"
    }
  });
}