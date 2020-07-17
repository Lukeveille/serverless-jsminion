import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/lobby.module.css'

export default () => {
  const newGameId = uuidv4().slice(0, 8);

  return (
    <div>
      <Link href={`/game/${newGameId}`}>
        <div className={styles.button}>
          Play Game
        </div>
      </Link>
      <Link href="/deck-builder">
        <div className={styles.button}>
          Deck Builder
        </div>
      </Link>
      <Link href="/stats">
        <div className={styles.button}>
          Stats
        </div>
      </Link>
    </div>
  )
}
