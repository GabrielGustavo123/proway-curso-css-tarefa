let InputNome = document.getElementById("usuario");
   


function salvar(){
    let nomeString = JSON.stringify(nome);
    localStorage.setItem("nomeUsuario", nomeString);
    let nome = InputNome.value;
    window.location.href = "perfil.html";
}