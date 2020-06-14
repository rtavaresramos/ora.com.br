

function handleForm(){
  setTimeout(function(){ 
  while (   
    document
    .getElementById('proc-form')
    .firstChild) {
    document
    .getElementById('proc-form').
    removeChild(
    document
    .getElementById('proc-form')
    .firstChild);
  } 

  document
  .getElementById('proc-form')
  .innerHTML = `<div class="proc-sent"><h1>Formulário enviado!</h1>
  <p>Em até 48 horas, entraremos em contato por e-mail para seguirmos com a sua solicitação judicial.</p>
  </div>`
  
}, 7000);

}