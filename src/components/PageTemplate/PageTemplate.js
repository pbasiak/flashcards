import React from 'react';
import { Header, HeaderName, Content } from 'carbon-components-react';

function PageTemplate({children}) {

    return(
        <div>
            <Header aria-label="Fiszki App">
                <HeaderName href="#" prefix="Fiszki">
                    App
                </HeaderName>
            </Header>
            <Content>
                {children}
            </Content>
        </div>
    );
}

export default PageTemplate;
