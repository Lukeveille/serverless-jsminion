import Layout from '../components/Layout';
import Lobby from '../components/Lobby';
import Login from '../components/Login';

export default ({user, setUser}) => (
  <Layout user={user} setUser={setUser}>
    {user? <Lobby /> : <Login setUser={setUser}/>}
  </Layout>
)
