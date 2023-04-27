// geração do valor aleatório
var y = Math.floor(Math.random() *10 + 1);
// contagem de tentativas
// até acerto    
var x = document.getElementById("guessField").value;
var guessField = 1;
var playername = playername;
// função para o número enviado pelo usuário
function submit(){
    var x = document.getElementById("guessField").value;

if(x == y){
    alert("PAREBÉNS!!! Você acertou em" + guessField + " tentativa(s)!");
    guessField = 1;
}
else if(x > y){
    guessField++;
    alert("Opa! Resposta errada, Tente um número menor");
}
else{
    guessField++;
    alert("Opa! Resposta errada, Tente um número maior");
}
}
function playAgain(){
    y = Math.floor(Math.randon() *10 + 1);
}