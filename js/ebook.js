
var modal = document.getElementById('modal-wait')


function startModal(){
  modal.classList.toggle('display-off')
  modal.classList.toggle('display-on')
  setTimeout(() => {

    window.location.href = "https://oraadvogados.com.br/meu-ebook/" 
  }, 5000);
}
