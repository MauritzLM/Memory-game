import GameOVer from "./gameOver";
import ScoreBoard from "./scoreboard";
import Card from "./card";

// render main section depening on gameOver state
function Main({ score, handleNewGame, gameOver, highScore, cardList, handleClick }) {
    if (gameOver) {
        return (
            <main>
                <ScoreBoard score={score} highScore={highScore} />
                <GameOVer score={score} handleNewGame={handleNewGame} />
            </main>
        )
    } else {
        return (
            <main>
                <ScoreBoard score={score} highScore={highScore} />
                <Card cardList={cardList} handleClick={handleClick} />
            </main>
        )
    }
}

export default Main;