
function GameOVer({ score, handleNewGame }) {
    return (
        <>
            <h2>Game Over!</h2>
            <p>your score is {score}</p>
            <button className="new-game" onClick={() => handleNewGame()}>New Game</button>
        </>
    )
}

export default GameOVer;