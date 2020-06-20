var e = document.getElementById("toggle-control")

function handleToggle(){
  e.classList.toggle("toggle-off")
  e.classList.toggle("toggle-on")
  if(e.classList.contains("toggle-off")){
    e.classList.add("desactive")
  }
  }