
var count = localStorage.getItem('hadSeenModal')

document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('modal').style.display = 'none'
})

window.addEventListener('mouseout', ()=>{
    if(count === 0 || count === null || count === undefined){
        setTimeout(() => {            
            document.getElementById('modal').style.display = 'flex'
            count++
            localStorage.setItem('hadSeenModal', count)
        }, 5000);
    }
});

document.getElementById('cta-ebook').addEventListener('click', ()=>{
    setTimeout(() => {
        window.open( " https://drive.google.com/file/d/16wtiftQeiJxa8ljVSiZEcBNsyIJiEjiu/view", "_blank" )
    }, 500);
    document.getElementById('modal').style.display = 'none'
})