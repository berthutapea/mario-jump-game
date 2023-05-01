import "../../App.css";
import { useSelector } from "react-redux";
import { Birds, Bricks, Clouds, Mario, Obstacles, Sun, KeyMessage, LoadingScreen, Score, MobileControls, Footer } from "../../components";

function AppRoutes() {
    const isPlay = useSelector((state) => state.engine.play);
    const isLoading = useSelector((state) => state.engine.loadingScreen);
    return (
        <>
            {isLoading && <LoadingScreen />}
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

export default AppRoutes;
