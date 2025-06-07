import Header from '../components/header';
import Settings from '../components/settings';
import Body from '../components/body';
import Task from '../components/task';
import { useState } from 'react';

const API = 'htpps://localhost:5000';

function Home(){
    const [isSettingsVisible, setSettingsVisibility] = useState(false);
    const [pomTime, setPomTime] = useState(25);
    const [shortTime, setShortTime] = useState(5);
    const [longTime, setLongTime] = useState(15);
    const [longInterval, setLongInterval] = useState(2);

    return (
        <>
            <Header 
            setSettingsVisibility={setSettingsVisibility}/>

            {isSettingsVisible && (<Settings 
            setSettingsVisibility={setSettingsVisibility} 
            pomTime={pomTime} 
            setPomTime={setPomTime}
            shortTime = {shortTime}
            setShortTime = {setShortTime}
            longTime = {longTime}
            setLongTime = {setLongTime}
            longInterval = {longInterval}
            setLongInterval = {setLongInterval} />)}

            <Body 
            pomTime={pomTime} 
            shortTime={shortTime} 
            longTime={longTime}
            longInterval = {longInterval} />

            <Task />
        </>
    )
}

export default Home;