import React from 'react';
import Chat from './Chat';

import '../../styles/scss/layout/layout.scss';

// groupbar section chat

export default function Layout({ children }: any) {
    return (
        <div className="layout-container">
            <Chat />
            {children}
            <Chat />
        </div>
    );
}
