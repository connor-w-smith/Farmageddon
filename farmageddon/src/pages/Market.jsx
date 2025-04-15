import "../css/Market.css"

function Market() {
    return (
        <div className="market">
            <div className="marketTop">
                <h2 className="marketHeading">Welcome To ---'s Market!</h2>
                <em><strong><span className="marketSpan">---'s XP: </span></strong></em>
            </div>
            <div className="buy">
                <h3 className="buyHeader">Buy</h3>
            </div>
            <div className="sell">
                <h3 className="sellHeader">Sell</h3>
            </div>
        </div>
    )
}

export default Market