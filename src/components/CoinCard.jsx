import { Link } from "react-router";
const CoinCard = ({coin}) => {
    return ( 
      <Link to={`/coin/${coin.id}`}>
        <div className="coin-card flex-none">
            <div className="coin-header">
              <img src={coin.image} alt={coin.name} className='coin-image'/>
              <div>
               <h2 className="coin-name">{coin.name}</h2>
               <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
              </div>
            </div>
              <p className="coin-price">Price: ${coin.current_price.toLocaleString()}</p>
              <p className={coin.price_change_percentage_24h >= 0?'text-green-400':'text-red-400'}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
        </div>
       </Link>
    );
}
 
export default CoinCard;