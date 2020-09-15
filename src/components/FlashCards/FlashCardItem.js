import React, { useState } from 'react';
import { Tag } from 'carbon-components-react';
import './FlashCardItem.scss';

function FlashCardItem({ question, answer, category, size }) {
    const [show, setShow] = useState(false);

    const toggleShowAnswer = () => setShow(!show);
    const tileSize = size && size === 'large' ? 'bx--col-md-8' : 'bx--col-md-2';

    return (
        <div className={`flash-card-item ${tileSize} ${show && 'flash-card-item--active'}`} onClick={toggleShowAnswer}>
            <div>
                <Tag className="flash-card-item__category">{category}</Tag>
                <h2 className="flash-card-item__question">{question}</h2>
            </div>
            <div>
                <p className="flash-card-item__answer">{answer}</p>
            </div>
        </div>
    );
}

export default FlashCardItem;
