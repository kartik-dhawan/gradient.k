import React, { useState } from "react";
import CopyDialog from "./CopyDialog";
import { useSelector, useDispatch } from "react-redux";
import { removePopup } from "../../redux/reducers/popupSlice";
import { copyToClipboard } from "../../redux/reducers/copySlice";

const Popup = ({ colorCode, gradientName }) => {
  const popupStatus = useSelector((state) => state.popup.activity);
  const dispatch = useDispatch();

  const [act, setAct] = useState(false);
  console.log(act);

  const handleDialog = (act) => {
    setAct(!act);
  };

  return (
    <div className="popup">
      <div className="popup-title">
        <div id="grad-name">{gradientName}</div>
        <div id="grad-codes">{colorCode.join(" | ")}</div>
      </div>
      <div className="popup-buttons">
        <button
          id="copy-btn"
          onClick={() => {
            console.log("Copied");
            dispatch(copyToClipboard(colorCode));
            handleDialog();
          }}
        >{`</>`}</button>
        <button
          className="close"
          onClick={() => {
            dispatch(removePopup(popupStatus));
          }}
        >
          Close
        </button>
        <button id="add-btn">+</button>
      </div>
      <div className="close-bar"></div>
      {act === true ? <CopyDialog handleDialog={handleDialog} /> : ""}
    </div>
  );
};

export default React.memo(Popup);
