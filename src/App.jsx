import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router'
import HomePage from './Pages/home' 
import Header from './components/Header'
import AboutPage from './Pages/about'
import NotFoundPage from './Pages/not-found'
import CoinDetailsPage from './Pages/coin-details'
import { useWatchlist } from './hooks/useWatchlist'
import WatchlistPage from './Pages/watchlist'


const API_URL = import.meta.env.VITE_COINS_API_URL

const App = ()=>{
const [coins,setCoins] = useState([])
const [loading,setLoading] = useState(true)
const [error,setError] = useState(null)
const [limit,setLimit] = useState(10)
const [filter,setFilter] = useState('')
const [sortBy, setSortBy] = useState('market_cap_desc')
const { isWatched, toggleWatch, watchlist } = useWatchlist()

useEffect(()=>{
  const fetchCryptoData = async () =>{
    try {
      const response = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`)
        if (!response.ok) throw new Error("Failed to fetch data");
       const data = await response.json()
       setCoins(data)
    } catch (err) {
      setError(err.message)
    } finally{
      setLoading(false)
    }
  }
  fetchCryptoData()
},[limit])


  return(
    <>
    <Header watchlist={watchlist} coins={coins}/>
    <Routes>
      <Route path='/' element={<HomePage 
      coins={coins} 
      limit={limit}
      setLimit={setLimit} 
      filter={filter}
      setFilter={setFilter}
      sortBy={sortBy}
      setSortBy={setSortBy} 
      loading={loading}
      error={error}
      isWatched={isWatched}
      toggleWatch={toggleWatch}/>}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/coin/:id' element={<CoinDetailsPage/>} />
      <Route path='/watchlist' element={<WatchlistPage
      coins={coins} 
      loading={loading}
      watchlist={watchlist}
      isWatched={isWatched}
      toggleWatch={toggleWatch}/>} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App