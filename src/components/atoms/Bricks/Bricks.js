import { useEffect, useState } from "react";
import "./Bricks.css";

const Bricks = () => {
  const [isReady, setIsReady] = useState(false);

  // Check if document is loaded before animating clouds
  useEffect(() => {
    const setLoad = () => setIsReady(true);

    if(document.readyState === "complete") {
      setLoad();
    } else {
      window.addEventListener("load", setLoad);

      // return cleanup function
      return () => window.removeEventListener("load", setLoad);
    }
  },[]);
  return (
    <div className="bricks-container">
        <div className={isReady ? "brick brick-animate" : "brick"}/>
    </div>
  )
}
export default Bricks