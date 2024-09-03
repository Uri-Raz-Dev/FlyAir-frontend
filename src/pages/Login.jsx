import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { userService } from '../services/user';
import { login } from '../store/actions/user.actions';



export function Login({ toggleModal }) {
    const [users, setUsers] = useState([]);
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' });

    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, []);
    

async function loadUsers() {
    const users = await userService.getUsers();
    setUsers(users);
}

async function onLogin(ev = null) {
    if (ev) ev.preventDefault();
    if (!credentials.username) return;
    await login(credentials);
    navigate('/');
    toggleModal(); // סגירת המודל לאחר ההתחברות
    
}

function handleChange(ev) {
    const field = ev.target.name;
    const value = ev.target.value;
    setCredentials({ ...credentials, [field]: value });
   
}

const stopPropagation = (e) => {
    e.stopPropagation();
};

return (
    <>
        <div className="modal-overlay" onClick={toggleModal}></div>
        <div className="login-modal" onClick={stopPropagation}>
            <form className="login-form" onSubmit={onLogin}>
                <select
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}>
                    <option value="">Select User</option>
                    {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                </select>
                <button>Login</button>
            </form>
        </div>
    </>
);
}
