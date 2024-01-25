import React, { useState } from 'react'

const Para = () => {

    const [number, setNumber] = useState("");
    const [para, setPara] = useState("");

    const handleGenerate = () => {
        const words = "Lorem ipsum dolor sit amet consectetur adipisicing elit officia eaque minima nulla adipisci suscipit accusantium error necessitatibus ea asperiores minus dignissimos alias laboriosam sunt doloremque possimus aut itaque praesentium et dolores! Eius possimus veritatis consequuntur sequi deleniti magni molestiae nobis Laboriosam labore at neque";

        const wordArray = words.split(" ");

        const newPara = [];

        if(number && typeof(parseInt(number)) === "number") {
            for(let i = 0; i < parseInt(number); i++) {
                const randomIndex = Math.floor(Math.random() * wordArray.length);
                console.log(randomIndex)
                newPara.push(wordArray[randomIndex]);
            }
        }

        console.log(newPara);

        setPara(newPara.join(" "));
    }

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem"
    }}>

        <h1>Para Generator</h1>

        <div style={{
            display: "flex",
            width: "100%",
            justifyContent: 'center',
            gap: "2rem"
        }}>

            <input 
            style={{
                height: "3rem",
                width: "60%",
                paddingLeft: "1rem"
            }} 
            type="text" 
            placeholder="Enter the number of words" value={number} 
            onChange={(e) => setNumber(e.target.value)}/>

            <button style={{
                borderRadius: "5rem",
                color: "white",
                backgroundColor: "black",
                height: "3rem",
                width: "6rem"
            }}
            onClick={handleGenerate}
            >Generator</button>

        </div>
        <p style={{
            margin: "0 3rem",
            textAlign: "justify"
        }}>{para}</p>
    </div>
  )
}

export default Para