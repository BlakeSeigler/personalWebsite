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
            This is placeholder text—swap it with your own story whenever you’re ready.
          </p>
        </div>

        <div className="aboutGrid">
          <div className="aboutPhoto card">
            <img className="aboutImg" src="/media/SelfPicture.png" alt="Portrait" />
          </div>

          <div className="aboutCopy card">
            <h2 className="aboutH2">A short intro</h2>
            <p className="aboutP">
              I like building things that feel obvious to use. My work sits somewhere between
              thoughtful UI and strong systems: clear constraints, clean architecture, and details
              that make the experience feel calm.
            </p>
            <p className="aboutP">
              When I’m not coding, I’m usually reading, sketching ideas, or refining a project by
              removing what doesn’t need to be there.
            </p>

            <div className="aboutList">
              <div className="aboutListRow">
                <div className="aboutLabel">Interests</div>
                <div className="aboutValue">Frontends, systems, robotics, writing</div>
              </div>
              <div className="aboutListRow">
                <div className="aboutLabel">Style</div>
                <div className="aboutValue">Minimal, fast, readable</div>
              </div>
              <div className="aboutListRow">
                <div className="aboutLabel">Currently</div>
                <div className="aboutValue">Building and documenting projects here</div>
              </div>
            </div>

            <div className="aboutNote">
              Replace this whole section with your own bio. It’s intentionally simple.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


