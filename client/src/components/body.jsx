import { useEffect, useState, useRef } from 'react';

function Body({pomTime, shortTime, longTime, longInterval}) {
    const [pageState, setPageState] = useState("pomodoro");
    const [timeLeft, setTimeLeft] = useState(pomTime * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalCounter, setIntervalCounter] = useState(1);
    const intervalCounterRef = useRef(1);
    const firstPomRef = useRef(true);

    useEffect(() => {
        let minutes = 0;
        switch (pageState) {
            case "pomodoro":
                minutes = pomTime;
                break;
            case "short":
                minutes = shortTime;
                break;
            case "long":
                minutes = longTime;
                break;
            default:
                minutes = 0;
        }
        setTimeLeft(minutes * 60);
        setIsRunning(false);

    }, [pageState, pomTime, shortTime, longTime]);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        
        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        if (timeLeft === 0 && isRunning) {
            handleTimerEnd();
        }
    }, [timeLeft, isRunning]);

    const handleTimerEnd = () => {
        setIsRunning(false);
        const currentPage = pageState;

        setTimeout(() => {
            if (currentPage === "pomodoro") {
                if (firstPomRef.current) {
                    setPageState("short");
                    firstPomRef.current = false;
                } else {
                    if (intervalCounterRef.current % longInterval === 0) {
                        setPageState("long");
                    } else {
                        setPageState("short");
                    }
                }
            } else {
                setPageState("pomodoro");
                intervalCounterRef.current++;
                setIntervalCounter(intervalCounterRef.current);
            }
        }, 100);
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

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
                    {pageState == "pomodoro" && (<h1 className="text-9xl font-bold">{formatTime(timeLeft)}</h1>)}
                    {pageState == "short" && (<h1 className="text-9xl font-bold">{formatTime(timeLeft)}</h1>)}
                    {pageState == "long" && (<h1 className="text-9xl font-bold">{formatTime(timeLeft)}</h1>)}
                </div>

                <div className="w-full flex justify-between items-center mt-4">
                    <div className="flex-1 flex justify-center">
                        {!isRunning && 
                        (<button className="cursor-pointer border bg-white py-3 px-15 rounded text-[#698d8d] text-3xl font-bold"
                            onClick={() => setIsRunning(true)}>
                            Start
                        </button>)}
                        {isRunning && 
                        (<button className="cursor-pointer border bg-white py-3 px-15 rounded text-[#698d8d] text-3xl font-bold"
                            onClick={() => setIsRunning(false)}>
                            Pause
                        </button>)}
                    </div>
                    {isRunning && 
                    (<button className="cursor-pointer border bg-white text-[#698d8d] p-1 rounded" 
                        onClick={() => setTimeLeft(0)}>
                        Skip
                    </button>)}
                </div>
            </div>
        </div>
        
        <h1 className="flex justify-center pt-5">{`#${intervalCounter}`}</h1>
        <h1 className="text-center mt-8 font-bold text-xl"> Time to Focus!</h1>
        </>
    )
}

export default Body;