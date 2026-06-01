var colors = ['red', 'blue', 'green', 'purple'];

function changeBgcolor(){
    document.querySelector('body').style.background = 
    colors[Math.floor(Math.random()*colors.length)];
}  

var names = ['John','Ana', 'Bob', 'Mark'];

function changeNames(){
    document.querySelector('p').innerHTML = 
    names[Math.floor(Math.random()*names.length)];
}

setInterval(changeBgcolor, 1000)
setInterval(changeNames, 1000)