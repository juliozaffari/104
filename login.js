// Crie a função login aqui.
function Login(){
    playername = document.getElementById("playername").velue;
    localStorage.setItem("playername", playername);

    window.location = "gamepage.html";
}