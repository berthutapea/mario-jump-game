import "./MobileControls.css";
import { useSelector, useDispatch } from "react-redux";
import { setReady } from "../../../config/redux/engineSlice";
import { marioJumping } from "../../../config/redux/marioSlice";
import { useMemo } from "react";
import jumpAudio from "../../../assets/audio/mario-jump.mp3";

const MobileControls = () => {
  const isPlay = useSelector((state) => state.engine.play);
  const mario_jump = useSelector((state) => state.mario.jumping);
  const isDie = useSelector((state) => state.engine.die);
  const dispatch = useDispatch();

  const jump = useMemo(() => {
    return new Audio(jumpAudio);
  }, []);

  const handleStart = () => {
    if (!isPlay && !isDie) {
      dispatch(setReady(true));
    }
  };
  const handleJump = () => {
    if (mario_jump === false) {
      dispatch(marioJumping(true));
      jump.play();
      setTimeout(() => {
        dispatch(marioJumping(false));
        jump.pause();
        jump.currentTime = 0;
      }, 400);
    }
  };
  return (
    <div className="mobile-controls-container">
      {!isPlay && !isDie && <button className="control-start-button" onClick={handleStart}>START</button>}
      {isDie && !isPlay && <button className="control-die-button">GAME OVER</button>}
      {isPlay && !isDie && <button className="control-jump-button" onClick={handleJump}>JUMP</button>}
    </div>
  )
}
export default MobileControls