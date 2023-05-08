function ScoreBoard({ score, highScore }) {
    return (
        <div className="scoreboard">
            <p>Current score: {score}</p>
            <p>High score: {highScore}</p>
        </div>
    )
}

export default ScoreBoard;