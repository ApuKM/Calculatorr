let display=document.querySelector("#display");

function appendToDisplay(input){
    display.value+=input;

}

function calculate(){
    try{
        display.value=eval(display.value);

    }
    catch(error){
        display.value="ERROR";
    }

}

function clearDisplay(){
    display.value="";

}