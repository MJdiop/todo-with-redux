export function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title}
      </label>
    </li>
  );
}
