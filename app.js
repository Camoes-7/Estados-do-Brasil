function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let resultado = "";

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

  if(campoPesquisa == ""){
    section.innerHTML = "<p>Nenhum resultado encontrado!</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  let titulo = "";
  let descricao = "";
  let tag = "";

    for(let estado of estados){
      titulo = estado.titulo.toLowerCase();
      descricao = estado.descricao.toLowerCase();
      tag = estado.tags.toLowerCase();

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || estado.link.includes(campoPesquisa) || tag.includes(campoPesquisa)){
        resultado += `
            <div class="item-resultado">
                <h2><a href="#" target="blank">${estado.titulo}</a></h2>
                    <p class="descricao-meta">${estado.descricao}</p>
                    <a href="${estado.link}" target="_blank">Saiba Mais!</a>
                </div>
`
      }
    section.innerHTML = resultado;
}

//verifica se o resultado foi encontrado
  if (section.innerHTML = resultado){
    return;
  } else{
    section.innerHTML = "<p>Nenhum resultado encontrado!</p>";
    return;
  }
}


/*
function pesquisar() {
  // 1. Obtém a seção HTML onde os resultados serão exibidos,
  //    usando o ID "resultados-pesquisa".
  let section = document.getElementById("resultados-pesquisa");

  // 2. Imprime no console o elemento da seção para fins de depuração.
  console.log(section);

  // 3. Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultado = "";

  // 4. Itera sobre cada estado no array "estados".
  for (let estado of estados) {
    // 5. Concatena uma nova div com as informações do estado à string "resultado".
    //    * estado.titulo: Título do estado.
    //    * estado.descricao: Descrição do estado.
    //    * estado.link: Link para mais informações.
    resultado += `
      <div class="item-resultado">
        <h2><a href="#" target="blank">${estado.titulo}</a></h2>
        <p class="descricao-meta">${estado.descricao}</p>
        <a href="${estado.link}" target="_blank">Saiba Mais!</a>
      </div>
    `;
  }

  // 6. Substitui o conteúdo HTML da seção pelos resultados da pesquisa.
  section.innerHTML = resultado;
} 
  */  
