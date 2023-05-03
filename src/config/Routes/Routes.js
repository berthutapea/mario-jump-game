import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../../App.css";
import { useSelector } from "react-redux";
import { Birds, Bricks, Clouds, Mario, Obstacles, Sun, KeyMessage, LoadingScreen, Score, MobileControls, Footer } from "../../components";

function Home() {
    const isPlay = useSelector((state) => state.engine.play);
    return (
        <>
            <div className="App">
                {!isPlay && <KeyMessage />}
                <Bricks />
                <Mario />
                <Sun />
                <Clouds />
                <Birds />
                <Obstacles />
                <Score />
            </div>
            <MobileControls />
            <Footer />
        </>
    );
}

function AppRoutes() {
    const isLoading = useSelector((state) => state.engine.loadingScreen);
    return (
        <BrowserRouter>
            {isLoading && <LoadingScreen />}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
