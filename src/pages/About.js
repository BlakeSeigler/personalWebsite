import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="pageHeader">
          <div className="eyebrow reveal">
            <span className="eyebrowDot" aria-hidden="true" />
            About
          </div>
          <h1 className="pageTitle reveal delay1">About me</h1>
          <p className="pageSub reveal delay2">
            I'm curious at heart. I love learning about technology, science, business, politics, and philosophy.
          </p>
        </div>

        <div className="aboutGrid">
          <div className="aboutPhoto card">
            <img className="aboutImg" src="/media/SelfPicture.png" alt="Portrait" />
          </div>

          <div className="aboutCopy card">
            <h2 className="aboutH2">A short intro</h2>
            <p className="aboutP">
              I strive to be a generalist. I'm interested in working in materials, robotics, microfabrication, and physical AI, and I want to solve problems in construction, energy, manufacturing, and research infrastructure.
            </p>
            <p className="aboutP">
              When I’m not reading, I'm usually working. When I'm not working, I'm with friends. If you're interested in working together, reach out! I'm always looking for new opportunities to learn and grow.
            </p>

            <div className="aboutList">
              <div className="aboutListRow">
                <div className="aboutLabel">Interests</div>
                <div className="aboutValue">Energy, Robotics, Physical AI, Microfabrication</div>
              </div>
              <div className="aboutListRow">
                <div className="aboutLabel">Style</div>
                <div className="aboutValue">Simplicity, Intensity, Urgency</div>
              </div>
              <div className="aboutListRow">
                <div className="aboutLabel">Currently</div>
                <div className="aboutValue"> Studying math and physics, working at blue sky robotics, building up R.A.M. Engineering @ UNC</div>
              </div>
            </div>
            {/* <div className="aboutNote">
              Replace this whole section with your own bio. It’s intentionally simple.
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}


