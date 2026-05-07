import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    document.title = "Saade Construction | Premium Roofing & Siding";
  }, []);

  const goToPage = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "roofing") {
    return (
      <main style={styles.page}>
        <Header goToPage={goToPage} />
        <section style={styles.serviceHero}>
          <div style={styles.heroOverlay}></div>

          <div style={styles.serviceInner}>
            <p style={styles.orangeMini}>Roofing Services</p>

            <h1 style={styles.serviceTitle}>
              Premium roofing built for long-term protection.
            </h1>

            <p style={styles.serviceText}>
              Roof replacement, storm repair, leak repair, flashing, ventilation,
              and premium exterior craftsmanship.
            </p>

            <button
              style={styles.primaryButton}
              onClick={() => goToPage("home")}
            >
              Back Home
            </button>
          </div>
        </section>
      </main>
    );
  }

  if (page === "siding") {
    return (
      <main style={styles.page}>
        <Header goToPage={goToPage} />
        <section style={styles.serviceHero}>
          <div style={styles.heroOverlay}></div>

          <div style={styles.serviceInner}>
            <p style={styles.orangeMini}>Siding Services</p>

            <h1 style={styles.serviceTitle}>
              Modern siding upgrades that improve curb appeal.
            </h1>

            <p style={styles.serviceText}>
              Vinyl siding, exterior renovations, trim work, soffit, fascia,
              repairs, and full siding replacement.
            </p>

            <button
              style={styles.primaryButton}
              onClick={() => goToPage("home")}
            >
              Back Home
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <Header goToPage={goToPage} />

      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <div style={styles.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div style={styles.pill}>
              ✓ Premium roofing and siding specialists
            </div>

            <h1 style={styles.heroTitle}>
              Luxury-level roofing and siding built to last.
            </h1>

            <p style={styles.heroText}>
              Saade Construction helps homeowners protect and upgrade their
              property with roofing, siding, storm repair, and exterior
              craftsmanship.
            </p>

            <div style={styles.buttonRow}>
              <a href="#contact" style={styles.primaryButton}>
                Request Free Estimate
              </a>

              <a href="#services" style={styles.secondaryButton}>
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            style={styles.heroCard}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 style={styles.cardTitle}>
              Built for curb appeal and protection
            </h3>

            {[
              "Premium roof replacement and repairs",
              "Modern siding installation and upgrades",
              "Storm damage inspection and repair",
              "Soffit, fascia, gutters, flashing, and trim",
            ].map((item) => (
              <div key={item} style={styles.checkLine}>
                <span style={styles.check}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeading}>
            <p style={styles.label}>Services</p>

            <h2 style={styles.sectionTitle}>
              Premium exterior craftsmanship.
            </h2>
          </div>

          <div style={styles.grid}>
            <button
              style={styles.cardButton}
              onClick={() => goToPage("roofing")}
            >
              <motion.div whileHover={{ y: -6 }} style={styles.serviceCard}>
                <div style={styles.iconBox}>⌂</div>

                <h3 style={styles.smallTitle}>Roofing</h3>

                <p style={styles.cardText}>
                  Roof replacement, leak repair, flashing, storm damage repair,
                  and full roofing systems.
                </p>

                <div style={styles.learnMore}>Learn More →</div>
              </motion.div>
            </button>

            <button
              style={styles.cardButton}
              onClick={() => goToPage("siding")}
            >
              <motion.div whileHover={{ y: -6 }} style={styles.serviceCard}>
                <div style={styles.iconBox}>▣</div>

                <h3 style={styles.smallTitle}>Siding</h3>

                <p style={styles.cardText}>
                  Modern siding installation, trim upgrades, soffit, fascia,
                  and exterior improvements.
                </p>

                <div style={styles.learnMore}>Learn More →</div>
              </motion.div>
            </button>

            <motion.div whileHover={{ y: -6 }} style={styles.serviceCard}>
              <div style={styles.iconBox}>◆</div>

              <h3 style={styles.smallTitle}>Exterior Repairs</h3>

              <p style={styles.cardText}>
                Gutters, storm damage, exterior repairs, flashing, and
                weather protection upgrades.
              </p>

              <div style={styles.learnMore}>Learn More →</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={styles.whiteSection}>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutImage}></div>

          <div>
            <p style={styles.label}>About Saade Construction</p>

            <h2 style={styles.sectionTitle}>
              Built with precision and premium craftsmanship.
            </h2>

            <p style={styles.cardText}>
              Saade Construction is a modern roofing and siding company focused
              on high-quality workmanship, clean exterior finishes, and reliable
              customer service.
            </p>

            <div style={styles.featureGrid}>
              {[
                "Free estimates",
                "Premium materials",
                "Exterior craftsmanship",
                "Storm damage repair",
              ].map((item) => (
                <div key={item} style={styles.feature}>
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            <div>
              <p style={styles.label}>Contact</p>

              <h2 style={styles.sectionTitle}>
                Start your next exterior project.
              </h2>

              <p style={styles.cardText}>
                Reach out today for roofing, siding, and exterior construction
                estimates.
              </p>
            </div>

            <div style={styles.contactCard}>
              <input style={styles.input} placeholder="Full Name" />
              <input style={styles.input} placeholder="Phone Number" />
              <input style={styles.input} placeholder="Email Address" />

              <textarea
                style={styles.textarea}
                placeholder="Tell us about your project"
              ></textarea>

              <button style={styles.submitButton}>
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Header({ goToPage }) {
  return (
    <header style={styles.header}>
      <button
        style={styles.brandButton}
        onClick={() => goToPage("home")}
      >
        <div style={styles.logoWrap}>
          <div style={styles.logoRoof}></div>
          <div style={styles.logoBase}></div>
          <span style={styles.logoS}>S</span>
        </div>

        <div>
          <h2 style={styles.brandTitle}>SAADE CONSTRUCTION</h2>

          <p style={styles.brandSub}>
            PREMIUM ROOFING & SIDING
          </p>
        </div>
      </button>

      <nav style={styles.nav}>
        <button
          style={styles.navButton}
          onClick={() => goToPage("home")}
        >
          Home
        </button>

        <button
          style={styles.navButton}
          onClick={() => goToPage("roofing")}
        >
          Roofing
        </button>

        <button
          style={styles.navButton}
          onClick={() => goToPage("siding")}
        >
          Siding
        </button>

        <a href="#contact" style={styles.navLink}>
          Contact
        </a>
      </nav>

      <a href="#contact" style={styles.estimateButton}>
        Estimate
      </a>
    </header>
  );
}

const styles = {
  page: {
    margin: 0,
    background: "#f1f5f9",
    fontFamily: "Inter, Arial, sans-serif",
    color: "#0f172a",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #e2e8f0",
    padding: "18px 5vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brandButton: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },

  logoWrap: {
    width: "68px",
    height: "68px",
    borderRadius: "18px",
    background: "linear-gradient(135deg,#ff8a18,#f97316)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: "0 18px 35px rgba(249,115,22,0.28)",
  },

  logoRoof: {
    position: "absolute",
    width: "38px",
    height: "38px",
    borderTop: "6px solid white",
    borderLeft: "6px solid white",
    transform: "rotate(45deg)",
    top: "12px",
  },

  logoBase: {
    position: "absolute",
    bottom: "13px",
    width: "34px",
    height: "6px",
    background: "white",
    borderRadius: "999px",
  },

  logoS: {
    position: "absolute",
    bottom: "18px",
    color: "white",
    fontWeight: 900,
    fontSize: "28px",
  },

  brandTitle: {
    margin: 0,
    fontSize: "28px",
    fontWeight: 900,
  },

  brandSub: {
    margin: "4px 0 0",
    color: "#64748b",
    letterSpacing: "0.28em",
    fontSize: "11px",
    fontWeight: 700,
  },

  nav: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },

  navButton: {
    border: "none",
    background: "transparent",
    fontWeight: 700,
    cursor: "pointer",
  },

  navLink: {
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: 700,
  },

  estimateButton: {
    background: "#020617",
    color: "white",
    padding: "14px 24px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: 800,
  },

  hero: {
    minHeight: "760px",
    backgroundImage:
      "linear-gradient(120deg,rgba(2,6,23,0.96),rgba(15,23,42,0.72)),url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top left, rgba(249,115,22,0.25), transparent 35%)",
  },

  heroInner: {
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "110px 5vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "48px",
    alignItems: "center",
  },

  pill: {
    display: "inline-flex",
    padding: "12px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    marginBottom: "24px",
  },

  heroTitle: {
    fontSize: "clamp(50px,7vw,88px)",
    lineHeight: 1,
    fontWeight: 950,
    margin: 0,
  },

  heroText: {
    color: "#cbd5e1",
    fontSize: "19px",
    lineHeight: 1.8,
    marginTop: "24px",
  },

  buttonRow: {
    display: "flex",
    gap: "16px",
    marginTop: "32px",
    flexWrap: "wrap",
  },

  primaryButton: {
    background: "#f97316",
    color: "white",
    border: "none",
    borderRadius: "14px",
    padding: "16px 24px",
    textDecoration: "none",
    fontWeight: 800,
    cursor: "pointer",
  },

  secondaryButton: {
    border: "1px solid rgba(255,255,255,0.3)",
    color: "white",
    borderRadius: "14px",
    padding: "16px 24px",
    textDecoration: "none",
    fontWeight: 800,
  },

  heroCard: {
    background: "white",
    color: "#0f172a",
    borderRadius: "28px",
    padding: "32px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
  },

  cardTitle: {
    fontSize: "28px",
    marginBottom: "24px",
    fontWeight: 900,
  },

  checkLine: {
    display: "flex",
    gap: "12px",
    marginBottom: "18px",
    color: "#334155",
    fontWeight: 700,
  },

  check: {
    color: "#f97316",
  },

  section: {
    padding: "90px 5vw",
  },

  whiteSection: {
    background: "white",
    padding: "90px 5vw",
  },

  sectionHeading: {
    marginBottom: "48px",
  },

  label: {
    color: "#f97316",
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    fontSize: "13px",
    fontWeight: 900,
  },

  sectionTitle: {
    fontSize: "clamp(40px,5vw,58px)",
    lineHeight: 1.05,
    marginTop: "14px",
    fontWeight: 950,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
    gap: "24px",
  },

  cardButton: {
    background: "transparent",
    border: "none",
    padding: 0,
    textAlign: "left",
    cursor: "pointer",
  },

  serviceCard: {
    background: "white",
    borderRadius: "28px",
    padding: "32px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
  },

  iconBox: {
    width: "56px",
    height: "56px",
    borderRadius: "18px",
    background: "#020617",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    marginBottom: "22px",
  },

  smallTitle: {
    fontSize: "28px",
    fontWeight: 900,
  },

  cardText: {
    color: "#475569",
    lineHeight: 1.8,
  },

  learnMore: {
    marginTop: "18px",
    color: "#f97316",
    fontWeight: 900,
  },

  aboutGrid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "48px",
    alignItems: "center",
  },

  aboutImage: {
    minHeight: "420px",
    borderRadius: "30px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "14px",
    marginTop: "24px",
  },

  feature: {
    background: "#f1f5f9",
    borderRadius: "14px",
    padding: "18px",
    fontWeight: 800,
  },

  contactSection: {
    padding: "90px 5vw",
    background: "#020617",
    color: "white",
  },

  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "48px",
    alignItems: "start",
  },

  contactCard: {
    background: "white",
    borderRadius: "28px",
    padding: "32px",
    display: "grid",
    gap: "16px",
  },

  input: {
    border: "1px solid #cbd5e1",
    borderRadius: "14px",
    padding: "16px",
    fontSize: "16px",
  },

  textarea: {
    border: "1px solid #cbd5e1",
    borderRadius: "14px",
    padding: "16px",
    minHeight: "140px",
    fontSize: "16px",
  },

  submitButton: {
    background: "#f97316",
    color: "white",
    border: "none",
    borderRadius: "14px",
    padding: "16px",
    fontWeight: 800,
    cursor: "pointer",
  },

  serviceHero: {
    minHeight: "700px",
    backgroundImage:
      "linear-gradient(120deg,rgba(2,6,23,0.96),rgba(15,23,42,0.72)),url('https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
  },

  serviceInner: {
    position: "relative",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "120px 5vw",
  },

  orangeMini: {
    color: "#fb923c",
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    fontWeight: 900,
    fontSize: "13px",
  },

  serviceTitle: {
    fontSize: "clamp(48px,6vw,82px)",
    lineHeight: 1,
    fontWeight: 950,
    margin: "18px 0",
  },

  serviceText: {
    color: "#cbd5e1",
    maxWidth: "700px",
    lineHeight: 1.8,
    fontSize: "19px",
  },
};
