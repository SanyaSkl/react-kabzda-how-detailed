import React, {useState} from "react";  //3213211

export default {
    title: 'useState demo'
}

function generateData() {
    // difficult counting
    console.log("generateData")
    return 3213211
}

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(generateData)  // [3213211, function(newValue){}]

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}