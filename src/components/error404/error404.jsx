import { Link } from "react-router-dom";
import "../../styles/error404/error404.css";

function Error404() {
  return (
    <div className="container-error">
      <img className="img-error" src="/images/error404/disco.jpeg" alt="" />
      <h1 className="title-error">
        404s <br /> and heartbreaks
      </h1>
      <p className="p-error">
        We couldn't find the page
        <br />
        you were looking for.
      </p>
      <Link to={"/"} className="btn-error" href="">
        GO BACK
      </Link>
    
    </div>
  );
}

export default Error404;