# Clube do Brasil: Uma Busca Completa por Clubes Populares do Futebol Brasileiro

## Descrição
Este projeto web é uma aplicação simples, porém eficaz, que permite aos usuários pesquisar por clubes de futebol brasileiros. Ao digitar o nome de um clube ou estado, a aplicação retorna uma lista de resultados relevantes, com informações como:

* **Título:** Nome do clube com link para a página na Wikipédia.
* **Descrição:** Breve descrição do clube.
* **Site Oficial:** Link para o site oficial do clube.
* **Instagram:** Link para o perfil do clube no Instagram.

## Tecnologias Utilizadas
* **HTML5:** Estrutura básica da página.
* **CSS3:** Estilização da interface do usuário.
* **JavaScript:** Lógica da aplicação, incluindo a função de pesquisa.

## Como Funciona
1. **Interface:** O usuário digita o termo de busca (nome do clube ou estado) em um campo de texto e clica no botão "Pesquisar".
2. **Processamento:** A função `pesquisar()` é acionada, capturando o termo de busca e iterando sobre um conjunto de dados de clubes (armazenado em `dados.js`).
3. **Resultados:** A função verifica se o termo de busca está presente no título, estado ou tags de cada clube. Caso haja correspondência, um novo elemento HTML é criado e adicionado à seção de resultados, exibindo as informações do clube.
4. **Exibição:** Os resultados da pesquisa são apresentados de forma clara e organizada na página, facilitando a navegação do usuário.

## Estrutura dos Arquivos
* **index.html:** Arquivo principal da aplicação.
* **style.css:** Arquivo de estilos CSS.
* **dados.js:** Arquivo JavaScript contendo os dados dos clubes (pode ser substituído por um banco de dados).
* **app.js:** Arquivo JavaScript com a lógica da aplicação.

## Como Usar
1. **Clone o repositório:**
   ```bash
   git clone https://seu-repositorio.git
