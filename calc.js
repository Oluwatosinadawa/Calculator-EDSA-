function insert(num) {
    document.getElementById('result').value += num;
}

function clearResult() {
    document.getElementById('result').value = '';
}
function backspace() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0,-1);
}
function percentage (){
    document.getElementById('result').value = document.getElementById('result').replace(/%/g, "/100*");
}
const part = 10;
const whole = 10;
console.log(percentage);

function calculate() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = eval(result);
}