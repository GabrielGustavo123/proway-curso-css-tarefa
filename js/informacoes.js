let InputNome = document.getElementById("usuario");
let nome = InputNome.value;   


function salvar(){
    let nomeString = JSON.stringify(nome);
    localStorage.setItem("nomeUsuario", nomeString);
    window.location.href = "perfil.html";
}