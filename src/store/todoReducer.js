let id = 3;

const initialState = [
  { id: 1, title: 'new task', completed: false },
  { id: 2, title: 'other task', completed: true },
  { id: 3, title: 'a other task', completed: false },
];

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: ++id, completed: false, ...action.payload }];
      break;
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        } else {
          return todo;
        }
      });
      break;
    case DELETE_TODO:
      return;
      break;

    default:
      return state;
  }
}
