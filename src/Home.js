import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon Banner"
        />

        <div className="home__row">
          <Product
            id="181818"
            title="Amazon Echo (3rd Generation) Smart speaker with Alexa, Charcoal Fabric"
            price={29.99}
            image="https://www.scan.co.uk/images/infopages/amazon_echo_dot/3rd_gen/charcoal-topimage.png"
            rating={5}
          />
          <Product
            id="171717"
            title="J.west iPad Air iPad 5th Case, Heavy Duty Luxury Bling Glitter Kickstand Sparkle Three Layers Full-Body Protective Silicone iPad Cover for iPad Air 1st 9.7 inch 2013 (A1474 A1475 A1476) Mint"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61UaA8yOggL._AC_SY355_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="191919"
            title="Apple iPad Pro 10.5in 512GB Wi-Fi - Space Grey (Renewed)"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61D8ZmUvhqL._AC_SX450_.jpg"
            rating={4}
          />
          <Product
            id="202020"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="212121"
            title="NVIDIA GeForce RTX 3070 Is Ampere's Performance Value"
            price={39.99}
            image="https://images.hothardware.com/contentimages/newsitem/52766/content/geforce_rtx_3070_1.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="444444"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
            rating={4}
          />

          <Product
            id="209233"
            title="SONY BRAVIA KD43XH8096BU 43 Smart 4K Ultra HD HDR LED TV with Google Assistant"
            price={199.99}
            image="https://brain-images-ssl.cdn.dixons.com/0/0/10204800/u_10204800.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
