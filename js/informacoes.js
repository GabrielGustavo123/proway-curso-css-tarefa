function salvarNome(){
    let nome = document.getElementById("usuario");
    localStorage.setItem("nomeUsuario", nome);
    window.location.href = "perfil.html";
}