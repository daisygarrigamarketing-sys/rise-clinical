"use client";

import { useState } from "react";

const approaches = [
  {
    number: "01",
    title: "Cognitive Behavioral Therapy",
    short: "CBT",
    image: "/images/approach-cbt.png",
    description: "Helps you notice patterns between your thoughts, feelings, and behaviors—and practice new ways of responding.",
  },
  {
    number: "02",
    title: "Dialectical Behavior Therapy",
    short: "DBT",
    image: "/images/approach-dbt.png",
    description: "Builds practical skills for navigating intense emotions, relationships, and difficult moments with greater steadiness.",
  },
  {
    number: "03",
    title: "Motivational Interviewing",
    short: "",
    image: "/images/approach-mi.png",
    description: "A collaborative approach that helps you explore uncertainty, strengthen motivation, and move toward meaningful change.",
  },
  {
    number: "04",
    title: "Person-Centered Therapy",
    short: "",
    image: "/images/approach-pct.png",
    description: "A warm, nonjudgmental space where your experience leads and you can feel fully seen, heard, and accepted.",
  },
  {
    number: "05",
    title: "Family Systems",
    short: "",
    image: "/images/approach-family.png",
    description: "Explores relationship patterns and family dynamics so connection, understanding, and lasting change can grow.",
  },
];

export default function ApproachExperience() {
  const [active, setActive] = useState(0);
  const selected = approaches[active];

  return (
    <section
      className="healing-installation"
      aria-labelledby="healing-heading"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        event.currentTarget.style.setProperty("--garden-back-x", `${x * -3}px`);
        event.currentTarget.style.setProperty("--garden-mid-x", `${x * 5}px`);
        event.currentTarget.style.setProperty("--garden-front-x", `${x * 8}px`);
        event.currentTarget.style.setProperty("--garden-back-y", `${y * -1}px`);
        event.currentTarget.style.setProperty("--garden-mid-y", `${y * 1.5}px`);
        event.currentTarget.style.setProperty("--garden-front-y", `${y * 2}px`);
      }}
      onPointerLeave={(event) => {
        ["--garden-back-x", "--garden-mid-x", "--garden-front-x", "--garden-back-y", "--garden-mid-y", "--garden-front-y"].forEach((property) => {
          event.currentTarget.style.setProperty(property, "0px");
        });
      }}
    >
      <div className="healing-heading-block">
        <h2 id="healing-heading">
          There is no <span>one-size-fits-all</span> version of <span>healing.</span>
        </h2>
        <p className="bloom-instruction">Choose a bloom to explore. <i aria-hidden="true">⟶</i></p>
      </div>

      <div className="bloom-stage" aria-label="Five therapy approaches represented by botanical sculptures">
        <span className="garden-grass garden-grass-back" aria-hidden="true" />
        <span className="garden-grass garden-grass-mid" aria-hidden="true" />
        <span className="garden-grass garden-grass-front" aria-hidden="true" />
        {approaches.map((approach, index) => (
          <button
            className={`bloom-button bloom-${index + 1}${active === index ? " is-active" : ""}`}
            key={approach.number}
            type="button"
            aria-label={`Explore ${approach.title}`}
            aria-pressed={active === index}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <img src={approach.image} alt="" />
            <span><b>{approach.number}</b>{approach.short || approach.title}</span>
          </button>
        ))}
      </div>

      <div className="approach-detail" aria-live="polite" key={selected.number}>
        <span>{selected.number}</span>
        <h3>{selected.title}</h3>
        {selected.short && <p className="approach-short">{selected.short}</p>}
        <i aria-hidden="true" />
        <p>{selected.description}</p>
      </div>

      <div className="healing-mobile">
        <div
          className="mobile-bloom-track"
          tabIndex={0}
          aria-label="Choose one of five therapy flowers"
        >
          {approaches.map((approach, index) => (
            <button
              className={`mobile-bloom-slide${active === index ? " is-active" : ""}`}
              key={approach.number}
              type="button"
              aria-label={`Explore ${approach.title}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span className="mobile-bloom-art"><img src={approach.image} alt="" /></span>
              <span className="mobile-bloom-number">{approach.number}</span>
            </button>
          ))}
        </div>
        <div className="mobile-approach-detail" aria-live="polite" key={selected.number}>
          <span>{selected.number} / 05</span>
          <h3>{selected.title}</h3>
          {selected.short && <p className="approach-short">{selected.short}</p>}
          <i aria-hidden="true" />
          <p>{selected.description}</p>
        </div>
        <div className="mobile-bloom-progress" aria-hidden="true">
          <span>{selected.number} / 05</span>
          <i><b style={{ width: `${(active + 1) * 20}%` }} /></i>
        </div>
      </div>
    </section>
  );
}
