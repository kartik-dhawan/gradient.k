import React, { useState } from "react";
import "../App.css";
import "../detailsCard.css";
import GradData from "../assets/Gradient.json";

const Card = ({ GradData, handleColor }) => {
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
            e.preventDefault();
          }}
        >
          ...
        </button>
      </div>
    </div>
  );
};

const Popup = ({ colorCode }) => {
  return (
    <div
      className="popup"
      style={{
        display: "fixed",
        top: 600,
        left: 0,
        padding: "10px",
        backgroundColor: "red",
      }}
    >
      <span>{colorCode.toString()}</span>
    </div>
  );
};

const GradientContainer = ({ filtercolor }) => {
  const [colorCode, setColorCode] = useState("");
  console.log(filtercolor);
  const handleColor = (color) => {
    setColorCode(color);
  };

  return (
    <div>
      <div className="gradient-card-container">
        {filtercolor == "All"
          ? GradData.map((gradient) => {
              return (
                <Card
                  className="grad-card"
                  GradData={gradient}
                  handleColor={handleColor}
                  key={Math.random()}
                />
              );
            })
          : GradData.filter(
              (gradient) =>
                gradient.filter[0] == filtercolor ||
                gradient.filter[1] == filtercolor ||
                gradient.filter[2] == filtercolor ||
                gradient.filter[3] == filtercolor ||
                gradient.filter[4] == filtercolor
            ).map((gradient) => {
              return (
                <Card
                  className="grad-card"
                  GradData={gradient}
                  handleColor={handleColor}
                  key={Math.random()}
                />
              );
            })}
      </div>

      {colorCode && <Popup colorCode={colorCode} />}
    </div>
  );
};

export default GradientContainer;
