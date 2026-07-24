import { useEffect, useState } from "react";

const interests = ["Pocket watches", "Wristwatches", "Movements", "Watchmaker tools", "Clocks", "Enamels", "Music boxes"];
const services = [
  ["01", "Buying", "Direct, knowledgeable consideration for unusual watches, clocks, movements, tools, enamels, and music boxes."],
  ["02", "Selling", "Access to a well-established network of horological organizations, collectors, and fellow specialists."],
  ["03", "Repairing", "Experienced care for antique watches and clocks, grounded in a lifetime of close study and hands-on work."],
  ["04", "Appraising", "Free, straightforward appraisals at your convenience—even when an item is not in running or working order."],
];

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const closeOnWideScreen = () => window.innerWidth > 760 && setMenuOpen(false);
    window.addEventListener("resize", closeOnWideScreen);
    return () => window.removeEventListener("resize", closeOnWideScreen);
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gitman Antique Watches and Rarities home">
          <span className="brand-name">Gitman</span>
          <span className="brand-detail">Antique Watches &amp; Rarities</span>
        </a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? "Close" : "Menu"}</span><span className="menu-mark" aria-hidden="true">⌁</span>
        </button>
        <nav id="site-navigation" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Primary navigation">
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
          <a href="#buying" onClick={() => setMenuOpen(false)}>What we buy</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Howard</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Request an appraisal</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="./assets/antique-watch-still-life.png" alt="Antique pocket watch, wristwatch, gears, and watchmaker’s loupe on a walnut workbench" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="motto">Moving time around the world</p>
          <h1>Antique timepieces deserve an expert eye.</h1>
          <p className="hero-copy">For more than 40 years, Howard Gitman has bought, sold, repaired, and appraised uncommon watches, clocks, and horological rarities.</p>
          <div className="hero-actions">
            <a className="button button-light" href="tel:+12125799830">Call 212-579-9830</a>
            <a className="text-link" href="mailto:info@gitmanantique.com">Email Howard <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <p className="hero-caption">A lifetime devoted to the mechanics, artistry, and history of time.</p>
      </section>

      <section className="introduction" aria-labelledby="intro-heading">
        <p className="section-label">Independent expertise · Established 1971</p>
        <h2 id="intro-heading">Thoughtful guidance for pieces that cannot be judged by price guides alone.</h2>
        <p>Auction commissions can reach 30% to 35% and results often vary. Consult a renowned professional who understands the object, the market, and the collectors who value it.</p>
      </section>

      <section className="services-section" id="expertise" aria-labelledby="expertise-heading">
        <div className="section-heading">
          <p className="section-label">A complete horological service</p>
          <h2 id="expertise-heading">Four decades of practical knowledge.</h2>
        </div>
        <div className="service-list">
          {services.map(([number, title, text]) => (
            <article className="service" key={title}>
              <span className="service-number">{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="buying-section" id="buying" aria-labelledby="buying-heading">
        <div className="buying-copy">
          <p className="section-label">Currently seeking</p>
          <h2 id="buying-heading">Unusual objects. Any condition.</h2>
          <p>Items need not be in running or working order. A neglected movement, a family pocket watch, or a box of old tools may still deserve careful consideration.</p>
          <a className="button button-dark" href="mailto:info@gitmanantique.com?subject=Antique%20item%20appraisal">Request a free appraisal</a>
        </div>
        <ul className="interest-list" aria-label="Items we are interested in buying">
          {interests.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
        </ul>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-heading">
        <div className="about-copy">
          <p className="section-label">A time-honoured reputation</p>
          <h2 id="about-heading">Howard Gitman</h2>
          <p className="lead">A premier horological specialist known for experience, candor, and an exceptional collector network.</p>
          <p>Howard has been a member of the National Association of Watch and Clock Collectors (NAWCC) since 1971. His work is informed by decades of direct experience with antique watches, clocks, tools, and mechanical objects.</p>
          <blockquote>“Maximize your interests by consulting a renowned professional.”</blockquote>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <p className="section-label">Free appraisals at your convenience</p>
        <h2 id="contact-heading">Let’s talk about your timepiece.</h2>
        <div className="contact-links">
          <a href="tel:+12125799830">212-579-9830</a><a href="mailto:info@gitmanantique.com">info@gitmanantique.com</a>
        </div>
        <p className="contact-name">Howard Gitman · New York</p>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-name">Gitman</span><span className="brand-detail">Antique Watches &amp; Rarities</span></a>
        <p>Buying · Selling · Repairing · Appraising</p>
        <p>© {new Date().getFullYear()} Gitman Antique Watches &amp; Rarities</p>
      </footer>
    </main>
  );
}
