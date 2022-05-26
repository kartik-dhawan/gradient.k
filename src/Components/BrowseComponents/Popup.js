import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePopup } from "/Users/kartik.dhawan/react.js/gradient.k/src/redux/reducers/popupSlice.js";

const Popup = ({ colorCode, gradientName }) => {
  const popupStatus = useSelector((state) => state.popup.activity);
  const dispatch = useDispatch();

  return (
    <div className="popup">
      <div className="popup-title">
        <div id="grad-name">{gradientName}</div>
        <div id="grad-codes">{colorCode.toString()}</div>
      </div>
      <div className="popup-buttons">
        <button id="copy-btn">{`</>`}</button>
        <button
          className="close"
          onClick={() => {
            console.log("closed popup");
            dispatch(removePopup(popupStatus));
          }}
        >
          Close
        </button>
        <button id="add-btn">+</button>
      </div>
      <div className="close-bar"></div>
    </div>
  );
};

export default React.memo(Popup);
