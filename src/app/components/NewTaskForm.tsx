"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function NewTaskForm({ users }: { users: User[] }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIA");
  const [dueDate, setDueDate] = useState("");
  const [userId, setUserId] = useState(users[0]?.id.toString() ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        priority,
        dueDate,
        userId,
      }),
    });

    alert("Tarefa criada!");
    setTitle("");
    setDescription("");
    setPriority("MEDIA");
    setDueDate("");
    setUserId(users[0]?.id.toString() ?? "");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: "12px",
        maxWidth: "400px",
        marginTop: "20px",
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título da tarefa"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
      />

      <select value={userId} onChange={(e) => setUserId(e.target.value)} required>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="BAIXA">Baixa</option>
        <option value="MEDIA">Média</option>
        <option value="ALTA">Alta</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />

      <button type="submit">Criar tarefa</button>
    </form>
  );
}