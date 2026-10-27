import { Link } from "react-router";
import { WatchlistButton } from "./WatchListButton";

const CoinCard = ({coin, isWatched, toggleWatch}) => {
    const price = coin.current_price ?? 0;
    const change = coin.price_change_percentage_24h;
    const marketCap = coin.market_cap ?? 0;

    return ( 
      <Link to={`/coin/${coin.id}`}>
        <div className="coin-card flex">
          <div className="flex flex-col">
            <div className="coin-header">
              <img src={coin.image} alt={coin.name} className='coin-image'/>
              <div>
               <h2 className="coin-name">{coin.name}</h2>
               <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
              </div>
            </div>
              <p className="coin-price">Price: ${price.toLocaleString()}</p>
              <p className={change >= 0?'text-green-400':'text-red-400'}>{change != null ? `${change.toFixed(2)}%` : '—'}</p>
              <p>Market Cap: {marketCap.toLocaleString()}</p>
          </div>
          <div className="flex-1 flex justify-end items-start">
            <WatchlistButton isWatched={isWatched(coin.id)} onToggle={(e) => toggleWatch(coin.id, e)}/>
          </div>
        </div>
       </Link>
    );
}
 
export default CoinCard;