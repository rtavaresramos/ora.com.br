window.addEventListener("scroll", function() {
  var positionY = window.pageYOffset
 if(positionY >= 200){
   document.getElementById('wpp-control').style.display = 'block'
 }else{
  document.getElementById('wpp-control').style.display = 'none'

 }
 


});