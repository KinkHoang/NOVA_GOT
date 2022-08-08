import React from "react";
import About from "../components/home/About";
import Explore from "../components/home/Explore";
import Hero from "../components/home/Hero";

function Home() {
    return (
        <main style={{ marginTop: 0 }}>
            <Hero />
            <About />
            <Explore />
        </main>
    );
}

export default Home;
