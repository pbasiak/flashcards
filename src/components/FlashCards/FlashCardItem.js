import React, { useState } from 'react';
import {ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, Tag } from 'carbon-components-react';
import './FlashCardItem.scss';

function FlashCardItem({question, answer, category}) {
    const [show, setShow] = useState(false);

    const toggleShowAnswer = () => setShow(!show);

    return (
        <ExpandableTile className={`flash-card-item bx--col-md-2 ${show && 'flash-card-item--active'}`} onClick={toggleShowAnswer}>
            <TileAboveTheFoldContent>
                <Tag className="flash-card-item__category">{category}</Tag>
                <h2 className="flash-card-item__question">{question}</h2>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
                <p className="flash-card-item__answer">{answer}</p>
            </TileBelowTheFoldContent>
        </ExpandableTile>
    );
}

export default FlashCardItem;
