import { useState } from 'react';

export default ({setUser}) => {
  const [userLogin, setUserLogin] = useState('');

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
        onChange={e => {
          if (e.target.value.length < 15) {
            setUserLogin(e.target.value);
          }
        }}
        onKeyDown={e => {
          if (e.keyCode === 32 || e.keyCode === 219 || e.keyCode === 221) {
            e.preventDefault();
          }
        }}
      />
      <div
        className={`center game-button${userLogin? ' outline active' : ''}`}
        onClick={() => setUser(userLogin)}
      >Submit</div>
    </form>
  )
}
