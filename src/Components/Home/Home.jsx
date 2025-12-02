import React from "react";
import Banners from "./Banners/Banners";
import Brands from "./Brands/Brands";
import Reviews from "./Reviews/Reviews";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banners></Banners>
      <Brands></Brands>
      <Reviews reviewPromise={reviewPromise}></Reviews>
    </div>
  );
};

export default Home;
