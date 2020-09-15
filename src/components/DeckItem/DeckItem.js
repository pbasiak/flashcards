import React from 'react';
import { StarFilled32 } from '@carbon/icons-react';
import './DeckItem.scss';
import { Button } from 'carbon-components-react';

function DeckItem({ cardsCount, name, likesCount, commentsCount, handleShowDeck, handlePlayDeck }) {
    return (
        <div className={`deck-item bx--grid`}>
            <div className="bx--row">
                <div className="bx--col-md-4 deck-item__cards-count">{cardsCount} cards</div>
                <div className="bx--col-md-4 deck-item__star">
                    <StarFilled32 />
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col-md-8 deck-item__name">{name}</div>
            </div>
            <div className="bx--row">
                <div className="bx--col-md-8">
                    <div className="bx--row">
                        <div className="bx--col-md-4 deck-item__social">
                            <span className="deck-item__likes">{likesCount} likes</span>
                            <span className="deck-item__comments">{commentsCount} comments</span>
                        </div>
                        <div className="bx--col-md-4 deck-item__action">
                            <Button kind="ghost" onClick={handleShowDeck}>Show deck</Button>
                            <Button kind="ghost" onClick={handlePlayDeck}>Play</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeckItem;
