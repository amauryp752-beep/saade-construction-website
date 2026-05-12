import React, { useEffect } from "react";

export default function SaadeConstructionWebsite() {
  useEffect(() => {
    document.title = "Saade Construction | Premium Roofing & Siding";
  }, []);

  return (
    <main style={styles.page}>
      <Header />
      <Hero />
      <TrustBar />
      <ServicesAndMap />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

function LogoMark() {
  return (
    <div style={styles.logoBox}>
      <div style={styles.logoHex}></div>
      <div style={styles.logoRoof}></div>
      <div style={styles.logoHouse}></div>
      <span style={styles.logoS}>S</span>
      <div style={styles.logoWindows}></div>
    </div>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <a href="#home" style={styles.brandLink}>
        <LogoMark />
        <div>
          <h1 style={styles.brandTitle}>SAADE</h1>
          <h2 style={styles.brandTitleTwo}>CONSTRUCTION</h2>
          <p style={styles.brandSub}>PREMIUM ROOFING & SIDING</p>
        </div>
      </a>

      <nav style={styles.nav}>
        <a style={styles.activeNav} href="#home">HOME</a>
        <a style={styles.navLink} href="#roofing">ROOFING</a>
        <a style={styles.navLink} href="#siding">SIDING</a>
        <a style={styles.navLink} href="#about">ABOUT</a>
        <a style={styles.navLink} href="#work">OUR WORK</a>
        <a style={styles.navLink} href="#reviews">REVIEWS</a>
        <a style={styles.navLink} href="#service-area">SERVICE AREAS</a>
        <a style={styles.navLink} href="#contact">CONTACT</a>
      </nav>

      <a href="#contact" style={styles.quoteButton}>REQUEST A QUOTE →</a>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroShade}></div>
      <div style={styles.heroContent}>
        <p style={styles.heroKicker}>BUILT ON INTEGRITY. BACKED BY QUALITY.</p>
        <h2 style={styles.heroTitle}>PREMIUM ROOFING<br />& SIDING SOLUTIONS</h2>
        <p style={styles.heroText}>Protecting homes across NY, NJ & PA with<br />top-quality workmanship and premium materials.</p>
        <div style={styles.heroButtons}>
          <a href="#contact" style={styles.orangeButton}>REQUEST A QUOTE →</a>
          <a href="#work" style={styles.outlineButton}>▶ VIEW OUR WORK</a>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    ["♢", "LICENSED & INSURED", "Fully licensed and insured for your peace of mind."],
    ["◎", "PREMIUM MATERIALS", "We use only top-quality products that last."],
    ["♧", "EXPERT WORKMANSHIP", "Skilled professionals dedicated to perfection."],
    ["⌂", "LOCALLY OWNED", "Proudly serving our local communities."],
    ["▣", "WARRANTY PROTECTION", "Strong warranties for long-term confidence."],
  ];

  return (
    <section style={styles.trustBar}>
      {items.map(([icon, title, text]) => (
        <div key={title} style={styles.trustItem}>
          <div style={styles.trustIcon}>{icon}</div>
          <div>
            <h3 style={styles.trustTitle}>{title}</h3>
            <p style={styles.trustText}>{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function ServicesAndMap() {
  const services = [
    ["Roofing", "High-quality roofing systems built to withstand the toughest weather.", "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=80"],
    ["Siding", "Durable, low-maintenance siding that boosts curb appeal.", "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=900&q=80"],
    ["Gutters", "Protect your home from water damage with our gutter systems.", "https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&w=900&q=80"],
  ];

  return (
    <section id="service-area" style={styles.servicesMapSection}>
      <div style={styles.servicesLeft}>
        <p style={styles.orangeSmall}>WHAT WE DO</p>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <p style={styles.servicesIntro}>From roofs to siding and everything in between, we provide solutions that protect your home and enhance its value.</p>

        <div style={styles.serviceCards}>
          {services.map(([title, text, image]) => (
            <div key={title} style={styles.serviceCard}>
              <div style={{ ...styles.serviceImage, backgroundImage: `url(${image})` }}>
                <div style={styles.serviceIcon}>⌂</div>
              </div>
              <div style={styles.serviceBody}>
                <h3 style={styles.serviceTitle}>{title}</h3>
                <p style={styles.serviceText}>{text}</p>
                <a href="#contact" style={styles.learnMore}>LEARN MORE →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.mapPanel}>
        <div style={styles.fakeMap}></div>
        <div style={styles.mapContent}>
          <p style={styles.orangeSmall}>PROUDLY SERVING</p>
          <h2 style={styles.mapTitle}>NY, NJ & PA</h2>
          <p style={styles.mapText}>We service a wide area to ensure more homeowners get the quality they deserve.</p>
          <a href="#contact" style={styles.darkButton}>VIEW ALL SERVICE AREAS →</a>
        </div>
        <div style={styles.stateNY}>NEW YORK</div>
        <div style={styles.statePA}>PENNSYLVANIA</div>
        <div style={styles.stateNJ}>NEW JERSEY</div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" style={styles.reviewsSection}>
      <p style={styles.orangeSmall}>REVIEWS</p>
      <h2 style={styles.reviewsTitle}>Google Reviews Coming Soon</h2>
      <div style={styles.reviewGrid}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={styles.reviewCard}>
            <div style={styles.stars}>★★★★★</div>
            <p style={styles.reviewText}>“Great communication, clean work, and the finished project looks excellent.”</p>
            <strong>Coming Soon</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={styles.contactSection}>
      <div>
        <p style={styles.orangeSmall}>CONTACT</p>
        <h2 style={styles.contactTitle}>Start your next exterior project.</h2>
        <p style={styles.contactText}>These contact details can be replaced later once the company has its phone number, email, and service area ready.</p>
      </div>
      <form style={styles.form}>
        <input style={styles.input} placeholder="Full Name" />
        <input style={styles.input} placeholder="Phone Number" />
        <input style={styles.input} placeholder="Email Address" />
        <textarea style={styles.textarea} placeholder="Tell us about your project"></textarea>
        <button type="button" style={styles.submitButton}>SUBMIT REQUEST</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>© 2026 Saade Construction • Premium Roofing & Siding</footer>
  );
}

const styles = {
  page: {
    margin: 0,
    fontFamily: "Inter, Arial, sans-serif",
    color: "#071226",
    background: "#ffffff",
  },
  header: {
    height: "106px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 4vw",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 50,
    gap: "28px",
  },
  brandLink: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    textDecoration: "none",
    color: "#071226",
    minWidth: "300px",
  },
  logoBox: {
    width: "72px",
    height: "72px",
    position: "relative",
    flexShrink: 0,
  },
  logoHex: {
    position: "absolute",
    inset: "3px",
    border: "8px solid #ff6b00",
    clipPath: "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%)",
    background: "white",
  },
  logoRoof: {
    position: "absolute",
    left: "18px",
    top: "18px",
    width: "32px",
    height: "32px",
    borderTop: "8px solid #111827",
    borderLeft: "8px solid #111827",
    transform: "rotate(45deg)",
  },
  logoHouse: {
    position: "absolute",
    left: "31px",
    top: "30px",
    width: "18px",
    height: "20px",
    background: "white",
  },
  logoS: {
    position: "absolute",
    left: "20px",
    bottom: "12px",
    color: "#ff6b00",
    fontWeight: 950,
    fontSize: "22px",
    lineHeight: 1,
  },
  logoWindows: {
    position: "absolute",
    right: "18px",
    bottom: "17px",
    width: "13px",
    height: "13px",
    background: "linear-gradient(90deg,#111827 45%,transparent 45% 55%,#111827 55%), linear-gradient(#111827 45%,transparent 45% 55%,#111827 55%)",
  },
  brandTitle: {
    margin: 0,
    fontSize: "32px",
    letterSpacing: "0.14em",
    fontWeight: 950,
    lineHeight: 0.95,
  },
  brandTitleTwo: {
    margin: "2px 0 0",
    fontSize: "17px",
    letterSpacing: "0.22em",
    color: "#ff6b00",
    fontWeight: 950,
  },
  brandSub: {
    margin: "4px 0 0",
    fontSize: "10px",
    letterSpacing: "0.23em",
    color: "#111827",
    fontWeight: 700,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    fontSize: "13px",
    fontWeight: 900,
    whiteSpace: "nowrap",
  },
  navLink: {
    textDecoration: "none",
    color: "#071226",
  },
  activeNav: {
    textDecoration: "none",
    color: "#071226",
    borderBottom: "3px solid #ff6b00",
    paddingBottom: "12px",
  },
  quoteButton: {
    background: "#ff6b00",
    color: "white",
    textDecoration: "none",
    padding: "18px 28px",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: 950,
    whiteSpace: "nowrap",
  },
  hero: {
    position: "relative",
    minHeight: "520px",
    backgroundImage: "linear-gradient(90deg,rgba(2,8,23,0.9),rgba(2,8,23,0.45)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90')",
    backgroundSize: "cover",
    backgroundPosition: "center right",
    overflow: "hidden",
  },
  heroShade: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg,rgba(1,9,22,0.92) 0%,rgba(1,9,22,0.68) 38%,rgba(1,9,22,0.08) 100%)",
  },
  heroContent: {
    position: "relative",
    padding: "78px 4vw 80px",
    color: "white",
    maxWidth: "720px",
  },
  heroKicker: {
    color: "#ff6b00",
    letterSpacing: "0.1em",
    fontSize: "15px",
    fontWeight: 950,
  },
  heroTitle: {
    fontSize: "clamp(44px,5.2vw,70px)",
    lineHeight: 1.03,
    margin: "18px 0",
    fontWeight: 950,
    letterSpacing: "-0.04em",
  },
  heroText: {
    color: "#e2e8f0",
    fontSize: "20px",
    lineHeight: 1.55,
    marginBottom: "34px",
  },
  heroButtons: {
    display: "flex",
    gap: "22px",
    flexWrap: "wrap",
  },
  orangeButton: {
    background: "#ff6b00",
    color: "white",
    padding: "18px 30px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: 950,
  },
  outlineButton: {
    color: "white",
    padding: "18px 30px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: 950,
    border: "1px solid white",
    background: "rgba(255,255,255,0.04)",
  },
  trustBar: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    background: "#071226",
    color: "white",
    padding: "32px 4vw",
    gap: "24px",
    borderTop: "1px solid rgba(255,255,255,0.18)",
  },
  trustItem: {
    display: "flex",
    gap: "18px",
    alignItems: "flex-start",
    borderRight: "1px solid rgba(255,255,255,0.18)",
    paddingRight: "18px",
  },
  trustIcon: {
    color: "#ff6b00",
    fontSize: "36px",
    lineHeight: 1,
  },
  trustTitle: {
    margin: 0,
    fontSize: "15px",
    fontWeight: 950,
  },
  trustText: {
    margin: "8px 0 0",
    color: "#dbe4ef",
    fontSize: "14px",
    lineHeight: 1.45,
  },
  servicesMapSection: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    minHeight: "460px",
    background: "white",
  },
  servicesLeft: {
    padding: "42px 4vw 56px",
  },
  orangeSmall: {
    margin: 0,
    color: "#ff6b00",
    fontSize: "13px",
    fontWeight: 950,
    letterSpacing: "0.08em",
  },
  sectionTitle: {
    margin: "8px 0 0",
    fontSize: "32px",
    fontWeight: 950,
  },
  servicesIntro: {
    maxWidth: "430px",
    color: "#4b5563",
    lineHeight: 1.6,
    margin: "-42px 0 28px 390px",
  },
  serviceCards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  serviceCard: {
    borderRadius: "9px",
    background: "white",
    boxShadow: "0 12px 34px rgba(15,23,42,0.12)",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
  },
  serviceImage: {
    height: "112px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  serviceIcon: {
    position: "absolute",
    left: "18px",
    bottom: "-16px",
    background: "#ff6b00",
    color: "white",
    width: "40px",
    height: "40px",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },
  serviceBody: {
    padding: "34px 22px 24px",
  },
  serviceTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 950,
  },
  serviceText: {
    color: "#4b5563",
    lineHeight: 1.55,
    minHeight: "70px",
    fontSize: "14px",
  },
  learnMore: {
    color: "#ff6b00",
    textDecoration: "none",
    fontWeight: 950,
    fontSize: "13px",
  },
  mapPanel: {
    position: "relative",
    background: "#f8fafc",
    overflow: "hidden",
    borderLeft: "1px solid #e5e7eb",
  },
  fakeMap: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(120deg,rgba(255,255,255,0.78),rgba(255,255,255,0.38)),url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1300&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.82,
  },
  mapContent: {
    position: "relative",
    zIndex: 2,
    padding: "118px 5vw 40px",
    maxWidth: "360px",
  },
  mapTitle: {
    fontSize: "32px",
    margin: "12px 0",
    fontWeight: 950,
    letterSpacing: "-0.02em",
  },
  mapText: {
    color: "#4b5563",
    lineHeight: 1.6,
  },
  darkButton: {
    display: "inline-block",
    background: "#071226",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    padding: "16px 24px",
    fontWeight: 950,
    marginTop: "18px",
    fontSize: "13px",
  },
  stateNY: {
    position: "absolute",
    top: "88px",
    right: "75px",
    background: "#071226",
    color: "white",
    padding: "9px 13px",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: 950,
  },
  statePA: {
    position: "absolute",
    top: "208px",
    right: "185px",
    background: "#071226",
    color: "white",
    padding: "9px 13px",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: 950,
  },
  stateNJ: {
    position: "absolute",
    bottom: "92px",
    right: "85px",
    background: "#071226",
    color: "white",
    padding: "9px 13px",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: 950,
  },
  reviewsSection: {
    background: "#071226",
    color: "white",
    padding: "72px 4vw",
  },
  reviewsTitle: {
    fontSize: "40px",
    margin: "10px 0 30px",
    fontWeight: 950,
  },
  reviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  reviewCard: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "28px",
  },
  stars: {
    color: "#ff6b00",
    fontSize: "20px",
    marginBottom: "18px",
  },
  reviewText: {
    color: "#e2e8f0",
    lineHeight: 1.6,
  },
  contactSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    padding: "80px 4vw",
    background: "#ffffff",
  },
  contactTitle: {
    fontSize: "44px",
    fontWeight: 950,
    margin: "14px 0",
    lineHeight: 1.08,
  },
  contactText: {
    color: "#4b5563",
    lineHeight: 1.7,
    maxWidth: "520px",
  },
  form: {
    display: "grid",
    gap: "14px",
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "28px",
  },
  input: {
    padding: "16px",
    border: "1px solid #cbd5e1",
    borderRadius: "6px",
    fontSize: "16px",
  },
  textarea: {
    padding: "16px",
    border: "1px solid #cbd5e1",
    borderRadius: "6px",
    fontSize: "16px",
    minHeight: "130px",
  },
  submitButton: {
    background: "#ff6b00",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "17px",
    fontWeight: 950,
    cursor: "pointer",
  },
  footer: {
    background: "#020617",
    color: "#94a3b8",
    padding: "28px 4vw",
    textAlign: "center",
  },
};
