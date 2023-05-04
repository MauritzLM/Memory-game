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
            resetScore();
            // reset state
            setCardList([...cards]);
            return;
        } else {
            updateScore();
            updateCard(id);
        }

    }

    // Already clicked?
    function hasCardBeenClicked(id) {
        cardList.forEach(item => {
            if (id === item.id && item.hasBeenClicked) {

                return true;
            }
        })


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

    // update Score
    function updateScore() {
        setScore(score + 1)
    }

    // reset score
    function resetScore() {
        setScore(0);
    }


    return (
        <>
            <ScoreBoard score={score} />
            <Card cardList={cardList} handleClick={handleClick} />
        </>
    );
}