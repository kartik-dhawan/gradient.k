import Profile from "./Board/Profile";
import ProfileCards from "./Board/ProfileCards";
import Contact from "./Board/Contact";
import { Parallax } from "react-scroll-parallax";

const Board = () => {
  return (
    <div className="boardContainer">
      <Profile />
      <div className="profileCards">
        <ProfileCards />
        <Parallax speed={20}>
          <Contact />
        </Parallax>
      </div>
    </div>
  );
};

export default Board;
