import React from 'react';
import flashCardsData from '../../api/mockFlashCard';
import FlashCardItem from './FlashCardItem';

function FlashCards() {
    const flashCardsList = flashCardsData.map(item => {
        if (item.category === 'javascript') return;
        return <FlashCardItem question={item.question} answer={item.answer} category={item.category} />;
    });

    return (
        <div className="bx--grid">
            <div className="flash-cards bx--row">
                {flashCardsList}
            </div>
        </div>
    );
}

export default FlashCards;
