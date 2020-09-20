import React, { useState } from 'react';
import { Tag } from 'carbon-components-react';
import './FlashCardItem.scss';

function FlashCardItem({ title, content, tags, size }) {
    const [show, setShow] = useState(false);

    const toggleShowAnswer = () => setShow(!show);
    const tileSize = size && size === 'large' ? 'bx--col-md-8' : 'bx--col-md-2';

    const tagsList = tags.map((item) => <Tag className="flash-card-item__category">{item.Name}</Tag>);

    return (
        <div className={`flash-card-item ${tileSize} ${show && 'flash-card-item--active'}`} onClick={toggleShowAnswer}>
            <div>
                {tagsList}
                <h2 className="flash-card-item__question">{title}</h2>
            </div>
            <div>
                <p className="flash-card-item__answer">{content}</p>
            </div>
        </div>
    );
}

export default FlashCardItem;
