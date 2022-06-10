import Profile from "./Board/Profile";
import ProfileCards from "./Board/ProfileCards";

const Board = () => {
  return (
    <div className="boardContainer">
      <Profile />
      <div className="profileCards">
        <ProfileCards />
      </div>
    </div>
  );
};

export default Board;
