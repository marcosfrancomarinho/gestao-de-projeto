# 🧾 Sistema de Cadastro de Produtos

Aplicação fullstack para gerenciamento de produtos, permitindo cadastrar, visualizar e organizar itens com nome, preço e descrição.

O projeto utiliza Clean Architecture no backend e uma SPA moderna em Vue no frontend.

---

## ✨ Funcionalidades

- Criar produto (nome, preço e descrição)
- Listar todos os produtos cadastrados
- API REST estruturada
- Persistência com SQLite
- Interface responsiva

---

## 🏗️ Arquitetura

### Backend
Desenvolvido com Clean Architecture em TypeScript.

Camadas:

- Domain → Regras de negócio e entidades
- Application → Casos de uso
- Infrastructure → Prisma e banco de dados
- Presentation → Controllers e rotas HTTP
- Main → Inicialização do servidor

Banco de dados:
- SQLite
- Prisma ORM

### Frontend
Aplicação SPA com:

- Vue 3
- Vue Router
- TailwindCSS

Rotas da interface:

- Home
- Cadastrar Produto
- Mostrar Produtos

---

## 📁 Estrutura do Projeto

### Backend
```bash
backend
├── prisma
│   └── schema.prisma
│
├── src
│   ├── app
│   ├── domain
│   ├── infra
│   ├── presentation
│   └── main.ts

### Frontend

frontend
├── src
│   ├── components
│   ├── routers
│   ├── styles
│   ├── App.vue
│   └── main.js

```
## ⚙️ Instalação
Instalar todas as dependências:
```bash
yarn dev:install
```
Gerar o cliente Prisma e rodar as migrações:
```bash
yarn migrate:backend
```
---

## ▶️ Executar o Projeto

Rodar frontend e backend juntos:
```bash
yarn dev
````
---

## 🌐 Endpoints da API

Criar Produto  
POST /products

Body:

{
  "name": "Produto",
  "price": 100,
  "description": "Descrição"
}

Listar Produtos  
GET /products

---

## 🧪 Tecnologias

Backend
- Node.js
- TypeScript
- Prisma
- SQLite
- Express

Frontend
- Vue 3
- Vue Router
- TailwindCSS

---

## 👨‍💻 Autor

Marcos Marinho

---

## 📄 Licença

MIT