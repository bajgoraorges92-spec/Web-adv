var teksti = document.getElementById('text_id')
var buttn = document.getElementById('button_id')
var Rezultati = document.getElementById('Results_id')


buttn.onclick = function(){

    var usertext = teksti.value 
    var pergjigjja = usertext.search('Logitech')
    
    if(pergjigjja != -1){
        Rezultati.innerHTML = 'Logitech was found' + pergjigjja
    }
    
    else{
        Rezultati.innerHTML = 'Logitech was not found'
    }
}