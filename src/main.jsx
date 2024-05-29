import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home' 
import About from './pages/About'
// import Profile from './pages/Profile'
// import Work from './pages/Work'
// import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Navbar from './components/Navbar';
import ThemeButton from './components/ThemeButton';
import ScrollToTop from "./components/ScrollToTop.js";

const Overlay = () => {
    return (
        <div className={"constrained-container"}>
            <Navbar/>
            <ThemeButton/>
        </div>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={
                    <>
                        <Overlay />
                        <Home />
                    </>} />
                <Route path="whoami" element={
                    <>
                        <Overlay />
                        <About />
                    </>} />
                <Route path="profile" element={
                    <>
                        <NoPage/>
                        {/*<Overlay />*/}
                        {/*<Profile />*/}
                    </>} />
                <Route path="bin" element={
                    <>
                        <NoPage/>
                        {/*<Overlay />*/}
                        {/*<Work />*/}
                    </>} />
                <Route path="ping" element={
                    <>
                        <NoPage/>
                        {/*<Overlay />*/}
                        {/*<Contact />*/}
                    </>} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
