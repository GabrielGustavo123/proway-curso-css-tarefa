function nomeImportado(){
    let nome = localStorage.getItem("NomeUsuario");
    document.getElementById("usuario").innerText = nome
}