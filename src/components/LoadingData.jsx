
import React, { useState, useEffect } from "react";

function LoadingData(){

    const [users, setUsers] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

const getData = async ()=>{
    const promise = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await promise.json();
    setUsers(json);
    
}

useEffect(()=>{
    if(trigger){
        setTimeout(()=> {
            getData();
            setIsLoading(false);
        }, 3000);
        
    }

}, [trigger] );

const handleClick = ()=>{
    if(isVisible) {
        setIsVisible(false);
        setTrigger(false);
        setUsers(null);
    }else{
    setIsVisible(true);
    setTrigger(true);
    setIsLoading(true);
}
    }







return(
    <>
    <h1> Gestione Side-effect</h1>

    <button onClick={handleClick}>CLICCA QUI!</button>
    {isLoading && <p>Sto cercando i dati..</p>}

    <ul>
        {isVisible && users && users.map((user)=>{
            return <li>{user.name} - {user.email}</li>
        })}
    </ul>
    </>
)


}

export default LoadingData