import {useRef} from 'react';

const API = 'http://localhost:5000';

function Settings({setSettingsVisibility, pomTime, setPomTime, shortTime, setShortTime, longTime, setLongTime, longInterval, setLongInterval}) {
    
    // create a function that handles the changes that were made to the vlaues in the settings and 
    // make sure that the changes are sent to the backend to update it as well.

    // possibly use useRef to hold the values for the times and then if the user clicks the
    // update button, there is a call to the backend API as well the set functions for the states.
    // If the user does not click the update button, there are no changes to any of the states or
    // the backend.

    const pomRef = useRef(pomTime);
    const shortRef = useRef(shortTime);
    const longRef = useRef(longTime);
    const LongIntervalRef = useRef(longInterval);

    const updateSettings = async(newSettings) => {
        const token = localStorage.getItem('token');

        if (token) {
            await fetch(`${API}/settings`, {
            method: 'PUT', 
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`,
            }, 
            body: JSON.stringify({settings: newSettings})
        });
        localStorage.setItem('settings', JSON.stringify(newSettings));
        }
    }
    
    const handleSaveChanges = async() => {
        setPomTime(pomRef.current);
        setShortTime(shortRef.current);
        setLongTime(longRef.current);
        setLongInterval(LongIntervalRef.current);


        const newSettings = {
            pomTime: pomRef.current,
            shortTime: shortRef.current,
            longTime: longRef.current,
            longInterval: LongIntervalRef.current
        };
         await updateSettings(newSettings);
        
        alert("Changes Saved!");
        setSettingsVisibility(false);
    }
    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-start pt-20">
            <div className="text-gray-500 bg-white p-6 w-96 rounded">
                <div className="flex justify-between items-center w-full">
                    <div className="flex-1 text-center"> 
                        <h2 className="font-bold"> Settings </h2>
                    </div>
                    <button className="border border-gray  rounded pl-1 pr-1 hover:bg-gray-300 cursor-pointer " onClick={() => setSettingsVisibility(false)}>X</button>
                </div>
                <p className="font-bold pb-2">Timer</p>
                <p className="pb-2">Time (minutes)</p>
                <div className="flex justify-between">
                    <div>
                        <p>Pomodoro</p>
                        <input type="number" defaultValue={pomTime} min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" onChange={(e) => {
                            let val = Number(e.target.value);
                            val = val > 999 ? 999 : val;
                            pomRef.current = val}}/>
                    </div>
                    <div>
                        <p>Short Break</p>
                        <input type="number" defaultValue={shortTime} min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" onChange={(e) => {
                            let val = Number(e.target.value);
                            val = val > 999 ? 999 : val;
                            shortRef.current = val}}/>
                    </div>
                    <div>
                        <p>Long Break</p>
                        <input type="number" defaultValue={longTime} min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" onChange={(e) => {
                            let val = Number(e.target.value);
                            val = val > 999 ? 999 : val;
                            longRef.current = val}}/>
                    </div>
                </div>
                
                <div className="flex justify-between items-center w-full pt-5">
                    <p >Long Break Interval</p>
                    <input type = "number" defaultValue={longInterval} min="2" className="w-16 border border-black-100 bg-gray-200 rounded text-center" onChange={(e) => {
                        let val = Number(e.target.value);
                        val = val > 999 ? 999 : val;
                        LongIntervalRef.current = val}}/>
                </div> 

                <div className="flex justify-center mt-5">
                    <button 
                    onClick={handleSaveChanges}
                    className="bg-[#698d8d] cursor-pointer text-white rounded p-2 font-bold"> Save Changes</button>
                </div>
                
            </div>
        </div>

        </>
    )
}

export default Settings;

// import {useRef} from 'react';

// const API = 'http://localhost:5000';

// function Settings({setSettingsVisibility, pomTime, setPomTime, shortTime, setShortTime, longTime, setLongTime, longInterval, setLongInterval}) {
    
//     const pomRef = useRef(pomTime);
//     const shortRef = useRef(shortTime);
//     const longRef = useRef(longTime);
//     const LongIntervalRef = useRef(longInterval);

//     const updateSettings = async(newSettings) => {
//         const token = localStorage.getItem('token');
        
//         console.log('Token:', token); // Debug log
//         console.log('Settings to update:', newSettings); // Debug log

//         if (token) {
//             try {
//                 const response = await fetch(`${API}/settings`, {
//                     method: 'PUT', 
//                     headers: {
//                         'Content-Type' : 'application/json',
//                         'Authorization': `Bearer ${token}`,
//                     }, 
//                     body: JSON.stringify({settings: newSettings})
//                 });
                
//                 console.log('Response status:', response.status); // Debug log
                
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
                
//                 console.log('Settings updated successfully in database');
//             } catch (error) {
//                 console.error('Error updating settings:', error);
//                 alert('Failed to save settings to server');
//                 return; // Don't save to localStorage if server update failed
//             }
//         } else {
//             console.log('No token found, saving only to localStorage');
//         }
        
//         localStorage.setItem('settings', JSON.stringify(newSettings));
//     }
    
//     const handleSaveChanges = async () => {
//         // Get the current values from refs
//         const newSettings = {
//             pomTime: pomRef.current,
//             shortTime: shortRef.current,
//             longTime: longRef.current,
//             longInterval: LongIntervalRef.current
//         };
        
//         console.log('Saving settings:', newSettings); // Debug log
        
//         // Update state
//         setPomTime(pomRef.current);
//         setShortTime(shortRef.current);
//         setLongTime(longRef.current);
//         setLongInterval(LongIntervalRef.current);

//         // Update backend and localStorage
//         await updateSettings(newSettings);
        
//         alert("Changes Saved!");
//         setSettingsVisibility(false);
//     }

//     return (
//         <>
//         <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-start pt-20">
//             <div className="text-gray-500 bg-white p-6 w-96 rounded">
//                 <div className="flex justify-between items-center w-full">
//                     <div className="flex-1 text-center"> 
//                         <h2 className="font-bold"> Settings </h2>
//                     </div>
//                     <button className="border border-gray rounded pl-1 pr-1 hover:bg-gray-300 cursor-pointer" onClick={() => setSettingsVisibility(false)}>X</button>
//                 </div>
//                 <p className="font-bold pb-2">Timer</p>
//                 <p className="pb-2">Time (minutes)</p>
//                 <div className="flex justify-between">
//                     <div>
//                         <p>Pomodoro</p>
//                         <input type="number" defaultValue={pomTime} min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" onChange={(e) => {
//                             let val = Number(e.target.value);
//                             val = val > 999 ? 999 : val;
//                             pomRef.current = val;
//                             console.log('Pomodoro time updated to:', val); // Debug log
//                         }}/>
//                     </div>
//                     <div>
//                         <p>Short Break</p>
//                         <input type="number" defaultValue={shortTime} min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" onChange={(e) => {
//                             let val = Number(e.target.value);
//                             val = val > 999 ? 999 : val;
//                             shortRef.current = val;
//                             console.log('Short break time updated to:', val); // Debug log
//                         }}/>
//                     </div>
//                     <div>
//                         <p>Long Break</p>
//                         <input type="number" defaultValue={longTime} min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" onChange={(e) => {
//                             let val = Number(e.target.value);
//                             val = val > 999 ? 999 : val;
//                             longRef.current = val;
//                             console.log('Long break time updated to:', val); // Debug log
//                         }}/>
//                     </div>
//                 </div>
                
//                 <div className="flex justify-between items-center w-full pt-5">
//                     <p>Long Break Interval</p>
//                     <input type="number" defaultValue={longInterval} min="2" className="w-16 border border-black-100 bg-gray-200 rounded text-center" onChange={(e) => {
//                         let val = Number(e.target.value);
//                         val = val > 999 ? 999 : val;
//                         LongIntervalRef.current = val;
//                         console.log('Long interval updated to:', val); // Debug log
//                     }}/>
//                 </div> 

//                 <div className="flex justify-center mt-5">
//                     <button 
//                     onClick={handleSaveChanges}
//                     className="bg-[#698d8d] cursor-pointer text-white rounded p-2 font-bold"> Save Changes</button>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Settings;