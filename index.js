// função

let local = document.getElementById("res"); 
let r1 = document.getElementById("valor1");
let r2 = document.getElementById("valor2");

const getValue = ()=> {
    a = r1.value;
    b = r2.value;

    if(!a){a = 0}
    if(!b){b = 0}  
}
        
const calc = (e)=> {
    getValue();
          
    result = eval(a+e+b);

    if(isNaN(result)){result = "0"}

    local.innerText = result;
}

const raiz = ()=>{
    getValue();
    result = Math.sqrt(a);
    if(isNaN(result)){result = "0"}
    local.innerText = result;
}

const limpar = ()=> {
    r1.value = "";
    r2.value = "";
    local.innerText = "";
}