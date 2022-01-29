import { UPDATE_TODO } from './todoReducer';

export const ToggleTodoAction = (todo) => ({
  type: UPDATE_TODO,
  payload: { ...todo, completed: !todo.completed },
});
