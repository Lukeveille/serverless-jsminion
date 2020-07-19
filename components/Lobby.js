import Link from 'next/link';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/lobby.module.css'

export default () => {
  const newGameId = uuidv4().slice(0, 8);
  const [newLobby, setNewLobby] = useState(false)

  return (
    <div className={styles['lobby-screen']}>
      <table className={`${styles.players} ${styles.table}`}>
        <tr>
          <td className={styles['title-line']}>Online</td>
          <td>Invite/Join</td>
          <td>Status</td>
        </tr>
      </table>
      <div className={styles['lobby-full']}>
        {newLobby? <table className={`${styles.lobby} ${styles.table}`}>
          <tr>
            <td>Lobby</td>
          </tr>
        </table> : ''}
        <Link href="/deck-builder">
          <div className={`${styles.button} ${styles.short}`}>
            Choose Deck
          </div>
        </Link>
        <div 
          className={`${styles.button} ${styles.short}`}
          onClick={() => setNewLobby(!newLobby)}
        >
          {newLobby? 'Leave' : 'Create'} Lobby
        </div>
        {newLobby? <Link href={`/game/${newGameId}`}>
          <div className={`${styles.button} ${styles.long}`}>
            Start Game
          </div>
        </Link> : ''}
      </div>
    </div>
  )
}
