import React from 'react';
import { Header, HeaderName } from 'carbon-components-react';

function PageTemplate({children}) {

    return(
        <div>
            <Header aria-label="Fiszki App">
                <HeaderName href="#" prefix="Fiszki">
                    App
                </HeaderName>
            </Header>
            {children}
        </div>
    );
}

export default PageTemplate;
