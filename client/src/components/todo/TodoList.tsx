import React, { useState } from 'react';
import { ToDoItem } from '../../types/types';
import TodoItem from './TodoItem';

export default function TodoList() {
    const [todos, setTodos] = useState<ToDoItem[]>([
        { id: 1, text: ' div 배치 ', completed: false },
        { id: 2, text: ' 다중 선택 태그 로직 찾아보기 ', completed: false },
        { id: 3, text: ' 토끼 불러오기 ', completed: false },
        {
            id: 4,
            text: ' 토끼 밑의 달성률 계산 로직 만들기 ',
            completed: false,
        },
        { id: 5, text: ' 달성 완료랑 group 페이지 연결 ', completed: true },
    ]);

    // const toggleComplete = (targetId: number) => {
    //     const updatedTodos = todos.map((todo) => {
    //         return todo.id === targetId
    //             ? { ...todo, completed: !todo.completed }
    //             : todo;
    //     });
    //     setTodos(updatedTodos);
    // };

    return (
        <div>
            <h1>TodoList </h1>
            <ul className="TodoItem-ul1">
                <div className="TodoList-header">
                    <div className="group">코딩학당</div>
                    <div className="dDay">D-3</div>
                </div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        // toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
            <ul className="TodoItem-ul2">
                <div className="TodoList-header">
                    <div className="group">근손실방지</div>
                    <div className="dDay">D-3</div>
                </div>

                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        // toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
}
