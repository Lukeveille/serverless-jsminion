import Layout from '../components/Layout';
import MainMenu from '../components/MainMenu';
import Login from '../components/Login';
import { useState } from 'react';

export default () => {
  const [user, setUser] = useState(false);
  
  return (
    <Layout user={user}>
      {user? <MainMenu /> : <Login setUser={setUser}/>}
    </Layout>
  )
}
