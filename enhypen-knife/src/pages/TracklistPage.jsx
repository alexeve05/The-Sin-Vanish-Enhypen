import { useState } from "react";
import NavBar from "../components/NavBar";
import albumText from "../assets/text/the_sin_vanish_text.png";
import enhypenText from "../assets/text/enhypen_text.png";
import "../styles/TracklistPage.css";
function TracklistPage() {
    const [selectedSong, setSelectedSong] = useState(null);
    const songs = [
        {
            title: "No Way Back",
            audio: "#",
            meaning:
                "“No Way Back” is a dark, emotionally charged track that explores the idea of irreversible choices and surrendering to fate. Built on haunting instrumentals and intense vocals, the song captures a moment of crossing the point of no return, where fear, doubt, and the past are left behind. With themes of destiny, inner conflict, and self-destruction, “No Way Back” reflects ENHYPEN’s signature storytelling style, blending romance with danger in a cinematic, almost tragic atmosphere.",
            tags: ["Fate", "Addiction", "Irreversible Choices"]
        },
        {
            title: "Knife",
            audio: "#",
            meaning:
                "Set against a psychedelic, trap-influenced beat, “KNIFE” serves as ENHYPEN’s warning to rivals, asserting dominance and flaunting razor-sharp skills. The track remains true to the group’s signature dark aesthetic while revealing their versatility as they explore trap-rap on their first 2026 album, THE SIN : VANISH. The repetitive use of “knife” represents the themes of forbidden love and survival.It gives a “sharp” sense of confident energy against social taboos.The “knife” acts as a tool of confrontation and encourages the intense atmosphere that the song contains.",
            tags: ["Obsession", "Temptation", "Violence"]
        },
        {
            title: "Stealer",
            audio: "#",
            meaning:
                "At its core, the song captures a sense of audacious pursuit — not just of another person, but of desire, thrill, and risk itself. The lyrics reflect that tension of chasing something exhilarating and forbidden, as if the protagonist has crossed lines with no intention of returning. Rather than fear, there’s an almost magnetic attraction to the chase; it’s about craving what’s “off-limits,” grabbing it, and running. This thematic focus mirrors the album’s ongoing narrative of fugitives and forbidden love, reinforcing the idea that in a world full of rules and boundaries, the characters are defined not by compliance but by rebellion.",
            tags: ["Desire", "Possession", "Secrets"]
        },
        {
            title: "Sleep Tight",
            audio: "#",
            meaning:
                "The song serves as a lyrical promise of safety, ensuring that the listener can find peace in the “night” that the group has claimed as their own. Lyrically, the track leans heavily into the group’s established vampire lore, focusing on themes of eternal rest and the paradoxical comfort found in darkness.With lines like “Don’t wake up yet, the moon is still ours,” it frames the night not as a place of fear, but as a sanctuary where the “sins” mentioned in the album title finally vanish.This thematic depth has made it a favorite among ENGENEs who follow the DARK MOON webtoon connections, as it echoes the protective instincts the characters show toward their fated partner, Sooha.",
            tags: ["Dreams", "Comfort", "Night"]
        },
        {
            title: "Big Girls Don't Cry",
            audio: "#",
            meaning:
                "This track marks a stylistic shift for the group, leaning into a “protective anthem” vibe that contrasts with their more intense, supernatural-themed title tracks. The song’s core message centers on providing a sanctuary for someone experiencing heartbreak, famously opening with the line, “My mama said, ‘Big girls don’t cry. It only hurts if you let it’”. Fans and critics alike have praised the track for its refined melody and the members' emotive vocal delivery, which you can see in their official concept film from BELIFT LAB. Visually, the song was promoted through a distinct cowboy- inspired aesthetic, with teaser images and videos featuring the members in a vast desert setting.This rugged yet vulnerable look was designed to mirror the song’s themes of resilience and emotional strength.During their promotional cycle, ENHYPEN showcased the track’s choreography and live vocals on major music programs, including a high - energy stage on KBS Music Bank.These performances highlighted a more mature side of the group, moving away from dark fantasy into a grounded, almost cinematic western style that resonated deeply with their global fanbase, ENGENE.",
            tags: ["Growth", "Heartbreak", "Strength"]
        },
        {
            title: "Lost Island",
            audio: "#",
            meaning:
                "This song serves as a “luxurious and intimate celebration” of shared time, positioning the moments spent together as a currency more valuable than any material wealth. The track is built around the metaphor of a private “paradise” or “shelter” where the group can escape the pressures of the outside world, effectively locking the doors to preserve their happiest memories like a time capsule. Musically, the song is an alternative R& B track that highlights the members' vocal versatility and “extravagant normalcy.” The lyrics emphasize the concept of seclusion, with lines like “There’s nothing more precious than time, than time with you” and “I’ll close the door to this time so no one can find us”. This narrative fits into the broader THE SIN series lore, which follows a vampire’s journey of escape and protection amidst anxiety and intense desire, framing the “Lost Island” as a necessary refuge for survival and emotional peace.",
            tags: ["Isolation", "Escape", "Hope"]
        }
    ];
    return (
        <div className="tracklist-page">
            <NavBar />
            <section className="album-hero">
                <img src={albumText} alt="The Sin: Vanish" className="album-title" />
                <img src={enhypenText} alt="ENHYPEN" className="enhypen-title"/>
            </section>
            <section className="tracklist-header">
                <h1>Recovered Audio Evidence</h1>
                <p>Classified files recovered from the SIN: VANISH investigation. </p>
            </section>
            <section className="desktop-grid">
                {songs.map((song) => (
                    <button
                        key={song.title}
                        className="desktop-folder"
                        onClick={() => setSelectedSong(song)} >
                        <div className="folder-icon">📁</div>
                        <span>{song.title}</span>
                    </button>
                ))}
            </section>
            {selectedSong && (
                <section className="file-window">
                    <div className="window-topbar">
                        <span>CONFIDENTIAL_TRACK_FILE.exe</span>
                    </div>
                    <div className="window-content">
                        <h2>{selectedSong.title}</h2>
                        <audio controls className="audio-player">
                            <source src={selectedSong.audio} type="audio/mpeg" />
                        </audio>
                        <div className="evidence-section">
                            <h3>CASE NOTES</h3>
                            <p>{selectedSong.meaning}</p>
                        </div>
                        <div className="evidence-section">
                            <h3>EVIDENCE TAGS</h3>
                            <div className="tag-container">
                                {selectedSong.tags.map((tag) => (
                                    <span key={tag} className="evidence-tag">#{tag} </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <footer className="analysis-credit">
                Lyric analysis and interpretation sourced from Genius.com.
                All song rights belong to ENHYPEN and BELIFT LAB.
            </footer>
        </div>
    );
}
export default TracklistPage;