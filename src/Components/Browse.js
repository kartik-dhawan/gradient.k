import React, { useState } from "react";
import colorsData from "../assets/Colors.json";
import GradientContainer from "./GradientContainer";
import { ColorPalette, Color, ColorCircle } from "./BrowseComponents/Palette";

const Browse = () => {
  const [filtercolor, setFilter] = useState("All");

  const scrollRight = () => {
    document.querySelector(".colorPalette").scrollBy(250, 0);
  };
  const scrollLeft = () => {
    document.querySelector(".colorPalette").scrollBy(-250, 0);
  };

  return (
    <>
      <ColorPalette className="colorPalette" data-testid="gn2">
        <button onClick={scrollLeft}>{"<"}</button>
        <button onClick={scrollRight}>{">"}</button>
        {colorsData.map((data) => {
          return (
            <Color key={data.cid}>
              <div className="border">
                <ColorCircle
                  className={data.colorType}
                  onClick={() => {
                    setFilter(data.colorType);
                  }}
                >
                  K
                </ColorCircle>
              </div>
              <div className="colorTitle">{data.colorType}</div>
            </Color>
          );
        })}
      </ColorPalette>
      <GradientContainer filtercolor={filtercolor}></GradientContainer>
    </>
  );
};

export default Browse;
