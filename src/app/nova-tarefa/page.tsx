import { prisma } from "@/lib/prisma";
import NewTaskForm from "../components/NewTaskForm";

export default async function NovaTarefa() {
  const users = await prisma.user.findMany();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Nova Tarefa</h1>

      <a href="/">
        <button type="button">Voltar para o dashboard</button>
      </a>

      <NewTaskForm users={users} />
    </main>
  );
}