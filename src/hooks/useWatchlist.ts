import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useWatchlist() {
  const [watchlist, setWatchlist] = useLocalStorage<string[]>('crypto-watchlist', [])

  const isWatched = useCallback(
    (coinId: string) => watchlist.includes(coinId),
    [watchlist]
  )

  const toggleWatch = useCallback(
    (coinId: string, e:React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      setWatchlist(prev =>
        prev.includes(coinId)
          ? prev.filter(id => id !== coinId)
          : [...prev, coinId]
      )
    },
    [setWatchlist]
  )

  return { watchlist, isWatched, toggleWatch }
}