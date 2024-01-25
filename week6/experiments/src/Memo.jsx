import { memo, useState } from "react";

const Memo = () => {
    const [title, setTitle] = useState("My name is HarKirat");

  return (
    <div>
      <button onClick={() => setTitle(`My name is ${Math.random()}`)}>Click Me</button>
      <br/>
      <HeaderMemo title={title}/>
      <br/>
      <br/>
      <br/>
      <HeaderMemo title="Sindhur"/>
    </div>
  )
}

// memo
const HeaderMemo = memo(({title}) => {
  return <div>
    {title}
  </div>
})

export default Memo;