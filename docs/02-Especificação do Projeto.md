# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas
|<p>**Imagem** </p><p>**não consigo inserir**</p>|Gabriela Rocha|<p>29 anos </p><p>Ocupação: : é uma cantora e compositora brasileira de música cristã contemporânea. Gravou com artistas internacionais como Elevation Worship, CeCe Winans e Michael W. Smith. Já foi vista por mais de 3 bilhões de pessoas, em seu canal do youtube</p><p></p><p>Aplicativos: Instagram, whatsapp e linkedin</p><p></p><p></p><p></p>|
| :- | - | :- |
|<p>Motivações: Desejo de administrar melhor seu estoque de produtos e ter uma estimativa de como está a relação de produtos e vendas.;</p><p></p><p></p>|<p>Frustrações:</p><p>Dificuldade de administrar o estoque de seus produtos; Não ter uma projeção de vendas e estoque de seu produto</p><p></p>|<p>Hobbies/História:</p><p>Gosta de pesquisar sobre empreendedorismo; Apaixonado por administrção de negócios.</p><p></p>|

|<p>**Imagem** </p><p>**não consigo inserir** </p>|<p>José Jr</p><p></p>|<p>25 anos</p><p>Ocupação: é um empreendedor determinado e visionário. Aos 25 anos, ele é proprietário de uma pequena loja de artigos de decoração e presentes. Com uma paixão por números e organização, João tem o desejo de administrar melhor o estoque de produtos de sua loja e ter uma estimativa mais precisa sobre a relação entre produtos e vendas.</p><p></p><p>Aplicativos: Instagram, whatsapp, twitter e linkedin</p><p></p>|
| :- | - | :- |
|<p>Motivações: Desejo de administrar melhor seu estoque de produtos e ter uma estimativa de como está a relação de produtos e vendas.;</p><p></p><p></p>|<p>Frustrações:</p><p>Dificuldade de administrar o estoque de seus produtos; Não ter uma projeção de vendas e estoque de seu produto</p><p></p>|<p>Hobbies/História:</p><p>Gosta de pesquisar sobre empreendedorismo; Apaixonado por administrção de negócios.</p><p></p>|

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram
registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|José Jr  | Gestão de relatórios de vendas por produto           | Tomar decisões sobre os documentos mais facilmente.               |
|Gabriela rocha      | Um sistema de gestão de documentos            | Garantir a disponibilidade dos documentos. |
| Bruno | Dashboard de análise de arquivos e documentos| Identificar oportunidades de crescimento, otimizar o mix de arquivos e aumentar a rentabilidade do negócio. |
| Sabrina | Gerar relatorios personalizados. | Facilitar a tomada de decisão baseadas em dados e aumentar a eficácia das estratégias de estoque. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| A aplicação deve permitir que os usuários façam upload de documentos para armazenamento | ALTA | 
|RF-02| O aplicativo deve permitir que os usuários organizem os documentos em pastas e categorias  | MÉDIA |
|RF-03| O o aplicativo deve permitir que os usuários visualizem e editem documentos armazenados. | ALTA |
|RF-04| O aplicativo deve fornecer um sistema de controle de versão para cada documento, permitindo que os usuários vejam e restauram versões anteriores. | MÉDIA |
|RF-05| O aplicativo deve permitir que os usuários adicionem comentários e anotações aos documentos para facilitar a revisão colaborativa. | BAIXA |
|RF-06|A aplicação deve ter um sistema de cadastro e login | Alta |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|------|-----------------------------------------|----|
|RNF-01| O aplicativo deve ter um tempo de resposta rápido ao carregar e salvar documentos, garantindo uma experiência de usuário ágil| ALTA | 
|RNF-02| O aplicativo deve ser capaz de lidar com um grande volume de documentos e usuários simultâneos sem degradar o desempenho | ALTA |
|RNF-03|O aplicativo deve garantir a segurança dos documentos e revisões, implementando criptografia e controle de acesso baseado em permissões | MÉDIA |
|RNF-04| O aplicativo deve ser compatível com diferentes plataformas, como iOS e Android, para permitir acesso em dispositivos móveis | MÉDIA |
|RNF-05| O aplicativo deve possuir uma interface intuitiva e de fácil utilização, garantindo uma curva de aprendizado mínima para os usuários | BAIXA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| Deverá haver uma reunião fixa todas as terças-feiras à partir das 20:00h com a equipe de desenvolvimento. |
|RE-02| A entrega do projeto completo deverá ser feita no dia 26/06/2024.|
|RE-03| O repositório das entregas deverá ser feito no GitHub Classroom.        |
|RE-04| A aplicação deverá ser compatível com as ferramentas de acessibilidade dos sistemas operacionais Ios e Android.       |
|RE-05| A aplicação deverá atender às normas da LGPD.       |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

Abaixo está apresentado o diagrama de casos de uso.

![DiagramaDeCasoDeUsoVersionControl](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/121464977/c2e4d12d-b293-4c83-8096-8eeed8560f10)

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
