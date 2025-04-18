/* Função para salvar a assinatura nos campos
function salvar() {
    const assinaturaBreno = document.getElementById("Breno").value;
    const assinaturaNoelle = document.getElementById("Noelle").value;

    // Salva as assinaturas no localStorage
    localStorage.setItem("AssinaturaBreno", assinaturaBreno);
    localStorage.setItem("AssinaturaNoelle", assinaturaNoelle);

    // Exibe a assinatura salva como texto
    document.getElementById("Breno-signature").innerText = "Assinatura Breno: " + assinaturaBreno;
    document.getElementById("Noelle-signature").innerText = "Assinatura Noelle: " + assinaturaNoelle;
}

// Função para carregar as assinaturas salvas
function carregar() {
    const assinaturaBreno = localStorage.getItem("AssinaturaBreno");
    const assinaturaNoelle = localStorage.getItem("AssinaturaNoelle");

    if (assinaturaBreno) {
        document.getElementById("Breno-signature").innerText = "Assinatura Breno: " + assinaturaBreno;
    }
    if (assinaturaNoelle) {
        document.getElementById("Noelle-signature").innerText = "Assinatura Noelle: " + assinaturaNoelle;
    }
}

// Carrega as assinaturas assim que a página for carregada
window.onload = carregar;
*/