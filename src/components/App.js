import React, { useRef, useState } from 'react'
import '../styles/App.css';
import { signUpFormValidation } from '../utils/validation';
const App = () => {
  const [error, setError] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  function validate() {
    let data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    }
    let errorObj = signUpFormValidation(data);
    console.log(errorObj);
    setError(errorObj);
  }
  return (
    <div>
      <form>
      <label htmlFor='name'>Name</label>
      <input ref={name} id='name' type='text'></input><br></br>
      { error !== null && error.name !== undefined && <div className='error'>{error.name}</div>}
      <label htmlFor='email'>Email</label>
      <input ref={email} id='email' type='text'></input><br></br>
      { error !== null && error.email !== undefined && <div className='error'>{error.email}</div>}
      <label htmlFor='password'>Password</label>
      <input ref={password} id='password' type='password'></input><br></br>
      { error !== null && error.password !== undefined && <div className='error'>{error.password}</div>}
      <label htmlFor='consent'>Consent</label>
      <input id='consent' type='checkbox'></input><br></br>
      <button onClick={validate} type='button'>Signup</button>
      </form>
    </div>
  )
}
export default App;