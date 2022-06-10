import profileCardData from "../../assets/ProfileCards.json";

const ProfileCards = () => {
  console.log(profileCardData);

  return (
    <div className="profileCardsContainer">
      {profileCardData.map((card) => {
        return (
          <div className="profileCard">
            <div className="profileCardHeader">
              <div className="closeDots"></div>
              <div className="closeDots"></div>
              <div className="closeDots"></div>
            </div>
            <div className="profileCardBody">
              <div className="profileCardTitle">{card.cardTitle}</div>
              <div className="profileCardText">{card.cardBody}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCards;
