import React from 'react'
import '../styles/App.css';
import { signUpFormValidation } from '../utils/validation';

const App = () => {
  
  return (
    <div>
      <form>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text'></input><br></br>

      <label htmlFor='email'>Email</label>
      <input id='email' type='text'></input><br></br>

      <label htmlFor='password'>Password</label>
      <input id='password' type='password'></input><br></br>

      <label htmlFor='consent'>Consent</label>
      <input id='consent' type='checkbox'></input><br></br>

      <button type='submit'>Signup</button>
      </form>
    </div>
  )
}


export default App;
