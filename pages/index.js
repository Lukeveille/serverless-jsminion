import Layout from '../components/Layout';
import Lobby from '../components/Lobby';
import Login from '../components/Login';
import { useRef } from 'react';

export default ({user, setUser}) => {
  const inputRef = useRef(null)
  
  return (
    <Layout inputRef={inputRef} user={user} setUser={setUser}>
      {user? <Lobby /> : <Login inputRef={inputRef} setUser={setUser}/>}
    </Layout>
  )
}
