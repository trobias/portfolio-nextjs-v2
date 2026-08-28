import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon } from "@/components/arrow-icon";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="main-content" tabIndex={-1} className={`casePage tone-${project.tone}`}>
      <SiteHeader />

      <header className="caseHero sectionPad">
        <div className="caseHeading">
          <h1>{project.title}</h1>
          <p className="caseSummary">{project.summary}</p>
          <div className="caseMeta">
            <span>{project.category}</span>
            <span>{project.year}</span>
            <span>{project.access.label}</span>
          </div>
        </div>
        <div className="caseCover">
          <ProjectVisual project={project} priority sizes="100vw" />
        </div>
      </header>

      <section className="caseOverview sectionPad" aria-labelledby="overview-title">
        <div>
          <h2 id="overview-title">Problema, conexión y resultado.</h2>
        </div>
        <div className="caseDescription">
          {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote>{project.result}</blockquote>
        </div>
      </section>

      <section className="caseAccess sectionPad" aria-labelledby="access-title">
        <h2 id="access-title">{project.access.label}</h2>
        <p>{project.access.detail}</p>
      </section>

      <section className="caseStack sectionPad" aria-label="Tecnologías utilizadas">
        <p className="sectionKicker">Stack</p>
        <ul>
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </section>

      {project.gallery.length > 0 ? (
        <section className="caseGallery sectionPad" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="visuallyHidden">Galería del proyecto</h2>
          {project.gallery.map((image, index) => (
            <figure className={`caseGalleryItem${index % 3 === 0 ? " caseGalleryItemWide" : ""}`} key={image}>
              <div>
                <Image src={image} alt={`${project.title}, vista ${index + 1}`} fill sizes="(max-width: 760px) 100vw, 70vw" />
              </div>
            </figure>
          ))}
        </section>
      ) : null}

      {project.links.length > 0 ? (
        <section className="caseLinks sectionPad" aria-labelledby="links-title">
          <p id="links-title" className="sectionKicker">Abrir proyecto</p>
          <div>
            {project.links.map((link) => (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                key={link.href}
              >
                {link.label}<ArrowIcon />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <Link className="nextCase sectionPad" href={`/proyectos/${nextProject.slug}`}>
        <span>Siguiente caso / {nextProject.index}</span>
        <strong>{nextProject.title}</strong>
        <ArrowIcon />
      </Link>
    </main>
  );
}
