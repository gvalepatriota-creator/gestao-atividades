"use client";

import { useState } from "react";

export default function NovaTarefa() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIA");
  const [dueDate, setDueDate] = useState("");
  const [userId, setUserId] = useState("1");

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
    setUserId("1");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Nova Tarefa</h1>
<a href="/">
  <button type="button">Voltar para o dashboard</button>
</a>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px", maxWidth: "400px" }}>
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

        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="1">João Silva</option>
          <option value="2">Maria Souza</option>
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
    </main>
  );
}