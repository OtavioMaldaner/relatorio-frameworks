# Relatório dos Frameworks - Programação IV 2023

## Proposta de trabalho:
Pesquise sobre Frameworks de programação a fim de criar relatório respondendo as seguintes questões:

* O que são Frameworks e para que são utilizados?

* Liste 4 Frameworks utilizados para programação Web selecionados por você, um para cada linguagem (Python, Java, PHP e Javascript). Descreva estes frameworks segundo seus propósitos e diferencial.

* Selecione um trecho de código que utilize cada um destes frameworks e descreva o funcionamento do trecho.

* Crie um **projeto bastante simples** utilizado um dos frameworks pesquisados. Submeta o código do seu projeto para o GitHub ou outro portal de Git e disponibilize no relatório o link público para o repositório. O repositório deve incluir um arquivo de README.md descrevendo os procedimentos básicos para executar o projeto.

Obs.: 

1 - Em duplas ou individual. Entregar em HTML.

2 - Entre os frameworks estudados para o relatório não deve estar o Framework Django, pois já o estudaremos no 2º trimestre da disciplina de Programação 4.

## Projeto:

Nosso projeto consiste na continuidade da produção do projeto [Clona Grêmio](https://github.com/OtavioMaldaner/clona-gremio), que foi feito com React com TypeScript e SCSS. Porém, como o projeto já estava implementado com um framework, a ideia foi de criar um "back-end". Com isso, decidimos criar uma API com FastAPI, que retorna os dados necessários para o funcionamento do sistema.

### Executando o sistema:
 * Para executar o projeto, é necessário ter [NodeJS](https://nodejs.org/en) e [Python](https://www.python.org/) instalado na sua máquina;
 * O projeto é dividido em duas partes:
    * Back-end:
        * Para acessar o [back-end](https://github.com/OtavioMaldaner/relatorio-frameworks/tree/main/simple-project/back-end), você deve acessar o diretório `\back-end`. Caso você esteja no diretório raiz, você pode acessar a pasta com o comando:
        > cd simple-project/back-end/ 
        * Para instalar as dependências você pode executar o comando: 
        > pip install uvicorn fastapi
        * Para executar o servidor, você deve executar o comando:
        > uvicorn main:app --reload
        * Para visualizar a documentação da API, você pode acessá-la pelo navegador na localização: `localhost:8000/docs`; 
    * Front-end:
        * Para acessar o [front-end](https://github.com/OtavioMaldaner/relatorio-frameworks/tree/main/simple-project/front-end), você deve acessar o diretório `\front-end`. Caso você esteja no diretório raiz, você pode acessar a pasta com o comando:
        > cd simple-project/front-end/ 
        * Para instalar as dependências você deve entrar no diretório `clona-gremio-api` e executar o comando: 
        > npm install
        * Para executar o servidor, você deve se manter no mesmo diretório e executar o comando;
        > npm start

## Sobre os autores:

Projeto iniciado no dia 25/05/2023;

Feito por:
* [Otávio Maldaner](https://github.com/OtavioMaldaner/);
* [Marcelo Ost](https://github.com/marceloost);
* [Matheus Persch](https://github.com/DevTheusP);

Bom Princípio - RS | 01/06/2023
