import { useState } from "react";
import { Link } from "react-router-dom";
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
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <div className={`menu-panel ${menuOpen ? "open" : ""}`}>
        <Link to="/album" className="menu-item">
          <img src={chainIcon} alt="chain icon" />
          <span>Album World</span></Link>
        <Link to="/tracks" className="menu-item">
          <img src={fangsIcon} alt="fangs icon" />
          <span>Tracklist</span></Link>
        <Link to="/quiz" className="menu-item">
          <img src={starIcon} alt="star icon" />
          <span>Quiz</span></Link>
        <Link to="/members" className="menu-item">
        <img src={personIcon} alt="person icon"/>
        <span>Members</span></Link>
        <Link to="/media-hub" className="menu-item">
        <img src={knifeIcon} alt="knife icon"/>
        <span>Media Hub</span></Link>
        <Link to="/mini-game" className="menu-item">
        <img src={lighterIcon} alt="lighter icon"/>
        <span>Mini Game</span></Link>
        <Link to="/stream" className="menu-item">
        <img src={musicIcon} alt="music note icon"/>
        <span>Streaming</span></Link>
      </div>
    </nav>
  );
}
export default NavBar;