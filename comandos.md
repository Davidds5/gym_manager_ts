# 🛠️ Guia de Inicialização do Projeto: O que cada comando faz?

---

### 1. `mkdir gym-manager && cd gym-manager`
- **O que faz:** Cria uma nova pasta chamada `gym-manager` e entra dentro dela no terminal.
- **Por que usamos:** Todo projeto profissional deve ficar isolado em sua própria pasta raiz, separado de outros cursos ou experimentos.

---

### 2. `npm init -y`
- **O que faz:** Inicializa o Node.js no projeto e cria o arquivo `package.json` com as configurações padrão (`-y` responde "sim" para todas as perguntas automáticas).
- **O que é o `package.json`:** É o RG do projeto. Ele guarda o nome do sistema, a versão, os scripts de execução (como `npm run dev`) e a lista de todas as bibliotecas instaladas.
- **Analogia com Java:** É o equivalente exato ao arquivo `pom.xml` (do Maven) ou `build.gradle` (do Gradle).

---

### 3. `npm install -D typescript @types/node tsx prisma`
- **O que faz:** Baixa e instala 4 ferramentas na pasta `node_modules`. A flag `-D` (ou `--save-dev`) indica que essas ferramentas são **apenas para desenvolvimento** (não vão para o servidor final de produção).
- **O que é cada pacote instalado:**
  - `typescript`: O compilador oficial da linguagem, que checa tipos e transforma código TS em JS.
  - `@types/node`: Ensina ao TypeScript quais são as funções nativas do Node.js (como `process.env`, manipulação de arquivos, etc.).
  - `tsx`: Executor moderno e ultra-rápido de arquivos `.ts`. Permite rodar código TypeScript diretamente no terminal sem precisar compilar manualmente antes (substituto moderno do `ts-node`).
  - `prisma`: A CLI (linha de comando) do Prisma ORM, usada para rodar migrations, gerar o banco e abrir o Prisma Studio.

---

### 4. `npx tsc --init`
- **O que faz:** Cria o arquivo de configuração `tsconfig.json`.
- **O que é o `tsconfig.json`:** O "painel de controle" do TypeScript. Define o quão rigoroso o compilador será (como ativar o `strict: true` para proibir variáveis sem tipo) e para qual versão do JavaScript o código será compilado.

---

### 5. `npx prisma init --datasource-provider postgresql`
- **O que faz:** Inicializa a estrutura oficial do Prisma ORM configurado para PostgreSQL.
- **O que ele gera:**
  - Pasta `prisma/` com o arquivo `schema.prisma`: onde você vai desenhar suas tabelas e relacionamentos em código de forma limpa e legível.
  - Arquivo `.env`: onde fica guardada a variável `DATABASE_URL` com a senha e endereço de conexão com o banco de dados PostgreSQL.

---

### 6. `npm install -D prisma@6 @prisma/client@6`
- **O que faz:** Trava a instalação na **versão 6 do Prisma** (a versão estável, rápida e recomendada para produção no mercado), evitando versões experimentais e arquivos de configuração complexos.

---

### 7. `Remove-Item -Recurse -Force ...` (PowerShell)
- **O que faz:** Limpa arquivos experimentais gerados por versões beta anteriores para deixar a raiz do projeto 100% limpa antes de reiniciar com o Prisma 6.

---

### 8. `npx prisma format`
- **O que faz:** Formata o arquivo `schema.prisma`, alinha todas as colunas perfeitamente e **completa relacionamentos automaticamente** (insere o lado inverso da relação 1:N que estiver faltando).
- **Quando usar:** Sempre que terminar de escrever ou alterar qualquer model no `schema.prisma`.

---

### 9. `npx prisma migrate dev --name <nome_da_migration>`
- **O que faz:** Lê o seu `schema.prisma`, compara com o banco de dados PostgreSQL, gera um arquivo SQL contendo as alterações e aplica essas mudanças criando/alterando as tabelas reais no banco. Ele também atualiza o Prisma Client no TypeScript.
- **Analogia com Java:** É o equivalente exato ao **Flyway** (`V1__init_db.sql`) ou **Liquibase**.
- **Quando usar:** Toda vez que adicionar, alterar ou remover uma tabela/coluna no `schema.prisma`.

---

### 10. `npx prisma studio`
- **O que faz:** Abre uma interface gráfica completa no navegador (`localhost:5555`) conectada diretamente ao seu banco de dados, permitindo visualizar, criar, editar e excluir registros de forma visual.
- **Quando usar:** Para testar dados, debugar relacionamentos e conferir se o banco está guardando as informações corretamente.
