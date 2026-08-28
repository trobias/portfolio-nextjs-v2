import type { Metadata } from "next";
import Link from "next/link";

import { ProjectGrid } from "@/components/project-grid";
import { SiteHeader } from "@/components/site-header";
import { groupedProjects, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Índice de proyectos de automatización, IA, redes, hardware y diseño de Tobías Tarnowski.",
};

export default function ProjectsIndex() {
  return (
    <main id="main-content" tabIndex={-1} className="indexPage">
      <SiteHeader />
      <header className="indexHero sectionPad">
        <h1>TODO EL<br />TRABAJO.</h1>
        <div className="indexIntro">
          <p>{projects.length} casos entre sistemas, automatizaciones, redes, interfaces, comercio y prototipos.</p>
          <Link href="/">← Volver al inicio</Link>
        </div>
        <nav className="categoryIndex" aria-label="Categorías de proyectos">
          <span>Ir a una categoría</span>
          <ol>
            {groupedProjects.map((group) => (
              <li key={group.id}>
                <a href={`#${group.id}`}>
                  <span>{group.index}</span>
                  <strong>{group.label}</strong>
                  <i>{group.projects.length} casos</i>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <div className="indexGrid sectionPad">
        {groupedProjects.map((group) => (
          <section className="projectGroup" id={group.id} aria-labelledby={`${group.id}-title`} key={group.id}>
            <header className="projectGroupHeader">
              <span>{group.index} / {String(group.projects.length).padStart(2, "0")}</span>
              <h2 id={`${group.id}-title`}>{group.label}</h2>
              <p>{group.description}</p>
            </header>
            <ProjectGrid projects={group.projects} compact />
          </section>
        ))}
      </div>
    </main>
  );
}
