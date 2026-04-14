

var button1 = document.getElementById("buttoni")

button1.onclick = function(){
    alert("You Purchased sucssesfully this item")
}

var button2 = document.getElementById('buttondy')

button2.onmouseleave = function(){
    alert('You have refunded your item')
}

var button3 = document.getElementById('buttontre')
button3.onmouseover = function(){
    alert('scrolling down')
}

var designi = document.getElementById('dizajn')
var tekst1 = document.getElementById('teksti')

designi.onclick = function(){
    tekst1.style.color = "red"
    tekst1.style.fontSize = "150px"
    tekst1.style.textAlign = "center"
    tekst1.style.backgroundColor = "grey"
}