import React, { useContext } from 'react'
import Button from './Button'
import { CountContext } from '../context';

const Count = () => {

    const {count} = useContext(CountContext);

  return (
    <div>
    <div>{count}</div>
    <Button text={"+"}/>
    <Button text={"-"}/>
    </div>
  )
}

export default Count