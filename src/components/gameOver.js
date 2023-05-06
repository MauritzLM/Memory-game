
function GameOVer({ score, handleNewGame }) {
    return (
        <>
            <h2>Game Over your score is: {score}</h2>
            <button onClick={() => handleNewGame()}>Start new game</button>
        </>
    )
}

export default GameOVer;