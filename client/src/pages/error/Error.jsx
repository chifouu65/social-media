import './error.scss'
import {Link} from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to={'/'}>Go to home</Link>
    </div>
  );
}

export default Error;
