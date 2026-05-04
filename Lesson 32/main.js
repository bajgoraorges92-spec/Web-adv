var numberid = document.getElementById("number_id")
var btn = document.getElementById("btn_id")
var result = document.getElementById("result_id")

btn.onclick = function() {
    var numberuser = numberid.value 
    var doubleuser = numberuser * 2
    result.innerHTML = "Result:" + doubleuser

}