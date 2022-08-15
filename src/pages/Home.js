import React from "react";
import About from "../components/home/About";
import Explore from "../components/home/Explore";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar.js"
function Home() {
    return (
        <main style={{ marginTop: 0 }}>
            <Navbar/>
            <Hero />
            <About />
            <Explore />
        </main>
    );
}

export default Home;
