import React from 'react';
import DecksList from '../../components/DecksList/DecksList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

function Card() {
    return (
        <PageWithSidebarTemplate>
            <DecksList />
        </PageWithSidebarTemplate>
    );
}

export default Card;
