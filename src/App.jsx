import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <NavBar/>
            <main>
                <Hero/>
                <About/>
            </main>
            <Footer/>
        </>
    )
}

export default App
