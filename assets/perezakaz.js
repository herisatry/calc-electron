//perezakaz function

function perezakaz(){

    var staraya_tsena = document.getElementById('staraya_tsena').value;
    var novaya_tsena = document.getElementById('novaya_tsena').value;
    var novaya_tsena_tva = document.getElementById('novaya_tsena_tva').value;

    var tsena_tva = ( staraya_tsena * novaya_tsena_tva ) / novaya_tsena;
    
    document.getElementById('rez').className= 'container alert alert-success'
    document.getElementById('rez').innerHTML = tsena_tva.toPrecision(4) + " EUR";
}


// menu activation 


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}