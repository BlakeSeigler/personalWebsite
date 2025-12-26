import React, { useEffect, useRef } from "react";
import "./Home.css";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${x.toFixed(2)}%`);
      el.style.setProperty("--spot-y", `${y.toFixed(2)}%`);
    }

    el.addEventListener("pointermove", onMove, { passive: true });
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="homeWrap">
      <section className="homeHero" ref={heroRef}>
        <div className="container">
          <div className="homeHeroInner">
            <div className="homeTop">
              <h1 className="homeTitle reveal">Blake Seigler</h1>
              <p className="homeLead reveal delay1">
                Minimal interfaces, clear systems, shipped fast.
              </p>
            </div>

            <div className="homeBottom reveal delay2">
              <div className="homeLinksLabel">Elsewhere</div>
              <div className="homeLinks">
                <a className="homeLink" href="https://github.com/" target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="homeLink"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a className="homeLink" href="https://medium.com/" target="_blank" rel="noreferrer">
                  Medium <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

