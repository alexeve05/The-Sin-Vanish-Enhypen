import { useState } from "react";
import NavBar from "../components/NavBar";
import albumText from "../assets/text/the_sin_vanish_text.png";
import enhypenText from "../assets/text/enhypen_text.png";
import "../styles/MemberPage.css";
import jungwon from "../assets/members/jungwon.jpg";
import heeseung from "../assets/members/heeseung.jpg";
import jay from "../assets/members/jay.jpg";
import jake from "../assets/members/jake.jpg";
import sunghoon from "../assets/members/sunghoon.jpg";
import sunoo from "../assets/members/sunoo.jpg";
import niki from "../assets/members/niki.jpg";
function MemberPage() {
    const [flippedCard, setFlippedCard] = useState({});
    const toggleCard = (memberName) => {
        setFlippedCard((prev) => ({
            ...prev,
            [memberName]: !prev[memberName]
        }));
    };
    const members = [
        {
            name: "Yang, Jungwon",
            image: jungwon,
            birthDate: "February 9, 2004",
            role: "Leader, Main Vocalist, Lead Dancer",
            mbti: "ISTJ",
            fileNumber: "001"
        },
        {
            name: "Lee, Heeseung",
            image: heeseung,
            birthday: "October 15, 2001",
            role: "Main Vocalist",
            mbti: "ISTP",
            fileNumber: "002"
        },
        {
            name: "Park, Jay",
            image: jay,
            birthday: "April 20, 2002",
            role: "Rapper, Vocalist",
            mbti: "ENTJ",
            fileNumber: "003"
        },
        {
            name: "Sim, Jake",
            image: jake,
            birthday: "November 15, 2002",
            role: "Vocalist",
            mbti: "ISTJ",
            fileNumber: "004"
        },
        {
            name: "Park, Sunghoon",
            image: sunghoon,
            birthday: "December 8, 2002",
            role: "Vocalist",
            mbti: "ISTJ",
            fileNumber: "005"
        },
        {
            name: "Kim, Sunoo",
            image: sunoo,
            birthday: "June 24, 2003",
            role: "Vocalist",
            mbti: "ENFP",
            fileNumber: "006"
        },
        {
            name: "Nishimura, Riki (Ni-Ki)",
            image: niki,
            birthday: "December 9, 2005",
            role: "Main Dancer",
            mbti: "INTJ",
            fileNumber: "007"
        }
    ];
    return (
        <div className="member-page">
            <NavBar />
            <section className="album-hero">
                <img src={albumText} alt="The Sin: Vanish" className="album-title" />
                <img src={enhypenText} alt="ENHYPEN" className="enhypen-title" />
            </section>
            <section className="wanted-section">
                <h1 className="wanted-title">SUSPECT DATABASE</h1>
                <p className="wanted-subtitle">
                    Investigators continue searching for
                    seven individuals connected to the case.
                    Select a poster to reveal classified details.</p>
                <div className="wanted-grid">
                    {members.map((member) => (
                        <div key={member.name} className={`wanted-card ${flippedCard[member.name] ? "flipped" : ""}`} onClick={() => toggleCard(member.name)}>
                            <div className="card-inner">
                                <div className="card-front">
                                    <h2>WANTED</h2>
                                    <img src={member.image} alt={member.name} />
                                    <h3>{member.name}</h3>
                                </div>
                                <div className="card-back">
                                    <h3>{member.name}</h3>
                                    <p><strong>File:</strong>{" "} #{member.fileNumber} </p>
                                    <p><strong>DOB:</strong>{" "} {member.birthDate} </p>
                                    <p><strong>Role:</strong>{" "} {member.role} </p>
                                    <p><strong>Favorite Track:</strong><br /> {member.mbti} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default MemberPage;