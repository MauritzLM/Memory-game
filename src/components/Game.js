import { useState } from "react";
// import Card from './card';
// import ScoreBoard from './scoreboard';
import { cards } from '../cardInfo';
import Main from "./main";

export default function Game() {
    const [cardList, setCardList] = useState(cards);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    function handleClick(id) {
        // clicked card (gameover)
        if (hasCardBeenClicked(id)) {
            // check for and set high score
            if (score > highScore) {
                setHighScore(score);
            }

            // reset state
            setCardList([...cards]);
            // setGameOver*
            setGameOver(true)
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

    // handle start new game click
    function handleNewGame() {
        setGameOver(false);
        setScore(0);
    }


    return (
        <>
            <Main score={score} cardList={cardList} handleClick={handleClick} handleNewGame={handleNewGame} gameOver={gameOver} highScore={highScore} />
        </>
    );
}