import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Mail, X } from "lucide-react";
import { projects, profile } from "../data/portfolio";
import { ContactCta, SectionHeading, Tag } from "../components/Layout";


export default function Home() {
  const { state } = useLocation();
  return (
    <>
     
      <section className="home-intro">
        <div className="eyebrow">
          <span>01</span>
          <i />
          HELLO, I’M AMIR
        </div>
        <h1>
          Good software.
          <br />
          <span>Thoughtfully built.</span>
        </h1>
        <p className="home-lead">
          I’m a frontend developer who cares about how things{" "}
          <strong>work</strong> — and how they <strong>feel</strong>.
        </p>
        <p className="home-description">
          Over nine years of building web applications, creative tools, and
          booking platforms. Now bringing that experience to new products in
          Canada, while exploring artificial intelligence.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="button-primary">
            Explore my work
            <ArrowUpRight size={18} />
          </Link>
          <Link to="/about" className="text-link">
            A little about me
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
     
      <section className="section-block">
        <SectionHeading
          label="Selected work"
          link="All projects"
          to="/projects"
        />
        <div className="home-projects">
          {projects.slice(0, 2).map((project) => (
            <Link
              className="home-project group"
              to={`/projects/${project.slug}`}
              key={project.slug}
            >
              <div className="home-project-visual">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width="720"
                  height="430"
                />
              </div>
              <div>
                <div className="project-category">{project.category}</div>
                <h3>
                  {project.title}
                  <ArrowUpRight size={17} />
                </h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.slice(0, 3).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="now-block">
        <span className="now-marker" aria-hidden="true" />
        <div>
          <span className="eyebrow">THE NEXT CHAPTER</span>
          <h2>Experience meets curiosity.</h2>
          <p>
            Building UpHub and studying Software Engineering Technology —
            Artificial Intelligence at Centennial College.
          </p>
          <Link className="text-link" to="/education">
            My learning journey
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
