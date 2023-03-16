function insert(num) {
    document.getElementById('result').value += num;
}

function clearResult() {
    document.getElementById('result').value = '';
}
function backspace() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0,-1);
}
function calculate() {
    var result = document.getElementById('result').value;
    if (result.includes('%')) {
        var parts = result.split('%');
        var num = parseFloat(parts[0]);
        var percent = parseFloat(parts[1]);
        document.getElementById('result').value = num * (percent / 100);
    }
     else {
        document.getElementById('result').value = eval(result);
    }
}