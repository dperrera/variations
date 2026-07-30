"use client";

import { Variations, Variation } from "variations";

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "72px 24px 120px",
      }}
    >
      <p
        style={{
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontSize: 12,
          opacity: 0.6,
          marginBottom: 12,
        }}
      >
        variations example
      </p>

      <Variations
        label="Hero"
        id="hero"
      >
        <Variation
          label="Editorial"
          id="editorial"
        >
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05, margin: "0 0 16px" }}>
            Try the options.
          </h1>
          <p style={{ fontSize: 18, maxWidth: 42 + "ch", lineHeight: 1.5 }}>
            Use the floating panel, press ⌥V to toggle it, 1–9 to pick an option,
            ⌥S to shuffle, and ⌥C to copy a shareable combo.
          </p>
        </Variation>
        <Variation
          label="Split"
          id="split"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 28,
              alignItems: "end",
            }}
          >
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.05, margin: 0 }}>
              Two columns, one decision.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.5, margin: 0 }}>
              Stable <code>id</code> props keep URLs intact when labels change.
            </p>
          </div>
        </Variation>
      </Variations>

      <div style={{ height: 48 }} />

      <Variations
        label="CTA"
        id="cta"
      >
        <Variation
          label="Solid"
          id="solid"
        >
          <button
            type="button"
            style={{
              border: "none",
              background: "#1c1c1c",
              color: "#f7f3ea",
              padding: "12px 18px",
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </Variation>
        <Variation
          label="Ghost"
          id="ghost"
        >
          <button
            type="button"
            style={{
              border: "1px solid #1c1c1c",
              background: "transparent",
              color: "#1c1c1c",
              padding: "12px 18px",
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </Variation>
        <Variation
          label="Text"
          id="text"
        >
          <button
            type="button"
            style={{
              border: "none",
              background: "transparent",
              color: "#1c1c1c",
              padding: 0,
              fontSize: 15,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Continue →
          </button>
        </Variation>
      </Variations>
    </main>
  );
}
