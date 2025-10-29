import { Link } from "react-router";

const NotFoundPage = () => {
    return (
    <div className="not-found">
        <h1>404</h1>
        <p>Oops! The Page You're Looking For Does Not Exist</p>
        <Link to='/' className="link">Go Back Home</Link>
    </div> );
}
 
export default NotFoundPage;