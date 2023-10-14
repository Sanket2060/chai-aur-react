import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)  //useContext ko use garera hamle globally useContext
    //ma defined vako variables lai access garna milxa
    //syntax similar to useState and userContext here is context we defined at userContext
    const {setEmail}=useContext(UserContext);
       const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        {" "}
        <input type='text' 
        onChange={(e) => setEmail(e.target.value) }
        placeholder='email'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login