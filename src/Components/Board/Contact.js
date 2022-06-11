import React from "react";

const Contact = () => {
  const email = "dhawankartik7@gmail.com";

  return (
    <div className="contactPage">
      <div className="contactContainer">
        <div className="detailsContact">
          <div className="contactDetailsHead">I'm always up for a chat</div>
          <div className="contactDetailsBody">Send me an email at {email}</div>
          <div className="contactDetailsBody">or</div>
          <div className="contactDetailsBody">Ping me on social media.</div>
          <div className="socialIcons">
            <svg
              className="linkedinIcon"
              fill="#5d8e5db5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="90px"
              height="90px"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" />
            </svg>
            <svg
              className="instagramIcon"
              fill="#5d8e5db5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="90px"
              height="90px"
            >
              {" "}
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
            </svg>
          </div>
        </div>
        <div className="bitmojiContact">
          <div className="bitmoji"></div>
        </div>
        <div className="bitmojiBlob"></div>
      </div>
    </div>
  );
};

export default Contact;
