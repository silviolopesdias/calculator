function insertValues(num) {
    const input =  document.getElementById('input-values').value
    document.getElementById('input-values').value = input + num
    }
function calculate() {
    const input = document.getElementById('input-values').value
    document.getElementById('input-values').value = eval(input)

}
function clearInput() {

    document.getElementById('input-values').value = " "
}

function invertValue() {
         calculate()

    const input = document.getElementById('input-values').value
    document.getElementById('input-values').value = input * -1
}

function percent() {
    calculate()
    const input = document.getElementById('input-values').value
    document.getElementById('input-values').value = input / 100
 }
