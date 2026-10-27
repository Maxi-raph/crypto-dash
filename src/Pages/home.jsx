import CoinCard from '../components/CoinCard'
import LimitSelector from '../components/LimitSelector'
import FilterInput from '../components/FilterInput'
import SortSelector from '../components/SortSelector'
import Spinner from '../components/Spinner'
const HomePage = ({
    coins,
    limit,
    setLimit,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    loading,
    error,
    isWatched, 
    toggleWatch}) => {
  
    const filteredCoins = coins.filter(coin=> coin.name.toLowerCase().includes(filter.toLowerCase()) || coin.symbol.toLowerCase().includes(filter.toLowerCase()))
  .slice()
  .sort((a,b)=>{
    switch (sortBy) {
      case 'market_cap_desc':
       return b.market_cap - a.market_cap
      case 'market_cap_asc':
       return a.market_cap - b.market_cap
      case 'price_desc':
       return b.current_price - a.current_price
      case 'price_asc':
       return a.current_price - b.current_price
      case 'change_desc':
       return b.price_change_percentage_24h - a.price_change_percentage_24h
      case 'change_asc':
       return a.price_change_percentage_24h - b.price_change_percentage_24h
    }
  })

   return ( <>
   <div>
      <h1 className='h1'>Crypto Dash</h1>
    {loading && <Spinner />}
    {error && <div className='text-center text-2xl mt-14'>{error}</div>}
    <div className="top-controls">
        <div className='w-full'>
          < FilterInput filter={filter} setFilter={setFilter}/>
        </div>
        <div className='flex w-full items-center'>
          <LimitSelector limit={limit} setLimit={setLimit} />
          <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
        </div>
    </div>
    {!loading && !error && (
      <main className='grid gap-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {filteredCoins.length > 0 ? filteredCoins.map((coin)=>
        <CoinCard 
        coin={coin}
        key={coin.id}
        isWatched={isWatched}
        toggleWatch={toggleWatch}/>
      ) : <p className='absolute left-1/3 gap-0'>No matching coins...</p>}
      </main>

    )}
   </div>
    </> );
}
 
export default HomePage;