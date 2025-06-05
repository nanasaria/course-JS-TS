/**

O que é o sucrase?
Sucrase é um transpilador de JavaScript, como o Babel.
Ele converte código Js (Ts, JSX, etc) em uma versão que
o Node.js consegue executar.
________________________________________________________________

Sequelize

É um ORM (Object-Relational Mapper) para Node.js que facilita a
interação com bancos de dados relacionais, como:
- PostgreSQL
- MySQL
- MariaDB
- SQLite
- Microsoft SQL Server

O Sequelize permite:
- Definir modelos (models) que representam tabelas.
- Definir relacionamentos (1:1, 1:N, N:N)
- Fazer CRUD de forma programada
- Executar migrations para versionar estrutura do banco.
- Fazer queries customizadas.

________________________________________________________________

O que é um ORM?
É uma ferramenta que faz a ponte entre o seu código
(orientado a objetos) e um banco de dados relacional.

Um ORM permite:
- Criar, ler, atualizar e deletar dados de tabelas usando
objetos e métodos no código, sem precisar escrever SQL
manualmente o tempo todo.

Exemplos de ORM:
  Sequelize (Node.js)
  TypeORM (Node.js)
  Hibernate (Java)
  Entity Framework (C#)
  SQLAlchemy (Python)
________________________________________________________________

Um controller deve ter 5 métodos:

index -> Lista todos os usuários -> GET
store/create -> Cria um novo usuário - POST
delete -> Apaga um novo usuário - DELETE
show -> Mostra um usuário - GET
update -> Atualiza um usuário - PATCH ou PUT

________________________________________________________________

Seeds
São scripts ou arquivos que inserem dados iniciais no banco de
dados. Esses dados podem ser informações obrigatórias para o
sistema funcionar (como usuários padrões).
*/
