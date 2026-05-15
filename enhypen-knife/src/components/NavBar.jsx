import { useState } from "react";
import "../styles/NavBar.css";
import chainIcon from "../assets/icons/chrome_silver_chain_icon.png";
import fangsIcon from "../assets/icons/chrome_silver_fangs_icon.png";
import starIcon from "../assets/icons/chrome_silver_star_icon.png";
import personIcon from "../assets/icons/chrome_silver_person_icon.png";
import knifeIcon from "../assets/icons/chrome_silver_knife_icon.png";
import lighterIcon from "../assets/icons/chrome_silver_lighter_icon.png";
import musicIcon from "../assets/icons/chrome_silver_musicnote_icon.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
{/* menu button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
{/* dropdown menu */}
      <div className={`menu-panel ${menuOpen ? "open" : ""}`}>
        <a href="/album" className="menu-item">
          <img src={chainIcon} alt="chain icon" />
          <span>Album World</span></a>
        <a href="/tracks" className="menu-item">
          <img src={fangsIcon} alt="fangs icon" />
          <span>Tracklist</span></a>
        <a href="/quiz" className="menu-item">
          <img src={starIcon} alt="star icon" />
          <span>Quiz</span></a>
        <a href="/members" className="menu-item">
        <img src={personIcon} alt="person icon"/>
        <span>Members</span></a>
        <a href="/media-hub" className="menu-item">
        <img src={knifeIcon} alt="knife icon"/>
        <span>Media Hub</span></a>
        <a href="/mini-game" className="menu-item">
        <img src={lighterIcon} alt="lighter icon"/>
        <span>Mini Game</span></a>
        <a href="/stream" className="menu-item">
        <img src={musicIcon} alt="music note icon"/>
        <span>Streaming</span></a>
      </div>
    </nav>
  );
}
export default NavBar;