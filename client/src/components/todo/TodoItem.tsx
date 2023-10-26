import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToDoItem } from '../../types/types';
import '../../styles/scss/pages/todo.scss';

interface Props {
    todo: ToDoItem;
    // toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo }: Props) {
    const [checkedIcon, setCheckedIcon] = useState<string>(
        todo.completed
            ? '/asset/icons/Checked.svg'
            : '/asset/icons/notChecked.svg'
    );

    return (
        <div>
            <li>
                <div>
                    <img
                        src={checkedIcon}
                        className="edit-img"
                        alt="isCheckedIcon"
                    />

                    <span className={`${todo.completed ? 'checked' : ''}`}>
                        {todo.text}
                    </span>
                    <Link to="/group">
                        <button
                            className={`${todo.completed ? 'no-button' : ''}`}
                        >
                            달성 완료!
                        </button>
                    </Link>
                </div>
            </li>
        </div>
    );
}
