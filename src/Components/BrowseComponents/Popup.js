const Popup = ({ colorCode, gradientName }) => {
  return (
    <div className="popup">
      <div className="popup-title">
        <div id="grad-name">{gradientName}</div>
        <div id="grad-codes">{colorCode.toString()}</div>
      </div>
      <div className="popup-buttons">
        <button id="copy-btn">{`</>`}</button>
        <button className="close">Close</button>
        <button id="add-btn">+</button>
      </div>
      <div className="close-bar"></div>
    </div>
  );
};

export default Popup;
