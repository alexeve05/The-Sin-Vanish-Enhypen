import { useState } from "react";
import "./NavBar.css";
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      {/* menu button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      {/* dropdown menu */}
      <div className={`menu-panel ${menuOpen ? "open" : ""}`}>
        <a href="/album" className="menu-item">
          <img src="../assets/icons/chrome_silver_chain_icon.png" alt="" />
          <span>Album World</span></a>
        <a href="/tracks" className="menu-item">
          <img src="../assets/icons/chrome_silver_fangs_icon.png" alt="" />
          <span>Tracklist</span></a>
        <a href="/quiz" className="menu-item">
          <img src="../assets/icons/chrome_silver_star_icon.png" alt="" />
          <span>Quiz</span></a>
        <a href="/members" className="menu-item">
        <img src="../assets/icons/chrome_silver_person_icon.png" alt=""/>
        <span>Members</span></a>
        <a href="/media-hub" className="menu-items">
        <img src="../assets/icons/chrome_silver_knife_icon.png" alt=""/>
        <span>Media Hub</span></a>
        <a href="/mini-game" className="menu-items">
        <img src="../assets/icons/chrome_silver_lighter_icon.png" alt=""/>
        <span>Mini Game</span></a>
        <a href="/stream" className="menu-items">
        <img src="../assets/icons/chrome_silver_musicnote_icon.png" alt=""/>
        <span>Streaming</span></a>
      </div>
    </nav>
  );
}
export default NavBar;