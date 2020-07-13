import Head from 'next/head';
import { useState } from 'react';

const siteTitle = 'Digital Dominion';

export default ({ children, user }) => {
  const [showLogout, setShowLogout] = useState(false);

  console.log(user)

  return (
    <div
      className="main-screen"
      onClick={() => { setShowLogout(false) }}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Digital Dominion</title>
        <meta name="og:title" content={siteTitle} />
        <meta
          name="description"
          content="A digitized version of Dominion built in Javascript"
        />
      </Head>
      <div
        className="x-close-button"
        onClick={e => {
          e.stopPropagation();
          setShowLogout(!showLogout);
        }}
      >x</div>
      <div>{children}</div>
    </div>
  )
}