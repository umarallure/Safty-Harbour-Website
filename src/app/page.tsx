"use client";

import { useState, useEffect } from "react";

const PRIMARY = "#0d5f84";
const ACCENT = "#ad1f1f";
const DARK = "#0a2035";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openToggle, setOpenToggle] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "$800", sub: "Million+", label: "Annual Premiums Managed", icon: "/icon-document.svg" },
    { value: "80,000+", sub: "and Growing", label: "Licensed Agents", icon: "/icon-agent.svg" },
    { value: "135+", sub: "Across All 50 States", label: "Regional Offices", icon: "/icon-location.svg" },
  ];

  const advantages = [
    {
      num: "01",
      title: "Free Life Insurance Sales Training",
      short: "Safety Harbour Insurance offers free training to all the independent contractor insurance agents that we work with.",
      body: "Comprehensive life insurance sales training provides those who sell life insurance with the tools to remain at the forefront of their industry. We offer free life insurance sales training year-round so that those eager to become an independent contractor insurance agent can receive accessible, in-depth insights. Removing barriers to entry for learning how to become an independent life insurance agent helps contribute to a more accessible insurance landscape.",
    },
    {
      num: "02",
      title: "Life Insurance Leads",
      short: "Backed by Integrity, Safety Harbour Insurance has been able to generate leads anywhere in the country.",
      body: "Safety Harbour Insurance does not sell leads. Life Insurance lead options are available through the Integrity Lead Center, which connects independent contractor agents with a massive inventory of insurance lead vendors updated in real-time. Thanks to our partnership with Integrity, a leading Insurtech company, we have access to even more life insurance lead vendors and the list is constantly growing. There is no requirement to purchase leads to work with us.",
    },
    {
      num: "03",
      title: "Competitive Compensation",
      short: "Insurance agents earn money from commissions on policies sold—and we have some of the top carrier contract rates in the industry.",
      body: "At Safety Harbour Insurance, we believe independent contractor insurance agents should benefit the most from the life insurance sales they make, along with the families they service. We incentivize success by working with carriers to develop some of the top carrier contract rates in the industry!",
    },
    {
      num: "04",
      title: "Various Sales Programs",
      short: "In-person, telesales, and virtual sales—Safety Harbour Insurance provides free training for all three so you can excel your way.",
      body: "Within the past few years, there has been a boom in remote work across industries with insurance standing as no exception. Although in-person life insurance sales have always been the best way to help families, Safety Harbour Insurance also recognizes that excelling in virtual sales and telephone sales is important to being a dynamic and successful insurance agent. Accordingly, independent contractor insurance agents can use the mode of sales they are most comfortable with.",
    },
  ];

  const truthItems = [
    {
      label: "CONTRACT",
      content: "If you have worked in this industry before, you may have a particular idea in mind about what independent agent contracts might include. But here independent contractor insurance agents that work with Safety Harbour Insurance sign contracts with insurance carriers. If an independent agent uses the tools and resources offered by us, such as those provided in the Customer Relationship Management (\"CRM\") platform, then the agent may be required to sign an agreement promising to follow our terms and conditions.",
    },
    {
      label: "BONUS",
      content: "We offer performance related bonuses to qualifying agents based on agency-level and/or personal production numbers. We then distribute over $300,000 in personal production bonuses and $3,000,000 in agency production bonuses each month to qualifying agents. While we strive to provide all agents the tools they need to become successful, not every agent should expect to earn a bonus.",
    },
    {
      label: "RENEWALS",
      content: "At Safety Harbour Insurance, you are vested 100% on day 1.",
    },
  ];

  const services = [
    {
      title: "Mortgage Protection",
      desc: "Ensure your family keeps their home. This coverage is designed to pay off your mortgage in full in the event of death or disability, providing a safety net for your most valuable asset.",
      icon: "🏠",
    },
    {
      title: "Final Expense",
      desc: "Remove the financial burden of end-of-life costs. Our Final Expense plans are locked-in for life—your rates will never increase and your coverage will never expire.",
      icon: "🛡️",
    },
    {
      title: "Indexed Universal Life (IUL)",
      desc: "Build cash value while you protect your life. IULs offer the flexibility to access funds via policy loans while maintaining a death benefit, providing tax-advantaged growth for your future.",
      icon: "📈",
    },
    {
      title: "Fixed Indexed Annuities (FIA)",
      desc: "Secure a reliable retirement income. FIAs provide market-linked growth without the risk of principal loss, ensuring your hard-earned savings are protected from market volatility.",
      icon: "💰",
    },
  ];

  const carriers = ["Aetna", "Aflac", "AIG", "Transamerica", "Americo", "John Hancock", "Mutual of Omaha", "Foresters", "North American", "Global Atlantic", "F&G", "Symetra"];

  return (
    <div style={{ minHeight: "100vh", background: "white", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", overflowX: "hidden" }}>

      {/* ─── 1. HEADER ─────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "white",
        backdropFilter: "blur(14px)",
        boxShadow: scrolled ? "0 3px 30px rgba(13,95,132,0.13)" : "0 1px 0 rgba(13,95,132,0.09)",
        transition: "all 0.35s ease",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "100px" }}>
          <a href="#" style={{ textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo2.png" alt="Safety Harbour Insurance" style={{ height: "80px", width: "auto" }} />
          </a>
          <div className="nav-links" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
            {["Home", "Get A Quote", "Our Agents", "Join the Team", "Insurance News"].map((item, i) => (
              <a key={item} href="#" style={{ fontSize: "14.5px", fontWeight: i === 0 ? 700 : 500, color: i === 0 ? PRIMARY : "#4a5568", textDecoration: "none", borderBottom: i === 0 ? `2.5px solid ${PRIMARY}` : "2.5px solid transparent", paddingBottom: "2px", transition: "all 0.2s", whiteSpace: "nowrap" }}
                onMouseEnter={e => { if (i !== 0) { (e.target as HTMLElement).style.color = PRIMARY; } }}
                onMouseLeave={e => { if (i !== 0) { (e.target as HTMLElement).style.color = "#4a5568"; } }}>
                {item}
              </a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn" style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }}>
            {[0, 1, 2].map(i => <div key={i} style={{ width: "24px", height: "2.5px", background: PRIMARY, borderRadius: "2px", margin: i < 2 ? "0 0 5px" : "0" }} />)}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "white", borderTop: `1px solid #e8f4f8`, padding: "12px 24px 20px" }}>
            {["Home", "Get A Quote", "Our Agents", "Join the Team", "Insurance News"].map(item => (
              <a key={item} href="#" style={{ display: "block", padding: "12px 0", fontSize: "15px", color: "#2d3748", textDecoration: "none", borderBottom: "1px solid #f0f4f8" }}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── 2. HERO ───────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", overflow: "visible", paddingTop: "100px",
        backgroundImage: "url('/hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 48px 12px", width: "100%", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 900, color: DARK, lineHeight: 1.06, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            Get an Insurance <span style={{ color: PRIMARY }}>Quote</span>
          </h1>
          <p style={{ color: "#3d5166", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "16px" }}>
            It takes <strong style={{ color: DARK }}>60 seconds</strong> to fill out our form. A Safety Harbour Insurance representative will get back to you within <strong style={{ color: DARK }}>1 business day</strong> with your personalized insurance quote!
          </p>
        </div>

        {/* Stat cards — overflow bottom */}
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", position: "relative", zIndex: 10, transform: "translateY(20%)" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ background: "white", padding: "36px 28px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", borderRadius: "16px", boxShadow: "0 8px 40px rgba(13,95,132,0.13)", transition: "all 0.3s", cursor: "default" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(13,95,132,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(13,95,132,0.13)"; }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={stat.icon} alt={stat.label} style={{ width: "52px", height: "52px", objectFit: "contain", marginBottom: "16px", filter: "invert(29%) sepia(60%) saturate(600%) hue-rotate(167deg) brightness(75%) contrast(110%)" }} />
              <div style={{ fontSize: "clamp(32px,3.5vw,46px)", fontWeight: 900, color: PRIMARY, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: "15px", color: "#6b8fa6", marginTop: "6px", fontWeight: 500 }}>{stat.sub}</div>
              <div style={{ width: "48px", height: "2px", background: "#e2ecf4", margin: "18px auto" }} />
              <div style={{ fontSize: "14px", fontWeight: 700, color: PRIMARY }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. VALUE PROPOSITION ──────────────────────────────── */}
      <section style={{ background: "white", paddingTop: "180px", paddingBottom: "100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left — image placeholder (elderly couple from skeleton) */}
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(13,95,132,0.15)" }}>
            <div style={{ background: `linear-gradient(135deg, ${PRIMARY}22 0%, ${PRIMARY}44 100%)`, height: "440px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "20px" }}>
              <div style={{ textAlign: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo2.png" alt="Safety Harbour Insurance" style={{ height: "100px", opacity: 0.35 }} />
              </div>
            </div>
            {/* Accent block */}
            <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, background: `linear-gradient(to top, ${PRIMARY}ee, transparent)`, height: "120px" }} />
            <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px", color: "white" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1.2 }}>Protecting Families<br />Across America</div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 800, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>What Sets Us Apart</div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: DARK, lineHeight: 1.15, marginBottom: "24px", letterSpacing: "-0.02em" }}>
              Helping families is<br /><span style={{ color: PRIMARY }}>our #1 priority</span>
            </h2>
            <p style={{ color: "#4a6070", fontSize: "16px", lineHeight: 1.8, marginBottom: "36px" }}>
              Safety Harbour Insurance is set apart within the insurance industry by the unparalleled level of support we provide to our independent contractor agents. We partner with the nation's elite insurance carriers, allowing our agents to excel and families to receive the protection they deserve. With a presence in all 50 states and over 100 national offices, we see firsthand how quality insurance solutions transform lives. Whether you are looking to become an independent agent or want to start your own agency, your journey begins here with Safety Harbour Insurance.
            </p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${ACCENT}, #8b1818)`, color: "white", padding: "14px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: `0 8px 24px ${ACCENT}44`, transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 36px ${ACCENT}66`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${ACCENT}44`; }}>
              Apply Now
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 4. SAFETY HARBOUR ADVANTAGE ───────────────────────── */}
      <section style={{ background: "#f4f8fb", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>Programs & Training</div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: DARK, letterSpacing: "-0.02em" }}>
              We provide the resources for your<br /><span style={{ color: PRIMARY }}>family's growth and success</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "28px" }}>
            {advantages.map((adv) => (
              <div key={adv.num} style={{ background: "white", borderRadius: "18px", padding: "36px 32px", boxShadow: "0 4px 24px rgba(13,95,132,0.07)", border: `1px solid rgba(13,95,132,0.07)`, transition: "all 0.3s", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(13,95,132,0.14)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(13,95,132,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ position: "absolute", top: "20px", right: "24px", fontSize: "56px", fontWeight: 900, color: `${PRIMARY}10`, lineHeight: 1 }}>{adv.num}</div>
                <div style={{ fontSize: "13px", fontWeight: 800, color: PRIMARY, letterSpacing: "0.1em", marginBottom: "12px" }}>{adv.num}</div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: DARK, marginBottom: "12px", lineHeight: 1.25 }}>{adv.title}</h3>
                <p style={{ color: "#5a7080", fontSize: "14.5px", lineHeight: 1.75, fontWeight: 600, marginBottom: "12px" }}>{adv.short}</p>
                <p style={{ color: "#7a8fa0", fontSize: "13.5px", lineHeight: 1.7 }}>{adv.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TRUTH & TRANSPARENCY ───────────────────────────── */}
      <section style={{ background: "white", padding: "100px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>What You Need To Know</div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: DARK, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              The <span style={{ color: ACCENT }}>Truth.</span>
            </h2>
            <p style={{ color: "#5a7080", fontSize: "17px", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
              Learn the reality of the insurance industry and decide for yourself where you will have the best shot at success!
            </p>
          </div>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "48px" }}>
            {truthItems.map((item, i) => (
              <div key={i} style={{ border: `1.5px solid ${openToggle === i ? PRIMARY : "#dde8f0"}`, borderRadius: "14px", overflow: "hidden", transition: "all 0.3s" }}>
                <button onClick={() => setOpenToggle(openToggle === i ? null : i)} style={{ width: "100%", padding: "20px 28px", background: openToggle === i ? `${PRIMARY}08` : "white", display: "flex", justifyContent: "space-between", alignItems: "center", border: "none", cursor: "pointer", textAlign: "left", transition: "background 0.2s" }}>
                  <span style={{ fontSize: "15px", fontWeight: 800, color: openToggle === i ? PRIMARY : DARK, letterSpacing: "0.04em" }}>{item.label}</span>
                  <span style={{ fontSize: "22px", color: PRIMARY, fontWeight: 300, lineHeight: 1, transform: openToggle === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.25s" }}>+</span>
                </button>
                {openToggle === i && (
                  <div style={{ padding: "0 28px 24px", borderTop: `1px solid ${PRIMARY}18` }}>
                    <p style={{ color: "#4a6070", fontSize: "15px", lineHeight: 1.8, paddingTop: "18px" }}>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${ACCENT}, #8b1818)`, color: "white", padding: "14px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: `0 8px 24px ${ACCENT}44`, transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Apply Now
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 6. COMPENSATION BREAKDOWN ─────────────────────────── */}
      <section style={{ background: DARK, padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: "#5bb8e6", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>Earnings Potential</div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: "white", letterSpacing: "-0.02em" }}>
              Aggressive <span style={{ color: "#5bb8e6" }}>Compensation</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
            {/* Math Breakdown */}
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "18px", padding: "36px 28px", textAlign: "center" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#5bb8e6", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>The Math</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                {[["100%", "Contract Rate"], ["×", ""], ["$1,000", "Annual Premium"], ["×", ""], ["75%", "Advance"]].map((item, i) => (
                  item[0] === "×" ? <div key={i} style={{ color: "#5bb8e6", fontSize: "24px", fontWeight: 700 }}>×</div> :
                    <div key={i} style={{ background: "rgba(91,184,230,0.12)", borderRadius: "10px", padding: "12px 16px", textAlign: "center" }}>
                      <div style={{ fontSize: "22px", fontWeight: 900, color: "white" }}>{item[0]}</div>
                      <div style={{ fontSize: "11px", color: "#8ab4c8", marginTop: "4px" }}>{item[1]}</div>
                    </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                <div style={{ fontSize: "13px", color: "#8ab4c8", marginBottom: "8px" }}>= Your Commission</div>
                <div style={{ fontSize: "42px", fontWeight: 900, color: "#5bb8e6" }}>$750</div>
              </div>
            </div>

            {/* Example */}
            <div style={{ background: `linear-gradient(135deg, ${PRIMARY}, #094a68)`, borderRadius: "18px", padding: "36px 28px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>Example Case</div>
              <div style={{ fontSize: "16px", color: "white", lineHeight: 1.75 }}>
                If an agent writes a policy with a <strong>$10 annual premium</strong> at a <strong>100% contract rate</strong>, they receive a <strong style={{ color: "#9dd6f0" }}>$7.50 advance</strong> from the carrier. The remaining 25% is paid out in months 10, 11, and 12 as long as the policy remains active.
              </div>
            </div>

            {/* Note */}
            <div style={{ background: "rgba(173,31,31,0.12)", border: "1px solid rgba(173,31,31,0.3)", borderRadius: "18px", padding: "36px 28px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#e07070", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>Important Note</div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.75 }}>
                Results are influenced by multiple factors and are not guaranteed. Individual agent performance, carrier selection, and market conditions all play a role in actual earnings.
              </p>
              <div style={{ marginTop: "28px" }}>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${ACCENT}, #8b1818)`, color: "white", padding: "12px 28px", borderRadius: "50px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
                  Apply Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. CARRIER BENEFITS ───────────────────────────────── */}
      <section style={{ background: "#f4f8fb", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>Our Partners</div>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, color: DARK, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              We partner with top <span style={{ color: PRIMARY }}>Insurance Carriers</span>
            </h2>
            <p style={{ color: "#5a7080", fontSize: "16px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 48px" }}>
              Safety Harbour Insurance partners with the top carriers in the industry. Our independent agents can receive contract rates up to <strong style={{ color: PRIMARY }}>145%</strong> from certain carriers, paid directly to you.
            </p>
          </div>
          {/* Carrier logo grid */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginBottom: "48px" }}>
            {carriers.map((name) => (
              <div key={name} style={{ background: "white", border: "1.5px solid #dde8f0", borderRadius: "12px", padding: "16px 28px", fontSize: "15px", fontWeight: 700, color: "#3d5166", boxShadow: "0 2px 12px rgba(13,95,132,0.06)", transition: "all 0.25s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; (e.currentTarget as HTMLElement).style.color = PRIMARY; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${PRIMARY}22`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#dde8f0"; (e.currentTarget as HTMLElement).style.color = "#3d5166"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(13,95,132,0.06)"; }}>
                {name}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${ACCENT}, #8b1818)`, color: "white", padding: "14px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: `0 8px 24px ${ACCENT}44`, transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Apply Now
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 8. SERVICES ───────────────────────────────────────── */}
      <section style={{ background: "white", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>Resources for Success</div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: DARK, letterSpacing: "-0.02em" }}>
              Our <span style={{ color: PRIMARY }}>Insurance Products</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "22px" }}>
            {services.map((svc) => (
              <div key={svc.title} style={{ background: "white", border: "1.5px solid #dde8f0", borderRadius: "18px", padding: "32px 24px", display: "flex", flexDirection: "column", transition: "all 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${PRIMARY}1a`; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#dde8f0"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ width: "52px", height: "52px", background: `${PRIMARY}12`, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", marginBottom: "18px" }}>{svc.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 800, color: DARK, marginBottom: "12px", lineHeight: 1.3 }}>{svc.title}</h3>
                <p style={{ color: "#5a7080", fontSize: "13.5px", lineHeight: 1.7, flex: 1, marginBottom: "24px" }}>{svc.desc}</p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: PRIMARY, fontSize: "13.5px", fontWeight: 700, textDecoration: "none", transition: "gap 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "10px"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "6px"; }}>
                  Learn More
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. FOOTER ─────────────────────────────────────────── */}
      <footer style={{ background: DARK, color: "white", padding: "80px 0 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.4fr", gap: "60px", paddingBottom: "60px" }}>

            {/* Brand col */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo2.png" alt="Safety Harbour Insurance" style={{ height: "72px", marginBottom: "24px", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.8, maxWidth: "340px" }}>
                At Safety Harbour Insurance, we are dedicated to helping you protect what matters most. Our mission is to ensure your family's future is secure through personalized, expert insurance solutions.
              </p>
              {/* Social icons */}
              <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
                {[
                  { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                  { label: "X", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                  { label: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
                  { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                ].map(social => (
                  <a key={social.label} href="#" aria-label={social.label} style={{ width: "38px", height: "38px", background: "rgba(255,255,255,0.08)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", textDecoration: "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = PRIMARY; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links col */}
            <div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "22px" }}>Navigation</div>
              {["Home", "Get A Quote", "Agents", "Join Us", "News", "Contact"].map(link => (
                <a key={link} href="#" style={{ display: "block", color: "rgba(255,255,255,0.65)", fontSize: "14.5px", textDecoration: "none", marginBottom: "12px", transition: "color 0.2s" }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}>
                  {link}
                </a>
              ))}
            </div>

            {/* Contact col */}
            <div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "22px" }}>Contact</div>
              {[
                { icon: "✉", text: "info@safetyharbourinsurance.io" },
                { icon: "📞", text: "+1 786-233-0773" },
                { icon: "📍", text: "3350 Virginia St, Coconut Grove, Miami, FL 33133" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: "12px", marginBottom: "18px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "15px", marginTop: "1px", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "22px 48px", maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>© 2026 Safety Harbour Insurance. All Rights Reserved.</div>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map(t => (
              <a key={t} href="#" style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .hamburger-btn { display: flex !important; flex-direction: column; }
        }
        @media (max-width: 900px) {
          section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
