import Header from '../components/header';
import Settings from '../components/settings';
import Body from '../components/body';
import { useState } from 'react';

function Home(){
    const [isSettingsVisible, setSettingsVisibility] = useState(false);

    return (
        <>
            <Header setSettingsVisibility={setSettingsVisibility}/>
            {isSettingsVisible && (<Settings setSettingsVisibility={setSettingsVisibility}/>)}
            <Body/>
        </>
    )
}

export default Home;