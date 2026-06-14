"use client";

type MoveButtonProps = {
  taskId: number;
  newStatus: string;
};

export default function MoveButton({ taskId, newStatus }: MoveButtonProps) {
  async function moveTask() {
    await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    window.location.reload();
  }

  return <button onClick={moveTask}>Mover</button>;
}