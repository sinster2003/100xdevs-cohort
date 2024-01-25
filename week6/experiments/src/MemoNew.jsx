import React, { useEffect, useMemo, useState } from 'react'

let b = 1;
const MemoNew = () => {
    const [state, setState] = useState(0);
    
    const a = useMemo(() => {
        console.log(b);
        b++;
        console.log(b);
        console.log("--------------------");
        console.log(b)
        return b;
    }, [state]);

    console.log("a", a);

    return(
        <div>
            {a}
            <button onClick={() => setState(state+1)}>click</button>
        </div>
    );
}

export default MemoNew