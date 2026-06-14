"use client";

export default function UserFilter({
  users,
  selectedUserId,
}: {
  users: {
    id: number;
    name: string;
  }[];
  selectedUserId: string;
}) {
  function handleChange(userId: string) {
    if (userId === "todos") {
      window.location.href = "/";
      return;
    }

    window.location.href = `/?userId=${userId}`;
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      <label>Filtrar por colaborador: </label>

      <select
        value={selectedUserId}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="todos">Todos</option>

        {users.map((user) => (
          <option key={user.id} value={String(user.id)}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}