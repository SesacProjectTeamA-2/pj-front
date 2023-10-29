import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../../../styles/scss/layout/layout.scss';
import '../../../styles/scss/layout/sidebarChat.scss';

import SidebarChat from '../SidebarChat';

export default function BasicLayout({ children, showChat }: any) {
    console.log('showChat Basic', showChat);
    return (
        <div className="layout-container">
            <Container fluid>
                <Row>
                    {showChat ? (
                        <>
                            {/* 그룹 메뉴 바 컴포넌트 들어갈 곳 */}
                            <Col
                                md={2}
                                sm={2}
                                xs={2}
                                className="empty-div"
                            ></Col>
                            {/* 컨텐츠 컴포넌트 들어갈 곳 */}
                            <Col
                                md={8}
                                sm={10}
                                xs={10}
                                className="section-wrapper"
                            >
                                {children}
                            </Col>
                            {/* 채팅 컴포넌트 들어갈 곳 */}
                            <Col
                                md={2}
                                sm={12}
                                xs={12}
                                className="chatting-div"
                            >
                                <SidebarChat />
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col
                                md={2}
                                sm={2}
                                xs={2}
                                className="empty-div"
                            ></Col>
                            <Col
                                md={8}
                                sm={10}
                                xs={10}
                                className="section-wrapper"
                            >
                                {children}
                            </Col>
                            <Col
                                md={2}
                                sm={12}
                                xs={12}
                                className="chatting-div"
                            ></Col>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
}
