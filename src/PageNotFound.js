import React from "react";
import { Link} from "react-router-dom";



function Error() {
  return (
    <section className="error-container">
      <div className="layer1">
        <div className="layer2">
          <div className="layer3">
            <h1> ERROR 404</h1>
            <p>Ooops!!!!</p>
            <h2>Sorry, the page you are looking for does not exist.</h2>
            <button>
              <Link className="Button" to="/">
                Go back to Home Page
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;