var status = 0;
var datatxt = "";
var attd = new Date();
var dataatual = attd.getDay() + attd.getMonth() + attd.getFullYear();

console.log(dataatual);

const prompt = require("prompt-sync")();

dt();


function dt(){

    var data = prompt("Qual será o dia do evento? "); 
    console.log("Adicionou: " + data);
    datatxt = "" + data;
    var datasoma = parseInt(data);
    data = prompt("Qual será o mês do evento? ");
    console.log("Adicionou: " + data);
    datatxt = datatxt + "/" + data;
    datasoma = datasoma + parseInt(data);
    data = prompt("Qual será o ano do evento? ");
    console.log("Adicionou: " + data);
    datatxt = datatxt + "/" + data;
    datasoma = datasoma + parseInt(data);
    data = datasoma;
    console.log(data);

    console.log("Data adicionada: " + datatxt);

    status = 1;

    if(data < dataatual && status == 1){
    console.log("Insira uma data posterior à atual!");
    dt();
    }

    if(data > dataatual && status == 1){
    id();
    status = 0; 
    }
}

function id(){
 
    var idade = prompt("Qual a sua idade?" );
    console.log("Adicionou: " + idade);
 
    status = 1;
 
    if(idade < 18 && status == 1 ){
    console.log("É necessário ter mais de 18 anos para prosseguir!");
    id();
    }
 
    if(idade > 18 && status == 1){
    pp();
    status = 0;
    }

}

function pp(){

    
    var quantidade = 0;

    var participantes = [prompt("Adicione um participante: "),];
    console.log("Adicionou: " + participantes[quantidade]);
    quantidade = quantidade + 1;
    var save = quantidade;
    console.log("Quantidade: " + quantidade);
    var add = prompt("Deseja adicionar mais participantes? S ou N ?");
    
console.log(participantes);

    if(add == "s" || add == "S"){
    participantes[quantidade] = prompt("Adicione um participante: ");
    console.log("Adicionou: " + participantes[quantidade]);
    quantidade = quantidade + 1;
    var save = quantidade;
    console.log("Quantidade: " + quantidade);
    console.log(participantes);
    var add = prompt("Deseja adicionar mais participantes? S ou N ?");
    }
    
    if(add == "s" || add == "S" && quantidade > 100){
    console.log("Não é possível adicionar mais de 100 participantes!");
    pp2();
    }
    
    if(add == "n" || add == "N"){
    pp2();
    }

}

function pp2(){

var quantidade2 = 0;

var palestrantes = [prompt("Adicione um palestrante: ")];
console.log("Adicionou: " + palestrantes[quantidade2]);
quantidade2 = quantidade2 + 1;
var save2 = quantidade2;
console.log("Quantidade: " + quantidade2);
var add2 = prompt("Deseja adicionar mais palestrantes? S ou N? ");

if(add2 == "S" || add2 == "s"){
pp2();
}

if(add2 == "N" || add2 == "n"){


}

}