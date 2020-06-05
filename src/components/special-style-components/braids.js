import React from "react";

class Braids extends React.Component {
  render() {
    return (
      <div className="hairstyle-cuts-section">
        <div class="hairstyle-options">
          <h1>BRAIDS</h1>
          <div className="hairstyle-photos">

            <div class="card">
              <img src={require("../../images/BW1.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  $10.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/BW2.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                $10.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/BW3.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                $10.00
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Braids;