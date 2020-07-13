import Head from 'next/head';
import { useState } from 'react';

const siteTitle = 'Digital Dominion';

export default ({ children, user, setUser }) => {
  const [showLogout, setShowLogout] = useState(false);

  console.log(user)

  return (
    <div
      onClick={() => { setShowLogout(false) }}
      className="main-screen"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta
          name="description"
          content="A digitized version of Dominion built in Javascript"
        />
      </Head>
      {user? <div
        className={`x-close-button${showLogout? ' active-red' : ''}`}
        onClick={e => {
          e.stopPropagation();
          setShowLogout(!showLogout);
        }}
      >x</div> : ''}
      {showLogout? <div className="logout-window">
        <div>Logged in as {user}</div>
        <div
          className="logout-button"
          onClick={() => { setUser(false) }}
        >Log Out</div>
      </div> : ''}
      <div>{children}</div>
    </div>
  )
}