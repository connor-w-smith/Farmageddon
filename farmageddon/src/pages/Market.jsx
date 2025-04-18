import "../css/Market.css"
import { useState, useEffect } from "react";

function Market() {

    const crops = ["Carrot", "Tomato", "Corn", "Wheat", "Cucumber", "Potato", "Green Pepper", "Red Pepper", "Japepeno", "Tobacco", "Soy Bean"];
    const animals = ["Sheep", "Cow", "Pig", "Goat", "Chicken", "Duck", "Horse", "Bull", "Donkey"];
    const sellers = ["Estatic Eric", "Crazy Connor", "Old Man Jenkins", "Sweet Susie", "Noisy Nancy", "Redneck Rick", "Dirty Dustin", "Cowboy Cole", "Tiny Tina", "Chubby Chuck"];

    const items = [...animals, ...crops];

    const getRandomItem = (arr) =>[Math.floor(Math.random() * arr.length)];
    const getRandomQuantity = (min = 1, max = 10) => Math.floor(Math.random() * (max - min +1)) + min;

    const generateRandomSale = () => {
        const item = getRandomItem(items);
        const quantity = getRandomQuantity();
        const seller = getRandomItem(sellers);
        return `${items[item]} x${quantity} sold by ${sellers[seller]}`;
    };

    const [saleInfo, setSaleInfo] = useState(generateRandomSale());

    useEffect(() => {
        const interval = setInterval(() => {
            setSaleInfo(generateRandomSale());
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="market">
            <div className="marketTop">
                <h2 className="marketHeading">Welcome To ---'s Market!</h2>
                <em><strong><span className="marketSpan">---'s XP: </span></strong></em>
            </div>
            <div className="buy">
                <h3 className="buyHeader">Buy</h3>
                <p className="text-info-emphasis">{saleInfo}</p>
            </div>
            <div className="sell">
                <h3 className="sellHeader">Sell</h3>
            </div>
        </div>
    )
}

export default Market