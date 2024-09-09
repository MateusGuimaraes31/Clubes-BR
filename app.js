function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado, você precisa digitar o clube ou o estado.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let estado = "";
    let tags = "";

    // Itera sobre cada item de dado na lista de dados
    for (let dado of dados) {   
        titulo = dado.titulo.toLocaleLowerCase()
        estado = dado.estado.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || estado.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>    
                    <a href=${dado.link_wiki} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href=${dado.link_siteofc} target="_blank">Site Oficial do Clube</a>
                <div class="item-resultado">
                    <a href=${dado.link_insta} target="_blank" class="instagram-link">
                        <img src="instagram_PNG.png" alt="Instagram" class="instagram-icon"> Ver no Instagram
                    </a>
                </div>
            </div>
        `;
        }
        // Constrói o HTML para um item de resultado, incluindo:
        // - Título com link para a Wikipédia
        // - Descrição
        // - Link para o site oficial do clube
        // - Link para o Instagram
        
    }

    if (!resultados) { 
        resultados = "<p>Nada foi encontrado!</p>"
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}