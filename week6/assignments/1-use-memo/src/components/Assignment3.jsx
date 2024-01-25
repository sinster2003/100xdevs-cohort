import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    const [grocery, setGrocery] = useState("");
    const [price, setPrice] = useState(0);

    // Your code starts here
    const totalValue = useMemo(() => {
        const totalPrice = items.reduce((totalPrice, item) => {
            return totalPrice + item.value;
        }, 0);
        return totalPrice;
    }, [items]);
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
            <input type="text" value={grocery} onChange={(e) => {setGrocery(e.target.value)}} placeholder="item name" required/>
            <input type="number" value={price} onChange={(e) => {setPrice(e.target.value)}} placeholder="price" required/>
            <button onClick={() => {
                if(grocery && price) {
                    setItems(items.concat({ name: grocery, value: parseInt(price) }))
                }
            }}>Add Grocery</button>
        </div>
    );
};
