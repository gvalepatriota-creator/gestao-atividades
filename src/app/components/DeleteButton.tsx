"use client";

export default function DeleteButton({ taskId }: { taskId: number }) {
  async function deleteTask() {
    const confirmDelete = confirm("Tem certeza que deseja excluir esta tarefa?");

    if (!confirmDelete) {
      return;
    }

    await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });

    window.location.reload();
  }

  return <button onClick={deleteTask}>Excluir</button>;
}