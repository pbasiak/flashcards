import React from 'react';
import { Header, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderMenu, Content } from 'carbon-components-react';
import { Link } from 'react-router-dom';

function PageWithSidebarTemplate({ children, className }) {

    return (
        <div>
            <Header aria-label="Fiszki App">
                <HeaderName to="/" prefix="Fiszki" element={Link}>
                    App
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                    <HeaderMenuItem isCurrentPage to="/decks" element={Link}>
                        Decks
                    </HeaderMenuItem>
                    <HeaderMenuItem to="/card" element={Link}>Card</HeaderMenuItem>
                    <HeaderMenuItem to="/" element={Link}>Home</HeaderMenuItem>
                </HeaderNavigation>
            </Header>
            <Content>
                <div className={className || ''}>
                    {children}
                </div>
            </Content>
        </div>
    );
}

export default PageWithSidebarTemplate;
