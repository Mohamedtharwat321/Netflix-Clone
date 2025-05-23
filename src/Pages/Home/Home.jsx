import React from "react";
import "./Home.css";
import Navbar from "./../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "./../../Components/TitleCard/TitleCard";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="hero">
        <img src={hero_banner} alt="banner image" className="banner_img" />
        <div className="hero-caption">
          <img
            className="caption-img"
            src={hero_title}
            alt="series description"
          />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <button>
              <img src={play_icon} alt="play icon" />
              Play
            </button>
            <button className="dark-btn">
              <img src={info_icon} alt="info icon" />
              More Info
            </button>
          </div>
          <div className="title-card">
            <TitleCard category={"popular"} />
          </div>
        </div>
      </header>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} category={"now_playing"} />
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"Top Pics for You"} category={"top_rated"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
