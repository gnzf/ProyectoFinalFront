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
      <a className="btn-error" href="">
        GO BACK
      </a>
    </div>
  );
}

export default Error404;