function ScoreBoard({ score, highScore }) {
    return (
        <div className="score-board">
            <p>Current score:{score}</p>
            <p>High score: {highScore}</p>
        </div>
    )
}

export default ScoreBoard;