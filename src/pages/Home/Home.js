import { Typography } from '@material-ui/core';
import React from 'react';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

function Home() {
    console.log('DASHBOARD');
    return (
        <PageWithSidebarTemplate title={<>Welcome to <strong>LearnDev</strong></>}>
            <Typography variant="h6">Dashboard coming soon...</Typography>
        </PageWithSidebarTemplate>
    );
}

export default Home;
