const publications = [
  {
    year: "2026",
    venue: "SoCG 2026",
    title: "First-Order Logic and Twin-Width for Some Geometric Graphs",
    authors: "Colin Geniet, Gunwoo Kim, and Lucas Meijer",
    description:
      "Characterizes first-order model-checking tractability through twin-width for several geometric graph classes.",
    doi: "https://doi.org/10.4230/LIPIcs.SoCG.2026.51",
    arxiv: "https://arxiv.org/abs/2512.21896",
  },
  {
    year: "2026",
    venue: "ICALP 2026",
    title:
      "Odd-Cycle-Packing-Treewidth: On the Maximum Independent Set Problem in Odd-Minor-Free Graph Classes",
    authors:
      "Mujin Choi, Maximilian Gorsky, Gunwoo Kim, Caleb McFarland, and Sebastian Wiederrecht",
    description:
      "Introduces OCP-treewidth, a structural parameter that unifies tractable cases of Maximum Independent Set.",
    doi: "https://doi.org/10.4230/LIPIcs.ICALP.2026.64",
    arxiv: "https://arxiv.org/abs/2511.10019",
  },
  {
    year: "2025",
    venue: "Preprint",
    title: "Directed Treewidth Is Closed under Taking Butterfly Minors",
    authors: "Gunwoo Kim, Meike Hatzel, and Stephan Kreutzer",
    description:
      "Revisits equivalent notions of directed treewidth and identifies formulations that behave well under butterfly minors.",
    arxiv: "https://arxiv.org/abs/2503.23977",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Gunwoo Kim, home">
          <span>GK</span>
          <span className="wordmark-text">Gunwoo Kim</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#talks">Talks</a>
          <a className="nav-contact" href="mailto:gunwoo.kim@kaist.ac.kr">
            Email <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              Graduate Researcher · Theoretical Computer Science
            </p>
            <h1>
              Gunwoo
              <br />
              Kim<span className="period">.</span>
            </h1>
            <p className="hero-statement">
              I study the structure of graphs and the algorithms hidden within
              them.
            </p>
            <div className="hero-links">
              <a href="mailto:gunwoo.kim@kaist.ac.kr">
                gunwoo.kim@kaist.ac.kr <Arrow />
              </a>
              <a
                href="https://dimag.ibs.re.kr/members/"
                target="_blank"
                rel="noreferrer"
              >
                IBS DIMAG profile <Arrow />
              </a>
            </div>
          </div>

          <aside className="portrait-panel" aria-label="Profile summary">
            <div className="portrait-frame">
              <img
                src="/gunwoo-kim.jpeg"
                alt="Portrait of Gunwoo Kim"
                width="300"
                height="300"
              />
              <div className="portrait-index" aria-hidden="true">
                01
              </div>
            </div>
            <div className="affiliation">
              <p>
                <strong>School of Computing</strong>
                <br />
                KAIST
              </p>
              <p>
                <strong>Discrete Mathematics Group</strong>
                <br />
                Institute for Basic Science
              </p>
            </div>
          </aside>
        </section>

        <section className="ticker" aria-label="Research areas">
          <span>Structural Graph Theory</span>
          <span>Parameterized Complexity</span>
          <span>Graph Algorithms</span>
          <span>Discrete Mathematics</span>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label">
            <span>01</span>
            <h2>About</h2>
          </div>
          <div className="about-content">
            <p className="lead">
              I am a graduate student at the{" "}
              <a
                href="https://cs.kaist.ac.kr/"
                target="_blank"
                rel="noreferrer"
              >
                School of Computing, KAIST
              </a>
              , advised by{" "}
              <a
                href="https://ssimplexity.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Professor Eun Jung Kim
              </a>
              . I am also a member of the{" "}
              <a
                href="https://dimag.ibs.re.kr/"
                target="_blank"
                rel="noreferrer"
              >
                IBS Discrete Mathematics Group
              </a>{" "}
              in Daejeon, South Korea.
            </p>
            <div className="about-grid">
              <p>
                My research sits at the intersection of structural graph theory
                and parameterized algorithms. I am interested in width
                parameters, graph containment relations, logical model
                checking, and the structural reasons that make hard problems
                tractable.
              </p>
              <div className="education-card">
                <p className="mini-label">Education</p>
                <div>
                  <span>2024 — present</span>
                  <strong>Graduate Student, Computer Science</strong>
                  <p>KAIST, Daejeon</p>
                </div>
                <div>
                  <span>B.S.</span>
                  <strong>Computer Science</strong>
                  <p>Technische Universität Berlin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="section-label">
            <span>02</span>
            <h2>Publications</h2>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication" key={publication.title}>
                <div className="publication-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="publication-main">
                  <div className="publication-meta">
                    <span>{publication.year}</span>
                    <span>{publication.venue}</span>
                  </div>
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors}</p>
                  <p className="publication-description">
                    {publication.description}
                  </p>
                  <div className="paper-links">
                    {publication.doi && (
                      <a
                        href={publication.doi}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Paper <Arrow />
                      </a>
                    )}
                    <a
                      href={publication.arxiv}
                      target="_blank"
                      rel="noreferrer"
                    >
                      arXiv <Arrow />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section talks-section" id="talks">
          <div className="section-label">
            <span>03</span>
            <h2>Talks</h2>
          </div>
          <div className="talk-card">
            <div className="talk-date">
              <strong>22</strong>
              <span>AUG</span>
              <span>2025</span>
            </div>
            <div className="talk-copy">
              <p className="mini-label">Contributed talk</p>
              <h3>
                Unifying Islands of Tractability for Maximum Independent Set
              </h3>
              <p>
                2025 Korean Student Combinatorics Workshop
                <br />
                Gyeongju, South Korea
              </p>
              <a
                href="https://indico.ibs.re.kr/event/932/contributions/7844/"
                target="_blank"
                rel="noreferrer"
              >
                Talk details <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <p className="eyebrow">Questions, ideas, collaborations</p>
          <h2>Let’s talk about graphs.</h2>
          <a href="mailto:gunwoo.kim@kaist.ac.kr">
            gunwoo.kim@kaist.ac.kr <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Gunwoo Kim</span>
        <span>KAIST · IBS DIMAG · Daejeon</span>
      </footer>
    </>
  );
}
