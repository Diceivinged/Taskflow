import { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem("user", name);
    onLogin(name);
  };

  return (
    <div className="login-container">
      <h2>Bem-vindo ao TaskFlow</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
