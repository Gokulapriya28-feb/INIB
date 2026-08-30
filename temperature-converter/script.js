function convert(){
    let degree=document.getElementById("degree").value;
    let type=document.getElementById("type").value;
    let result;
    if(type=="Fahrenheit"){
        result=(degree-32)*5/9;
        document.getElementById("result").innerHTML=result.toFixed(4)+"c";
    }
    else{
        result=(degree*9/5)+32;
        document.getElementById("result").innerHTML=result.toFixed(4)+"F";
    }
}