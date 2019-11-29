import React , {useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import './login.css'


function Login() {
    const { loginUser } = useContext(AuthContext);
    return (
        <div className= 'container-fluid' >
            <div className='login-container' >
              
                    <h1>
                    Let's Talk
                    </h1>
                 <button onClick={()=>loginUser()} className='btn btn-danger btn-lg' ><i className="fab fa-google mr-2"></i>Login with Google</button>
            </div>
        </div>
    )
}

export default Login;