var x = document.getElementById("inputValue");

function getResult(num) {    
    x.value += num;
}
function clearText() {
    x.value = "0";
    x.focus();
}

function calcResult(){
    x.value = eval(x.value);    
}