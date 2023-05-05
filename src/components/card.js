// render a card for each card in array
function Card({ cardList, handleClick }) {
    // display cards in random order
    const cardListShuffled = shuffleArray(cardList);

    const cards = cardListShuffled.map(card => {
        return <div key={card.id} className="card-item" onClick={() => handleClick(card.id)}>
            <img src={card.src} alt={card.name} />
        </div>
    })

    return (
        <div className="card-container">
            {cards}
        </div>
    )
}

export default Card;

// algorithm to shuffle array (Durstenfeld)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}