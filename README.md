# Projeto Trivia Game Redux
Este projeto é um jogo de trivia que permite ao usuário testar seus conhecimentos em diferentes categorias e níveis de dificuldade. É um jogo de perguntas e respostas baseado no jogo Trivia, semelhante ao "Who Wants to Be a Millionaire" (um programa de perguntas e respostas) nos Estados Unidos. Ele foi desenvolvido em grupo utilizando React e Redux, e as funcionalidades foram implementadas de acordo com as demandas definidas em um quadro Kanban.

<img width="100%" src="trivia.gif" />

## Idealizadores
<a href="https://github.com/brenolg/Trivia-Game-Redux/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=brenolg/Trivia-Game-Redux" />
</a>

## Funcionalidades

* Logar no jogo e, se o email tiver cadastro no site Gravatar, ter sua foto associada ao perfil da pessoa usuária.
* Escolher uma categoria e um nível de dificuldade para o jogo.
* Acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada.
* Responder a 5 perguntas de múltipla escolha por rodada.
* Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
* Visualizar a página de ranking, se quiser, ao final de cada jogo.
* Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app.
* Jogar novamente ou voltar para a tela inicial.

## Tecnologias utilizadas
* HTML
* CSS
* JavaScript
* React
* Redux
* React Router
* Jest
* React Testing Library

## Instalação do projeto localmente

Para instalar o projeto localmente, siga os seguintes passos:

Clone o repositório com o comando

```javascript
 git clone git@github.com:brenolg/Trivia-Game-Redux.git
```
Entre na pasta do projeto com o comando 

```javascript
cd Trivia-Game-Redux
```
Instale as dependências com o comando npm install

```javascript
 npm install
```
Inicie o servidor local com o comando

```javascript
 npm start
```
Abra o navegador e acesse o endereço http://localhost:3000

## Requisitos

1. [TELA DE LOGIN] Crie a tela de login, onde a pessoa que joga deve preencher as informações para iniciar um jogo
2. [TELA DE LOGIN] Crie o botão de iniciar o jogo
3. [TELA DE LOGIN] Crie um botão na tela inicial que leve para a tela de configurações
4. [TELA DE LOGIN] Desenvolva testes para atingir 90% de cobertura da tela de Login
5. [TELA DE JOGO] Crie um _header_ que deve conter as informações da pessoa jogadora
6. [TELA DE JOGO] Crie a página de jogo que deve conter as informações relacionadas à pergunta
7. [TELA DE JOGO] Desenvolva o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas
8. [TELA DE JOGO] Desenvolva um timer onde a pessoa que joga tem 30 segundos para responder
9. [TELA DE JOGO] Crie o placar com as seguintes características:
10. [TELA DE JOGO] Crie um botão de `Next` que apareça após a resposta ser dada
11. [TELA DE JOGO] Desenvolva o jogo de forma que a pessoa que joga deve responder 5 perguntas no total
12. [TELA DE FEEDBACK] Desenvolva o header de _feedback_ que deve conter as informações da pessoa jogadora
13. [TELA DE FEEDBACK] Crie a mensagem de _feedback_ para ser exibida a pessoa usuária
14. [TELA DE FEEDBACK] Exiba as informações relacionadas aos resultados obtidos para a pessoa usuária
15. [TELA DE FEEDBACK] Crie a opção para a pessoa jogadora poder jogar novamente
16. [TELA DE FEEDBACK] Crie a opção para a pessoa jogadora poder visualizar a tela de _ranking_
17. [TELA DE FEEDBACK] Desenvolva testes para atingir 90% de cobertura da tela de Feedbacks
18. [TELA DE RANKING] Crie um botão para ir ao início
19. [TELA DE RANKING] Crie o conteúdo da tela de _ranking_
20. [TELA DE RANKING] Desenvolva testes para atingir 90% de cobertura da tela de Rankings
21. [TELA DE JOGO] Desenvolva testes para atingir 90% de cobertura da tela de Jogo

## Agradecimentos
Agradecemos à Trybe por nos proporcionar esta oportunidade de aprendizado e desenvolvimento de habilidades. Também agradecemos aos instrutores, colegas e mentores que nos apoiaram e orientaram durante o projeto.
