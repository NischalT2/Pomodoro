import { Link } from 'react-router-dom'

function Header({setSettingsVisibility}) {

    return (
        <>
        <div className ="flex justify-center">
            <div className="bg-[#638b8c] shadow-lg rounded w-1/2 flex justify-between items-center p-5">
                <Link to="/">
                    <h1 className ="font-bold text-xl">Pomodoro</h1>
                </Link>
                <p className = "font-bold">Good luck! You got this!</p>
                <button className="bg-[#8bc0c0] hover:bg-[#8bc0c0cc] cursor-pointer font-bold p-2 rounded" onClick={() => setSettingsVisibility(true)}>Settings</button>
            </div>
        </div>
        
        </>
    )
}

export default Header;