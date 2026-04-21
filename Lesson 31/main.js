let text = "";

var i;
for (i = 0; i<6 ; i++) {
    text+= "The number is " +i + "<br>"
}

document.getElementById("output").innerHTML = text




var person = {
    FirstName: "John",
    LastName: "Doe",
    Age: 18
}

function showperson(){
    var x;
    var text1 = "";
    
    for(x in person){
        text1+= x+ ": "+ person[x] +"<br>"
    }

    document.getElementById("output1").innerHTML = text1

}