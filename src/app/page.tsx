"use client";

import { useState, useEffect } from "react";

const PRIMARY = "#0d5f84";
const ACCENT = "#ad1f1f";
const DARK = "#0a2035";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "$150 Billion+", label: "Life Insurance Coverage Placed", color: "#3b82f6" },
    { value: "1,000,000+", label: "Families Protected Nationwide", color: "#16a34a" },
    { value: "$800 Million+", label: "Annual Premiums Managed", color: "#8b5cf6" },
  ];

  const coreValues = [
    {
      num: "01",
      title: "Elite Carrier Network",
      body: "Safety Harbour Insurance partners only with the industry’s highest-rated carriers. We understand the weight of your family’s future, so we only work with providers who share our commitment to excellence.",
    },
    {
      num: "02",
      title: "Your Family, Our Mission",
      body: "Our independent agents are driven by a passion for service. We treat your family like our own, ensuring your specific needs are met with compassion and precision.",
    },
    {
      num: "03",
      title: "Coast-to-Coast Support",
      body: "We are proud to serve families across all 50 states. No matter where you call home, a Safety Harbour Insurance agent is nearby to provide personalized, local expertise.",
    },
    {
      num: "04",
      title: "Tailored Solutions",
      body: "Safety Harbour Insurance is more than just a marketing organization. We are your advocates, matching you with the specific carrier and plan that fits your unique life situation perfectly.",
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
      icon: "🕊️",
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

  const testimonials = [
    {
      name: "Marcus Thorne",
      quote: "Choosing Safety Harbour Insurance was the best decision I’ve made for my family’s future. I wanted to ensure my children wouldn't be burdened with unexpected costs later on, and the team helped me craft a final expense plan that was both budget-friendly and thorough. They took the time to explain the 'why' behind every recommendation. I finally feel like my Safety Harbour is secure.",
      stars: "★★★★★"
    },
    {
      name: "Elena Rodriguez",
      quote: "The team at Safety Harbour Insurance is exceptional. I was looking for mortgage protection and didn't know where to start. They treated me like a person, not a policy number, and walked me through the coverage that ensures my family stays in our home no matter what happens. It’s rare to find agents this dedicated and accessible.",
      stars: "★★★★★"
    },
    {
      name: "David Chen",
      quote: "I can’t recommend Safety Harbour Insurance enough. There were no high-pressure sales tactics—just honest, clear advice. They helped me find a policy that fits my fixed income perfectly. The peace of mind I have now is priceless.",
      stars: "★★★★★"
    },
    {
      name: "Sarah Jenkins",
      quote: "Working with Safety Harbour Insurance was a breath of fresh air. They stripped away all the confusing insurance jargon and made everything easy to understand. I now have a policy I actually trust, and I know my family is on solid ground. They truly are the team to turn to for straightforward, honest service.",
      stars: "★★★★★"
    },
    {
      name: "Gregory Banks",
      quote: "From the first phone call, I knew Safety Harbour Insurance was different. They didn't just sell me a policy; they listened to my concerns about my family’s long-term growth and helped me set up a plan that protects us today and builds for tomorrow. It’s a relief to work with professionals who prioritize my family’s goals.",
      stars: "★★★★★"
    }
  ];

  const mediaLogos = [
    { src: "/reviews/cnbc-logo-black-transparent.png", alt: "CNBC" },
    { src: "/reviews/bbb-logo-black-and-white.png", alt: "Better Business Bureau" },
    { src: "/reviews/Inc__magazine_logo.png", alt: "Inc. Magazine" },
    { src: "/reviews/Yahoo-Symbol.png", alt: "Yahoo" },
  ];

  const heroAccents = [
    { src: "/hero-section/accent-1.svg", top: "22%", left: "5%" },
    { src: "/hero-section/accent-2.svg", top: "30%", right: "6%" },
    { src: "/hero-section/accent-3.svg", bottom: "24%", left: "10%" },
  ];

  const articles = [
    {
      title: "Why Final Expense Insurance is a Smart Choice at Any Age.",
      image: "/articles/b93de3_1eb0d07f1408483a8f29cf17546293dd~mv2.jpeg",
      alt: "Final expense insurance article cover",
    },
    {
      title: "Protecting Your Home: A Guide to Mortgage Insurance.",
      image: "/articles/b93de3_36a4042ff8784997bfa071c425be1fa7~mv2.jpeg",
      alt: "Mortgage insurance article cover",
    },
    {
      title: "Understanding the Benefits of Indexed Universal Life.",
      image: "/articles/b93de3_5f0d32d5e274429c9464b8a90f2b7867~mv2.jpeg",
      alt: "Indexed universal life article cover",
    },
    {
      title: "The Application Process: What to Expect When Securing Coverage.",
      image: "/articles/b93de3_8b2860f8eb124cd3910ebadbec26babc~mv2.jpeg",
      alt: "Insurance application process article cover",
    },
  ];

  const carriers = [
    { src: "/carriers/1.png", alt: "Carrier 1" },
    { src: "/carriers/2.png", alt: "Carrier 2" },
    { src: "/carriers/3.png", alt: "Carrier 3" },
    { src: "/carriers/4.png", alt: "Carrier 4" },
    { src: "/carriers/5.png", alt: "Carrier 5" },
    { src: "/carriers/12.png", alt: "Carrier 12" },
    { src: "/carriers/images.png", alt: "Carrier" },
    { src: "/carriers/images_20(1).png", alt: "Carrier" },
    { src: "/carriers/images_20(2).png", alt: "Carrier" },
    { src: "/carriers/images_20(3).png", alt: "Carrier" },
    { src: "/carriers/images_20(4).png", alt: "Carrier" },
    { src: "/carriers/images_20(5).png", alt: "Carrier" },
    { src: "/carriers/images_20(6).png", alt: "Carrier" },
    { src: "/carriers/unitedhome.png", alt: "United Home" },
    { src: "/carriers/lincoln-financial-group-logo-black-and-white.png", alt: "Lincoln Financial" },
    { src: "/carriers/NATIONAL-LIFE-LSW (1).png", alt: "National Life" },
    { src: "/carriers/american-national7345.webp", alt: "American National" },
    { src: "/carriers/American_Amicable_logo_recreated_BLACK_19-07-09-1_2x.webp", alt: "American Amicable" },
    { src: "/carriers/Screen_2BShot_2B2024-01-19_2Bat_2B9_51_21_2BAM (1).png", alt: "Carrier" },
    { src: "/carriers/04438aa18245c3fcb1a6a93b1976da66.jpeg", alt: "Carrier" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "white", fontFamily: "'Galano Grotesque', sans-serif", overflowX: "hidden" }}>

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
        alignItems: "center", justifyContent: "center", overflow: "visible", paddingTop: "140px",
        backgroundImage: "url('/hero-section/bg.png')", backgroundSize: "cover", backgroundPosition: "center",
      }}>
        {heroAccents.map((accent) => (
          <div
            key={accent.src}
            style={{
              position: "absolute",
              width: "140px",
              height: "140px",
              borderRadius: "32px",
              background: "rgba(255,255,255,0.38)",
              border: "1px solid rgba(13,95,132,0.08)",
              boxShadow: "0 20px 40px rgba(13,95,132,0.08)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.18,
              pointerEvents: "none",
              zIndex: 1,
              ...accent,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={accent.src} alt="" aria-hidden="true" style={{ width: "72px", height: "72px", objectFit: "contain", display: "block" }} />
          </div>
        ))}

        {/* Fade Out Gradient for smooth transition */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", zIndex: 1 }} />
        
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 48px 12px", width: "100%", position: "relative", zIndex: 2, textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 84px)", fontWeight: 900, color: DARK, lineHeight: 1.06, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
            SAFETY HARBOUR <span style={{ color: PRIMARY }}>INSURANCE</span>
          </h1>
          <p style={{ color: "#3d5166", fontSize: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto 36px", fontWeight: 500 }}>
            Securing Your Future, Protecting Your Safety Harbour.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
             <a href="#quote" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${ACCENT}, #8b1818)`, color: "white", padding: "18px 42px", borderRadius: "50px", fontSize: "16px", fontWeight: 700, textDecoration: "none", boxShadow: `0 8px 24px ${ACCENT}44`, transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 36px ${ACCENT}66`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${ACCENT}44`; }}>
              Get A Quote Now
            </a>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "white", color: DARK, border: `2px solid #e2ecf4`, padding: "18px 42px", borderRadius: "50px", fontSize: "16px", fontWeight: 700, textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; (e.currentTarget as HTMLElement).style.color = PRIMARY; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e2ecf4"; (e.currentTarget as HTMLElement).style.color = DARK; }}>
              Contact Us
            </a>
          </div>
        </div>

        {/* Stat cards — overflow bottom */}
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", position: "relative", zIndex: 10, marginTop: "40px", marginBottom: "40px" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ background: "white", padding: "32px 32px", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #f0f4f8", transition: "all 0.3s", cursor: "default", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}>
              
              {/* Colored Left Border */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", backgroundColor: stat.color }} />
              
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#8ab4c8", marginBottom: "16px" }}>{stat.label}</div>
              <div style={{ fontSize: "clamp(30px,3.5vw,42px)", fontWeight: 900, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. CORE VALUES SECTION ──────────────────────────────── */}
      <section style={{ background: "white", paddingTop: "60px", paddingBottom: "100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left — image */}
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(13,95,132,0.15)", height: "100%", minHeight: "550px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/core-value.jpeg" alt="Safety Harbour Insurance Core Value" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
            {/* Accent block */}
            <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, background: `linear-gradient(to top, ${PRIMARY}ee, transparent)`, height: "120px" }} />
            <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px", color: "white" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1.2 }}>Core Value</div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: DARK, lineHeight: 1.15, marginBottom: "32px", letterSpacing: "-0.02em" }}>
              Protecting your family is <span style={{ color: PRIMARY }}>our #1 priority.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {coreValues.map((adv) => (
                <div key={adv.num} style={{ display: "flex", gap: "16px" }}>
                  <div style={{ flexShrink: 0, fontSize: "18px", fontWeight: 900, color: PRIMARY, letterSpacing: "0.05em", marginTop: "2px" }}>{adv.num}.</div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 800, color: DARK, marginBottom: "8px" }}>{adv.title}</h3>
                    <p style={{ color: "#5a7080", fontSize: "15px", lineHeight: 1.7 }}>{adv.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. QUICK LEAD FORM ────────────────────────────────── */}
      <section id="quote" style={{ background: "linear-gradient(to bottom, white 0%, #f4f8fb 120px, #f4f8fb 100%)", padding: "100px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ background: "white", borderRadius: "24px", padding: "48px", boxShadow: "0 20px 60px rgba(13,95,132,0.08)", border: "1px solid #e2ecf4" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 900, color: DARK, marginBottom: "12px", letterSpacing: "-0.02em" }}>
                Get Your <span style={{ color: PRIMARY }}>Custom Quote</span>
              </h2>
              <p style={{ color: "#5a7080", fontSize: "16px" }}>Secure peace of mind for your loved ones today.</p>
            </div>
            
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={e => e.preventDefault()}>
              <div style={{ display: "flex", gap: "20px" }}>
                <input type="text" placeholder="First Name" style={{ flex: 1, padding: "16px 20px", borderRadius: "12px", border: "1px solid #dde8f0", fontSize: "15px", outline: "none", transition: "border 0.2s" }} onFocus={e => (e.target as HTMLInputElement).style.borderColor = PRIMARY} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "#dde8f0"} />
                <input type="text" placeholder="Last Name" style={{ flex: 1, padding: "16px 20px", borderRadius: "12px", border: "1px solid #dde8f0", fontSize: "15px", outline: "none", transition: "border 0.2s" }} onFocus={e => (e.target as HTMLInputElement).style.borderColor = PRIMARY} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "#dde8f0"} />
              </div>
              <input type="email" placeholder="Email Address" style={{ padding: "16px 20px", borderRadius: "12px", border: "1px solid #dde8f0", fontSize: "15px", outline: "none", transition: "border 0.2s" }} onFocus={e => (e.target as HTMLInputElement).style.borderColor = PRIMARY} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "#dde8f0"} />
              
              <button style={{ background: `linear-gradient(135deg, ${PRIMARY}, #094a68)`, color: "white", padding: "18px", borderRadius: "12px", fontSize: "16px", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: `0 8px 24px ${PRIMARY}44`, transition: "all 0.3s", marginTop: "12px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${PRIMARY}55`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${PRIMARY}44`; }}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── 5. SERVICES SECTION ───────────────────────────────── */}
      <section style={{ background: "linear-gradient(to bottom, #f4f8fb 0%, white 120px, white 100%)", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>Resources for Success</div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: DARK, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Comprehensive <span style={{ color: PRIMARY }}>Protection Tools</span>
            </h2>
            <p style={{ color: "#5a7080", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>We provide the resources for your family’s financial security and growth.</p>
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

      {/* ─── 6. SOCIAL PROOF & TESTIMONIALS ────────────────────── */}
      <section style={{ background: DARK, padding: "100px 0", color: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Our Reputation is Built on Trust.
            </h2>
            <p style={{ color: "#8ab4c8", fontSize: "16px", maxWidth: "600px", margin: "0 auto 36px" }}>Proudly featured and recognized by industry leaders.</p>
            <div style={{ display: "flex", gap: "32px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginBottom: "40px" }}>
              {mediaLogos.map((logo) => (
                <div key={logo.src} style={{ height: "28px", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.72 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxHeight: "28px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {testimonials.slice(0, 3).map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "18px", padding: "36px 32px", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#facc15", fontSize: "18px", marginBottom: "16px", letterSpacing: "2px" }}>{item.stars}</div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, flex: 1, marginBottom: "24px", fontStyle: "italic" }}>&ldquo;{item.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "16px" }}>
                    {item.name.charAt(0)}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "15px" }}>— {item.name}</div>
                </div>
              </div>
            ))}
          </div>
          {/* More reviews placeholder style layout */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginTop: "24px" }}>
             {testimonials.slice(3, 5).map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "18px", padding: "36px 32px", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#facc15", fontSize: "18px", marginBottom: "16px", letterSpacing: "2px" }}>{item.stars}</div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, flex: 1, marginBottom: "24px", fontStyle: "italic" }}>&ldquo;{item.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "16px" }}>
                    {item.name.charAt(0)}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "15px" }}>— {item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. GET STARTED CTA SECTION ────────────────────────── */}
      <section style={{ background: "#f4f8fb", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <div style={{ fontSize: "12px", fontWeight: 800, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>How Can We Help You?</div>
          <h2 style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 900, color: DARK, letterSpacing: "-0.02em", marginBottom: "48px" }}>
             Let’s Build Your <span style={{ color: PRIMARY }}>Safety Harbour</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ background: "white", borderRadius: "24px", padding: "48px", boxShadow: "0 12px 40px rgba(13,95,132,0.08)", border: "1px solid #e2ecf4" }}>
              <div style={{ width: "72px", height: "72px", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/getting-started/agents.svg" alt="Agent support icon" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: DARK, marginBottom: "24px" }}>Agents</h3>
              <a href="#" style={{ display: "inline-block", background: `linear-gradient(135deg, ${PRIMARY}, #094a68)`, color: "white", padding: "16px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: `0 8px 24px ${PRIMARY}44`, transition: "all 0.3s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.transform = "translateY(0)"; }}>
                Join Our Network
              </a>
            </div>
            <div style={{ background: "white", borderRadius: "24px", padding: "48px", boxShadow: "0 12px 40px rgba(13,95,132,0.08)", border: "1px solid #e2ecf4" }}>
               <div style={{ width: "72px", height: "72px", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/getting-started/families.svg" alt="Families icon" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: DARK, marginBottom: "24px" }}>Families</h3>
              <a href="#quote" style={{ display: "inline-block", background: `linear-gradient(135deg, ${ACCENT}, #8b1818)`, color: "white", padding: "16px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: `0 8px 24px ${ACCENT}44`, transition: "all 0.3s" }}
                 onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
                 onMouseLeave={e => { (e.target as HTMLElement).style.transform = "translateY(0)"; }}>
                Request A Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. CARRIER PARTNERS ───────────────────────────────── */}
      <section style={{ background: "white", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: DARK, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              We Partner with the Nation’s <span style={{ color: PRIMARY }}>Top Insurance Carriers.</span>
            </h2>
            <p style={{ color: "#5a7080", fontSize: "16px", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto" }}>
              From IULs to Fixed Indexed Annuities, Safety Harbour Insurance proudly collaborates with the industry&rsquo;s most trusted carriers. This allows our agents to find the best product at the best price for your specific needs.
            </p>
          </div>
          {/* Carrier logo grid */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "18px", marginBottom: "48px" }}>
            {carriers.map((carrier, i) => (
              <div key={i} style={{ background: "white", border: "1.5px solid #dde8f0", borderRadius: "14px", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "140px", height: "80px", boxShadow: "0 2px 12px rgba(13,95,132,0.06)", transition: "all 0.25s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 24px ${PRIMARY}22`; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#dde8f0"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(13,95,132,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={carrier.src} alt={carrier.alt} style={{ maxWidth: "110px", maxHeight: "48px", width: "auto", height: "auto", objectFit: "contain", filter: "grayscale(100%)", transition: "filter 0.25s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(0%)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(100%)"; }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. BLOG / ARTICLES SECTION ────────────────────────── */}
      <section style={{ background: "#f4f8fb", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>Insights & News</div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: DARK, letterSpacing: "-0.02em" }}>
              Latest <span style={{ color: PRIMARY }}>Articles & Insights</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {articles.map((article, i) => (
              <a key={i} href="#" style={{ display: "block", background: "white", borderRadius: "16px", textDecoration: "none", border: "1px solid #dde8f0", transition: "all 0.3s", boxShadow: "0 4px 16px rgba(13,95,132,0.04)", overflow: "hidden" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(13,95,132,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(13,95,132,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "#dde8f0"; }}>
                <div style={{ aspectRatio: "4 / 3", background: "#e7eff4" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.image} alt={article.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{ fontSize: "12px", color: "#8ab4c8", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase" }}>Insurance Guide</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 800, color: DARK, lineHeight: 1.4, marginBottom: "16px" }}>{article.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: PRIMARY, fontSize: "13.5px", fontWeight: 700 }}>
                    Read Article
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. CONTACT BANNER ────────────────────────────────── */}
      <section id="contact" style={{ background: `linear-gradient(135deg, ${PRIMARY}, #094a68)`, padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px" }}>
          <div>
            <h2 style={{ fontSize: "32px", fontWeight: 900, color: "white", marginBottom: "12px", letterSpacing: "-0.02em" }}>
              Need more details?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px" }}>
              Our team is standing by to assist you.
            </p>
            <div style={{ display: "flex", gap: "24px", marginTop: "24px", flexWrap: "wrap" }}>
               <div style={{ color: "white", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                 <span style={{ fontSize: "20px" }}>✉</span> info@safetyharbourinsurance.io
               </div>
               <div style={{ color: "white", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                 <span style={{ fontSize: "20px" }}>📞</span> +1 786-233-0773
               </div>
               <div style={{ color: "white", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                 <span style={{ fontSize: "20px" }}>📍</span> 3350 Virginia St, Coconut Grove, Miami, FL
               </div>
            </div>
          </div>
          <div>
            <a href="mailto:info@safetyharbourinsurance.io" style={{ display: "inline-block", background: "white", color: PRIMARY, padding: "18px 42px", borderRadius: "50px", fontSize: "16px", fontWeight: 800, textDecoration: "none", boxShadow: `0 8px 30px rgba(0,0,0,0.15)`, transition: "all 0.3s" }}
               onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
               onMouseLeave={e => { (e.target as HTMLElement).style.transform = "translateY(0)"; }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── 11. FOOTER ────────────────────────────────────────── */}
      <footer style={{ background: DARK, color: "white", padding: "80px 0 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.4fr", gap: "60px", paddingBottom: "60px" }}>

            {/* Brand col */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo2.png" alt="Safety Harbour Insurance" style={{ height: "72px", marginBottom: "24px", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.8, maxWidth: "340px" }}>
                At Safety Harbour Insurance, we are dedicated to helping you protect what matters most. Our mission is to ensure your family&rsquo;s future is secure through personalized, expert insurance solutions.
              </p>
              {/* Social icons */}
              <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
                {[
                  { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                  { label: "X", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                  { label: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
                  { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                  { label: "TikTok", path: "M12.525.02c1.31-.02 2.61-.01 3.91.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.46-5.49-.03-2.31 1.09-4.5 2.98-5.71 1.25-.8 2.76-1.18 4.24-1.04v4.06c-.82-.01-1.64.21-2.31.67-.66.45-1.11 1.16-1.22 1.95-.12.87.21 1.77.83 2.37.58.56 1.44.82 2.24.69.87-.14 1.62-.71 2-1.49.32-.67.43-1.43.41-2.18V.02z" }
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
        @font-face { font-family: 'Galano Grotesque'; src: url('/fonts/GalanoGrotesqueSemiBold.otf') format('opentype'); font-weight: 400; }
        @font-face { font-family: 'Galano Grotesque'; src: url('/fonts/GalanoGrotesqueSemiBold.otf') format('opentype'); font-weight: 500; }
        @font-face { font-family: 'Galano Grotesque'; src: url('/fonts/GalanoGrotesqueSemiBold.otf') format('opentype'); font-weight: 600; }
        @font-face { font-family: 'Galano Grotesque'; src: url('/fonts/GalanoGrotesqueExtraBold.otf') format('opentype'); font-weight: 700; }
        @font-face { font-family: 'Galano Grotesque'; src: url('/fonts/GalanoGrotesqueExtraBold.otf') format('opentype'); font-weight: 800; }
        @font-face { font-family: 'Galano Grotesque'; src: url('/fonts/GalanoGrotesqueExtraBold.otf') format('opentype'); font-weight: 900; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
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
