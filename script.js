const input=document.getElementById("input");
const Options=document.getElementById("options");
const result=document.querySelector("#result");

const CelToFar= (inpVal)=>{
    return (inpVal*9/5)+32;
}
const FarToCel= (inpVal)=>{
    return (inpVal-32)*5/9;
}

const getResult= () =>{

    const inputValue=input.value;
    const tempScale=Options.options[Options.selectedIndex].value;
    let res;
    if(tempScale==="cel"){
        res=CelToFar(inputValue);
        result.innerHTML=res.toFixed(2);
    }else{
        res=FarToCel(inputValue);
        result.innerHTML=res.toFixed(2);
    }
}

getResult();