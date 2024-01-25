import { memo, useState } from "react";

const App = () => {

  return (
    <div>
      <HeadWithButton/>
      <Header title="Hello"/>
    </div>
  )
}

const HeadWithButton = () => {
  const [title, setTitle] = useState("My name is HarKirat");

  return(
    <div>
      <button onClick={() => setTitle(`My name is ${Math.random()}`)}>Click Me</button>
      <Header title={title}/>
    </div> 
  )
}

const Header = ({title}) => {
  return <div>
    {title}
  </div>
}

// memo
const HeaderMemo = memo(({title}) => {
  return <div>
    {title}
  </div>
})

export default App