document.addEventListener("DOMContentLoaded",function(){
document.querySelector("h1").innerHTML="Clicca ma...evita la <span style='color:#f9aa34; border-bottom: 5px dashed black'>bomba</span>";

let ul = document.querySelector("#gioco ul");
let conto = 0;

for(let i=0; i<16; i++){
ul.innerHTML+= "<li></li>";}

let li = document.querySelectorAll("#gioco ul li");

function numero(){
let numRand = Math.floor(Math.random()*16);
return numRand;
}//numero()

let num = numero();

//##ciclo per far partire il gioco
for (let i=0; i<li.length; i++){
    li[i].onclick = () => {
        if(i==num){
            li[i].style.backgroundImage='url("immagini/bomb.png")'
            li[i].style.backgroundColor="#cc3300"
            li[i].style.border="black solid 4px"
            bomba();
            partita();
        }
        else{
            if (li[i].style.backgroundImage != 'url("immagini/rainbow.png")'){
                conto++;
            }
            li[i].style.backgroundImage = 'url("immagini/rainbow.png")';
            li[i].style.border="#f9aa34 dashed 3px";
        };//li[i].onclick()
}}//for (let i=0; i<li.length; i++)

const fine = document.querySelector("#fine")

function bomba(){
    document.querySelector("#gioco span").classList.add("bloccaGioco");
    fine.style.display="block";
    document.querySelector("#fine p span").innerText=conto;
};//bomba()

function partita(){
    document.querySelector("#fine #new").addEventListener("click", function(){
        window.location.reload();
    })
};//partita()

});//DOMContentLoaded