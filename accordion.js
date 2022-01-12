let acc = document.getElementsByClassName("accordion-title");
var i;

for (i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", () => {
    // console.log(this.innerHTML)
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}