import {Link} from 'react-router'
import { useWatchlist } from '../hooks/useWatchlist'


const Header = ({ watchlist }) => {

    return ( <div className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/watchlist" className="hover:text-blue-500">
            Watchlist{watchlist.length > 0 && ` (${watchlist.length})`}
        </Link>
    </div> );
}
 
export default Header;