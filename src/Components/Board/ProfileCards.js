import profileCardData from "../../assets/ProfileCards.json";

const ProfileCards = () => {
  console.log(profileCardData);

  return (
    <div className="profileCardsContainer">
      <div className="tagDesign">{`< Body >`}</div>
      <div className="innerTagDesignXL">{`< Feature >`}</div>
      {profileCardData.map((card) => {
        return (
          <>
            <span className="innerTagDesign">{`< Feature >`}</span>
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
