import { useEffect, useState } from "react";

export default function HeaderComponent({ user, onLogout }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="header-bar">
      <h1 className="title">TaskFlow</h1>

      <div className="header-controls">
        {/* Bloco do usuário */}
        <div className="user-info">
          <span className="username"> {user}</span>
          <button className="logout-btn" onClick={onLogout} title="Encerrar sessão">
            🚪
          </button>
        </div>

        {/* Botão de tema - fora da user-info */}
        <button className="theme-toggle" onClick={toggleTheme} title="Alternar tema">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
