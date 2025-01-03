import {useEffect, useState} from "react";
import {clearInterval} from "timers";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const setTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("setTimeoutExample")

    useEffect(() => {

        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000);

    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const setIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("setIntervalExample")

    useEffect(() => {

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 3000);

    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}

// export const setNewDateExample = () => {
//
//     const [time, setTime] = useState(new Date())
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(new Date())
//         }, 1000);
//         return () => clearInterval(interval)
//     }, [])
//
//     const hours = time.getHours();
//     const minutes = time.getMinutes();
//     const seconds = time.getSeconds()
//
//     const timeString = `${hours}:${minutes}:${seconds}`
//
// //     return (
// //         <div>
// //             {/* Display the time string */}
// //             <h1>{timeString}</h1>
// //         </div>
// //     );
// // }
//
//
//     return <>
//         Hello, {timeString}
//     </>
// }