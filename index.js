var status = 0;
var datatxt = "";
var attd = new Date();
var dataatual = attd.getDay() + attd.getMonth() + attd.getFullYear();

const prompt = require("prompt-sync")();

dt();


function dt(){

    var data = prompt("Qual será o dia do evento? "); 
    console.log("Adicionou: " + data);
    datatxt = "" + data;
    var datasoma = data;
    data = prompt("Qual será o mês do evento? ");
    console.log("Adicionou: " + data);
    datatxt = datatxt + "/" + data;
    datasoma = datasoma + data;
    data = prompt("Qual será o ano do evento? ");
    console.log("Adicionou: " + data);
    datatxt = datatxt + "/" + data;
    datasoma = datasoma + data;
    data = datasoma;

    console.log("Data adicionada: " + datatxt);

    status = 1;

    if(data < dataatual && status == 1){
        console.log("Insira uma data posterior à atual!");
       dt();
    }
}