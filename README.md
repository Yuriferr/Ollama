# Ollama

Este projeto consiste em uma API e uma aplicação web para interagir com um modelo de IA chamado Ollama.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

1. **API**: Localizada na pasta `api`, é responsável por gerenciar as conversas e se comunicar com o modelo de IA.
2. **Web**: Localizada na pasta `web`, é uma aplicação React que fornece uma interface de usuário para interagir com a API.

## Pré-requisitos

- Node.js
- npm (Node Package Manager)
- Ollama

## Instalação

### Baixar e Instalar Ollama

1. Acesse o [link para baixar Ollama](https://ollama.com) e siga as instruções para instalar o Ollama na sua máquina.
2. Certifique-se de que o Ollama está rodando na porta `11434`.

### API

1. Navegue até a pasta `api`:
    ```sh
   cd api

2. Instale as dependências:
    ```sh
   npm install

3. Inicie o servidor:
    ```sh
   npm start

O servidor da API estará rodando em http://localhost:3001.

### WEB

1. Navegue até a pasta `web`:
    ```sh
   cd web

2. Instale a aplicação React:
    ```sh
   npm install

3. Inicie a aplicação React:
    ```sh
   npm start

A aplicação web estará rodando em http://localhost:5173.

### Uso

1. Abra a aplicação web em http://localhost:5173.
2. Digite uma mensagem na caixa de entrada e clique em "Send".
3. A mensagem será enviada para a API, que se comunicará com o modelo de IA Ollama.
4. A resposta da IA será exibida na interface da aplicação web.

# Dependências

### API

- axios: ^1.7.9
- body-parser: ^1.20.3
- cors: ^2.8.5
- express: ^4.21.2
- nodemon: ^2.0.22 (devDependency)

### WEB

- axios: ^1.7.9
- bootstrap: ^5.3.3
- cra-template: 1.2.0
- react: ^19.0.0
- react-dom: ^19.0.0
- react-scripts: 5.0.1
- web-vitals: ^4.2.4

### Licença

Este projeto está licenciado sob a licença ISC.