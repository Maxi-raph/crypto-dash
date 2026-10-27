import { Link } from 'react-router'
import { useWatchlist } from '../hooks/useWatchlist'
import CoinCard from '../components/CoinCard'


const WatchlistPage = ({coins, Loading, isWatched, watchlist, toggleWatch})=> {

  const watched = coins?.filter(c => watchlist.includes(c.id)) ?? []

  if (Loading) return <p className="p-4">Loading...</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Watchlist</h1>

      {watched.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="mb-2">No coins watched yet.</p>
          <Link to="/" className="text-blue-500 underline">
            Browse coins to star some →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {watched.map(coin => (
            <CoinCard
              key={coin.id}
              coin={coin}
              isWatched={isWatched}
              toggleWatch={toggleWatch}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default WatchlistPage;