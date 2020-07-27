import { useRef } from 'react';
import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import Lobby from '../components/Lobby';
import Login from '../components/Login';

export default ({user, setUser, lobby, setLobby}) => {
  const inputRef = useRef(null);
  const router = useRouter();
  const playGame = e => {
    // Save game w/ ID and current deck
    router.push(`/game/${lobby}`);
  }
  
  return (
    <Layout inputRef={inputRef} user={user} setUser={setUser} setLobby={setLobby}>
      {user? <Lobby lobby={lobby} setLobby={setLobby} playGame={playGame}/> :
      <Login inputRef={inputRef} setUser={setUser}/>}
    </Layout>
  )
}
