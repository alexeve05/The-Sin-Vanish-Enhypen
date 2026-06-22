import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import TracklistPage from "./pages/TracklistPage";
import QuizPage from "./pages/QuizPage";
import MemberPage from "./pages/MemberPage";
import MediaHubPage from "./pages/MediaHubPage";
import MiniGamePage from "./pages/MiniGamePage";
import StreamingPage from "./pages/StreamingPage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/album" element={<AlbumPage />} />
            <Route path="/tracks" element={<TracklistPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/members" element={<MemberPage />} />
            <Route path="/media-hub" element={<MediaHubPage />} />
            <Route path="/mini-game" element={<MiniGamePage />} />
            <Route path="/stream" element={<StreamingPage />} />
        </Routes>
    );
}
export default App;