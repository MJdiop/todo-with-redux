import { connect } from 'react-redux';
import { TodoSelector } from '../store/todoSelector';
import { ToggleTodoAction } from '../store/toggleTodoAction';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />
      ))}
    </ul>
  );
}

export const TodoListStore = connect(
  (state) => ({
    todos: TodoSelector(state),
  }),
  (dispatch) => ({
    onToggle: (todo) => dispatch(ToggleTodoAction(todo)),
  })
)(TodoList);
