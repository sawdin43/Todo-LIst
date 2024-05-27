import React, { useContext, useMemo } from 'react';
import { TodoContext } from './Todoprovider/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter((todo) => !todo.completed);
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  return (
    <div className="todo-list">
      {filteredTodos.map((todo, index) => (
        <TodoItem key={todo.id || index} todo={todo} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
