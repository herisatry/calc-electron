// menu activation 


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}


//Dynamic combinaisons


var addrFacture = document.getElementById('addrFacture').value;

var addrDostavki = document.getElementById('addrDostavki').value;

var addrFactureObj1 = {
	FL1: 'Физ. Лицо ЕС - (страна А)',
	F1: 'Фирма ЕС - (страна А)'
};

var addrDostavkiObj1  = {
    FL1: 'Физ. Лицо ЕС - (страна А)',
	F1: 'Фирма ЕС - (страна А)',
	FL2: 'Физ. Лицо ЕС - (страна B)',
	F2: 'Фирма ЕС - (страна B)'
};

var addrFactureObj2 = {
	FL: 'Физ. Лицо ЕС',
    FEC: 'Фирма ЕС',
    NEC: 'Не ЕС'
};


document.getElementById('adrEU').onclick = function(){
    EuAdr();
}

document.getElementById('non_adrEU').onclick = function(){
    NonEuAdr();
}




function EuAdr() {
    
    resetAdr();
    //Populate the select option

    AddSelect1();

    AddSelect2();
    
}

function NonEuAdr() {
   
    resetAdr();
    //Populate the select option

    AddSelect3();
    AddSelect4();
}

function resetAdr(){
    var select1 = document.getElementById('addrFacture');
    var select2 = document.getElementById('addrDostavki');
    select1.options.length = 0;
    select2.options.length = 0;
}


function AddSelect1(){
    var selectaddrFacture = document.getElementById('addrFacture');
	for(index in addrFactureObj1) {
		selectaddrFacture.options[selectaddrFacture.options.length] = new Option(addrFactureObj1[index], index);
	};

}

function AddSelect2(){
    var selectaddrDostavki = document.getElementById('addrDostavki');
	for(index in addrDostavkiObj1) {
		selectaddrDostavki.options[selectaddrDostavki.options.length] = new Option(addrDostavkiObj1[index], index);
	}
;
}

function AddSelect3(){
    var selectaddrFacture2 = document.getElementById('addrFacture');
	for(index in addrFactureObj2) {
		selectaddrFacture2.options[selectaddrFacture2.options.length] = new Option(addrFactureObj2[index], index);
	}
;
}

function AddSelect4(){
    var selectaddrDostavki2 = document.getElementById('addrDostavki');
	for(index in addrFactureObj2) {
		selectaddrDostavki2.options[selectaddrDostavki2.options.length] = new Option(addrFactureObj2[index], index);
	}
;
}

function combi(){

    var addrFacture = document.getElementById('addrFacture').value;
    
    var addrDostavki = document.getElementById('addrDostavki').value;
    
    // FL1, F1 , FL2 , F2 , FL, FEC and NEC are the different value
    
    if (addrFacture == "FL1" && addrDostavki=="FL1"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ с НДС страны доставки";
    
    }
    else if (addrFacture == "F1" && addrDostavki=="FL1"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ без НДС страны доставки";
    
    }
    
    else if (addrFacture == "F1" && addrDostavki=="FL2"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ с НДС страны доставки";
    
    }
    
    else if (addrFacture == "FL1" && addrDostavki=="FL2"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ с НДС страны доставки";
    
    }
    
    else if (addrFacture == "FL1" && addrDostavki=="F1"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ с НДС страны доставки";
    
    }
    
    else if (addrFacture == "FL1" && addrDostavki=="F2"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ без НДС страны доставки";
    
    }
    
    else if (addrFacture == "F1" && addrDostavki=="F1"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ без НДС страны доставки";
    
    }
    
    else if (addrFacture == "F1" && addrDostavki=="F2"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ без НДС страны доставки";
    
    }
    
    else if (addrFacture == "FL" && addrDostavki=="NEC"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ без 19% НДС";
    
    }
    
    else if (addrFacture == "NEC" && addrDostavki=="NEC"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ без 19% НДС";
    
    }
    
    else if (addrFacture == "FL" && addrDostavki=="NEC"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ без 19% НДС";
    
    }
    
    else if (addrFacture == "NEC" && addrDostavki=="FEC"){
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ с НДС страны доставки";
    
    }
    
    else if (addrFacture == "NEC" && addrDostavki=="FL") {
        document.getElementById('combi').className= 'container alert alert-success';
        document.getElementById('combi').innerHTML = " Заказ с НДС страны доставки";
    }
    else{
        document.getElementById('combi').className= 'container alert alert-danger';
        document.getElementById('combi').innerHTML = " Нет такого комбинации!!! ";
    
    };
    }
    
    