import React from 'react';
import SidebarChat from '../SidebarChat';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from '@mui/material/ListItem';

import SidebarManagement from '../../management/SidebarManagement';
import { Center } from '@react-three/drei';

// groupbar section chat
export default function ManagementLayout({ children, showChat }: any) {
    // console.log('showChat', showChat);
    return (
        <>
            {/* 전체 레이아웃 컨테이너 */}
            <div className="layout-container">
                <Grid container>
                    {showChat ? (
                        <>
                            {/* 그룹 메뉴 바 컴포넌트 들어갈 곳 */}
                            <Grid
                                md={2}
                                sm={2}
                                xs={2}
                                className="manageMenu-div"
                            >
                                <Item
                                    style={{
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        justifyContent: 'Center',
                                    }}
                                >
                                    <SidebarManagement />
                                </Item>
                            </Grid>

                            <Grid
                                md={8}
                                sm={10}
                                xs={10}
                                className="section-wrapper"
                            >
                                {' '}
                                <Item
                                    style={{
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        justifyContent: 'Center',
                                    }}
                                >
                                    {children}
                                </Item>
                            </Grid>

                            {/* 채팅 컴포넌트 들어갈 곳 */}
                            <Grid
                                md={2}
                                sm={12}
                                xs={12}
                                className="chatting-div"
                            >
                                <Item
                                    style={{
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        justifyContent: 'Center',
                                    }}
                                >
                                    <SidebarChat />
                                </Item>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid
                                md={2}
                                sm={2}
                                xs={2}
                                className="manageMenu-div"
                            >
                                <Item
                                    style={{
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        justifyContent: 'Center',
                                    }}
                                >
                                    <SidebarManagement />{' '}
                                </Item>
                            </Grid>
                            <Grid
                                md={8}
                                sm={10}
                                xs={10}
                                className="section-wrapper"
                            >
                                <Item
                                    style={{
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        justifyContent: 'Center',
                                    }}
                                >
                                    {' '}
                                    {children}
                                </Item>
                            </Grid>
                            <Grid
                                md={2}
                                sm={12}
                                xs={12}
                                className="chatting-div"
                            ></Grid>
                        </>
                    )}
                </Grid>
            </div>
        </>
    );
}
