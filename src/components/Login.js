import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { useAuth } from './auth';
export default function Login() {
    const [user,setUser] = useState(''); 
    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();
    const redirectPath = location.state?.path || '/';
    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath);
    }
  return (                                         
    <div>
        <label>
            User Name:<input type='text' value={user} onChange={(event) => setUser(event.target.value)} />
        </label>
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}
