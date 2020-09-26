import React from 'react';
import { useParams } from 'react-router-dom';
import FlashCards from '../../components/FlashCards/FlashCards';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

function DeckDetails() {
    const { id } = useParams();

    return (
        <PageTemplate>
            <div className="bx--grid">
                <div className="bx--row">
                    <FlashCards deckId={id} />
                </div>
            </div>
        </PageTemplate>
    );
}

export default DeckDetails;
