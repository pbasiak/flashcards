import React from 'react';
import { Content } from 'carbon-components-react';
import PageHeader from '../PageHeader/PageHeader';

function PageWithSidebarTemplate({ children, sidebar }) {

    return (
        <div>
            <PageHeader />
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
