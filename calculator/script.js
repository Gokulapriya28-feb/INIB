let display=document.getElementById("display");
function displayNumber(num){
    display.value+=num;
}
let firstnumber=0;
let operator=" ";
function add(){
    firstnumber=Number(display.value);
    operator="+";
    display.value="";
}
function calculate(){
    let secondnumber=Number(display.value);
    if(operator=="+"){
        display.value=firstnumber+secondnumber;
    }
    else if (operator=="-"){
        display.value=firstnumber-secondnumber;
    }
    else if(operator=="*"){
        display.value=firstnumber*secondnumber;
    }
    else if(operator=="/"){
        display.value=firstnumber/secondnumber;
    }
    else if(operator=="%"){
        display.value=firstnumber%secondnumber;
    }
   
}
function sub(){
    firstnumber=Number(display.value);
    operator="-";
    display.value="";
}
function mul(){
    firstnumber=Number(display.value)
    operator="*";
    display.value="";
}
function  div(){
    firstnumber=Number(display.value)
    operator="/";
    display.value="";
}
function  mod(){
    firstnumber=Number(display.value)
    operator="%";
    display.value="";
}
function plusminus(){
    display.value=-Number(display.value)
}
function cleardisplay(){
    display.value="";
   
}