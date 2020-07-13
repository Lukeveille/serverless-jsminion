import Link from 'next/link';

export default () => (
  <div>
    <Link href="/game/xyz">
      <div className="game-button active">
        Play Game
      </div>
    </Link>
    <Link href="/game/xyz">
      <div className="game-button active">
        Deck Builder
      </div>
    </Link>
    <Link href="/game/xyz">
      <div className="game-button active">
        Stats
      </div>
    </Link>
  </div>
)
