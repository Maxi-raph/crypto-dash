import {Link} from 'react-router'
import { useWatchlist } from '../hooks/useWatchlist'


const Header = ({ watchlist, coins }) => {
    const visibleWatchCount = coins.length > 0 ? coins.filter(c => watchlist.includes(c.id)).length
  : null

    return ( <div className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/watchlist" className="hover:text-blue-500">
            Watchlist{visibleWatchCount === null ? '—' : visibleWatchCount > 0 ? `(${visibleWatchCount})` : ''}
        </Link>
    </div> );
}
 
export default Header;