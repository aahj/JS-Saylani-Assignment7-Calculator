var x = document.getElementById("inputValue");

function getResult(num) {
    x.value += num;
}
function clearText() {
    x.value = "0";
    x.focus();
}

function calcResult(){
    //var y = document.getElementById("power");
    x.value = eval(x.value);    
}