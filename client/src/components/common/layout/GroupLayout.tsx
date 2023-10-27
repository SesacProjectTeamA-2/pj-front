import React from 'react';
import SidebarChat from '../SidebarChat';

// [세화] 빼도 되는지 ?
// import '../../styles/scss/layout/layout.scss';
// import '../../styles/scss/layout/sidebarChat.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBarGroup from '../SidebarGroup';

// groupbar section chat

export default function GroupLayout({ children, showChat }: any) {
    // console.log('showChat', showChat);
    return (
        <div className="layout-container">
            <Container fluid>
                <Row>
                    {showChat ? (
                        <>
                            <Col md={2} sm={3} className="groupMenu-div">
                                <SideBarGroup />
                            </Col>
                            <Col md={8} sm={9} className="section-div">
                                {children}
                            </Col>
                            <Col md={2} sm={12} className="chatting-div">
                                <SidebarChat />
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col md={2} sm={3} className="groupMenu-div">
                                <SideBarGroup />
                            </Col>
                            <Col md={8} sm={9} className="section-div">
                                {children}
                            </Col>
                            <Col md={2} sm={12} className="chatting-div"></Col>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
}
