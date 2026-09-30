export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">Web Designer Portfolio</p>
        <h1 className="hero-title">Maya Chen</h1>
        <p className="hero-subtitle">
          I design usable, good-looking digital products: websites, mobile apps, and brand identities.
        </p>
        <a href="#contact" className="btn">
          Get In Touch
        </a>
      </section>
      
      <section className="section quote-section">
  <blockquote className="quote-text">
    "Good design is obvious. Great design is transparent."
  </blockquote>
</section>

      <main>
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I have been working in web and UI/UX design for several years. My main goal is to make an interface pleasant to use: clear typography, thoughtful spacing, and colors that help rather than distract.
          </p>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-list">
            <article className="project-card">
              <p className="project-tag">Mobile App</p>
              <h3 className="project-title">FreshBite Food Delivery</h3>
              <p className="project-text">
                Designed a mobile food ordering app, from the dish catalog all the way to the checkout screen.
              </p>
            </article>

            <article className="project-card">
              <p className="project-tag">Website Redesign</p>
              <h3 className="project-title">The Bookshelf</h3>
              <p className="project-text">
                Modernized an outdated online bookstore: new typography, a clearer catalog structure.
              </p>
            </article>

            <article className="project-card">
              <p className="project-tag">Brand Identity</p>
              <h3 className="project-title">Warm Cup Café</h3>
              <p className="project-text">
                Designed the logo, color palette, and menu layout for a small neighborhood coffee shop.
              </p>
            </article>
            <article className="project-card">
              <p className="project-tag">Graphic Design</p>
              <h3 className="project-title">3D Game Character Concept</h3>
              <p className="project-text">
                Created 3D models and character illustrations for an upcoming indie video game.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li className="skill-item">UI Design</li>
            <li className="skill-item">UX Research</li>
            <li className="skill-item">Figma</li>
            <li className="skill-item">Prototyping</li>
            <li className="skill-item">Typography</li>
            <li className="skill-item">Color Theory</li>
            <li className="skill-item skill-learning">Currently Learning</li>
          </ul>
        </section>

        <section id="contact" className="section contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="about-text">
            Tell me about your project — I'll reply within one business day.
          </p>
          <a href="mailto:maya.chen@example.com" className="btn">
            Send an Email
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Maya Chen. Learning portfolio project.</p>
      </footer>
    </>
  );
}
