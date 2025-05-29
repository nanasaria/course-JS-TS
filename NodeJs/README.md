# Node.js - Anotações e Exemplos

Este diretório contém exemplos práticos e anotações sobre Node js, organizados por tópicos para facilitar o aprendizado e referência.

## Estrutura do Diretório

### Módulos

Exemplos de como criar e utilizar módulos no Node.js:

- **app.js**: Demonstra como importar módulos usando require e destructuring
- **mod1.js**: Exemplo de módulo com exportação de variáveis, funções e classes

### Manipulando-arquivos

Exemplos de operações com arquivos e diretórios:

- **escrevendo-lendo-arquivos.js**: Demonstra como escrever e ler arquivos, incluindo manipulação de JSON
- **lendo-diretorios.js**: Exemplo de como listar e percorrer diretórios recursivamente
- **teste.txt** e **teste.json**: Arquivos de exemplo para demonstração

### Express

Configuração básica de um servidor web usando Express:

- **server.js**: Configuração inicial de um servidor Express
- **package.json**: Dependências e configurações do projeto

### index.js

Arquivo principal com anotações sobre:

- Conceitos básicos de módulos
- Variáveis internas (`__filename` e `__dirname`)
- Manipulação de caminhos com o módulo `path`
- Introdução a operações de arquivo com o módulo `fs`
- Requisições e middlewares no Express
- Padrão MVC (Model-View-Controller)

### basico-nodeJs

Diretório com exemplos práticos e progressivos de desenvolvimento com Node.js:

- **Express**: Configuração básica do framework Express
- **Express-nodemon**: Configuração com nodemon para reinicialização automática do servidor
- **Routes - Aula**: Implementação de rotas com Express
- **Views - Aula**: Integração de views com EJS
- **Arquivos Estáticos**: Servindo arquivos estáticos (CSS, imagens)
- **middlewares**: Implementação e uso de middlewares
- **Webpack**: Configuração do Webpack para bundling de assets
- **inject-views**: Injeção de conteúdo em views
- **mongodb**: Integração com MongoDB e implementação de modelos de dados

## Conceitos Abordados

### Sistema de Módulos

- Como organizar código em arquivos separados
- Exportação e importação de módulos
- Variáveis internas do Node.js

### Manipulação de Arquivos

- Leitura e escrita de arquivos de texto e JSON
- Navegação em diretórios
- Operações assíncronas com arquivos

### Express Framework

- Configuração básica de servidor
- Manipulação de requisições (req.params, req.query, req.body)
- Middlewares e seu funcionamento
- Processamento de dados de formulários
- Roteamento
- Servindo arquivos estáticos
- Integração com sistemas de templates (EJS)

### Padrão MVC (Model-View-Controller)

O padrão MVC divide uma aplicação em três componentes fundamentais:

1. **Model (Modelo)**:

   - Gerencia os dados e a lógica de negócios da aplicação
   - Responsável pelo acesso e manipulação dos dados
   - Implementação com MongoDB

2. **View (Visualização)**:

   - Apresenta a interface do usuário
   - Exibe os dados ao usuário final
   - Implementação com EJS

3. **Controller (Controlador)**:
   - Mantém o Model e a View em sincronia
   - Recebe as ações do usuário
   - Atualiza o modelo e informa à View para mostrar os resultados

#### Fluxo de comunicação no MVC:

- O Model nunca se comunica diretamente com a View
- A View pode solicitar dados ao Model
- O Controller é o único componente que pode modificar o Model e a View

### Ferramentas de Desenvolvimento

- **Nodemon**: Reinicialização automática do servidor durante desenvolvimento
- **Webpack**: Bundling de assets (JavaScript, CSS)
- **Dotenv**: Gerenciamento de variáveis de ambiente

## Recursos Úteis

- [Documentação oficial do Node.js](https://nodejs.org/docs/latest/api/)
- [Documentação do Express](https://expressjs.com/)
- [Módulo fs (File System)](https://nodejs.org/api/fs.html)
- [Módulo path](https://nodejs.org/api/path.html)
- [Padrão MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)
- [MongoDB](https://www.mongodb.com/docs/)
- [EJS](https://ejs.co/)
- [Webpack](https://webpack.js.org/)
</br></br>
<div align="center">
<i>O projeto agenda está em uma versão bem antiga, portanto é apenas para fins de estudo.</i>
</br></br>
<i><b>As Pastas contidas em "basico-nodeJs" seguem uma progressão de aprendizado, cada uma adicionando novos conceitos sobre a anterior.</b></i>
</div>
