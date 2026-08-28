import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="notFound">
      <p className="sectionKicker">Error / 404</p>
      <h1>ESTA RUTA<br />NO CONECTA.</h1>
      <Link href="/">Volver al portfolio →</Link>
    </main>
  );
}
