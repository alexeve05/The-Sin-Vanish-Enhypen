import { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/HomePage.css";
import tvOverlay from "../assets/overlay/box_tv.png";
import knifeMV from "../assets/video/knife_mv.mp4";
import enhypenText from "../assets/text/enhypen_text.png";
import albumText from "../assets/text/the_sin_vanish_text.png";
import one from "../assets/photoshoot/one.png";
import two from "../assets/photoshoot/two.png";
import three from "../assets/photoshoot/three.png"; 
import four from "../assets/photoshoot/four.png"; 
import five from "../assets/photoshoot/five.png";
import six from "../assets/photoshoot/six.png";
import seven from "../assets/photoshoot/seven.png";
import crackedGlass from "../assets/overlay/cracked_glass_overlay1.png"
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
    const previewSections = [
        {
            title: "STREAMING",
            description: "Authorities report unusual replay activity connected to The Sin: Vanish. Access direct streaming portals and support the operation across all platforms.",
            image: one,
            link: "/stream"
        },
        {
            title: "TRACKLIST",
            description: "Investigators uncovered hidden meanings buried within each track. Examine lyrics, concept details, and classified song files connected to the case.",
            image: two,
            link: "/tracklist"
        },
        {
            title: "QUIZ",
            description: "Psychological evaluations now available. Determine which song reflects your behavior patterns and emotional alignment.",
            image: three,
            link: "/quiz"
        },
        {
            title: "MEMBERS",
            description: "Detailed profiles reveal each member's involvement within The Sin: Vanish operation, including personal statements and preferred tracks.",
            image: four,
            link: "/members"
        },
        {
            title: "MEDIA HUB",
            description: "Broadcast footage, interviews, behind-the-scenes evidence, and live performance recordings have been archived for public viewing.",
            image: five,
            link: "/media-hub"
        },
        {
            title: "MINI GAME",
            description: "Users may enter a simulated decision experiment inspired by ongoing events connected to the Knife incident.",
            image: six,
            link: "/mini-game"
        },
        {
            title: "ALBUM WORLD",
            description: "Explore the mythology, visual symbolism, vampiric themes, and underground narrative surrounding The Sin: Vanish.",
            image: seven,
            link: "/album"
        }
]
  return (
    <div className="homepage">
      <NavBar />
{/* hero section */}
      <section className="hero-section">
        <img src={albumText} alt="The Sin: Vanish" className="album-title" />
        <img src={enhypenText} alt="ENHYPEN" className="enhypen-title" />
              <div className="tv-container">
                  <div className="tv-screen">
                      <video
                          ref={videoRef}
                          src={knifeMV}
                          autoPlay
                          loop
                          className="music-video"/>
                      <img
                          src={crackedGlass}
                          alt="cracked glass overlay"
                          className="cracked-overlay"/>
                  </div>
                  <img src={tvOverlay} alt="tv frame" className="tv-frame" />
              </div>
        <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} className="volume-slider"/>
        <button onClick={togglePlayPause} className="play-button"> {isPlaying ? "Pause" : "Play"}</button>
      </section>
 {/* preview sections */}
          <section className="preview-wrapper">
              {previewSections.map((section, index) => (
                  <a href={section.link} className={`preview-card ${index % 2 === 0 ? "normal" : "reverse"}`} key={section.title}>
                      <div className="preview-text">
                          <h2>{section.title}</h2>
                          <p>{section.description}</p>
                      </div>
                      <div className="preview-image-container">
                          <img src={section.image} alt={section.title } className="preview-image"/>
                      </div>
                  </a>
              )) }
          </section>
{/* footer */}
      <footer className="footer">
        Fan-made ENHYPEN project. Not official.
      </footer>
    </div>
  );
}
export default HomePage;