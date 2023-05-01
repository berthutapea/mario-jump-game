import "./Obstacles.css";
import obstacle1 from "../../../assets/img/gif/goombla.gif";
import obstacle2 from "../../../assets/img/gif/koopa.gif";
import { useRef, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  obstacle1Height,
  obstacle1Left,
  obstacle1Top,
  obstacle1Width,
  obstacle2Height,
  obstacle2Left,
  obstacle2Top,
  obstacle2Width
} from "../../../config/redux/obstacleSlice";
import { setSpeed } from "../../../config/redux/engineSlice";

const Obstacles = () => {
  const dispatch = useDispatch();
  const isPlay = useSelector((state) => state.engine.play);
  const speed = useSelector(state => state.engine.speed);
  const obstacle1Ref = useRef();
  const obstacle2Ref = useRef();

  useEffect(() => {
    setInterval(() => {
      dispatch(obstacle1Height(obstacle1Ref.current.getBoundingClientRect().height));
      dispatch(obstacle1Left(obstacle1Ref.current.getBoundingClientRect().left));
      dispatch(obstacle1Top(obstacle1Ref.current.getBoundingClientRect().top));
      dispatch(obstacle1Width(obstacle1Ref.current.getBoundingClientRect().width));

      dispatch(obstacle2Height(obstacle2Ref.current.getBoundingClientRect().height));
      dispatch(obstacle2Left(obstacle2Ref.current.getBoundingClientRect().left));
      dispatch(obstacle2Top(obstacle2Ref.current.getBoundingClientRect().top));
      dispatch(obstacle2Width(obstacle2Ref.current.getBoundingClientRect().width));
    }, 100);
  }, [dispatch]);

  useEffect(() => {
    if (speed >= 0) {
      setTimeout(() => {
        dispatch(setSpeed(0.0001));
      }, 1000);
    }
  }, [speed, dispatch]);

  return (
    <div className="obstacles-container">
      <img
        src={obstacle1}
        alt=""
        className={isPlay ? "obstacle1 obstacle1-move" : "obstacle1"}
        style={isPlay ? { animationDuration: `${3 - speed}s` } : { animationDuration: `3s` }}
        ref={obstacle1Ref}
      />
      <img
        src={obstacle2}
        alt=""
        className={isPlay ? "obstacle2 obstacle2-move" : "obstacle2"}
        style={isPlay ? { animationDuration: `${6 - speed}s` } : { animationDuration: `6s` }}
        ref={obstacle2Ref}
      />
    </div>
  );
};
export default Obstacles;
