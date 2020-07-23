import Layout from '../components/Layout';
import Lobby from '../components/Lobby';
import Login from '../components/Login';
import { useRef } from 'react';

export default ({user, setUser, lobby, setLobby}) => {
  const inputRef = useRef(null)
  
  return (
    <Layout inputRef={inputRef} user={user} setUser={setUser} setLobby={setLobby}>
      {user? <Lobby lobby={lobby} setLobby={setLobby} /> :
      <Login inputRef={inputRef} setUser={setUser}/>}
    </Layout>
  )
}
