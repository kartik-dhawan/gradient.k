import React, { useState } from "react";
import { useSelector } from "react-redux";
// used Clipboard Package by installing 'npm install --save react react-copy-to-clipboard'
import { CopyToClipboard } from "react-copy-to-clipboard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CopyDialog = ({ handleDialog }) => {
  const copyCode = useSelector((state) => state.copy.copyData);
  const [copied, setCopied] = useState(false);

  setTimeout(() => {
    handleDialog(true);
  }, 10000);

  const handleCopied = () => {
    setCopied(true);
  };

  return (
    <div className="copy-dialog-container">
      <div className="copy-dialog-timeout">Closing the code popup in 10s</div>
      <div
        className="copy-dialog-code"
        onClick={() => {
          navigator.clipboard.writeText("Hello");
        }}
      >
        {copyCode}
      </div>
      <div className="copy-dialog-button-group">
        {/* wrap the button inside the CopyToClipboard component and pass the text to be copied as a parameter to 'text' */}
        <CopyToClipboard text={copyCode}>
          <button className="copy-dialog-button" onClick={handleCopied}>
            Copy CSS
          </button>
        </CopyToClipboard>
        <button
          className="copy-dialog-button"
          onClick={() => {
            handleDialog(true);
          }}
        >
          Close
        </button>
      </div>
      <div className="success-container">
        {copied ? (
          <div className="copy-dialog-success">
            <CheckCircleIcon className="copy-icon" />
            <span>Copied</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CopyDialog;
