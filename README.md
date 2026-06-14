# SeuGestor — Plataforma de Gestão de Atividades

Ricardo é gestor de uma pequena empresa e enfrenta um desafio comum em equipes em crescimento: acompanhar o andamento das atividades, distribuir demandas de forma equilibrada e garantir que os prazos sejam cumpridos.

Com o aumento do volume de trabalho, tornou-se cada vez mais difícil manter visibilidade sobre o que está sendo executado, identificar gargalos operacionais e entender quais colaboradores estão sobrecarregados ou com baixa utilização. Como consequência, decisões importantes passaram a depender de informações dispersas e de acompanhamentos manuais.

O SeuGestor foi desenvolvido para resolver esse cenário, oferecendo uma plataforma simples e intuitiva para gestão de atividades. Através de uma visualização baseada em Kanban, o sistema permite registrar tarefas, definir responsáveis, acompanhar prioridades, monitorar prazos e visualizar indicadores operacionais em tempo real.

Além da organização das atividades, a solução fornece métricas que apoiam a tomada de decisão, permitindo ao gestor acompanhar o volume de trabalho da equipe, identificar tarefas atrasadas e analisar a distribuição das demandas entre os colaboradores.

Dessa forma, o SeuGestor transforma informações operacionais em uma visão clara e centralizada do trabalho da equipe, proporcionando maior controle, produtividade e previsibilidade na gestão.

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