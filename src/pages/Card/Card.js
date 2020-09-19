import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import './Card.scss';
import { Button } from 'carbon-components-react';
import CardItem from '../../components/CardItem/CardItem';
import { useFlashCards } from '../../hooks/useFlashCards';

function Card() {
    const cardsData = useFlashCards();
    const { title, content } = cardsData.find(item => item.id === 2);

    return (
        <PageTemplate className="bx--grid card">
            <CardItem question={title} answer={content} category={title} size="large" />
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
