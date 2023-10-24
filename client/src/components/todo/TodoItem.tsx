import React from 'react';
import { ToDoItem } from '../../types/types';
import './todo.scss';

interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className={`${todo.completed ? 'checked' : ''}`}>
          {todo.text}
        </span>
        <button>delete</button>
      </li>
    </div>
  );
}
