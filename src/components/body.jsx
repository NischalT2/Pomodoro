import { useState } from 'react';

function Body() {
    const [pageState, setPageState] = useState("pomodoro");

    // Make the timers be connected to the inputs for them in the settings
    // Add an onclick function for the start button

    return (
        <>
        <div className="mt-10 flex justify-center">
            <div className="bg-[#698d8d] rounded w-1/3 p-5 flex flex-col items-center">
                <div className = "flex justify-between gap-8 font-bold mb-4">
                    <button className={`rounded p-1 cursor-pointer ${pageState === "pomodoro" && "active: bg-[#4f6a6a]"}`} onClick={() => setPageState("pomodoro")}> Pomodoro </button>
                    <button className={`rounded p-1 cursor-pointer ${pageState === "short" && "active: bg-[#4f6a6a]"}`} onClick={() => setPageState("short")}> Short Break </button>
                    <button className={`rounded p-1 cursor-pointer ${pageState === "long" && "active: bg-[#4f6a6a]"}`} onClick={() => setPageState("long")}> Long Break </button>
                </div>

                <div className="mb-8">
                    {pageState == "pomodoro" && (<h1 className="text-9xl font-bold">60:00</h1>)}
                    {pageState == "short" && (<h1 className="text-9xl font-bold">05:00</h1>)}
                    {pageState == "long" && (<h1 className="text-9xl font-bold">15:00</h1>)}
                </div>
                <button className="cursor-pointer border bg-white py-3 px-15 rounded text-[#698d8d] text-3xl font-bold">
                    Start
                </button>
            </div>
        </div>
        
        <h1 className="text-center mt-10 font-bold text-xl"> Time to Focus!</h1>
        </>
    )
}

export default Body;