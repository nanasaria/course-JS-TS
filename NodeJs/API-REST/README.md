# API REST - Sistema de Gestão de Alunos

Este projeto é uma API REST completa para gerenciamento de alunos, desenvolvida com Node.js, Express e Sequelize. A API implementa autenticação JWT, upload de arquivos, e segue os princípios RESTful.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework web para Node.js
- **Sequelize**: ORM para bancos de dados relacionais
- **MariaDB**: Sistema de gerenciamento de banco de dados
- **JWT (JSON Web Token)**: Para autenticação e autorização
- **Multer**: Middleware para upload de arquivos
- **Bcryptjs**: Para criptografia de senhas
- **Dotenv**: Para gerenciamento de variáveis de ambiente
- **Sucrase**: Para utilizar sintaxe ES6+ no Node.js
- **Nodemon**: Para reinicialização automática do servidor durante desenvolvimento

## Estrutura do Projeto

```
API-REST/
├── src/
│   ├── config/
│   │   ├── appConfig.js       # Configurações da aplicação
│   │   ├── database.js        # Configurações do banco de dados
│   │   └── multerConfig.js    # Configurações para upload de arquivos
│   ├── controllers/
│   │   ├── AlunoController.js # Controlador de alunos
│   │   ├── FotoController.js  # Controlador de fotos
│   │   ├── HomeController.js  # Controlador da página inicial
│   │   ├── TokenController.js # Controlador de autenticação
│   │   └── UserController.js  # Controlador de usuários
│   ├── database/
│   │   ├── migrations/        # Migrações do Sequelize
│   │   ├── seeds/            # Seeds para popular o banco de dados
│   │   └── index.js          # Configuração e inicialização do Sequelize
│   ├── middlewares/
│   │   └── loginRequired.js  # Middleware de autenticação
│   ├── models/
│   │   ├── Aluno.js          # Modelo de aluno
│   │   ├── Foto.js           # Modelo de foto
│   │   └── User.js           # Modelo de usuário
│   └── routes/
│       ├── alunoRoutes.js    # Rotas para alunos
│       ├── fotoRoutes.js     # Rotas para fotos
│       ├── homeRoutes.js     # Rotas para página inicial
│       ├── tokenRoutes.js    # Rotas para autenticação
│       └── userRoutes.js     # Rotas para usuários
├── uploads/
│   └── images/              # Diretório para armazenar imagens enviadas
├── .editorconfig           # Configurações do editor
├── .env                    # Variáveis de ambiente
├── .sequelizerc            # Configuração do Sequelize CLI
├── app.js                  # Configuração da aplicação Express
├── server.js               # Ponto de entrada da aplicação
└── package.json            # Dependências e scripts
```

## Funcionalidades

### Autenticação e Autorização
- Sistema de login com JWT
- Proteção de rotas com middleware de autenticação
- Gerenciamento de tokens

### Gestão de Usuários
- Criação, leitura, atualização e exclusão (CRUD) de usuários
- Criptografia de senhas com bcryptjs
- Validação de dados

### Gestão de Alunos
- CRUD completo de alunos
- Validação de dados (nome, email, idade, etc.)
- Associação com fotos

### Upload de Arquivos
- Upload de fotos para alunos
- Armazenamento local de arquivos
- Geração de URLs para acesso às imagens

## Rotas da API

### Autenticação
- `POST /tokens`: Gera um token JWT para autenticação

### Usuários
- `POST /users`: Cria um novo usuário (requer autenticação)
- `PUT /users`: Atualiza dados do usuário autenticado
- `DELETE /users`: Remove o usuário autenticado

### Alunos
- `GET /alunos`: Lista todos os alunos
- `GET /alunos/:id`: Obtém detalhes de um aluno específico
- `POST /alunos`: Cria um novo aluno (requer autenticação)
- `PUT /alunos/:id`: Atualiza dados de um aluno (requer autenticação)
- `DELETE /alunos/:id`: Remove um aluno (requer autenticação)

### Fotos
- `POST /fotos`: Faz upload de uma foto para um aluno (requer autenticação)

## Modelos de Dados

### User
- `nome`: Nome do usuário
- `email`: Email único do usuário
- `password`: Senha virtual (não armazenada no banco)
- `password_hash`: Hash da senha armazenada no banco

### Aluno
- `nome`: Nome do aluno
- `sobrenome`: Sobrenome do aluno
- `email`: Email único do aluno
- `idade`: Idade do aluno
- `peso`: Peso do aluno
- `altura`: Altura do aluno

### Foto
- `originalname`: Nome original do arquivo
- `filename`: Nome do arquivo no sistema
- `aluno_id`: ID do aluno associado à foto
- `url`: URL virtual para acesso à imagem

## Configuração e Execução

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Execute as migrações: `npx sequelize db:migrate`
5. Execute os seeds (opcional): `npx sequelize db:seed:all`
6. Inicie o servidor: `npm run dev`

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DATABASE=nome_do_banco
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=seu_usuario
DATABASE_PASSWORD=sua_senha
TOKEN_SECRET=seu_segredo_jwt
TOKEN_EXPIRATION=7d
```

## Desenvolvimento

Para desenvolvimento, o projeto utiliza:
- ESLint para linting de código
- Nodemon para reinicialização automática do servidor
- Sucrase para suporte à sintaxe ES6+