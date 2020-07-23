import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/layout.module.css'

export default ({ children, user, setUser, inputRef, setLobby }) => {
  const siteTitle = 'Digital Dominion';
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div
      className={styles['main-screen']}
      onClick={() => {
        setShowLogout(false);
        if (inputRef && inputRef.current) inputRef.current.focus();
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
        className={`${styles.burger}${showLogout? ` ${styles['active-red']} ${styles.change}` : ''}`}
        onClick={e => {
          e.stopPropagation();
          setShowLogout(!showLogout);
        }}
      >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
      </div> : ''}
      {showLogout? <div className={styles['logout-window']}>
        <div>Logged in as {user}</div>
        <Link href="/stats">
          <div className={styles['logout-button']}>
            Stats
          </div>
        </Link>
        <br />
        <div
          className={styles['logout-button']}
          onClick={() => {
            setUser(false);
            setLobby(false);
          }}
        >Log Out</div>
      </div> : ''}
      {children}
    </div>
  )
}