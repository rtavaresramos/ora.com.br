// var flightsCase = document.getElementById("flights-case")
// var servicesPlace = document.getElementById("services__place")
// var backButton = document.getElementById('back')
// var form = `<div class="typeform-widget" data-url="https://rtavaresramoss.typeform.com/to/MEHZyU" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=MEHZyU&utm_source=typeform.com-01E9A4S5JAQM64QEWJPKG5H6ER-free&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>`
// const allServices = `<div class="section__services__container"><a href="#" id="flights-case"><div class="img"><img src="./img/airplane-v2.png"alt=""></div></a><div class="content"><h3>Aéreo</h3></div>
// </div>
// <div class="section__services__container"><a href="#" id="delay"><div class="img"><img src="./img/water-light.png"alt=""></div></a><div class="content"><h3>Água & Luz</h3></div></div><div class="section__services__container"><a href="#" id="delay"><div class="img"><img src="./img/charges-not-valid.png"alt=""></div></a><div class="content"><h3>Negativação Indevida</h3></div></div><div class="section__services__container"><a href="#" id="delay"><div class="img"><img src="./img/buy-online.png"alt=""></div></a><div class="content"><h3>Compras Online</h3></div></div>
// `
// const flightSubCase = `
// <div class="section__services__container">
// <a href="/services.html">
// <div class="img">
// <img src="./img/back.png"
// alt="">
// </div>
// </a>
// <div class="content">
// <h3>Voltar</h3>
// </div>
// </div>
// <div class="section__services__container">
// <a href="#" id="delay">
// <div class="img">
// <img src="./img/airplane-delay.png"
// alt="">
// </div>
// </a>
// <div class="content">
// <h3>Atraso e cancelamento de voo</h3>
// </div>
// </div>
// <div class="section__services__container">
// <a href="#" id="bagage">
// <div class="img">
// <img src="./img/lugage.png"
// alt="">
// </div>
// </a>
// <div class="content">
// <h3>Problemas com bagagem</h3>
// </div>
// </div>

// <div class="section__services__container">
// <a href="#" id="other-problems">
// <div class="img">
// <img src="./img/other-problems.png" alt="">
// </div>
// </a>
// <div class="content">
// <h3>Outros problemas aéreos</h3>
// </div>
// </div>
// `


// var removeHtml = (e)=>{
//   while (   
//     document
//     .getElementById(e)
//     .firstChild) {
//     document
//     .getElementById(e).
//     removeChild(
//     document
//     .getElementById(e)
//     .firstChild);
//   } 
// }



// flightsCase.addEventListener('click', ()=>{
//   removeHtml('services__place')
//   servicesPlace.innerHTML = flightSubCase
// })
// backButton.addEventListener('click', ()=>{
//   removeHtml('services__place')
//   servicesPlace.innerHTML = allServices
// })