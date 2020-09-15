import React from 'react';
import flashCardsData from '../../api/mockFlashCard';
import decksData from '../../api/mockDecks';
import { useParams } from 'react-router-dom';
import FlashCards from '../../components/FlashCards/FlashCards';
import FlashCardItem from '../../components/FlashCards/FlashCardItem';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

function DeckDetails() {
    const { id } = useParams();
    const cardsFromDeck = flashCardsData.map(item => {
        if (item.deck.includes(String(id))) {
            return <FlashCardItem question={item.question} answer={item.answer} category={item.category} />
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
