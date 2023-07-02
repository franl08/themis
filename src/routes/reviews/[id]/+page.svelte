<script>
    let dados = {
        processo: "123",
        id_acordao: "500",
        relator: "Nhunhu",
        descritores: ["descritor1", "descritor2"],
        n_documento: "42",
        data_acordao: "1-1-2023",
        especie: "tortulho",
        requerente: "Ric",
        texto_integral: "I made a severe and continuous lapse in my judgement, and I don’t expect to be forgiven. I’m simply here to apologise. What we came across in the woods that day was obviously unplanned. The reactions you saw on tape were raw; they were unfiltered. None of us knew how to react or how to feel. I should have never posted the video. I should have put the cameras down and stopped recording what we were going through. There's a lot of things I should have done differently but I didn't. And for that, from the bottom of my heart, I am sorry. I want to apologise to the internet. I want to apologise to anyone who has seen the video. I want to apologise to anyone who has been affected or touched by mental illness, or depression, or suicide. But most importantly I want to apologise to the victim and his family. For my fans who are defending my actions, please don't. I don’t deserve to be defended. My goal with my content is always to entertain; to push the boundaries, to be all-inclusive. In the world live in, I share almost everything I do. The intent is never to be heartless, cruel, or malicious. Like I said I made a huge mistake. I don’t expect to be forgiven, I’m just here to apologise. I'm ashamed of myself. I’m disappointed in myself. And I promise to be better. I will be better. Thank you.",
        url: "https://github.com/franl08/themis",
        tribunal: "do bairro",
        votacao: "ovo ou a galinha?",
        privacidade: "facebook is watching",
        n_convencional: "78",
        decisao: "não.",
        sumario: "hoje vamos dar a multiplicação",
        requerido: "Pires",
        area_tematica_1: ["cão", "gato"],
        area_tematica_2: ["peixinho1", "peixinho2"],
        indicacoes_eventuais: "mindinho",
        tribunal_1_instancia: "tribunal 1",
        autor: "Camões",
        reu: "Luís",
        seccao: "abcd",
        tribunal_nome: "nome do tribunal",
        recorrido_1: "recorridoooooo",
        meio_processual: "porque não inteiro?",
        recorrente: "RECURSIVIDADE",
        recorrido_2: "recorridoooooooooooo2",
        decisao_texto_integral: "blablablablablabla",
        tribunal_recorrido: "blax2",
        processo_tribunal_recorrido: "trin«bunal já nem sei escrever",
        tribunal_recurso: "recurso :')",
        processo_tribunal_recurso: "tribunal do recuros? :')",
        magistrado: "magistrado",
        referencias: {
        legislacao_nacional: [String],
        normas_apreciadas: [String],
        constituicao: [String],
        normas_julgadas_inconst: [String],
        normas_suscitadas: [String],
        jurisprudencia_constitucional: [String],
        normas_declaradas_inconst: [String],
        referencias_internacionais: [String],
        referencia_pareceres: [String],
        legislacao_comunitaria: [String],
        outras_publicacoes: [String],
        outra_jurisprudencia: [String],
        legislacao_estrangeira: [String],
        jurisprudencia_estrangeira: [String],
        jurisprudencia_internacional: [String],
        objecto: [String],
        jurisprudencia_nacional: [String],
        referencia_doutrina: [String],
        referencia_publicacao: String,
        recusa_aplicacao: [String],
        },
        anotacoes_extra: "fiambre da perna extra é o melhor",
        user: "maria",
        data_review: {type: Date, default: new Date()},
        adicionar: true,
  }
</script>

<div class="flex flex-col mt-5">
	<h1 class="flex text-6xl ml-20 text-pink-700 uppercase font-bold">Revisão</h1>
</div>

<div class="flex flex-col ml-36 mr-36 dark:text-white">
    {#if dados.processo}
    <div class="flex flex-col mt-4">
        <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">processo</p>
        </h2>
        <p class="flex  mt-2">{dados.processo}</p>
    </div>
    {/if}

    {#if dados.id_acordao}
    <div class="flex flex-col mt-4">
        <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">id acordão</p>
        </h2>
        <p class="flex  mt-2">{dados.id_acordao}</p>
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

    {#if dados.user}
    <div class="flex flex-col mt-4">
        <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">utilizador</p>
        </h2>
        <p class="flex  mt-2">{dados.user}</p>
    </div>
    {/if}

    {#if dados.data_review}
    {#if Object.entries(dados.data_review).length > 0}
    <div class="flex flex-col mt-4">
        <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">Data da revisão</p>
        </h2>
        <p class="flex  mt-2">{dados.data_review.default}</p>
    </div>
    {/if}
    {/if}

    {#if dados.adicionar}
    <div class="flex flex-col mt-4">
        <h2 class="flex text-4xl rounded-md uppercase font-bold">
        <p class="bg-pink-700 text-uppercase rounded-md">Tipo</p>
        </h2>
        {#if dados.adicionar == true}
            <p class="flex  mt-2">Adição</p>
        {:else}
            <p class="flex  mt-2">Revisão</p>
        {/if}
    </div>
    {/if}

</div>

