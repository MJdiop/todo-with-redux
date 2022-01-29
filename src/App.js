import { Provider } from 'react-redux';
import { TodoListStore } from './components/TodoList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <TodoListStore />
    </Provider>
  );
}

export default App;
