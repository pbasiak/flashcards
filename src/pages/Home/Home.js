import { Typography } from '@material-ui/core';
import React from 'react';
import DecksList from '../../components/DecksList/DecksList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import Sidebar from '../../components/Sidebar/Sidebar';

function Card() {
    return (
        <PageWithSidebarTemplate sidebar={<Sidebar />}>
            <Typography variant="h2">Welcome do devzone</Typography>
            <DecksList />
        </PageWithSidebarTemplate>
    );
}

export default Card;
