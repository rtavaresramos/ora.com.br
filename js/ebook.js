var button = document.getElementById('cta-ebook')
var buttonA = document.getElementById('cta-ebook-a')


function onloadEbook(){
setTimeout(() => {
  button.classList.toggle('display-off')
  button.classList.toggle('display-on')
  
}, 15000);
}