import React, { useMemo, useState } from "react";
import Modal from "../components/Modal";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [activeId, setActiveId] = useState(null);

  const active = useMemo(() => projects.find((p) => p.id === activeId), [activeId]);

  return (
    <section className="section">
      <div className="container">
        <div className="pageHeader">
          <div className="eyebrow reveal">
            <span className="eyebrowDot" aria-hidden="true" />
            Work
          </div>
          <h1 className="pageTitle reveal delay1">Projects</h1>
          <p className="pageSub reveal delay2">
            A few things I’ve built. Click a card for a longer write-up and links.
          </p>
        </div>

        <div className="projectsGrid">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              className="projectCard card"
              onClick={() => setActiveId(p.id)}
            >
              <div className="projectImgWrap">
                <img className="projectImg" src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="projectMeta">
                <div className="projectTitle">{p.title}</div>
                <div className="projectDesc">{p.shortDescription}</div>
              </div>
            </button>
          ))}
        </div>

        <Modal isOpen={Boolean(active)} title={active?.title} onClose={() => setActiveId(null)}>
          {active ? (
            <div className="projectModal">
              <div className="projectModalTop">
                <img className="projectModalImg" src={active.image} alt={active.title} />
                <div className="projectModalSummary">
                  <p className="projectModalLong">{active.longDescription}</p>

                  <div className="projectChips">
                    {active.tech?.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="projectLinks">
                    {active.links?.map((l) => (
                      <a
                        key={l.href}
                        className="btn projectLinkBtn"
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>

                  <div className="kbdHint">Tip: press ESC to close.</div>
                </div>
              </div>
            </div>
          ) : null}
        </Modal>
      </div>
    </section>
  );
}


