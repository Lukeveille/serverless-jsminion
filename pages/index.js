import Layout from '../components/Layout';
import MainMenu from '../components/MainMenu';
import Login from '../components/Login';

export default ({user, setUser}) => (
  <Layout user={user} setUser={setUser}>
    {user? <MainMenu /> : <Login setUser={setUser}/>}
  </Layout>
)
