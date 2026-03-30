import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    return (
        <>
            <NavBar/>
            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}

export default App
