import Link from 'next/link';

export default () => (
  <div>
    <Link href="/game/xyz">
      <div className="game-button active spaced">
        Play Game
      </div>
    </Link>
    <Link href="/deck-builder">
      <div className="game-button active spaced">
        Deck Builder
      </div>
    </Link>
    <Link href="/stats">
      <div className="game-button active spaced">
        Stats
      </div>
    </Link>
  </div>
)
