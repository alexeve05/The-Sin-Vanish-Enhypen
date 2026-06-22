import NavBar from "../components/NavBar";
import albumText from "../assets/text/the_sin_vanish_text.png";
import enhypenText from "../assets/text/enhypen_text.png";
import "../styles/MediaHubPage.css";
import { useRef } from "react";
function MediaHubPage() {
    const scrollRef = useRef(null);
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -1200,
            behavior: "smooth"
        });
    };
    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 1200,
            behavior: "smooth"
        });
    };
    const evidenceVideos = [
        {
            title: "Evidence File 001",
            thumbnail: "https://via.placeholder.com/400x225"
        },
        {
            title: "Evidence File 002",
            thumbnail: "https://via.placeholder.com/400x225"
        },
        {
            title: "Evidence File 003",
            thumbnail: "https://via.placeholder.com/400x225"
        },
        {
            title: "Evidence File 004",
            thumbnail: "https://via.placeholder.com/400x225"
        },
        {
            title: "Evidence File 005",
            thumbnail: "https://via.placeholder.com/400x225"
        },
        {
            title: "Evidence File 006",
            thumbnail: "https://via.placeholder.com/400x225"
        },
        {
            title: "Evidence File 007",
            thumbnail: "https://via.placeholder.com/400x225"
        },
        {
            title: "Evidence File 008",
            thumbnail: "https://via.placeholder.com/400x225"
        }
    ];
    return(
        <div className="media-hub-page">
            <NavBar />
            <section className="album-hero">
                <img src={albumText} alt="The Sin: Vanish" className="album-title" />
                <img src={enhypenText} alt="ENHYPEN" className="enhypen-title" />
            </section>
            <section className="evidence-section">
                <h1 className="evidence-heading">CASE EVIDENCE</h1>
                <p className="evidence-subheading">Archived interviews, surveillance footage, performance recordings, behind-the-scenes evidence, and investigative materials.</p>
                <div className="scroll-controls">
                    <button onClick={scrollLeft}> ← </button>
                    <button onClick={scrollRight}> → </button>
                </div>
                <div className="evidence-grid" ref={scrollRef}>
                    {evidenceVideos.map((video, index) => (
                        <div className="evidence-card" key={index}>
                            <img src={video.thumbnail} alt={video.title} className="evidence-thumbnail" />
                            <div className="evidence-info">
                                <h3>{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default MediaHubPage;