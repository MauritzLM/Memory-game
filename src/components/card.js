// render a card for each card in object
function Card({ cardList, handleClick }) {
    // display cards in random order*

    const cards = cardList.map(card => {
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