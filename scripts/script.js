function verificaEstoque(){
    const nomeProduto = document.getElementById("nomeProduto").value;
    const fornecedor = document.getElementById("fornecedor").value;
    const precoUnitario = parseFloat(document.getElementById("precoUnitario").value);
    const quantidadeEstoque = parseInt(document.getElementById("quantidadeEstoque").value);
    const quantidadeMinima = parseInt(document.getElementById("quantidadeMinima").value);
    const urgencia = document.getElementById("urgencia").value;
    
    const urgenciaDeclarada = (urgencia == "V" || urgencia == "v") ? "SIM":"NÃO";
    let situacaoEstoque = "";
    let classificacao = "";

    if(quantidadeEstoque <= 0){
        situacaoEstoque = "Produto esgotado! Ação imediata necessária.";
        classificacao = "estoque__esgotado";
    }
    else if(quantidadeEstoque < quantidadeMinima){
        if(urgencia == "V" || urgencia == "v"){
            situacaoEstoque = "Estoque crítico! Repor com urgência.";
            classificacao = "estoque__critico";
        }
        else{
            situacaoEstoque = "Estoque baixo! Programar reposição.";
            classificacao = "estoque__baixo";
        }
    }
    else if (quantidadeEstoque >= quantidadeMinima){
        situacaoEstoque = "Estoque adequado.";
        classificacao = "estoque__adequado";
    }
    else{
        situacaoEstoque = "Informações insuficientes.";
        classificacao = "informacoes__insuficientes";
    }

    document.getElementById("relatorio").innerHTML=
    `
    <b>Produto:</b> ${nomeProduto}<br>
    <b>Fornecedor:</b> ${fornecedor}<br>
    <b>Preço Unitário:</b> R$${precoUnitario}<br>
    <b>Estoque:</b> ${quantidadeEstoque}<br>
    <b>Estoque mínimo:</b> ${quantidadeMinima}<br>
    <b>Urgência:</b> ${urgenciaDeclarada}<br>
    `;

    document.getElementById("situacao__de__estoque").innerHTML= `${situacaoEstoque}`;
    document.getElementById("situacao__de__estoque").className = classificacao;
}

