import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="!#">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-img.png"
            className="img1"
            alt="img1"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ml-auto"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-lg-auto">
            <a className="nav-link active" href="!#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link text-white" href="!#">
              Why choose Us?
            </a>
            <a className="nav-link text-white" href="!#">
              Explore our Menu
            </a>
            <a className="nav-link text-white" href="!#">
              Delivery & Payment
            </a>
            <a className="nav-link text-white" href="!#">
              Follow Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
