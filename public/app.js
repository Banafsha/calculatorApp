function getNumber(num) {
    var display = document.getElementById("display");
    display.value += num;
}

function clearResult() {
    var result = document.getElementById("display");
    result.value = ""
}

function getResult() {
    var result = document.getElementById("display");
    result.value = eval(result.value)
}