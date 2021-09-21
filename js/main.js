
function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("http://globallabs.academy/"); /* abre o link em outra aba */
    //window.location.href = "http://globallabs.academy/"  abre o link na mesma aba 
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; /* sem o elemento e sem o this */
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
}else{
    validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
/*
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();    para datas
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);
*/
/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++; /* ou count = count + 1
};
*/

/*
var idade = prompt("Qual sua idade")
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade");
}
*/


/* 
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.nome);
/*

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); /* push para acrescentar algo na lista */
//lista.pop();    /* para tirar um item da lista */

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.reverse()); /* mostrar os elementos ao contrário na lista
//console.log(lista.length) /* para verificar a quantidade de itens na lista */

//var nome = "Rafael Santos";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase("Japão", "Brasil"));
//console.log(frase.toUpperCase("Japão", "Brasil")); toUperCase deixa tudo maiúsculo
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil")); frase. replace troca a palavra desejada