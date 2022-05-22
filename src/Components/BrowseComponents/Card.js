const Card = ({ GradData, handleColor, handleName }) => {
  let ranLen = 1 + Math.round(Math.random() * 4);
  let cardSize;
  if (ranLen === 1) {
    cardSize = "xsmall";
  } else if (ranLen === 2) {
    cardSize = "small";
  } else if (ranLen === 3) {
    cardSize = "medium";
  } else if (ranLen === 4) {
    cardSize = "large";
  } else if (ranLen === 5) {
    cardSize = "xlarge";
  }

  return (
    <div className={`${cardSize}-card`}>
      <div
        className={`${cardSize}-gradient`}
        style={{
          background: `linear-gradient(to right, ${GradData.colors.map((e) => {
            return `#${e}`;
          })})`,
        }}
      />
      <div className="card-details">
        <div className="gradient-name">{GradData.name}</div>
        <button
          className="details-button"
          onClick={(e) => {
            handleColor(GradData.colors);
            handleName(GradData.name);
            e.preventDefault();
          }}
        >
          ...
        </button>
      </div>
    </div>
  );
};

export default Card;
