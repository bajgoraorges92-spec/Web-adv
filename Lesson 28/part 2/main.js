var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')
var txt= document.getElementById('txt1')

button1.onclick = function(){

    txt.style.color = "red";
    txt.style.backgroundColor = "lightgrey";
    txt.style.textAlign = "center";
    txt.style.fontSize = "100px";
    txt.style.padding = "20px";
}

txt.onclick = function(){
    txt.style.cssText = "color: red; background-color: lightblue; textalign: center; fontsize: 100px; padding: 20px;"
}

button1.onclick = function(){

    txt.setAttribute("class", "test")
}

button2.onclick = function(){

    txt.setAttribute("class", "test2")
}