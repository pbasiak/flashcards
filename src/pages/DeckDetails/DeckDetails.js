import React from 'react';
import { useParams } from 'react-router-dom';
import FlashCardItem from '../../components/FlashCards/FlashCardItem';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useFlashCards } from '../../hooks/useFlashCards';

function DeckDetails() {
    const { id } = useParams();
    const flashCards = useFlashCards();
    const cardsFromDeck = flashCards.map((item) => {
        
        if (item.decks.find(element => element.id.toString() === id.toString())) {
            return <FlashCardItem title={item.title} content={item.content} tags={item.tags} />
        }
    });

    return (
        <PageTemplate>
            <div className="bx--grid">
                <div className="bx--row">
                    {cardsFromDeck}
                </div>
            </div>
        </PageTemplate>
    );
}

export default DeckDetails;
