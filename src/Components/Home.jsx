import React from "react";
import "../CSS/Home.css";
import movie1 from "../Images/movie1.jpg";
import movie2 from "../Images/movie2.jpg";
import movie3 from "../Images/movie3.jpg";
import movie4 from "../Images/movie4.jpg";
import movie5 from "../Images/movie5.jpg";
import movie6 from "../Images/movie6.jpg";
import movie7 from "../Images/movie7.jpg";
import movie8 from "../Images/movie8.jpg";
import movie9 from "../Images/movie9.jpg";
import movie10 from "../Images/movie10.jpg";
import movie11 from "../Images/movie11.jpg";
import movie12 from "../Images/movie12.jpg";
import movie13 from "../Images/movie13.jpg";
import movie14 from "../Images/movie14.jpg";
import movie15 from "../Images/movie15.jpg";
import movie16 from "../Images/movie16.jpg";
import movie17 from "../Images/movie17.jpg";
import movie18 from "../Images/movie18.jpg";
import movie19 from "../Images/movie19.jpg";
import movie20 from "../Images/movie20.jpg";


const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-one">
          <h1 className="home-h1">TV Dramas</h1>
          <h5 className="home-h5">
            Some stories are so rich they need more than a movie to tell them.
            Crime sagas, medical dramas, sci-fi and more–these shows will keep
            you glued to your seat.
          </h5>
        </div>
        <div className="home-two"></div>
      </div>

      <div className="movie-categories">
        <h3>Popular on Netflix</h3>
        <div className="popular">
          <div className="popular-card">
            <img src={movie1} width={295} height={180} />
            <span>Lucifer</span>
          </div>
          <div className="popular-card">
            <img src={movie2} width={295} height={180} />
            <span>Berlin</span>
          </div>
          <div className="popular-card">
            <img src={movie3} width={295} height={180} />
            <span>Suits</span>
          </div>
          <div className="popular-card">
            <img src={movie4} width={295} height={180} />
            <span>Maamla Legal Hai</span>
          </div>
        </div>
      </div>

      <div className="movie-categories">
        <h3>Binge-worthy TV Programmes</h3>
        <div className="popular">
          <div className="popular-card">
            <img src={movie5} width={295} height={180} />
            <span>Vikings</span>
          </div>
          <div className="popular-card">
            <img src={movie6} width={295} height={180} />
            <span>Manifest</span>
          </div>
          <div className="popular-card">
            <img src={movie7} width={295} height={180} />
            <span>Lost in Space</span>
          </div>
          <div className="popular-card">
            <img src={movie8} width={295} height={180} />
            <span>The Glory</span>
          </div>
        </div>
      </div>

      <div className="movie-categories">
        <h3>Award-winning TV Programmes</h3>
        <div className="popular">
          <div className="popular-card">
            <img src={movie9} width={295} height={180} />
            <span>House, M.D.</span>
          </div>
          <div className="popular-card">
            <img src={movie10} width={295} height={180} />
            <span>Crash Landing on You</span>
          </div>
          <div className="popular-card">
            <img src={movie11} width={295} height={180} />
            <span>The Blacklist</span>
          </div>
          <div className="popular-card">
            <img src={movie12} width={295} height={180} />
            <span>Dr. Romantic</span>
          </div>
        </div>
      </div>

      <div className="movie-categories">
        <h3>Crime Programmes</h3>
        <div className="popular">
          <div className="popular-card">
            <img src={movie13} width={295} height={180} />
            <span>Guns & Gulaabs</span>
          </div>
          <div className="popular-card">
            <img src={movie14} width={295} height={180} />
            <span>Narcos</span>
          </div>
          <div className="popular-card">
            <img src={movie15} width={295} height={180} />
            <span>Bloodhounds</span>
          </div>
          <div className="popular-card">
            <img src={movie16} width={295} height={180} />
            <span>Black Money Love</span>
          </div>
        </div>
      </div>

      <div className="movie-categories">
        <h3>Critically-acclaimed TV Programmes</h3>
        <div className="popular">
          <div className="popular-card">
            <img src={movie17} width={295} height={180} />
            <span>Fouda</span>
          </div>
          <div className="popular-card">
            <img src={movie18} width={295} height={180} />
            <span>Sweet Tooth</span>
          </div>
          <div className="popular-card">
            <img src={movie19} width={295} height={180} />
            <span>Gilmore Girls</span>
          </div>
          <div className="popular-card">
            <img src={movie20} width={295} height={180} />
            <span>Shadow & Bone</span>
          </div>
        </div>
      </div>

      <div className="movie-categories">
        <h3 style={{filter: 'blur(10px)'}}>Critically-acclaimed TV Programmes</h3>
        <div className="popular">
          <div className="popular-card" style={{filter: 'blur(10px)'}}>
            <img src={movie17} width={295} height={180} />
            <span style={{filter: 'blur(10px)'}}>Fouda</span>
          </div>
          <div className="popular-card" style={{filter: 'blur(10px)'}}>
            <img src={movie18} width={295} height={180} />
            <span style={{filter: 'blur(10px)'}}>Sweet Tooth</span>
          </div>
          <div className="popular-card" style={{filter: 'blur(10px)'}}>
            <img src={movie19} width={295} height={180} />
            <span style={{filter: 'blur(10px)'}}>Gilmore Girls</span>
          </div>
          <div className="popular-card" style={{filter: 'blur(10px)'}}>
            <img src={movie20} width={295} height={180} />
            <span style={{filter: 'blur(10px)'}}>Shadow & Bone</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
