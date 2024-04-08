# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.
![Dados dos usuários_page-0001](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/7c551c18-b848-4495-ae7f-459e5286d598)

## Processos e suas respectivas atividades

**Processo:** Download e Instalação do Aplicativo.

**Atividades:** Acessar a PlayStore ou AppleStore para Ios, Iniciar Download, Abrir Aplicativo, Fazer Cadastro, Utilizar Aplicativo.

**Processo:** Suporte ao usuário.

**Atividades:** Abrir chamado, resolver problema, explicar solução ao cliente, finalizar chamado.

## BPMN

![BPMN-CONTROL-VERSION](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/fe390232-3b96-4728-a723-81be21390dee)

## Indicadores de Desempenho e Metas para o Processo de Negócio
![indicador-1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/7a8dad97-b14c-48d3-8acf-60718740c935)
![indicador-1-análise](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/a5b6d26a-a3e7-41bc-9fe5-740929c73b76)
![indicador-1-gráfico](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/0f190c50-21c5-4841-a89c-48dbff093792)
![indicador - 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/8bacf85f-2073-4e0f-b83c-c989d25a6f24)
![indicador - 2 - análise](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/52e5e43f-232a-4c4c-ae71-4476b82c8b3a)
![indicador - 2 - gráfico](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/d56b7e7a-7d8c-461b-9844-ae336efec17e)



## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de Classes (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/7543d888-e43c-4e0a-9ecd-203866f0f00a)



As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![Diagrama entidade relacionamento (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/71662852/4ecdc0e7-ec41-438d-9c41-3f6c96e91c6a)



As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![1712533249052-b6836139-79ad-4cdf-a7d8-8bae2d787caf_1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-versioncontrol/assets/62729047/3a853698-cdc5-48b5-8769-09e5f897364b)


## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

**Ferramentas e Serviços**

Visual Studio Code - Editor de código fonte.
GitHub - Plataforma de hospedagem de código fonte e controle de versão.
GitHub Actions - Ferramenta de integração contínua do GitHub.

**API**

JavaScript 
Typescript - Superset do Javascript que adiciona tipagem estática e outros recursos.
Next.js 13 - Framework para React.js que conta com um backend embutido, podendo ser utilizado também como uma API.

**Web**

React.js - Biblioteca para criação de interfaces de usuário.

**App**

React Native - Biblioteca para criação de interfaces de usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

**As métricas de qualidade do software VersionControl será baseada na norma ISO/IEC 25010. Os atributos e subcaracterísticas em ordem de peso/prioridade são:**

Funcionalidade Integridade funcional para cobertura de todas as tarefas e objetivos propostos pelo software; Correção funcional ao prover os resultados corretos; Adequação funcional medindo o quão bem consegue realizar suas tarefas

**Usabilidade**

A usabilidade é uma característica importante pois assim podemos realizar eficientemente os objetivos do produto. Adequação reconhecível; Capacidade de aprendizado ; Operabilidade; Compreensibilidade;

Segurança e Compatibilidade Confidencialidade, integridade e disponibilidade do sistema para manter informações cadastradas de forma segura no sistema e garantir integridade delas como um todo. Além disso, a compatibilidade define a facilidade e segurança que o sistema possui em poder trocar informações com um sistema terceiro.

**Manutenibilidade**

Conformidade com os requisitos impostos; Modificabilidade que define a facilidade de realizar modificações no produto; Testabilidade para garantir que as modificações e as funcionalidades existem persistem em pleno funcionamento;
