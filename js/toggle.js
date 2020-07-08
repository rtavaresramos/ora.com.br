var e = document.getElementById("toggle-control")
var toggleActive = document.getElementById("toggle-hamburger-input")

toggleActive.addEventListener('change',()=>{
  e.classList.toggle("toggle-off")
  e.classList.toggle("toggle-on")
  if(e.classList.contains("toggle-off")){
    e.classList.add("desactive")
  }
  })