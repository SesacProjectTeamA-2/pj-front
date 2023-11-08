import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';

import {
    MissionListType,
    MissionStateType,
    MissionType,
    RootStateType,
} from '../../../types/types';

import MissionAddModal from '../../common/modal/MissionAddModal';

import useDdayCount from '../../../hooks/useDdayCount';

export default function HomeMissionList({
    missionList,
    setMissionList,
    gDday,
}: any) {
    const [addModalSwitch, setAddModalSwitch] = useState(false);
    const missionAddHandler = () => {
        setAddModalSwitch(true);
    };

    //=== redux 상태관리 ===
    const dummyGroupState = useSelector(
        (state: RootStateType) => state.dummyGroup
    );

    // const missionList = useSelector(
    //     (state: RootStateType) => state.dummyGroup.missionArray
    // );

    // interface MissionType {
    //     id: number;
    //     name: string;
    //     description: string;
    //     level: number | string;
    // }

    // const missionList: MissionType[] = [
    //     {
    //         id: 1,
    //         name: dummyGroupState.mTitle,
    //         description: dummyGroupState.mContent,
    //         level: dummyGroupState.mLevel,
    //     },
    //     {
    //         id: 2,
    //         name: dummyGroupState.mTitle,
    //         description: dummyGroupState.mContent,
    //         level: dummyGroupState.mLevel,
    //     },
    //     {
    //         id: 3,
    //         name: dummyGroupState.mTitle,
    //         description: dummyGroupState.mContent,
    //         level: dummyGroupState.mLevel,
    //     },
    // ];

    // for (let mission of missionList) {
    //     if (mission.level === 5) {
    //         mission.level = '⭐️⭐️⭐️';
    //     } else if (mission.level === 3) {
    //         mission.level = '⭐️⭐️';
    //     } else if (mission.level === 1) {
    //         mission.level = '⭐️';
    //     }
    // }

    // 변수 추가한 부분
    const missionState = useSelector((state: RootStateType) => state.mission);

    const [missionInput, setMissionInput] = useState({
        id: missionList.length + 1,
        mTitle: '',
        mContent: '',
        mLevel: 1,
        // completed: false,
    });

    const [missionInputs, setMissionInputs] = useState(
        missionList.map((mission: any) => ({
            id: mission.id,
            mTitle: mission.mTitle,
            mContent: mission.mContent,
            mLevel: mission.mLevel,
        }))
    );

    // 함수 추가한 부분
    const handleMissionContentChange = (missionId: any, newContent: any) => {
        // missionId에 해당하는 미션의 내용을 newContent로 변경
        const updatedMissionList = missionList.map((mission: any) => {
            if (mission.id === missionId) {
                return { ...mission, mContent: newContent };
            } else {
                return mission;
            }
        });
        setMissionList(updatedMissionList);
    };

    const editHandler = (targetId: number) => {
        const editedMissionIndex = missionInputs.findIndex(
            (mission: any) => mission.id === targetId
        );

        if (editedMissionIndex !== -1) {
            // 수정할 미션을 찾았을 때, 해당 미션 정보 수정
            const updatedMissionInputs = [...missionInputs];
            updatedMissionInputs[editedMissionIndex] = {
                ...updatedMissionInputs[editedMissionIndex],
                mTitle: missionInput.mTitle,
                mContent: missionInput.mContent,
                mLevel: missionInput.mLevel,
            };
            setMissionInputs(updatedMissionInputs);
        }
    };

    const deleteHandler = (targetId: number) => {
        const filtered = missionList.filter(
            (mission: any) => targetId !== mission.id
        );
        console.log('targetId, filtered', targetId, filtered);
        setMissionList(filtered);
    };
    console.log('missionList HOME', missionList);

    return (
        <div className="wrapper">
            <div className="upper-content">
                <div className="upper-content-wrapper">
                    <div className="title2">진행 중인 미션</div>

                    {/* 모임장만 보임 */}
                    <div onClick={missionAddHandler}>
                        <div className="title5 mission-edit">
                            <img
                                src="/asset/icons/edit.svg"
                                alt="edit-img"
                                className="edit-img"
                            ></img>
                        </div>
                    </div>
                    {addModalSwitch ? (
                        <MissionAddModal
                            addModalSwitch={addModalSwitch}
                            setAddModalSwitch={setAddModalSwitch}
                            action={'미션수정'}
                            missionList={missionList}
                            setMissionList={setMissionList}
                            gDday={gDday}
                        />
                    ) : null}
                </div>
                <div className="title2">
                    {/* {useDdayCount(dummyGroupState.gDday)} */}
                    {gDday > 0
                        ? 'D-' + gDday
                        : gDday === 0
                        ? 'D-DAY'
                        : 'D+' + String(gDday).substring(1)}
                </div>
            </div>
            <div className="main-content">
                <ul>
                    {missionList.map((mission: MissionType, idx: number) => {
                        return (
                            <li key={idx} className="mission-li">
                                <div className="mission-element">
                                    {mission.mTitle}
                                </div>
                                <div>{mission.mContent}</div>
                                <div>난이도 : {mission.mLevel}</div>
                            </li>
                        );
                    })}
                </ul>

                {/*  추가한 부분 */}
                {/* <div className="modal-mission-list-text">
                    <>
                        {missionList.map((mission: any) => {
                            return (
                                <div key={mission.id}>
                                    <Divider component="li" />

                                    <ListItem
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <TextField
                                            label={`미션 ${
                                                mission.id | mission.mSeq
                                            }. ${mission.mTitle} ${
                                                mission.mLevel
                                            }`}
                                            variant="standard"
                                            // fullWidth
                                            name={`mTitle-${mission.id}`}
                                            value={mission.mContent}
                                            onChange={(e) =>
                                                handleMissionContentChange(
                                                    mission.id,
                                                    e.target.value
                                                )
                                            }
                                            style={{ width: '70%' }}
                                        />

                                        <div>
                                            <button
                                                className="modal-mission-edit-btn btn-sm"
                                                onClick={() =>
                                                    editHandler(mission.id)
                                                }
                                            >
                                                수정
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="modal-mission-delete-btn btn-sm"
                                                onClick={() =>
                                                    deleteHandler(mission.id)
                                                }
                                            >
                                                삭제
                                            </button>
                                        </div>
                                    </ListItem>
                                </div>
                            );
                        })}
                    </>
                    <>
                        {missionState.map((mission: any) => {
                            return (
                                <div key={mission.id}>
                                    <Divider component="li" />

                                    <ListItem>
                                        <ListItemText
                                            primary={`미션 ${mission.id}. ${mission.mTitle} ${mission.mLevel}`}
                                            secondary={`${mission.mContent}`}
                                        />
                                        <div>
                                            <button
                                                className="modal-mission-edit-btn btn-sm"
                                                onClick={() =>
                                                    editHandler(mission.id)
                                                }
                                            >
                                                수정
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="modal-mission-delete-btn btn-sm"
                                                onClick={() =>
                                                    editHandler(mission.id)
                                                }
                                            >
                                                삭제
                                            </button>
                                        </div>
                                    </ListItem>
                                </div>
                            );
                        })}
                    </>
                </div> */}
            </div>
        </div>
    );
}
