import React from "react";
export default function Body() {
  return (
    <div className="MainContent">
      <div className="intro">
        <h1 className="Uname">Kirollos Aziz</h1>
        <h4 id="job">Frontend Developer</h4>
        <p className="DotSite">kirollosedhom.website</p>
        <div className="ButtonDetails">
          <div className="TwinButtons">
            <a href="mailto:karlo.gamesuwu@gmail.com">
              <button className="MailButton">
                {" "}
                <i className="fa-solid fa-envelope"></i>
                Email
              </button>
            </a>{" "}
            <a href="https://www.linkedin.com/in/kirollos-aziz-31168a234/">
              <button className="LinkedButton">
                {" "}
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn
              </button>
            </a>{" "}
          </div>
          <div className="Description">
            <h2>About</h2>
            <p>
              I am a curious frontend developer always looking for something to
              learn in every situation i face.
            </p>

            <h2>Interests</h2>
            <p>Food Expert. Music Enthusiast. Traveler.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
