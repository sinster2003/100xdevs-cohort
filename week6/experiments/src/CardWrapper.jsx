
const TextComponent = () => {
    return <div>Text</div>
}

const CardWrapper = ({children}) => {
  return (
    <div style={{border: "2px solid black"}}>
        {children}
    </div>
  )
}

const Main = () => {
    // return <CardWrapper innerComponent={<TextComponent/>}/>
    return <CardWrapper>
        <TextComponent/>
    </CardWrapper>
}

export default Main;