var tex = document.querySelector('#text')
const output = document.querySelector('.output')
const img = document.createElement('img')
async function QRCode(){
    const api = `https://api.qrserver.com/v1/create-qr-code/?data=${tex.value}&amp`;
    img.src = api;
    output.appendChild(img)
}

const btn = document.querySelector("button").addEventListener('click', () =>{
    if(tex.value === ""){
        alert('please input URL or Text');
    }
    else{
        output.classList.add('activeOutput')
        QRCode()
        
    }
    
})

// btn close
const btnClose = document.querySelector("#close").addEventListener("click",()=>{
    output.classList.remove('activeOutput')
})
const form = document.querySelector("form").addEventListener('submit',(e)=>{
    e.preventDefault();
})
    
