import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const siteTitle = 'Digital Dominion';

export default ({ children, user, setUser, inputRef }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div
      className="main-screen"
      onClick={() => {
        setShowLogout(false);
        if (inputRef.current) inputRef.current.focus();
      }}
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
        className={`burger${showLogout? ' active-red change' : ''}`}
        onClick={e => {
          e.stopPropagation();
          setShowLogout(!showLogout);
        }}
      >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </div> : ''}
      {showLogout? <div className="logout-window">
        <div>Logged in as {user}</div>
        <Link href="/stats">
          <div className="logout-button">
            Stats
          </div>
        </Link>
        <br />
        <div
          className="logout-button"
          onClick={() => { setUser(false) }}
        >Log Out</div>
      </div> : ''}
      <div>{children}</div>
    </div>
  )
}