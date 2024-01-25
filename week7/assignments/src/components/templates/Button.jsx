import React from 'react'
import { useSetRecoilState } from 'recoil'
import colorAtom from '../../store/colorAtom'

const Button = ({color}) => {

    const setBackgroundColor = useSetRecoilState(colorAtom);

  return (
    <button style={{
        width: "5rem",
        borderRadius: "10%",
        height: "2rem",
        color: color !== "black" ? "black" : "white",
        backgroundColor: color !== "default" ? color : "lightblue",
        border: "none",
        cursor: "pointer",
    }} 
    onClick={() => setBackgroundColor(color !== "default" ? color : "white")}
    >
        {color}
    </button>
  )
}

export default Button