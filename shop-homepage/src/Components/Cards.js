import React from "react";
import Cart from "./Cart";
import Data from "./Data";
import ProductReviews from "./ProductReviews";

const Cards = ({ count, setCount }) => {

  return (
    <>
      {Data.map((Data, index) => {
        return (
          <div className="col mb-5">
            <div className="card h-100">
              {/* Sale Badge */}
              {Data.saleBadge ? saleBadge() : ""}
              {/* Image */}
              <img className="card-img-top" src={Data.img} alt="..." />
              {/* Details */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Name */}
                  <h5 className="fw-bolder">{Data.title}</h5>
                  {/* Reviews */}
                  <ProductReviews key={index} reviews={Data.reviews} />
                  {/* Rate */}
                  {Data.strike && (
                    <span className="text-muted text-decoration-line-through">${Data.price1}</span>
                  )}
                  {!Data.strike && `$${Data.price1}`} -$ {Data.price2}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Cart cartButton={Data.cartButton} count={count} setCount={setCount} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const saleBadge = () => {
  return (
    <div
      className="badge bg-dark text-white position-absolute"
      style={{ top: "0.5rem", right: "0.5rem" }}
    >
      Sale
    </div>
  );
};

export default Cards;