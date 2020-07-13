import { useState } from 'react';

export default ({setUser}) => {
  const [userLogin, setUserLogin] = useState('')

  return (
  <div>
    <p>Enter a Username</p>
    <input
      value={userLogin}  
      onChange={e => { console.log(e.target.value); setUserLogin(e.target.value) }}
    />
    <div
      className="game-button active"
      onClick={() => { setUser(userLogin) }}
    >Submit</div>
  </div>
  )
}
