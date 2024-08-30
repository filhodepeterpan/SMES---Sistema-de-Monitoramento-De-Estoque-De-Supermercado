let modoEscuro = false;
let iconePerfilPadrao = document.getElementById("foto__de__perfil");
let iconePerfilEscuro = document.getElementById("foto__de__perfil__escuro");
let botaoIcone = document.querySelector("button #icon");
let botaoTexto = document.querySelector("button #text");

function ativaModoEscuro() {
    if (!modoEscuro){
        document.documentElement.style.setProperty('--cor-bg', '#121212');
        document.documentElement.style.setProperty('--cor-constrate-bg', '#1d1d1d');
        document.documentElement.style.setProperty('--cor-fonte-cinza', '#e0e0e0');
        document.documentElement.style.setProperty('--cor-destaque', '#d437ff');
        document.documentElement.style.setProperty('--cor-destaque-light', '#bb86fc');
        document.documentElement.style.setProperty('--cor-urgente', '#dc3546');
        document.documentElement.style.setProperty('--cor-critica', '#ff8c00');
        document.documentElement.style.setProperty('--cor-atencao', '#ffd600');
        document.documentElement.style.setProperty('--cor-ok', '#03dac6');
        document.documentElement.style.setProperty('--cor-fonte', '#ffffff')
        
        botaoTexto.textContent = "Desativar Modo Escuro";
        iconePerfilPadrao.style.display = "none";
        iconePerfilEscuro.style.display = "inline";
    } 
    else{
        document.documentElement.style.removeProperty('--cor-bg');
        document.documentElement.style.removeProperty('--cor-constrate-bg');
        document.documentElement.style.removeProperty('--cor-fonte-cinza');
        document.documentElement.style.removeProperty('--cor-destaque');
        document.documentElement.style.removeProperty('--cor-destaque-light');
        document.documentElement.style.removeProperty('--cor-urgente');
        document.documentElement.style.removeProperty('--cor-critica');
        document.documentElement.style.removeProperty('--cor-atencao');
        document.documentElement.style.removeProperty('--cor-ok');
        document.documentElement.style.removeProperty('--cor-fonte');
        
        botaoTexto.textContent = "Ativar Modo Escuro";
        iconePerfilPadrao.style.display = "inline";
        iconePerfilEscuro.style.display = "none";
    }
    modoEscuro = !modoEscuro;
}
