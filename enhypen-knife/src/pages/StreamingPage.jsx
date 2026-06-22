import NavBar from "../components/NavBar";
import albumText from "../assets/text/the_sin_vanish_text.png";
import enhypenText from "../assets/text/enhypen_text.png";
import "../styles/StreamingPage.css";
function StreamingPage() {
    return (
        <div className="streaming-page">
            <NavBar />
            <section className="album-hero">
                <img src={albumText} alt="The Sin: Vanish" className="album-title" />
                <img src={enhypenText} alt="ENHYPEN" className="enhypen-title" />
            </section>
        </div>
    );
}
export default StreamingPage;