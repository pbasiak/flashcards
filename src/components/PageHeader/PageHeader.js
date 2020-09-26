import React from 'react';
import { Header, HeaderName, HeaderNavigation, HeaderMenuItem } from 'carbon-components-react';
import { Link } from 'react-router-dom';

function PageHeader() {

    return (
        <Header aria-label="Fiszki App">
            <HeaderName to="/" prefix="Fiszki" element={Link}>
                App
                </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem isCurrentPage to="/decks" element={Link}>
                    Decks
                    </HeaderMenuItem>
                <HeaderMenuItem to="/card" element={Link}>Card</HeaderMenuItem>
                <HeaderMenuItem to="/tags" element={Link}>Tags</HeaderMenuItem>
                <HeaderMenuItem to="/" element={Link}>Home</HeaderMenuItem>
            </HeaderNavigation>
        </Header>
    );
}

export default PageHeader;
