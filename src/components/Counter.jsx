import React, { useState , useEffect} from 'react';
import axios from "axios";

export default function Counter(){


    const [val, setVal] = useState(0);

    const IncrementCounter = () => {
        setVal(val+1);
      };

    const DecrementCounter = (event) => {
        setVal(val-1);
      };


    return(<div>
        <h1>Counter App</h1>
        <p>Count: {val}</p>
        <button onClick={IncrementCounter}>Increment</button>
        <button onClick={DecrementCounter}>Decrement</button>
    </div>
    )
}