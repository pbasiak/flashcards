import React from 'react';
import './_block.scss';

function Block({children}) {
    
    return (
        <div className="block">
            {children}
        </div>
    );
}

export default Block;
