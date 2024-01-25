import React from 'react'
import Button from './templates/Button'

const Background = () => {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        position: "absolute",
        bottom: "1rem",
        left: "50%",
        translate: "-50%"
    }}>
        <Button color="red"/>
        <Button color="yellow"/>
        <Button color="black"/>
        <Button color="green"/>
        <Button color="purple"/>
        <Button color="blue"/>
        <Button color="default"/>
    </div>
  )
}

export default Background