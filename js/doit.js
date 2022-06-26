// doit 
// validate 

const tooth= document.getElementById("tooth")
const nroot= document.getElementById("nroot")
const next= document.getElementById("next")
const tn =document.getElementById("ftn")
const nr =document.getElementById("froot")
const error =document.getElementById("msg")
const ocf =document.querySelectorAll(".conf")
const rootSymbol =document.querySelectorAll(".symbol")
const rootOrifice =document.querySelectorAll(".o")
const rootCanal =document.querySelectorAll(".c")
const rootForamin =document.querySelectorAll(".f")
const clear1 = document.getElementById("clear")
var newSpan = [];
var newp=[]
const msg = "please enter valid value"


clear1.addEventListener('click',function(){
    clear()
    tooth.value =""
    nroot.value = ""

})



next.addEventListener('click',function(){
    clear()
    
    rootNumber(nroot)
    
    
    if(toothNumber(tooth) & rootNumber(nroot)){
        root()
        tn.textContent = tooth.value
        nr.textContent = nroot.value
        document.getElementById("formula").style.display="block"
        
        document.querySelector(".confs").style.display = "none"
        document.querySelector(".confs").style.display = "flex"
        
    
    }
    for (let i = 0; i < ocf.length;i++){
        
        rootSymbol[i].value=""
        rootCanal[i].value=""
        rootOrifice[i].value=""
        rootForamin[i].value=""
        
    }
    
    
    
    
})

function clear(){
    tn.textContent =""
    nr.textContent=""
    text=""
    
    error.textContent=""
    for (let i = 0; i < ocf.length;i++){
        ocf[i].style.display = "none"
        
    }
    if(newSpan.length>0& newp.length>0){
        for (let i = 0; i < nroot.value;i++){
            newSpan[i].remove()
            newp[i].remove()
        }
    }
    

}


function root(){
    if (nroot.value == 1){
        document.getElementById("symb").style.display = "none"
    }
    else{
        document.getElementById("symb").style.display = "block"
    }
    document.querySelector(".confs").style.display = "flex"
    
    
    for (let i = 0; i < nroot.value;i++){
        newSpan.push(document.createElement('span'))
        document.getElementById("1").appendChild(newSpan[i]);
        ocf[i].style.display = "block"
        newSpan[i].textContent=rootSymbol[i].value
        newp.push(document.createElement('span'))
        document.getElementById("1").appendChild(newp[i]);
        if (rootOrifice[i].value === rootCanal[i].value & rootCanal[i].value === rootForamin[i].value){
            newp[i].textContent=rootOrifice[i].value +" "
        }
        else{
            newp[i].textContent=rootOrifice[i].value+ "-"+rootCanal[i].value+"-"+rootForamin[i].value+" "
        }
        newp[i].style.verticalAlign="top"
        newp[i].style.fontSize="1rem"
    }

}
function maxNumber(inputtext){
    
    for (let i = 0; i < nroot.value;i++){
        if(inputtext[i].value >10){
            error.textContent = msg;
            
            inputtext.style.backgroundColor="#ffc0cb"
            inputtext.focus();
            return false;
        }
        else{
            return true
        }
    }
}

function rootNumber(inputtext){
    let arr = Array.from({length: 4}, (_, index) => index + 1);
    inputtext.style.backgroundColor="white"
    
    if(arr.indexOf(parseInt(inputtext.value)) === -1){
        error.textContent = msg;
        inputtext.value =""
        inputtext.style.backgroundColor="#ffc0cb"
        inputtext.focus();
        return false;
    }
    else{
        return true
    }
}

function toothNumber(inputtext){
    let arr1 = Array.from({length: 4}, (_, index) => index + 1);
    let arr2 = Array.from({length: 8}, (_, index) => index + 1);
    inputtext.style.backgroundColor="white"
    const msg = "please enter valid value"
    if(arr1.indexOf(parseInt(inputtext.value.slice(0,1))) === -1 || arr2.indexOf(parseInt (inputtext.value.slice(1))) === -1){
        error.textContent = msg;
        inputtext.value =""
        inputtext.style.backgroundColor="#ffc0cb"
        inputtext.focus();
        return false;
    }
    else{
        return true
    }
    }