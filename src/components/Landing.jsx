import React from "react";
import undrawBooks from "../assets/Undraw_Books.svg";

export default function Landing() {
  return (
    <div>
      <section id="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1>Australia's most awarded online library platform</h1>
              <h2>
                Find your dream book with{" "}
                <span className="purple">library</span>{" "}
              </h2>
              <a href="#features">
                <button className="btn">Browse books</button>
              </a>
            </div>
            <figure className="header__img--wrapper">
                <img src={undrawBooks} alt="" />
            </figure>
          </div>
        </header>
      </section>
    </div>
  );
}
