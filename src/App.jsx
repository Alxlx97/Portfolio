import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <NavBar/>
            <main>
                <Hero/>
                <About/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}

export default App
