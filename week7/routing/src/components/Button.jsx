import React, { memo, useContext } from 'react'
import { CountContext } from '../context';

const Button = ({text}) => {
    const {count, setCount} = useContext(CountContext);
  return (
    <button onClick={() => text === "+" ? setCount(count + 1) : setCount(count - 1)}>{text}</button>
  )
}

export default Button;
