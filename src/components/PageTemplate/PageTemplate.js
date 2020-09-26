import React from 'react';
import { Content } from 'carbon-components-react';
import PageHeader from '../PageHeader/PageHeader';

function PageWithSidebarTemplate({ children, className }) {

    return (
        <div>
            <PageHeader />
            <Content>
                <div className={className || ''}>
                    {children}
                </div>
            </Content>
        </div>
    );
}

export default PageWithSidebarTemplate;
