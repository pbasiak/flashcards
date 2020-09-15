import React, { useState } from 'react';
import './CardItem.scss';

function CardItem({ question, answer, category, size }) {
    const [show, setShow] = useState(false);

    const toggleShowAnswer = () => setShow(!show);
    const tileSize = size && size === 'large' ? 'bx--col-md-8' : 'bx--col-md-2';

    return (
        <div className={`card-item ${tileSize} ${show && 'card-item--active'}`} onClick={toggleShowAnswer}>
            <div>
                <div className="card-item__category">{question}</div>
                <h2 className="card-item__question">{question}</h2>
            </div>
            <div>
                <p className="card-item__answer">{answer}</p>
            </div>
        </div>
    );
}

export default CardItem;
