import { Link } from 'react-router-dom'

const API = 'httpm://localhost:5000';

function SignupBody({username, setUsername, password, setPassword, repassword, setRepassword, isSignup, signupFunc}){
    
    const handleSignupClick = () => {
        if (isSignup) {
            if (password === repassword) {
                (username.trim() === '' || password.trim()==='' || repassword.trim()==='') ? 
                alert('Please fill out every fied') :
                signupFunc()
            } else {
                alert("Passwords do not match");
            }
        } else {
            (username.trim() === '' || password.trim() ==='') ? 
            alert('Please fill out every field') :
            signupFunc()
        }
         
    }
    
    return (
        <>
        <div className="flex flex-col items-center">
            <Link to="/">
                <h1 className="font-bold text-5xl mt-20 mb-5">Pomodoro</h1>
            </Link>
            <h1 className="text-gray-300 font-bold text-xl mb-5">{isSignup ? "Create account": "Login"}</h1>
            <div className="w-1/3 p-5 bg-white rounded text-gray-400">
                <div>
                    <p className="font-bold">USERNAME</p>
                    <input type="text" className="rounded bg-gray-200 text-black w-full p-2" onChange={(e) =>
                        setUsername(e.target.value)
                    }></input>
                </div>
                <div className="mt-5">
                    <p className="font-bold">PASSWORD</p>
                    <input type="password" className="rounded bg-gray-200 text-black w-full p-2" onChange={(e) =>
                        setPassword(e.target.value)
                    }></input>
                </div>

                {(isSignup ) && 
                (<div className="mt-5">
                    <p className="font-bold">Re-Enter Password</p>
                    <input type="password" className="rounded bg-gray-200 text-black w-full p-2" onChange={(e) =>
                        setRepassword(e.target.value)
                    }></input>
                </div>)}
                
                {isSignup ? 
                (<button 
                onClick={handleSignupClick} 
                className="mt-5 cursor-pointer bg-black text-white rounded w-full py-3">
                    Sign up
                </button>) : 
                (<button onClick={handleSignupClick} className="mt-5 cursor-pointer bg-black text-white rounded w-full py-3">
                    Log In
                </button>)}
            </div>
            
            {isSignup ? 
            (<>
                <h1 className="mt-5">Already have an account?</h1>
                <Link to="/login">
                    <h1 className="cursor-pointer underline font-bold"> Log in</h1>
                </Link>
                </>) : 
            (<>
                <h1 className="mt-5"> Do not have an account?</h1>
                <Link to="/signup">
                    <h1 className="cursor-pointer underline font-bold">Create account</h1>
                </Link>
            </>)
            }  
            
        </div>
        </>
    )
}

export default SignupBody;