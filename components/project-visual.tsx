import Image from "next/image";

import type { Project } from "@/lib/projects";

type ProjectVisualProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
  decorative?: boolean;
};

export function ProjectVisual({ project, sizes, priority = false, decorative = false }: ProjectVisualProps) {
  if (project.cover) {
    return (
      <Image
        src={project.cover}
        alt={decorative ? "" : project.coverAlt ?? `Vista de ${project.title}`}
        fill
        priority={priority}
        sizes={sizes}
        style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
      />
    );
  }

  return (
    <div className="projectPlaceholder" aria-hidden={decorative ? "true" : undefined}>
      <span>{project.access.label}</span>
      <strong>{project.title}</strong>
      <i>Material visual pendiente de validación</i>
    </div>
  );
}
