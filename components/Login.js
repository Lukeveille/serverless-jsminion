import { useState } from 'react';

export default ({setUser}) => {
  const [userLogin, setUserLogin] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault;
        setUser(userLogin);
      }}
    >
      <h3>Enter a Username</h3>
      <input
        className="username-input"
        value={userLogin}  
        onChange={e => { setUserLogin(e.target.value) }}
      />
      <div
        className={`center game-button${userLogin? ' outline active' : ''}`}
        onClick={() => { setUser(userLogin) }}
      >Submit</div>
    </form>
  )
}
