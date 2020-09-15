import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import FlashCards from '../../components/FlashCards/FlashCards';
import DecksList from '../../components/DecksList/DecksList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

const HomeSidebar = () => {

    return (
        <div>
            Profile
            <p>asd</p>
        </div>
    );
}

function Card() {
    return (
        <PageWithSidebarTemplate sidebar={<HomeSidebar />}>
            <DecksList />
        </PageWithSidebarTemplate>
    );
}

export default Card;
