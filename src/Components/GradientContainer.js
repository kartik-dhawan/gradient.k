import React, { useState } from "react";
import "../detailsCard.css";
import GradData from "../assets/Gradient.json";
import Card from "./BrowseComponents/Card";
import Popup from "./BrowseComponents/Popup";
import { useSelector } from "react-redux";

const GradientContainer = ({ filtercolor }) => {
  const [colorCode, setColorCode] = useState("");
  const [gradientName, setGradientName] = useState("");

  const popupStatus = useSelector((state) => state.popup.activity);

  const handleColor = (color) => {
    setColorCode(color);
  };

  const handleName = (name) => {
    setGradientName(name);
  };

  return (
    <div>
      <div className="gradient-card-container">
        {filtercolor === "All"
          ? GradData.map((gradient) => {
              return (
                <Card
                  className="grad-card"
                  GradData={gradient}
                  handleColor={handleColor}
                  handleName={handleName}
                  key={Math.random()}
                />
              );
            })
          : GradData.filter(
              (gradient) =>
                gradient.filter[0] === filtercolor ||
                gradient.filter[1] === filtercolor ||
                gradient.filter[2] === filtercolor ||
                gradient.filter[3] === filtercolor ||
                gradient.filter[4] === filtercolor
            ).map((gradient) => {
              return (
                <Card
                  className="grad-card"
                  GradData={gradient}
                  handleColor={handleColor}
                  handleName={handleName}
                  key={Math.random()}
                />
              );
            })}
      </div>
      {popupStatus === true ? (
        <Popup
          className="popup-card"
          colorCode={colorCode}
          gradientName={gradientName}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default React.memo(GradientContainer);
