import { Star } from 'lucide-react'

type Props = {
  isWatched: boolean
  onToggle: () => void
}

export function WatchlistButton({ isWatched, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isWatched ? 'Remove from watchlist' : 'Add to watchlist'}
      aria-pressed={isWatched}
      className="p-1 rounded hover:bg-yellow-50 transition cursor-pointer"
    >
      <Star
        size={18}
        className={isWatched ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
      />
    </button>
  )
}