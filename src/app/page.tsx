import { prisma } from "@/lib/prisma";
import MoveButton from "./components/MoveButton";
import DeleteButton from "./components/DeleteButton";
import UserFilter from "./components/UserFilter";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ userId?: string }>;
}) {
  const params = await searchParams;

const selectedUserId =
  params.userId && params.userId !== "todos"
    ? Number(params.userId)
    : undefined;
const selectedUserIdString = selectedUserId ? String(selectedUserId) : "todos";
const tasks = await prisma.task.findMany({
  where: selectedUserId
    ? {
        userId: selectedUserId,
      }
    : {},
  include: {
    user: true,
  },
});

  const users = await prisma.user.findMany({
    include: {
      tasks: true,
    },
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "CONCLUIDA").length;
  const pendingTasks = tasks.filter((task) => task.status === "PENDENTE").length;
  const inProgressTasks = tasks.filter((task) => task.status === "EM_ANDAMENTO").length;
  const overdueTasks = tasks.filter(
    (task) => task.status !== "CONCLUIDA" && new Date(task.dueDate) < new Date()
  ).length;

  const pendentes = tasks.filter((task) => task.status === "PENDENTE");
  const andamento = tasks.filter((task) => task.status === "EM_ANDAMENTO");
  const concluidas = tasks.filter((task) => task.status === "CONCLUIDA");

  function priorityLabel(priority: string) {
    if (priority === "ALTA") return "🔴 ALTA";
    if (priority === "MEDIA") return "🟡 MÉDIA";
    return "🟢 BAIXA";
  }

  function isOverdue(task: { status: string; dueDate: Date }) {
    return task.status !== "CONCLUIDA" && new Date(task.dueDate) < new Date();
  }

  return (
    <main
>
      <h1 className="page-title">📊 SeuGestor</h1>
<div style={{ marginTop: "20px", marginBottom: "20px" }}>
  <a href="/nova-tarefa">
    <button>Criar nova tarefa</button>
  </a>
  <UserFilter users={users} selectedUserId={selectedUserIdString} />
</div>
     <div className="kpi-grid">
  <div className="card kpi-card">
    <h3>Total</h3>
    <p>{totalTasks}</p>
  </div>

  <div className="card kpi-card">
    <h3>Concluídas</h3>
    <p>{completedTasks}</p>
  </div>

  <div className="card kpi-card">
    <h3>Pendentes</h3>
    <p>{pendingTasks}</p>
  </div>

  <div className="card kpi-card">
    <h3>Em andamento</h3>
    <p>{inProgressTasks}</p>
  </div>

  <div className="card kpi-card">
    <h3>Atrasadas</h3>
    <p>{overdueTasks}</p>
  </div>
</div>
      <h2>Carga da Equipe</h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              minWidth: "180px",
              borderRadius: "12px",
backgroundColor: "#fff",
boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{user.name}</h3>
            <p>
              Tarefas: <strong>{user.tasks.length}</strong>
            </p>

            {user.tasks.length >= 5 && <p style={{ color: "red" }}>Sobrecarregado</p>}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <h2>Pendente</h2>

          {pendentes.map((task) => (
            <div
              key={task.id}
              style={{
                border: isOverdue(task) ? "2px solid red" : "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "12px",
backgroundColor: "#fff",
boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <p>
                <strong>{task.title}</strong>
              </p>
              <p>Responsável: {task.user.name}</p>
              <p>Prioridade: {priorityLabel(task.priority)}</p>
              <p>Prazo: {task.dueDate.toLocaleDateString("pt-BR")}</p>

              <MoveButton taskId={task.id} newStatus="EM_ANDAMENTO" />
              <br />
              <DeleteButton taskId={task.id} />
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }}>
          <h2>Em andamento</h2>

          {andamento.map((task) => (
            <div
              key={task.id}
              style={{
                border: isOverdue(task) ? "2px solid red" : "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "12px",
backgroundColor: "#fff",
boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <p>
                <strong>{task.title}</strong>
              </p>
              <p>Responsável: {task.user.name}</p>
              <p>Prioridade: {priorityLabel(task.priority)}</p>
              <p>Prazo: {task.dueDate.toLocaleDateString("pt-BR")}</p>

              <MoveButton taskId={task.id} newStatus="CONCLUIDA" />
              <br />
              <DeleteButton taskId={task.id} />
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }}>
          <h2>Concluída</h2>

          {concluidas.map((task) => (
            <div
              key={task.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "12px",
backgroundColor: "#fff",
boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <p>
                <strong>{task.title}</strong>
              </p>
              <p>Responsável: {task.user.name}</p>
              <p>Prioridade: {priorityLabel(task.priority)}</p>
              <p>Prazo: {task.dueDate.toLocaleDateString("pt-BR")}</p>
              <DeleteButton taskId={task.id} />
              <br />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}