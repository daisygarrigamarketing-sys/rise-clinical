"use client";

import { useEffect } from "react";

const POST_URLS = [
  "https://www.instagram.com/p/DbWt0csje4d/",
  "https://www.instagram.com/p/DbpojkpkTWn/",
  "https://www.instagram.com/p/DbqLfrRkTXH/",
  "https://www.instagram.com/p/Dbsjy6RkZq9/",
  "https://www.instagram.com/p/DbvLX9ikba0/",
  "https://www.instagram.com/p/DbxfZAEkYIL/",
  "https://www.instagram.com/p/Db0XbDyESgH/",
];

export default function InstagramShowcase() {
  useEffect(() => {
    const instagramWindow = window as typeof window & {
      instgrm?: { Embeds?: { process: () => void } };
    };
    const processEmbed = () => instagramWindow.instgrm?.Embeds?.process();
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    if (existing) {
      if (instagramWindow.instgrm) processEmbed();
      else existing.addEventListener("load", processEmbed, { once: true });
      return () => existing.removeEventListener("load", processEmbed);
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.addEventListener("load", processEmbed, { once: true });
    document.body.appendChild(script);

    return () => script.removeEventListener("load", processEmbed);
  }, []);

  return (
    <section className="instagram-showcase" aria-labelledby="instagram-heading">
      <div className="instagram-showcase-copy">
        <p className="eyebrow">From Instagram</p>
        <h2 id="instagram-heading">Thoughtful support, one slide at a time.</h2>
        <p>
          Follow along for practical tools, honest reflections, and gentle
          reminders for everyday life.
        </p>
        <a
          href="https://www.instagram.com/rise_clinical_services/"
          target="_blank"
          rel="noreferrer"
        >
          @rise_clinical_services <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="instagram-embed-wrap">
        <p className="instagram-swipe-note">Swipe through our posts <span aria-hidden="true">→</span></p>
        <div className="instagram-post-track" tabIndex={0} aria-label="Instagram posts">
          {POST_URLS.map((postUrl, index) => (
            <div className="instagram-post" key={postUrl}>
              <span className="instagram-post-number">0{index + 1} / 0{POST_URLS.length}</span>
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={postUrl}
                data-instgrm-version="14"
                style={{ background: "#fff", border: 0, margin: 0, maxWidth: 540, minWidth: 326, padding: 0, width: "100%" }}
              >
                <a href={postUrl} target="_blank" rel="noreferrer">
                  View this carousel on Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
