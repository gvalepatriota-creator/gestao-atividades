import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await request.json();

  const task = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
      status: body.status,
    },
  });

  return NextResponse.json(task);
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await prisma.task.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({ message: "Tarefa excluída" });
}