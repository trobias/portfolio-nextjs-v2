import Link from "next/link";

import { ArrowIcon } from "@/components/arrow-icon";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/lib/projects";

type ProjectGridProps = {
  projects: Project[];
  compact?: boolean;
};

export function ProjectGrid({ projects, compact = false }: ProjectGridProps) {
  return (
    <div className={`projectGrid${compact ? " projectGridCompact" : ""}`}>
      {projects.map((project, index) => (
        <article
          className={`projectCard projectCard${!compact && index % 3 === 0 ? "Wide" : "Standard"} tone-${project.tone}`}
          key={project.slug}
        >
          <Link href={`/proyectos/${project.slug}`} className="projectCardLink" aria-label={`Ver caso: ${project.title}`}>
            <div className="projectImage">
              <ProjectVisual
                project={project}
                decorative
                sizes={compact
                  ? "(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw"
                  : index % 3 === 0
                    ? "(max-width: 760px) 100vw, 66vw"
                    : "(max-width: 760px) 100vw, 50vw"}
              />
              <div className="projectImageShade" aria-hidden="true" />
              <span className="projectAccess">{project.access.label}</span>
            </div>
            <div className="projectMeta">
              <div>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>
              <ArrowIcon className="projectArrow" />
            </div>
            <p className="projectSummary">{project.summary}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
