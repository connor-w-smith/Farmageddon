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

    const generateSaleList = (i = 7) => {
        const sales = [];
        for(let j = 0; j < i; j++) {
            sales.push(generateRandomSale());
        }
        return sales;
    };

    const getInitialSales = () => {
        const save = localStorage.getItem("marketSales");
        return save ? JSON.parse(save) : generateSaleList();
    }

    const [saleInfo, setSaleInfo] = useState(getInitialSales());

    useEffect( () => {
        localStorage.setItem("marketSales", JSON.stringify(saleInfo));
    }, [saleInfo]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newSales = generateSaleList();
            setSaleInfo(newSales);
        }, 18000000);

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
                {/* <p className="text-info-emphasis">{saleInfo}</p> */}
                <ul className="text-info-emphasis">
                    {saleInfo.map((sale, index) => (
                        <li key={index} className="buyList">{sale}</li>
                    ))}
                </ul>
            </div>
            <div className="sell">
                <h3 className="sellHeader">Sell</h3>
            </div>
        </div>
    )
}

export default Market