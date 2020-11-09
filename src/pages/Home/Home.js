import React from 'react';
import DecksList from '../../components/DecksList/DecksList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import Sidebar from '../../components/Sidebar/Sidebar';

function Card() {
    return (
        <PageWithSidebarTemplate sidebar={<Sidebar />}>
            <DecksList />
        </PageWithSidebarTemplate>
    );
}

export default Card;
