import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const task = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      status: "PENDENTE",
      priority: body.priority,
      dueDate: new Date(body.dueDate),
      userId: Number(body.userId),
    },
  });

  return NextResponse.json(task);
}