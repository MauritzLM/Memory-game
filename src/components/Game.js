import { useState } from "react";
import Card from './card';
import ScoreBoard from './scoreboard';
import { cards } from '../cardInfo';

export default function Game() {
    const [cardList, setCardList] = useState(cards);
    const [score, setScore] = useState(0);

    function handleClick(id) {
        // clicked card (gameover)
        if (hasCardBeenClicked(id)) {
            setScore(0);
            // reset state
            setCardList([...cards]);

            return;
        } else {
            // update score
            setScore(score + 1);
            // update card
            updateCard(id);
        }
        return
    }

    // Already clicked?
    function hasCardBeenClicked(id) {
        for (const card of cardList) {
            if (card.id === id && card.hasBeenClicked) {
                return true;
            }
        }
        return false;
    }

    // update card status
    function updateCard(id) {
        setCardList(cardList.map(card => {
            if (card.id === id) {
                return { ...card, hasBeenClicked: true }
            } else {
                return card;
            }
        })
        )
    }

    return (
        <>
            <ScoreBoard score={score} />
            <Card cardList={cardList} handleClick={handleClick} />
        </>
    );
}