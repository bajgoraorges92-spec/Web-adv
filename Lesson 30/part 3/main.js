var number = document.getElementById("input")
var btn = document.getElementById("btn")
var h1 = document.getElementById("h1")


btn.onclick = function(){

    var value = Number(input.value)
    
    if(value>10){
        h1.innerHTML = "Numri qe ke shkruar eshte me i madh se numri 10"
    }

    else if(value<10){
        h1.innerHTML = "Numri qe ke shkruar eshte me i vogel se numri 10"
    }

    else{
        h1.innerHTML = "Numri qe ke shkruar eshte i barabarte me numrin 10"
    }


}
