import Link from "next/link";

type SiteHeaderProps = {
  inverted?: boolean;
};

export function SiteHeader({ inverted = false }: SiteHeaderProps) {
  return (
    <header className={`siteHeader${inverted ? " siteHeaderInverted" : ""}`}>
      <Link className="wordmark" href="/" aria-label="Tobías Tarnowski, inicio">
        TOBÍAS<br />TARNOWSKI<span>®</span>
      </Link>

      <nav className="desktopNav" aria-label="Navegación principal">
        <Link href="/#proyectos">Proyectos</Link>
        <Link href="/#enfoque">Enfoque</Link>
        <Link href="/#sobre-mi">Sobre mí</Link>
        <Link href="/#contacto">Contacto</Link>
      </nav>

      <div className="headerTelemetry" aria-label="Estado operativo">
        <span className="telemetryPulse" aria-hidden="true" />
        <span className="telemetryText">POSADAS, AR · SISTEMAS ONLINE</span>
      </div>

      <details className="mobileNav">
        <summary>Menú</summary>
        <nav aria-label="Navegación móvil">
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/#enfoque">Enfoque</Link>
          <Link href="/#sobre-mi">Sobre mí</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>
      </details>
    </header>
  );
}
