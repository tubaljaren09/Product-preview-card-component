import React from "react";

// Images
import Cart from "../images/icon-cart.svg";

const Card = () => {
  return (
    <div className="card-main">
      <div className="hero"></div>
      <div className="details">
        <div className="details-container">
          <p className="perfume">PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <h2>
            $149.99 <span>$169.99</span>
          </h2>
          <button>
            <span>
              <img src={Cart} alt="cart-icon" />
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
