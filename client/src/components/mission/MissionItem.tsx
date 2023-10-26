import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MissionType } from '../../types/types';
import '../../styles/scss/pages/mission.scss';

interface Props {
    mission: MissionType;
    // toggleComplete: (id: number) => void;
}

export default function MissionItem({ mission }: Props) {
    const [checkedIcon, setCheckedIcon] = useState<string>(
        mission.completed
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

                    <span className={`${mission.completed ? 'checked' : ''}`}>
                        {mission.text}
                    </span>
                    <Link to="/group">
                        <button
                            className={`${
                                mission.completed ? 'no-button' : ''
                            }`}
                        >
                            달성 완료!
                        </button>
                    </Link>
                </div>
            </li>
        </div>
    );
}
