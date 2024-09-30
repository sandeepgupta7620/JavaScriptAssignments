// Question-1

var inp= document.getElementById("inp");
var result = document.getElementById("result");
function check(){
    result.value = inp.value;
    if(result.value ===""){
        result.textContent = "The string is Empty";
    }else{
        result.textContent = `The string is not Empty : your entered string is - ${result.value}`;
    }
}

// Question -2

var inp2 = document.getElementById("inp2");
var result2 = document.getElementById("result2");
function check2(){
    result2.value = inp2.value;
    var fullname = result2.value.trim().split(" ");
    if(fullname.length !== 2){
        result2.textContent = `${fullname}`; 
    }

    var firstname = fullname[0];
    var lastname = fullname[1].charAt(0).toUpperCase();
    var ab = firstname + " " + lastname;
    result2.textContent = `${ab}`;

}


var inp3 = document.getElementById("inp3");
var result3 = document.getElementById("result3");

function check3(){
    result3.value = inp3.value;
    var str = result3.value.trim();
    var newstr = str.replaceAll(" ", ",");
    result3.textContent = `${newstr}`;
}




var inp4 = document.getElementById("inp4");
var result4 = document.getElementById("result4");
function check4(){
    result4.value = inp4.value;
    var newstr = result4.value;
    var firstletter = newstr.charAt(0).toUpperCase();
    var lastletter = newstr.charAt(newstr.length -1).toUpperCase();
    var middle = newstr.slice(1,newstr.length -1);
    result4.textContent = `${firstletter+middle+lastletter}`;
}



// Question - 5

function countSubstringOccurrences(str, substring) {
    let count = 0;
    let position = 0;

    // Loop to find occurrences
    while ((position = str.indexOf(substring, position)) !== -1) {
        count++;
        position += substring.length; // Move past the last occurrence
    }

    return count;
}

// Example usage
const mainString = "This is a test. Testing is good. Test your code.";
const subString = "test";
console.log(countSubstringOccurrences(mainString.toLowerCase(), subString.toLowerCase())); // Output: 3


// question-6

var inp6 = document.getElementById("inp6");
var result6 = document.getElementById("result6");
function check6(){
    result6.value= inp6.value;
    var newstr = result6.value.substring(0,4);
    result6.textContent = `${newstr}`;
}



// question-7

var inp7 = document.getElementById("inp7");
var result7 = document.getElementById("result7");
function check7(){
    result7.value= inp7.value;
    var arr = result7.value.split("");
    var revarr = arr.reverse();
    var revword = revarr.join("");
    result7.textContent = `${revword}`;
}

// PART-2

var removedList=[];
function add(){
    var result = document.getElementById(`${removedList.pop()}`);
    result.style.display='inline-block';
}
 
function remove(){
    var result = document.getElementById('cars');
    removedList.push(result.value);
    var remove=document.getElementById(`${result.value}`)
    remove.style.display='none';
}


