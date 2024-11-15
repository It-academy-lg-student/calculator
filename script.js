const container = document.getElementById("container")

const inputEl = document.getElementById("input-numbers")


 

function appendToDisplay(input){
         inputEl.value += input;
}

function clearDisplay(){
     inputEl.value = '';
}

function calculate(){
    try{
 inputEl.value = eval(inputEl.value); //function making from string action
    } catch (error) {
        inputEl.value = "Error"
    }
    
}

