import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home' 
import About from './pages/About'
import Profile from './pages/Profile'
import Work from './pages/Work'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Navbar from './components/Navbar';
import ThemeButton from './components/ThemeButton';
import ScrollToTop from "./components/ScrollToTop.js";

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className={"constrained-container"}>
                <Navbar />
                <ThemeButton />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="whoami" element={<About />} />
                <Route path="profile" element={<Profile />} />
                <Route path="bin" element={<Work />} />
                <Route path="ping" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
