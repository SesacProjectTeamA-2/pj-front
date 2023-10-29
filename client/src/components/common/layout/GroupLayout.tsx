import React from 'react';
import SidebarChat from '../SidebarChat';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBarGroup from '../SidebarGroup';

// groupbar section chat
export default function GroupLayout({ children, showChat }: any) {
    // console.log('showChat', showChat);
    return (
        // 전체 레이아웃 컨테이너
        <div className="layout-container">
            <Container fluid>
                <Row>
                    {showChat ? (
                        <>
                            {/* 그룹 메뉴 바 컴포넌트 들어갈 곳 */}
                            <Col md={2} sm={2} xs={2} className="groupMenu-div">
                                <SideBarGroup />
                            </Col>
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
                            <Col md={2} sm={2} xs={2} className="groupMenu-div">
                                <SideBarGroup />
                            </Col>
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
