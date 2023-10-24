import React, { useState, useRef } from 'react';
import { ToDoItem } from '../../types/types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const checked = {
    textDecoration: 'line-through',
  };

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos);
    setNewTodo('');
  };

  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <h1>TodoList </h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="새로운 투두를 추가해보세요."
        />
        <button onClick={addTodo}>ADD</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}
