import { useState } from 'react';

export default ({setUser}) => {
  const [userLogin, setUserLogin] = useState('')

  return (
    <div>
      <h3>Enter a Username</h3>
      <input
        className="username-input"
        value={userLogin}  
        onChange={e => { setUserLogin(e.target.value) }}
      />
      <div
        className="center game-button active"
        onClick={() => { setUser(userLogin) }}
      >Submit</div>
    </div>
  )
}
