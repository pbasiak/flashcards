import React from 'react';
import './_block.scss';

function Block({children, renderTitle}) {
    
    return (
        <div className="block">
            <h3 className="block__title">{renderTitle}</h3>
            <div>{children}</div>
        </div>
    );
}

export default Block;
