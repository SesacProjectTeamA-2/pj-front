import React from 'react';
import Chat from './Chat';

import '../../styles/scss/layout/layout.scss';
import '../../styles/scss/layout/sidebarChat.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// groupbar section chat

export default function Layout({ children }: any) {
    return (
        <div className="layout-container">
            <Container fluid>
                <Row>
                    <Col md={3} sm={2} className="groupMenu-div">
                        그룹 메뉴
                    </Col>
                    <Col md={6} sm={4} className="section-div">
                        {children}
                    </Col>
                    <Col md={3} sm={6} className="chatting-div">
                        <Chat />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
