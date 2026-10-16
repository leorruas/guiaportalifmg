(() => {
  'use strict';
  // A sequência didática é um caso de página institucional, não uma captura de dados reais do campus.
  const etapas=[
    {numero:1,nome:'Localizar',ids:['editor-papel']},
    {numero:2,nome:'Preparar',ids:['editor-planejar']},
    {numero:3,nome:'Montar conteúdo',ids:['editor-texto','editor-adicionar-bloco','editor-blocos','editor-links-exemplo','editor-tabela-exemplo']},
    {numero:4,nome:'Usar arquivos',ids:['editor-arquivos','editor-imagens','editor-galeria-exemplo','editor-colecao']},
    {numero:5,nome:'Busca e menus',ids:['editor-menus']},
    {numero:6,nome:'Revisar e enviar',ids:['editor-enviar','editor-corrigir','editor-pratica']}
  ];
  const label=id=>{
    const e=etapas.find(item=>item.ids.includes(id));
    return e?'BIBLIOTECA · '+String(e.numero).padStart(2,'0')+'/06 · '+e.nome.toUpperCase():null;
  };
  window.TreinamentoFluxo=Object.freeze({etapas,label});
})();
