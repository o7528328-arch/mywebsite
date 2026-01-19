
const display =document.getElementById("display");

function putondisplay(input){
    display.value += input;
}

function cleardisplay(){
 display.value = "";
}

function ans(){
    try{
     display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }

}