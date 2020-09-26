import React from 'react';
import { Button } from 'carbon-components-react';
import { StarFilled32 } from '@carbon/icons-react';
import './FlashCardItem.scss';

function FlashCardItem({ title, content, tags, likesCount, commentsCount, handlePlayDeck }) {

    return (
        <div className={`deck-item bx--grid`}>
            <div className="bx--row">
                <div className="bx--col-md-8 deck-item__star">
                    <StarFilled32 />
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col-md-8 deck-item__name">{title}</div>
                <div className="bx--col-md-8 deck-item__content">{content}</div>
            </div>
            <div className="bx--row">
                <div className="bx--col-md-8">
                    <div className="bx--row">
                        <div className="bx--col-md-4 deck-item__social">
                            <span className="deck-item__likes">{likesCount} likes</span>
                            <span className="deck-item__comments">{commentsCount} comments</span>
                        </div>
                        <div className="bx--col-md-4 deck-item__action">
                            <Button kind="ghost" onClick={handlePlayDeck}>Read more</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashCardItem;
