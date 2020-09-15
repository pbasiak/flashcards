import React from 'react';
import { Header, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderMenu, Content, SideNav } from 'carbon-components-react';
import { Link } from 'react-router-dom';

function PageWithSidebarTemplate({ children, sidebar }) {

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
                <div className="bx--grid">
                    <div className="bx--row">
                        <div className="bx--col-md-2">
                            {sidebar}
                        </div>
                        <div className={`bx--col-md-6`}>
                            {children}
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
}

export default PageWithSidebarTemplate;
