export default function TaskList({ tasks, removeTask }) {
    if (tasks.length === 0)
        return <p className="empty-message">Nenhuma tarefa ainda ✨</p>;


  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-white p-3 rounded shadow-sm"
        >
          <span>{task.title}</span>
          <button
            onClick={() => removeTask(task.id)}
            className="text-red-600 hover:underline"
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}
