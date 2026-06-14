import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.task.deleteMany();
  await prisma.user.deleteMany();

  const users = await prisma.user.createMany({
    data: [
      { name: "João Silva" },
      { name: "Maria Souza" },
      { name: "Pedro Almeida" },
      { name: "Ana Costa" },
      { name: "Lucas Ferreira" },
      { name: "Beatriz Lima" },
      { name: "Rafael Santos" },
      { name: "Camila Rocha" },
      { name: "Marcos Oliveira" },
      { name: "Fernanda Martins" },
    ],
  });

  console.log(`${users.count} usuários criados`);

  const allUsers = await prisma.user.findMany();

  await prisma.task.createMany({
    data: [
      {
        title: "Enviar proposta para cliente",
        description: "Preparar e enviar proposta comercial revisada",
        status: "PENDENTE",
        priority: "ALTA",
        dueDate: new Date("2026-06-10"),
        userId: allUsers[0].id,
      },
      {
        title: "Atualizar planilha de controle",
        description: "Consolidar dados da semana",
        status: "EM_ANDAMENTO",
        priority: "MEDIA",
        dueDate: new Date("2026-06-20"),
        userId: allUsers[1].id,
      },
      {
        title: "Revisar contrato",
        description: "Validar informações antes do envio",
        status: "CONCLUIDA",
        priority: "ALTA",
        dueDate: new Date("2026-06-08"),
        userId: allUsers[2].id,
      },
      {
        title: "Agendar reunião com cliente",
        description: "Definir horário para alinhamento",
        status: "PENDENTE",
        priority: "MEDIA",
        dueDate: new Date("2026-06-18"),
        userId: allUsers[3].id,
      },
      {
        title: "Montar relatório semanal",
        description: "Reunir indicadores operacionais",
        status: "EM_ANDAMENTO",
        priority: "ALTA",
        dueDate: new Date("2026-06-12"),
        userId: allUsers[0].id,
      },
      {
        title: "Organizar documentos internos",
        description: "Padronizar arquivos do projeto",
        status: "PENDENTE",
        priority: "BAIXA",
        dueDate: new Date("2026-06-25"),
        userId: allUsers[4].id,
      },
      {
        title: "Responder pendências do cliente",
        description: "Verificar mensagens em aberto",
        status: "PENDENTE",
        priority: "ALTA",
        dueDate: new Date("2026-06-09"),
        userId: allUsers[0].id,
      },
      {
        title: "Atualizar status das entregas",
        description: "Revisar andamento das tarefas da equipe",
        status: "EM_ANDAMENTO",
        priority: "MEDIA",
        dueDate: new Date("2026-06-21"),
        userId: allUsers[5].id,
      },
      {
        title: "Finalizar apresentação",
        description: "Preparar slides para reunião de segunda",
        status: "CONCLUIDA",
        priority: "MEDIA",
        dueDate: new Date("2026-06-11"),
        userId: allUsers[6].id,
      },
      {
        title: "Validar escopo do projeto",
        description: "Confirmar limites e entregáveis",
        status: "PENDENTE",
        priority: "ALTA",
        dueDate: new Date("2026-06-17"),
        userId: allUsers[7].id,
      },
    ],
  });

  console.log("Banco populado com time fictício!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });