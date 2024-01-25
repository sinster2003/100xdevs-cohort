import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import inputAtom from '../../store/inputAtom';

const Input = ({id}) => {
    const [value, setValue] = useState("");
    const [inputFocus, setInputFocus] = useRecoilState(inputAtom);
    const inputElement = useRef(null);

    // on each render global state matches with id
    useEffect(() => {     
        if(id === inputFocus) {
            inputElement.current.focus();
        }
    }, [inputFocus]);

  return (
    <input value={value} ref={inputElement} style={{
        width: "2rem",
        height: "2rem",
        textAlign: "center"
    }}

    onChange={(e) => {
        if(e.target.value.length === 1) {
            setInputFocus(id + 1);
        }

        if(e.target.value.length <= 1) {
            setValue(e.target.value);
        }
    }}/>
  )
}

export default Input