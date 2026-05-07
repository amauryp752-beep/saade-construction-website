import React from "react";

export default function App() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f1f5f9", color: "#0f172a" }}>
      <header
        style={{
          background: "#ffffff",
          padding: "20px 40px",
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "linear-gradient(135deg,#f97316,#ea580c)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "900",
              fontSize: "32px",
              boxShadow: "0 10px 25px rgba(249,115,22,0.35)",
            }}
          >
            S
          </div>

          <div>
            <h1 style={{ margin: 0, fontSize: "32px", fontWeight: "900" }}>
              SAADE CONSTRUCTION
            </h1>

            <p
              style={{
                margin: 0,
                color: "#64748b",
                letterSpacing: "4px",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              PREMIUM ROOFING & SIDING
            </p>
          </div>
        </div>

        <nav style={{ display: "flex", gap: "30px", fontWeight: "700" }}>
          <span>Home</span>
          <span>Roofing</span>
          <span>Siding</span>
          <span>Contact</span>
        </nav>
      </header>

      <section
        style={{
          minHeight: "85vh",
          background:
            "linear-gradient(rgba(2,6,23,0.8), rgba(2,6,23,0.8)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80') center/cover",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "80px 40px",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              marginBottom: "24px",
            }}
          >
            ✓ Premium roofing and siding specialists
          </div>

          <h2
            style={{
              fontSize: "72px",
              lineHeight: "1.05",
              margin: 0,
              fontWeight: "900",
            }}
          >
            Luxury-level roofing and siding built to last.
          </h2>

          <p
            style={{
              marginTop: "24px",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#cbd5e1",
            }}
          >
            Saade Construction helps homeowners protect and upgrade their
            property with roofing, siding, storm repair, and exterior
            craftsmanship.
          </p>

          <div style={{ marginTop: "36px", display: "flex", gap: "18px" }}>
            <button
              style={{
                background: "#f97316",
                color: "white",
                border: "none",
                padding: "16px 28px",
                borderRadius: "14px",
                fontWeight: "800",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Request Free Estimate
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "16px 28px",
                borderRadius: "14px",
                fontWeight: "800",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 40px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              color: "#f97316",
              letterSpacing: "4px",
              fontWeight: "900",
              fontSize: "12px",
            }}
          >
            OUR SERVICES
          </p>

          <h2 style={{ fontSize: "52px", marginTop: "16px", fontWeight: "900" }}>
            Premium exterior craftsmanship.
          </h2>

          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "Roofing",
                text: "Roof replacement, roof installation, leak repairs, and storm damage.",
              },
              {
                title: "Siding",
                text: "Modern siding installation, repairs, trim work, and upgrades.",
              },
              {
                title: "Exterior Repairs",
                text: "Soffit, fascia, gutters, flashing, and exterior construction repair.",
              },
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  background: "#fff",
                  borderRadius: "24px",
                  padding: "32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 25px rgba(15,23,42,0.06)",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    background: "#0f172a",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "900",
                    marginBottom: "20px",
                  }}
                >
                  S
                </div>

                <h3 style={{ fontSize: "28px", fontWeight: "900" }}>
                  {service.title}
                </h3>

                <p
                  style={{
                    marginTop: "14px",
                    lineHeight: "1.8",
                    color: "#475569",
                  }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f172a", color: "white", padding: "90px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              color: "#fb923c",
              letterSpacing: "4px",
              fontWeight: "900",
              fontSize: "12px",
            }}
          >
            SERVICE AREA
          </p>

          <h2 style={{ fontSize: "52px", marginTop: "16px", fontWeight: "900" }}>
            Serving the Tri-State Area.
          </h2>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            {["New York", "New Jersey", "Pennsylvania"].map((state) => (
              <div
                key={state}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "18px 24px",
                  borderRadius: "18px",
                  fontWeight: "800",
                }}
              >
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 40px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              color: "#f97316",
              letterSpacing: "4px",
              fontWeight: "900",
              fontSize: "12px",
            }}
          >
            CONTACT
          </p>

          <h2 style={{ fontSize: "52px", marginTop: "16px", fontWeight: "900" }}>
            Start your next exterior project.
          </h2>

          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "40px",
            }}
          >
            <div>
              <p style={{ color: "#475569", lineHeight: "1.8" }}>
                Saade Construction is ready for future customer inquiries,
                project photos, reviews, and company expansion.
              </p>

              <div style={{ marginTop: "30px", display: "grid", gap: "16px" }}>
                <div>☎ Phone number coming soon</div>
                <div>✉ Business email coming soon</div>
                <div>⌖ Serving NY, NJ & PA</div>
              </div>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "32px",
                borderRadius: "24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ display: "grid", gap: "16px" }}>
                <input
                  placeholder="Full Name"
                  style={inputStyle}
                />

                <input
                  placeholder="Phone Number"
                  style={inputStyle}
                />

                <input
                  placeholder="Email Address"
                  style={inputStyle}
                />

                <textarea
                  placeholder="Tell us about your project"
                  rows="5"
                  style={inputStyle}
                />

                <button
                  style={{
                    background: "#0f172a",
                    color: "white",
                    border: "none",
                    padding: "16px",
                    borderRadius: "14px",
                    fontWeight: "800",
                    cursor: "pointer",
                  }}
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#020617",
          color: "#94a3b8",
          padding: "30px 40px",
          textAlign: "center",
        }}
      >
        © 2026 Saade Construction • Premium Roofing & Siding
      </footer>
    </main>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
};
