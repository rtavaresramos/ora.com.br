
var count = 0

document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('modal').style.display = 'none'
})

window.addEventListener('mouseout', ()=>{
    if(count ===0){
        setTimeout(() => {            
            document.getElementById('modal').style.display = 'block'
            count++
        }, 5000);
    }
});