import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { userService } from '../services/user'
import { login, signup } from '../store/actions/user.actions'
import { Link } from 'react-router-dom'

export function Login({ toggleModal }) {
    const [users, setUsers] = useState([])
    const [isSignup, setIsSignUp] = useState(false)
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })

    const navigate = useNavigate()

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    async function onLogin(ev) {
        ev.preventDefault()
        if (!credentials.username || !credentials.password) {
            console.error('Username and password are required')
            return
        }

        try {
            if (isSignup) {
                await signup(credentials)
            } else {
                await login(credentials)
            }

            navigate('/')
            toggleModal()
        } catch (error) {
            console.error('Login/Signup failed', error)
        }
    }

    function handleChange({ target }) {
        const { name: field, value } = target
        setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    // const hiddenRef = useRef(false)

    // //TODO: NEED TO FIX - OMER
    // useEffect(() => {
    //     document.body.style.overflow = 'hidden'
    //     // hiddenRef.current = 'hidden'

    //     return () => {
    //         document.body.style.overflow = 'auto'
    //         // hiddenRef.current = 'auto'

    //     }
    // }, [])

        // <div div className = "modal-overlay" ></div >
    // className={`modal-overlay ${hiddenRef.current} `}
    return (
        <>
            <div className="modal-overlay" ></div>
            <div className="login-modal" onClick={stopPropagation}>
                <div className='header-login-signup'>
                    {/* <h1>{isSignup ? 'Sign up' : 'Log in'}</h1> */}
                    <h1>Log in or sign up</h1>
                </div>

                <div className="login-form-container">
                    <form className="login-form" onSubmit={onLogin}>
                        <h2>Welcome to Airbnb</h2>
                        {!isSignup && (
                            <>
                                <select
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    required>
                                    <option value="">Select User</option>
                                    {users.map(user => (
                                        <option key={user._id} value={user.username}>
                                            {user.fullname}
                                        </option>
                                    ))}
                                </select>
                            </>
                        )}

                        {isSignup && (
                            <>
                                <input
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="fullname"
                                    value={credentials.fullname}
                                    placeholder="Full name"
                                    onChange={handleChange}
                                    required
                                />
                            </>
                        )}

                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />
                        <p className='privacy-policy-note'>We'll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>

                        <button className='continue-btn'>Continue</button>

                        <fieldset className="or-line">
                            <legend>or</legend>
                        </fieldset>

                        <button className='more-login continue-with-google'>
                            <img src="/public/img/google-icon.png" alt="" />Continue with Google
                        </button>
                        <button className='more-login continue-with-apple'>
                            <img src="/public/img/apple-icon.png" alt="" />Continue with Apple
                        </button>
                        <button className='more-login continue-with-email'>
                            <img src="/public/img/email.png" alt="" />Continue with email
                        </button>

                        <button className='close-login-singup-modal' onClick={toggleModal}>x</button>


                    </form>

                    <div className="btns">
                        {/* <a href="signup" onClick={() => setIsSignUp(!isSignup)}>
                            {isSignup ? 'Already a member? Log in' : 'New user? Sign up here'}
                        </a> */}
                        <Link onClick={() => setIsSignUp(!isSignup)} to="signup">
                            {isSignup ? 'Already a member? Log in' : 'New user? Sign up here'}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
