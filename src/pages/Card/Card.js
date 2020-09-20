import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import './Card.scss';
import { Button } from 'carbon-components-react';
import { useFlashCards } from '../../hooks/useFlashCards';
import FlashCardItem from '../../components/FlashCards/FlashCardItem';

function Card() {
    const flashCards = useFlashCards();
    const { title, content, tags } = flashCards.find(item => item.id === 2);

    return (
        <PageTemplate className="bx--grid card">
            <FlashCardItem title={title} content={content} tags={tags} size="large" />
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col-md-3 card__btn-first">
                        <Button kind="danger">Nie wiem</Button>
                    </div>
                    <div className="bx--col-md-2 card__btn-middle">
                        <Button kind="secondary">Pomiń</Button>
                    </div>
                    <div className="bx--col-md-3 card__btn-last">
                        <Button>Trafiony!</Button>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}

export default Card;
