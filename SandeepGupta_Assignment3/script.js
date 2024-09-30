let display= document.getElementById("display");

function appendNumber(number){
    display.value += number;
}

function appendOperator(operator){
    display.value += operator;
}
function reset(){
    display.value="";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}
function calculate(){
    try{
        display.value = eval(display.value.replace(/x/g,'x'));
    }catch(error){
        console.log(error);
    }
}
let bg = document.getElementById('change');
let isBlue=1;
function changeBg(){
    if(isBlue==1){
        circle.style.marginLeft='43%';
        bg.style.backgroundColor = '#79abf3'; //blue
        isBlue++;
    }else if(isBlue==2){
        circle.style.marginLeft='81%';
        bg.style.backgroundColor = '#e32024';  //red
        isBlue++;      
    }else if(isBlue==3){
        circle.style.marginLeft='43%';
        bg.style.backgroundColor = '#79abf3'; //blue
        isBlue++;
    }else if(isBlue==4){
        circle.style.marginLeft='0%';
        bg.style.backgroundColor = '#3b4664'; //og
        isBlue=1;
    }
    
    
    
}

