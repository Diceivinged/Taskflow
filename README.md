# TaskFlow 📋

Um aplicativo moderno e intuitivo de **gerenciamento de tarefas** com tema claro/escuro e interface responsiva.

## ✨ Funcionalidades

- ✅ Criar, listar e deletar tarefas
- 🌓 Alternância entre tema claro e escuro
- 💾 Persistência de dados (LocalStorage)
- 🎨 Interface moderna com glassmorphism
- 📱 Design responsivo
- ⚡ Carregamento instantâneo com Vite

## 🚀 Como rodar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação
```bash
cd taskflow-frontend
npm install
```

### Desenvolvimento
```bash
npm run dev
```
O app estará disponível em `http://localhost:5173`

### Build para produção
```bash
npm run build
```

### Preview da build
```bash
npm run preview
```

### Lint do código
```bash
npm run lint
```

## 📁 Estrutura do projeto

```
taskflow-frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho com controles
│   │   ├── Login.jsx        # Tela de login
│   │   ├── taskForm.jsx     # Formulário de nova tarefa
│   │   └── TaskList.jsx     # Lista de tarefas
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Ponto de entrada
│   ├── index.css            # Estilos globais
│   └── assets/              # Arquivos estáticos
├── public/                  # Arquivos públicos
├── vite.config.js           # Configuração do Vite
├── eslint.config.js         # Configuração do ESLint
└── package.json             # Dependências do projeto
```

## 🛠 Tecnologias utilizadas

- **React 19** - Biblioteca UI
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **ESLint** - Linter
- **JavaScript ES6+** - Linguagem

## 📝 Como usar

1. **Faça login** - Digite seu nome na tela inicial
2. **Adicione tarefas** - Use o input para adicionar novas tarefas
3. **Delete tarefas** - Clique no botão X para remover
4. **Alterne o tema** - Use o botão de lua/sol no cabeçalho

## 🎨 Customização

### Alterar tema
O tema é salvo no atributo `data-theme` do `body`. Você pode adicionar novos temas editando `src/index.css`

### Estilos
Todos os estilos estão centralizados em `src/index.css` para fácil manutenção

## 💡 Melhorias futuras

- [ ] Editar tarefas existentes
- [ ] Filtrar tarefas (concluídas/pendentes)
- [ ] Sincronizar com backend
- [ ] Notificações
- [ ] Exportar tarefas

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️

---

**Gostou do projeto? Deixe uma ⭐ no repositório!**
