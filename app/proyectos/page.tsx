import type { Metadata } from "next";
import Link from "next/link";

import { ProjectGrid } from "@/components/project-grid";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

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
      </header>
      <section className="indexGrid sectionPad" aria-label="Todos los proyectos">
        <ProjectGrid projects={projects} />
      </section>
    </main>
  );
}
