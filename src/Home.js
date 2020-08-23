import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD4778_ILLUMINATE._CB428347190_.jpg"
        alt="Ecommerce"
        className="banner__image"
      />

      {/* Product id, title, price, rating, image*/}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="http://hendriks-books.com/wp-content/uploads/2018/11/hendriks-books-theleanstartup-2000x1500.jpeg"
        />
        <Product
          id="12321342"
          title="Sceptre Curved 27' 75Hz LED Monitor HDMI VGA Build-in Speakers, Edge-Less Metal Black 2019 (C275W-1920RN)"
          price={219.51}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91C9kmKqlkL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321343"
          title="Nike - Air Vapormax Off White - AJ6900002"
          price={348.94}
          rating={4}
          image="https://stockx-360.imgix.net//nike-air-vapormax-off-white_TruView/Images/nike-air-vapormax-off-white_TruView/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000"
        />
        <Product
          id="12321344"
          title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
          price={13.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321345"
          title="Fine Line (Vinyl) Double LP"
          price={39.39}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61jxIrniZOL._AC_SL1200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321346"
          title="Samsung CJ89 43' Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
          price={549.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
