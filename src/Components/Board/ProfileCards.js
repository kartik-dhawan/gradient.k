import profileCardData from "../../assets/ProfileCards.json";
import Draggable from "react-draggable";

const ProfileCards = () => {
  return (
    <div className="profileCardsContainer">
      <div className="tagDesign">{`< Body >`}</div>
      <div className="innerTagDesignXL">{`< Feature >`}</div>
      {profileCardData.map((card) => {
        return (
          <>
            <span className="innerTagDesign">{`< Feature >`}</span>
            <Draggable handle="#handle">
              <div className="profileCard" id="handle">
                <div className="profileCardHeader">
                  <div className="closeDots"></div>
                  <div className="closeDots"></div>
                  <div className="closeDots"></div>
                  <div className="grabToDrag">Grab to Drag</div>
                </div>
                <div className="profileCardBody">
                  <div className="profileCardTitle">{card.cardTitle}</div>
                  <div className="profileCardText">{card.cardBody}</div>
                </div>
              </div>
            </Draggable>
            <span className="innerTagDesign">{`< / Feature >`}</span>
          </>
        );
      })}
      <div className="innerTagDesignXL">{`< / Feature >`}</div>
      <div className="tagDesign">{`< / Body >`}</div>
    </div>
  );
};

export default ProfileCards;
