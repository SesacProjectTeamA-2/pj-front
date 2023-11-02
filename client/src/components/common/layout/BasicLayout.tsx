import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from '@mui/material/ListItem';

import '../../../styles/scss/layout/layout.scss';
import '../../../styles/scss/layout/sidebarChat.scss';

import SidebarChat from '../SidebarChat';
import Footer from '../Footer';

export default function BasicLayout({ children, showChat }: any) {
    // 인트로에서만 Footer 보이게 하기
    // const loc = useLocation().pathname;
    // const [showFooter, setShowFooter] = useState<boolean>(false);

    // 고치기 전 코드
    // const setFooterShowing = (): void => {
    //     if (loc === '/') {
    //         setShowFooter(true);
    //         // console.log('showFooter', showFooter); // 바로 찍으면 값 안 바뀜!!! useEffect 쓰기
    //     } else {
    //         setShowFooter(false);
    //         // console.log('no Footer');
    //         // return;
    //     }
    // };

    // useEffect(() => {
    //     setFooterShowing();
    //     console.log('showFooter', showFooter);
    // }, [showFooter]);

    //  고친 후 코드
    // useEffect(() => {
    //     // console.log('loc', loc, loc === '/');
    //     loc === '/' ? setShowFooter(true) : setShowFooter(false);
    // }, [loc]);

    return (
        <>
            <div className="layout-container ">
                <Grid container>
                    <>
                        <Grid md={2} sm={2} xs={2} className="empty-div">
                            <Item
                                style={{
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                }}
                            ></Item>
                        </Grid>

                        {/* 컨텐츠 컴포넌트 들어갈 곳 */}
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
                                    justifyContent: 'center',
                                }}
                            >
                                {' '}
                                {children}
                            </Item>
                        </Grid>

                        {/* 채팅 컴포넌트 들어갈 곳 */}
                        <Grid md={2} sm={12} xs={12} className="chatting-div">
                            <Item
                                style={{
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                }}
                            >
                                {' '}
                                {showChat ? <SidebarChat /> : null}
                            </Item>
                        </Grid>
                        <Footer />
                    </>
                </Grid>
            </div>
        </>
    );
}
