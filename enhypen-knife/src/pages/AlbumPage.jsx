import NavBar from "../components/NavBar";
import "../styles/AlbumPage.css";
import albumText from "../assets/text/the_sin_vanish_text.png";
import enhypenText from "../assets/text/enhypen_text.png";
function AlbumPage() {
    return (
        <div className="album-page">
            <NavBar />
            <section className="album-hero">
                <img src={albumText} alt="The Sin: Vanish" className="album-title" />
                <img src={enhypenText} alt="ENHYPEN" className="enhypen-title" />
                <p className="case-subtitle">CLASSIFIED INVESTIGATION ARCHIVE</p>
            </section>
            <section className="case-file-container">
                <div className="case-selection">
                    <div className="case-label">
                        FILE 001 - VAMPIRE ORIGIN THEORY
                    </div>
                    <div className="case-paper">
                        <p>INSERT PARAGRAPH HERE. THIS SECTION WILL EXPLAIN ENHYPEN'S VAMPIRE STORYLINE ORIGIN, FAN THEORIES, MUSIC VIDEO CONNECTIONS, AND NARRATIVE TIMELINE.</p>
                    </div>
                </div>
                <div className="case-selection">
                    <div className="case-label">
                        FILE 002 - THE SIN: VANISH STORYLINE
                    </div>
                    <div className="case-paper">
                        <p>INSERT PARAGRAPH HERE. THIS SECTION FOLLOWS THE ALBUM CHRONOLOGICALLY THROUGH EACH TRACK AND STORY LINE DEVELOPMENT.</p>
                    </div>
                </div>
                <div className="case-selection">
                    <div className="case-label">
                        FILE 003 - SYMBOLISM AND HIDDEN MEANINGS
                    </div>
                    <div className="case-paper">
                        <p>DISCUSS HIDDEN SYMBOLS, LYRIC MEANING, VISUAL STORYTELLING, RECURRING IMAGERY, AND CONNECTIONS BETWN MUSIC VIDEOS</p>
                    </div>
                </div>
                <div className="case-selection">
                    <div className="case-label">
                        FILE 004 - INCIDENT REPORTS
                    </div>
                    <div className="case-paper">
                        <p>INCLUDE RELEASE DATES, TEASER ROLLOUTS, PERFORMANCES, INTERVIEWS, CHARTING, AND AWARD SHOW ACHIEVEMENTS.</p>
                    </div>
                </div>
            </section>
            <footer className="album-footer">
                Fan-made ENHHYPEN project. Not official.
            </footer>
        </div>
    );
}
export default AlbumPage;