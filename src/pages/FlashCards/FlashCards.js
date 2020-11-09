import React from 'react';
import FlashCardsList from '../../components/FlashCards/FlashCardsList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

function FlashCards() {
    return (
        <PageWithSidebarTemplate>
            <FlashCardsList />
        </PageWithSidebarTemplate>
    );
}

export default FlashCards;
