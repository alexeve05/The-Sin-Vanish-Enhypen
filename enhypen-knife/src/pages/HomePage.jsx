import { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/HomePage.css";
import tvOverlay from "../assets/overlay/box_tv.png";
import knifeMV from "../assets/video/knife_mv.mp4";
import enhypenText from "../assets/text/enhypen_text.png";
import albumText from "../assets/text/the_sin_vanish_text.png";
import crackedGlass from "../assets/overlay/cracked_glass_overlay1.png";

function HomePage() {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);
  const handleVolumeChange = (event) => {
  const newVolume = event.target.value;
  setVolume(newVolume);
  if (videoRef.current) {
    videoRef.current.volume = newVolume / 100;
  }
};
const togglePlayPause = () => {
  if (!videoRef.current) return;
  if (isPlaying) {
    videoRef.current.pause();
  } else {
    videoRef.current.play();
  }
  setIsPlaying(!isPlaying);
};
  return (
    <div className="homepage">
      <NavBar />
{/* hero section */}
      <section className="hero-section">
        <img src={albumText} alt="The Sin: Vanish" className="album-title" />
        <img src={enhypenText} alt="ENHYPEN" className="enhypen-title" />
        <div className="tv-container">
          <video ref={videoRef} src={knifeMV} autoPlay loop className="music-video"/>
          <img src={tvOverlay} alt="box tv overlay" className="tv-overlay" />
        </div>
        <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} className="volume-slider"/>
        <button onClick={togglePlayPause} className="play-button"> {isPlaying ? "Pause" : "Play"}</button>
      </section>
{/* preview sections */}
      <section className="preview-section">
        {/* <img src={crackedGlass} alt="cracked glass overlay" className="glass-overlay" /> */}
      </section>
{/* footer */}
      <footer className="footer">
        Fan-made ENHYPEN project. Not official.
      </footer>
    </div>
  );
}
export default HomePage;