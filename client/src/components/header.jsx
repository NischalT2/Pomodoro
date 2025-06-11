import { Link, useNavigate } from 'react-router-dom'

function Header({setSettingsVisibility}) {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('settings');
        navigate('/login');
        window.location.reload();
    }

    return (
        <>
        <div className ="flex justify-center">
            <div className="bg-[#638b8c] shadow-lg rounded w-1/2 flex justify-between items-center p-5">
                <Link to="/">
                    <h1 className ="font-bold text-xl">Pomodoro</h1>
                </Link>
                <p className = "font-bold">Good luck! You got this!</p>
                <div>
                    <button className="mr-3 bg-[#8bc0c0] hover:bg-[#8bc0c0cc] cursor-pointer font-bold p-2 rounded" onClick={() => setSettingsVisibility(true)}>Settings</button>
                    {(!token) ? (<Link to="/signup">
                        <button className="bg-[#8bc0c0] hover:bg-[#8bc0c0cc] cursor-pointer font-bold p-2 rounded">Sign Up</button>
                    </Link>) : (<button onClick={logout} className="bg-[#8bc0c0] hover:bg-[#8bc0c0cc] cursor-pointer font-bold p-2 rounded">Log Out</button>)}
                </div>
                
            </div>
        </div>
        
        </>
    )
}

export default Header;