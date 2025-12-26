import React, { useEffect, useMemo, useRef } from "react";
import "./Modal.css";

function getFocusable(root) {
  if (!root) return [];
  const nodes = root.querySelectorAll(
    [
      'a[href]',
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])'
    ].join(",")
  );
  return Array.from(nodes).filter((n) => !n.hasAttribute("disabled") && !n.getAttribute("aria-hidden"));
}

export default function Modal({ isOpen, title, onClose, children }) {
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  const labelId = useMemo(() => `modal-title-${Math.random().toString(16).slice(2)}`, []);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the first focusable element; fallback to dialog.
    requestAnimationFrame(() => {
      const focusables = getFocusable(dialogRef.current);
      (focusables[0] || dialogRef.current)?.focus?.();
    });

    function onKeyDown(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key !== "Tab") return;

      const focusables = getFocusable(dialogRef.current);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || !dialogRef.current.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modalOverlay"
      ref={overlayRef}
      role="presentation"
      onMouseDown={(e) => {
        // Close on backdrop clicks only.
        if (e.target === overlayRef.current) onClose?.();
      }}
    >
      <div
        className="modalDialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelId}
        tabIndex={-1}
      >
        <div className="modalHeader">
          <div className="modalTitleBlock">
            <div className="eyebrow">
              <span className="eyebrowDot" aria-hidden="true" />
              Details
            </div>
            <h2 className="modalTitle" id={labelId}>
              {title}
            </h2>
          </div>
          <button className="modalClose" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}


