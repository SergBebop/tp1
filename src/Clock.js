import React, {useState,useEffect} from 'react'

const Clock = (props) => {
    const {name} = props
    const [date, setDate] = useState (new Date())

    const nestedComponent = () => {
        return(
            <h1>Component anidado, estado</h1>
    )
    }


    useEffect(()=>{
        const timerID = setInterval(
            () => reloj(),
            1000
            );

        return ()=>{ 
            clearInterval(timerID);
        }    
    },[])

    const reloj = () => {
        setDate(new Date());
    }

    return (
        /*<div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
        */
        <div>
            {nestedComponent()}
        </div>
        );
        

}

export default Clock