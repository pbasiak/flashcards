import React, { useContext } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import flashCards from '../../api/mockFlashCard';
import './Card.scss';
import { Button } from 'carbon-components-react';
import CardItem from '../../components/CardItem/CardItem';
import { store } from '../../store';

function Card() {
    const state = useContext(store);
    console.log(state);
    const currentCard = flashCards.find(item => item.id === 2);
    const { question, answer, category } = currentCard;

    return (
        <PageTemplate className="bx--grid card">
            <CardItem question={question} answer={answer} category={category} size="large" />
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
