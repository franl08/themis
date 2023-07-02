<script>
    let dados =  {
    _id: "0xyz",
    processo: "Nome do Processo",
    relator: "SUPER RELATOR",
    descritores: ["Descritor1", "Descritor2"],
    n_documento: "01-230-0",
    data_acordao: "10/02/2023",
    especie: "Rara",
    requerente: "MARIA",
    texto_integral: "Santo Tirso é bué fixe",
    url: "/urlurlurlurlurl",
    tribunal: "tjoc2",
    votacao: "votamos e achamos que sim",
    privacidade: "é uma mentira",
    n_convencional: "90909090",
    decisao: "REVOGADO",
    sumario: "sumariado",
    requerido: "Senhor Pato",
    area_tematica_1: ["Area 1", "Area 2"],
    area_tematica_2: ["Mais Areas", "Mais ainda"],
    indicacoes_eventuais: "não há",
    tribunal_1_instancia: "yup",
    autor: "joseé",
    reu: "josé",
    seccao: "do peixe",
    tribunal_nome: "tribunal constitucional",
    recorrido_1: "recorrido",
    meio_processual: "uh?",
    recorrente: "recoorrente",
    recorrido_2: "fodase",
    decisao_texto_integral: "tou farto",
    tribunal_recorrido: "de escrever",
    processo_tribunal_recorrido: "merdas",
    tribunal_recurso: "ainda",
    processo_tribunal_recurso: "não",
    magistrado: "acabou",
    referencias: {
      legislacao_nacional: ["yye", "yey"],
      normas_apreciadas: ["byu", "bro"],
      constituicao: ["ze"],
      normas_julgadas_inconst: ["cenas"],
      normas_suscitadas: ["lolitos"],
      jurisprudencia_constitucional: ["nnnn"],
      normas_declaradas_inconst: ["aaaa"],
      referencias_internacionais: ["String"],
      referencia_pareceres: ["String"],
      legislacao_comunitaria: ["String"],
      outras_publicacoes: ["String"],
      outra_jurisprudencia: ["String"],
      legislacao_estrangeira: ["String"],
      jurisprudencia_estrangeira: ["String"],
      jurisprudencia_internacional: ["String"],
      objecto: ["String"],
      jurisprudencia_nacional: ["String"],
      referencia_doutrina: ["String"],
      referencia_publicacao: "String",
      recusa_aplicacao: ["String"],
    },
    anotacoes_extra: "String"
}
</script>

<div class="flex flex-col mt-5">
	<h1 class="flex text-6xl ml-20 text-pink-700 uppercase font-bold">Detalhes Acordão</h1>
</div>

<div class="flex flex-col ml-24 mr-24 dark:text-white">  
  {#if dados._id}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">id</p>
      </h2>
      <p class="flex  mt-2">{dados._id}</p>
    </div>
  {/if}

  {#if dados.processo}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">processo</p>
      </h2>
      <p class="flex  mt-2">{dados.processo}</p>
    </div>
  {/if}
  
  {#if dados.relator}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">relator</p>
      </h2>
      <p class="flex  mt-2">{dados.relator}</p>
    </div>
  {/if}

  {#if dados.descritores}
    {#if dados.descritores.length > 0}
      <div class="flex flex-col mt-4">
        <h2 class="flex text-4xl rounded-md uppercase font-bold">
          <p class="bg-pink-700 text-uppercase rounded-md">descritores</p>
        </h2>
        <ul>
        {#each dados.descritores as descritor}
          <li class="flex  mt-2">{descritor}</li>
        {/each}
        </ul>
      </div>
    {/if}
  {/if}
  
  {#if dados.n_documento}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">número do documento</p>
      </h2>
      <p class="flex  mt-2">{dados.n_documento}</p>
    </div>
  {/if}

  {#if dados.data_acordao}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">data do acordão</p>
      </h2>
      <p class="flex  mt-2">{dados.data_acordao}</p>
    </div>
  {/if}
  
  {#if dados.especie}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">espécie</p>
      </h2>
      <p class="flex  mt-2">{dados.especie}</p>
    </div>
  {/if}
  
  {#if dados.requerente}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">requerente</p>
      </h2>
      <p class="flex  mt-2">{dados.requerente}</p>
    </div>
  {/if}
  
  {#if dados.texto_integral}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">texto integral</p>
      </h2>
      <p class="flex  mt-2">{dados.texto_integral}</p>
    </div>
  {/if}
  
  {#if dados.url}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">url</p>
      </h2>
      <p class="flex  mt-2">{dados.url}</p>
    </div>
  {/if}
  
  {#if dados.tribunal}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">tribunal</p>
      </h2>
      <p class="flex  mt-2">{dados.tribunal}</p>
    </div>
  {/if}
  
  {#if dados.votacao}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">votação</p>
      </h2>
      <p class="flex  mt-2">{dados.votacao}</p>
    </div>
  {/if}
  
  {#if dados.privacidade}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">privacidade</p>
      </h2>
      <p class="flex  mt-2">{dados.privacidade}</p>
    </div>
  {/if}
  
  {#if dados.n_convencional}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">número convencional</p>
      </h2>
      <p class="flex  mt-2">{dados.n_convencional}</p>
    </div>
  {/if}
  
  {#if dados.decisao}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">decisão</p>
      </h2>
      <p class="flex  mt-2">{dados.decisao}</p>
    </div>
  {/if}
  
  {#if dados.sumario}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">sumário</p>
      </h2>
      <p class="flex  mt-2">{dados.sumario}</p>
    </div>
  {/if}
  
  {#if dados.requerido}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">requerido</p>
      </h2>
      <p class="flex  mt-2">{dados.requerido}</p>
    </div>
  {/if}
  
  {#if dados.area_tematica_1}
    {#if dados.area_tematica_1.length > 0}
      <div class="flex flex-col mt-4">
        <h2 class="flex text-4xl rounded-md uppercase font-bold">
          <p class="bg-pink-700 text-uppercase rounded-md">área temática 1</p>
        </h2>
        <ul>
        {#each dados.area_tematica_1 as area1}
          <li class="flex  mt-2">{area1}</li>
        {/each}
        </ul>
      </div>
    {/if}
  {/if}
  
  {#if dados.area_tematica_2}
    {#if dados.area_tematica_1.length > 0}
      <div class="flex flex-col mt-4">
        <h2 class="flex text-4xl rounded-md uppercase font-bold">
          <p class="bg-pink-700 text-uppercase rounded-md">área temática 2</p>
        </h2>
        <ul>
        {#each dados.area_tematica_2 as area2}
          <li class="flex  mt-2">{area2}</li>
        {/each}
        </ul>
      </div>
    {/if}
  {/if}

  {#if dados.indicacoes_eventuais}  
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">indicações eventuais</p>
      </h2>
      <p class="flex  mt-2">{dados.indicacoes_eventuais}</p>
    </div>
  {/if}
  
  {#if dados.tribunal_1_instancia}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">tribunal 1ª instância</p>
      </h2>
      <p class="flex  mt-2">{dados.tribunal_1_instancia}</p>
    </div>
  {/if}
  
  {#if dados.autor}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">autor</p>
      </h2>
      <p class="flex  mt-2">{dados.autor}</p>
    </div>
  {/if}
  
  {#if dados.reu}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">réu</p>
      </h2>
      <p class="flex  mt-2">{dados.reu}</p>
    </div>
  {/if}
  
  {#if dados.seccao}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">secção</p>
      </h2>
      <p class="flex  mt-2">{dados.seccao}</p>
    </div>
  {/if}
  
  {#if dados.tribunal_nome}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">Nome do tribunal</p>
      </h2>
      <p class="flex  mt-2">{dados.tribunal_nome}</p>
    </div>
  {/if}
  
  {#if dados.recorrido_1}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">1º Recorrido</p>
      </h2>
      <p class="flex  mt-2">{dados.recorrido_1}</p>
    </div>
  {/if}
  
  {#if dados.meio_processual}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">meio processual</p>
      </h2>
      <p class="flex  mt-2">{dados.meio_processual}</p>
    </div>
  {/if}
  
  {#if dados.recorrente}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">recorrente</p>
      </h2>
      <p class="flex  mt-2">{dados.recorrente}</p>
    </div>
  {/if}
  
  {#if dados.recorrido_2}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">2º Recorrido</p>
      </h2>
      <p class="flex  mt-2">{dados.recorrido_2}</p>
    </div>
  {/if}
  
  {#if dados.decisao_texto_integral}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">Texto integral (decisão)</p>
      </h2>
      <p class="flex  mt-2">{dados.decisao_texto_integral}</p>
    </div>
  {/if}
  
  {#if dados.tribunal_recorrido}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">tribunal recorrido</p>
      </h2>
      <p class="flex  mt-2">{dados.tribunal_recorrido}</p>
    </div>
  {/if}
  
  {#if dados.processo_tribunal_recorrido}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">
          processo tribunal recorrido
        </p>
      </h2>
      <p class="flex  mt-2">{dados.processo_tribunal_recorrido}</p>
    </div>
  {/if}
  
  {#if dados.tribunal_recurso}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">tribunal recurso</p>
      </h2>
      <p class="flex  mt-2">{dados.tribunal_recurso}</p>
    </div>
  {/if}
  
  {#if dados.processo_tribunal_recurso}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">
          processo tribunal recurso
        </p>
      </h2>
      <p class="flex  mt-2">{dados.processo_tribunal_recurso}</p>
    </div>
  {/if}
  
  {#if dados.magistrado}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">magistrado</p>
      </h2>
      <p class="flex  mt-2">{dados.magistrado}</p>
    </div>
  {/if}
  
  {#if dados.referencias}
    {#if Object.entries(dados.referencias).length > 0}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">referências</p>
      </h2>
        <div class="flex flex-col mt-2">
          {#if dados.referencias.legislacao_nacional}
            <div class="flex flex-col mt-1">
              <h1 class="flex uppercase text-2xl">Legislação Nacional</h1>
              <p class="flex">{dados.referencias.legislacao_nacional}</p>
            </div>
          {/if}
          {#if dados.referencias.normas_apreciadas}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">normas apreciadas</h1>
                <p class="flex">{dados.referencias.normas_apreciadas}</p>
            </div>
          {/if}
          {#if dados.referencias.constituicao}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">constituição</h1>
                <p class="flex">{dados.referencias.constituicao}</p>
            </div>
          {/if}
          {#if dados.referencias.normas_julgadas_inconst}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">normas julgadas inconst</h1>
                <p class="flex">{dados.referencias.normas_julgadas_inconst}</p>
            </div>
          {/if}
          {#if dados.referencias.normas_suscitadas}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">normas suscitadas</h1>
                <p class="flex">{dados.referencias.normas_suscitadas}</p>
            </div>
          {/if}
          {#if dados.referencias.jurisprudencia_constitucional}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">jurisprudência constitucional</h1>
                <p class="flex">{dados.referencias.jurisprudencia_constitucional}</p>
            </div>
          {/if}
          {#if dados.referencias.normas_declaradas_inconst}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">normas declaradas inconst</h1>
                <p class="flex">{dados.referencias.normas_declaradas_inconst}</p>
            </div>
          {/if}
          {#if dados.referencias.referencias_internacionais}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">referências internacionais</h1>
                <p class="flex">{dados.referencias.referencias_internacionais}</p>
            </div>
          {/if}
          {#if dados.referencias.referencia_pareceres}
            <div class="flex flex-col mt-1">
                <h1 class="flex  uppercase text-2xl">referência pareceres</h1>
                <p class="flex">{dados.referencias.referencia_pareceres}</p>
            </div>
          {/if}
          {#if dados.referencias.legislacao_comunitaria}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">legislação comunitária</h1>
                <p class="flex">{dados.referencias.legislacao_comunitaria}</p>
            </div>
          {/if}
          {#if dados.referencias.outras_publicacoes}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">outras publicações</h1>
                <p class="flex">{dados.referencias.outras_publicacoes}</p>
            </div>
          {/if}
          {#if dados.referencias.outra_jurisprudencia}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">outra jurisprudência</h1>
                <p class="flex">{dados.referencias.outra_jurisprudencia}</p>
            </div>
          {/if}
          {#if dados.referencias.legislacao_estrangeira}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">legislação estrangeira</h1>
                <p class="flex">{dados.referencias.legislacao_estrangeira}</p>
            </div>
          {/if}
          {#if dados.referencias.jurisprudencia_estrangeira}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">jurisprudência estrangeira</h1>
                <p class="flex">{dados.referencias.jurisprudencia_estrangeira}</p>
            </div>
          {/if}
          {#if dados.referencias.jurisprudencia_internacional}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">jurisprudência internacional</h1>
                <p class="flex">{dados.referencias.jurisprudencia_internacional}</p>
            </div>
          {/if}
          {#if dados.referencias.objecto}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">objeto</h1>
                <p class="flex">{dados.referencias.objecto}</p>
            </div>
          {/if}
          {#if dados.referencias.jurisprudencia_nacional}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">jurisprudência nacional</h1>
                <p class="flex">{dados.referencias.jurisprudencia_nacional}</p>
            </div>
          {/if}
          {#if dados.referencias.referencia_doutrina}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">referência doutrina</h1>
                <p class="flex">{dados.referencias.referencia_doutrina}</p>
            </div>
          {/if}
          {#if dados.referencias.referencia_publicacao}
            <div class="flex flex-col mt-1">
                <h1 class="flex uppercase text-2xl">referência publicação</h1>
                <p class="flex">{dados.referencias.referencia_publicacao}</p>
            </div>
          {/if}
          {#if dados.referencias.recusa_aplicacao}
          <div class="flex flex-col mt-1">
              <h1 class="flex uppercase text-2xl">recusa aplicação</h1>
              <p class="flex">{dados.referencias.recusa_aplicacao}</p>
          </div>
          {/if}
        </div>
      </div>
    {/if}
  {/if}
  
  {#if dados.anotacoes_extra}
    <div class="flex flex-col mt-4">
      <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">anotações extra</p>
      </h2>
      <p class="flex  mt-2">{dados.anotacoes_extra}</p>
    </div>
  {/if}
  
  <div class="flex flex-col w-auto w-2/3">
    {#if dados._id!='1'}
      <button> Log out </button>
    {:else}
      <button> Log in </button>
    {/if}
  </div>
</div>

<!--
<div class="flex flex-col w-2/3">
  <div class="flex flex-row">
      <div class="flex flex-row bg-pink-700">
          <p class="text-xl font-bold ">Campos: </p>
      </div>
      <div class="flex flex-row ml-10 bg-pink-700">
        <button class="bg-pink-700 hover:bg-pink-800 text-sm  rounded-md">
          <p class="text-xl font-bold ">Conteúdo </p>
        </button>
      </div>
  </div>
  <div class="flex flex-row">
      <div class="flex flex-row">
          <p class="text-xl font-bold">ID: </p>
      </div>
      <div class="flex flex-row ml-10">
          <p class="text-xl font-bold">{dados._id} </p>
      </div>
  </div>
</div>
-->