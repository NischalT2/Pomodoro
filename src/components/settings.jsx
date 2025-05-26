
function Settings({setSettingsVisibility}) {
    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-start pt-20">
            <div className="text-gray-500 bg-white p-6 w-96 rounded">
                <div className="flex justify-between items-center w-full">
                    <div className="flex-1 text-center"> 
                        <h2 className="font-bold"> Settings </h2>
                    </div>
                    <button className="border border-gray rounded pl-1 pr-1 hover:bg-gray-300 cursor-pointer " onClick={() => setSettingsVisibility(false)}>X</button>
                </div>
                <p className="font-bold pb-2">Timer</p>
                <p className="pb-2">Time (minutes)</p>
                <div className="flex justify-between">
                    <div>
                        <p>Pomodoro</p>
                        <input type="number" min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" ></input>
                    </div>
                    <div>
                        <p>Short Break</p>
                        <input type="number" min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" ></input>
                    </div>
                    <div>
                        <p>Long Break</p>
                        <input type="number" min="0" className="p-1 w-1/2 border-black-100 bg-gray-200 rounded" ></input>
                    </div>
                </div>
                

            </div>
        </div>

        </>
    )
}

export default Settings;