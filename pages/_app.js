import '../styles/global.css';
import { useState } from 'react';

export default ({ Component, pageProps }) => {
  const [user, setUser] = useState(false);

  return <Component {...pageProps} user={user} setUser={setUser} />
}
