# Gestão de Atividades de Equipe

Sistema desenvolvido para o desafio técnico da Quatro5.

O objetivo da aplicação é ajudar gestores a organizar, acompanhar e visualizar o trabalho da equipe através de indicadores e uma visão centralizada das atividades.

---

## Problema

O desafio apresenta o caso de Ricardo, gestor de uma empresa que enfrenta dificuldades para acompanhar o trabalho da equipe.

As principais dores identificadas são:

- Falta de visibilidade das atividades em andamento
- Distribuição desigual de trabalho entre colaboradores
- Perda de prazos
- Falta de indicadores para tomada de decisão

A solução proposta busca resolver essas dores através de um sistema simples de gestão baseado em Kanban.

---

## Metodologia Escolhida

Foi utilizada como principal inspiração a metodologia Kanban.

O Kanban foi escolhido por ser uma abordagem visual, simples de utilizar e adequada para equipes que precisam acompanhar o fluxo de trabalho continuamente.

As atividades são organizadas em três estados:

- Pendente
- Em andamento
- Concluída

Essa estrutura permite ao gestor identificar rapidamente gargalos e acompanhar a evolução das tarefas.

---

## Tecnologias Utilizadas

- Next.js
- TypeScript
- Prisma ORM
- SQLite
- React

---

## Funcionalidades

### Gestão de tarefas

O sistema permite:

- Criar tarefas
- Definir responsável
- Definir prioridade
- Definir prazo
- Visualizar tarefas em formato Kanban
- Alterar status das tarefas
- Excluir tarefas

### Indicadores

O sistema apresenta indicadores que auxiliam na tomada de decisão.

#### Total de tarefas

Mostra a quantidade total de atividades cadastradas.

Decisão:
Permite avaliar o volume geral de trabalho da equipe.

#### Tarefas pendentes

Mostra quantas atividades ainda não foram iniciadas.

Decisão:
Permite identificar acúmulo de trabalho parado.

#### Tarefas em andamento

Mostra quantas atividades estão sendo executadas.

Decisão:
Permite acompanhar a capacidade operacional da equipe.

#### Tarefas concluídas

Mostra quantas atividades já foram finalizadas.

Decisão:
Permite acompanhar a produtividade da equipe.

#### Tarefas atrasadas

Mostra atividades cujo prazo já venceu e ainda não foram concluídas.

Decisão:
Permite agir rapidamente antes que o problema impacte clientes.

#### Carga da equipe

Mostra a quantidade de tarefas atribuídas a cada colaborador.

Decisão:
Permite identificar colaboradores sobrecarregados ou ociosos.

---

## Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/gvalepatriota-creator/gestao-atividades.git
```

### 2. Acessar o projeto

```bash
cd gestao-atividades
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Configurar o banco de dados

```bash
npx prisma migrate dev
```

### 5. Popular o banco com dados iniciais

```bash
npm run seed
```

### 6. Executar aplicação

```bash
npm run dev
```

### 7. Abrir no navegador

```text
http://localhost:3000
```