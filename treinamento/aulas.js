(() => {
  'use strict';
  const extras=[
    {id:'editor-adicionar-bloco',after:'editor-texto',track:'editor',title:'Inserir, mover e conferir blocos',lead:'Aba Conteúdo: botão +, setas, duplicar, remover e pré-visualizar.'},
    {id:'editor-links-exemplo',after:'editor-blocos',track:'editor',title:'Três formas de apontar um destino',lead:'Links, Link único e tipo de página Link têm funções diferentes.'},
    {id:'editor-tabela-exemplo',after:'editor-blocos',track:'editor',title:'Uma tabela só faz sentido para comparar',lead:'Cabeçalhos e legenda dão contexto aos dados copiados da planilha.'},
    {id:'editor-galeria-exemplo',after:'editor-imagens',track:'editor',title:'Uma galeria precisa informar',lead:'O bloco Galeria reúne imagens relacionadas; cada uma precisa da descrição adequada.'}
  ];
  const featuredIds=['editor-blocos','editor-colecao','editor-menus','editor-enviar','moderador-devolver','administrador-colecoes'];
  const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const label=(value)=>'<span class="teach-label">'+escape(value)+'</span>';
  const card=(title,description,tag)=>'<div class="teach-card">'+label(tag)+'<h2>'+escape(title)+'</h2><p>'+escape(description)+'</p></div>';
  const shot=(name,alt)=>'<figure class="teach-shot"><img src="../imagens/'+escape(name)+'" alt="'+escape(alt)+'"><figcaption><span>REFERÊNCIA DO GUIA</span><button type="button" class="capture-zoom" data-zoom-image="../imagens/'+escape(name)+'" data-zoom-alt="'+escape(alt)+'" aria-label="Ampliar captura de referência: '+escape(alt)+'">Ampliar captura <span aria-hidden="true">↗</span></button></figcaption></figure>';
  const row=(title,desc)=>'<div class="teach-row"><strong>'+escape(title)+'</strong><p>'+escape(desc)+'</p></div>';
  function slideBody(id){
    switch(id){
      case 'editor-adicionar-bloco':
        return '<div class="teach-split">'+
          '<div class="teach-steps">'+
          label('CAMINHO NO PAINEL')+
          '<h2 class="teach-route">Editar página <span>→</span> Conteúdo <span>→</span> <b>+</b></h2>'+
          row('Adicionar','Clique em + no ponto em que o conteúdo precisa entrar e escolha o tipo adequado.')+
          row('Reordenar e revisar','Use as setas para mover. Duplique apenas o que puder reaproveitar. Confirme antes de usar a lixeira.')+
          row('Conferir','Pré-visualize depois de inserir ou mudar a ordem dos blocos.')+
          '</div>'+shot('manual-ifrn/image33.png','Seletor de blocos do Wagtail na aba Conteúdo')+'</div>';
      case 'editor-blocos':
        return '<div class="teach-grid three">'+
          card('Introdução','Apresenta de imediato o assunto da página.','APRESENTAR')+
          card('Informação','Destaca um aviso ou dado que a pessoa precisa reconhecer.','DESTACAR')+
          card('Links','Reúne vários destinos relacionados, cada um com texto claro.','ENCAMINHAR')+
          card('Link único','Concentra uma ação principal. Prefira Cartão quando a descrição precisa aparecer.','AÇÃO PRINCIPAL')+
          card('Cards','Apresenta caminhos alternativos para serviços ou assuntos.','ESCOLHER CAMINHO')+
          card('Coleção','Exibe arquivos já guardados; escolha quais coleções e tipos entram.','MOSTRAR ARQUIVOS')+
          '</div><p class="teach-note">O bloco vem depois da necessidade. Texto simples continua sendo a melhor escolha quando resolve a tarefa.</p>';
      case 'editor-links-exemplo':
        return '<div class="teach-grid three">'+
          card('Links','Bloco no corpo da página para mais de um destino, como catálogo, regulamentos e serviços.','NO CONTEÚDO')+
          card('Link único','Bloco para uma ação principal. Em Cartão, a descrição acompanha o botão; em Padrão, só o botão aparece.','NO CONTEÚDO')+
          card('Link','Tipo de página criado na árvore do Wagtail, com rota que redireciona para outro endereço.','NA ÁRVORE')+
          '</div><div class="teach-bottom-panel"><strong>EXEMPLO / PÁGINA DA BIBLIOTECA</strong><p>“Acessar o catálogo” pode ser um Link único. Uma lista de horários, regulamentos e serviços pede Links. Não crie uma página Link para simular um botão dentro do texto.</p></div>';
      case 'editor-tabela-exemplo':
        return '<div class="teach-split narrow">'+
          '<div class="teach-steps">'+
          label('QUANDO USAR')+
          '<h2 class="teach-route">Comparar dias e horários da Biblioteca.</h2>'+
          row('Cabeçalhos','Identifique Dia, Serviço e Horário como cabeçalhos na configuração da tabela.')+
          row('Legenda','Explique o conjunto de informações: por exemplo, “Atendimento da Biblioteca por dia e serviço”.')+
          row('Planilha','Cole as células do Excel na primeira célula do bloco, confira a ordem e teste em tela pequena.')+
          '<p class="teach-note">Para explicar como solicitar um serviço, prefira texto em etapas.</p>'+
          '</div>'+shot('manual-ifrn/image13.png','Tela de configuração do bloco de tabela no Wagtail')+'</div>';
      case 'editor-galeria-exemplo':
        return '<div class="teach-split narrow">'+
          '<div class="teach-steps">'+label('EXEMPLO / ESPAÇOS DA BIBLIOTECA')+
          '<h2 class="teach-route">Fotos de espaços e serviços.</h2>'+
          row('Conjunto com propósito','Use Galeria quando o conjunto mostrar aspectos complementares da Biblioteca, não para enfeitar a página.')+
          row('Cada foto precisa de contexto','Escreva texto alternativo que transmita a informação da imagem; legenda acrescenta o que não cabe na descrição.')+
          row('Depois de publicar','Confira ordem, enquadramento, leitura no celular e se as imagens continuam compreensíveis.')+
          '</div>'+shot('manual-ifrn/image17.png','Configuração do bloco de Galeria no Wagtail')+'</div>';
      case 'editor-colecao':
        return '<div class="teach-split narrow">'+
          '<div class="teach-steps">'+label('DUAS AÇÕES DIFERENTES')+
          '<h2 class="teach-route">Guardar o arquivo <span>≠</span> mostrá-lo na página.</h2>'+
          row('Documentos / Imagens','Use a coleção autorizada para armazenar e localizar o arquivo no painel.')+
          row('Bloco Coleção','Na página em edição, selecione quais arquivos já cadastrados serão exibidos.')+
          row('Recursivo','Ative somente quando precisar incluir arquivos de subcoleções da coleção escolhida.')+
          row('Mostrar arquivos','Escolha documentos, imagens ou ambos conforme a finalidade da página.')+
          '</div>'+shot('manual-ifrn/image5.png','Configuração de referência do bloco Coleção no Wagtail')+'</div>'+
          '<p class="teach-note">A coleção do painel não é a árvore de páginas. O bloco não cria, não renomeia e não altera permissões de uma coleção. Para mudar a estrutura, procure a equipe administradora.</p>';
      case 'editor-menus':
        return '<div class="teach-dual">'+
          '<section class="teach-visual-example">'+label('01 / EXIBIR NOS MENUS')+
          shot('guias-contextuais/exibir-nos-menus.png','Aba Promover de uma página do tipo Link, com Exibir nos menus')+
          '<p>Em <strong>Promover</strong>, a visibilidade no menu depende da configuração da página.</p></section>'+
          '<section class="teach-visual-example">'+label('02 / APRESENTAR AS FILHAS')+
          shot('guias-contextuais/exibicao-menu-interno.png','Opções de exibição do menu interno na página-pai')+
          '<p>Na página-pai, <strong>Lateral, Cards ou Links</strong> determinam a apresentação do menu interno.</p></section>'+
          '</div><p class="teach-note">Uma configuração não substitui a outra: menu interno não é bloco Cards ou Links inserido no Conteúdo. A captura de Promover usa uma página do tipo Link como exemplo.</p>';
      case 'editor-enviar':
        return '<div class="teach-split narrow">'+
          '<div class="teach-steps">'+label('FLUXO DA PÁGINA DA BIBLIOTECA')+
          '<h2 class="teach-route">Rascunho <span>→</span> revisão.</h2>'+
          row('Salvar','O rascunho mantém as alterações em edição.')+
          row('Pré-visualizar','Confira horários, contatos, links, imagens e a apresentação em telas menores.')+
          row('Enviar','Selecione Enviar para moderação e confira o estado da página no fluxo.')+
          '<p class="teach-note">Enviar não publica. Caso a opção não esteja disponível, confirme seu escopo e o fluxo com a equipe responsável.</p>'+
          '</div>'+shot('manual-ifrn/image14.png','Referência do guia: estado de uma página no fluxo de moderação')+'</div>';
      case 'moderador-devolver':
        return '<div class="teach-compare">'+
          '<div class="teach-bad"><span>COMENTÁRIO QUE NÃO AJUDA</span><blockquote>“Melhorar texto.”</blockquote><p>Não indica o ponto do problema nem o resultado esperado.</p></div>'+
          '<div class="teach-good"><span>COMENTÁRIO QUE ORIENTA</span><blockquote>“Na seção Atendimento, confirme e informe o horário de funcionamento às sextas-feiras.”</blockquote><p>O editor sabe onde corrigir. Depois, o moderador confere a nova versão e registra a decisão.</p></div>'+
          '</div>';
      case 'administrador-colecoes':
        return '<div class="teach-warning"><div class="teach-warning-sign" aria-hidden="true">!</div><div>'+
          label('ATENÇÃO / COLEÇÕES')+
          '<h2>Não renomeie coleções por conta própria.</h2>'+
          '<p>Uma mudança de nome, principalmente quando altera a ordem alfabética das coleções irmãs, pode provocar erro na criação de novas coleções. Combine qualquer renomeação com a equipe responsável pelo portal.</p>'+
          '</div></div>'+
          '<div class="teach-warning-steps">'+
          row('Antes de criar','Confira se a coleção já existe, defina nome, finalidade, coleção-pai e grupos autorizados.')+
          row('Se a criação falhar','Veja se a coleção apareceu. Registre mensagem de erro, nome tentado e coleção-pai; informe se houve renomeações.')+
          row('Não tente consertar apagando','Não exclua, renomeie novamente nem recrie outras coleções como tentativa de reparo. Encaminhe para a equipe com acesso à manutenção técnica.')+
          '</div>';
      default:return null;
    }
  }
  function render(scene,index,options){
    const id=scene.id,body=slideBody(id);
    if(!body)return null;
    const s=scene.slide || extras.find(x=>x.id===id);
    const track=scene.track||s.track;
    const labelTrack={comum:'COMECE AQUI',editor:'EDITOR',moderador:'MODERADOR',administrador:'ADMINISTRADOR'}[track]||'TREINAMENTO';
    const warning=id==='administrador-colecoes';
    return '<article class="frame frame-teaching'+(warning?' frame-teaching-warning':'')+'">'+
      options.chromeTop(labelTrack+' / WAGTAIL',window.TreinamentoFluxo?.label(id)||(warning?'PROCEDIMENTO / SEGURANÇA':'CONTEÚDO / APLICAÇÃO'))+
      '<div class="teaching-heading"><h1 tabindex="-1">'+escape(s.title)+'</h1><p>'+escape(s.lead)+'</p></div>'+
      '<div class="teaching-body">'+body+'</div>'+
      options.chromeFoot('IFMG / GUIA DO PORTAL',options.pad(index+1)+' / '+options.pad(options.total))+
      '</article>';
  }
  window.TreinamentoAulas=Object.freeze({extras,featuredIds,render});
})();
