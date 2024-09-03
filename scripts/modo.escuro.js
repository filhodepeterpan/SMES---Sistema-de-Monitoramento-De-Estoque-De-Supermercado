let modoEscuro = false;

function ativaModoEscuro() {
    const iconePerfilPadrao = document.getElementById("foto__de__perfil");
    const iconePerfilEscuro = document.getElementById("foto__de__perfil__escuro");
    const botaoTexto = document.querySelector("button #text");

    const root = {
        '--cor-bg': '#121212',
        '--cor-constrate-bg': '#1d1d1d',
        '--cor-fonte-cinza': '#e0e0e0',
        '--cor-destaque': '#d437ff',
        '--cor-destaque-light': '#bb86fc',
        '--cor-urgente': '#dc3546',
        '--cor-critica': '#ff8c00',
        '--cor-atencao': '#ffd600',
        '--cor-ok': '#03dac6',
        '--cor-fonte': '#ffffff'
    };

    for (const [variavel, cor] of Object.entries(root)) {
        if (!modoEscuro) {
            document.documentElement.style.setProperty(variavel, cor);
        } else {
            document.documentElement.style.removeProperty(variavel);
        }
    }

    botaoTexto.textContent = modoEscuro ? "Ativar Modo Escuro" : "Desativar Modo Escuro";
    iconePerfilPadrao.style.display = modoEscuro ? "inline" : "none";
    iconePerfilEscuro.style.display = modoEscuro ? "none" : "inline";
    
    modoEscuro = !modoEscuro;
}
