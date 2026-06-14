"use client";

export default function UserFilter({
  users,
}: {
  users: {
    id: number;
    name: string;
  }[];
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

      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="todos">Todos</option>

        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}