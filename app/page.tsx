import Image from "next/image";
import Link from "next/link";

import { Announcement } from "@/components/announcement";
import { ArrowIcon } from "@/components/arrow-icon";
import { ContactMenu } from "@/components/contact-menu";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { SiteHeader } from "@/components/site-header";
import { featuredProjects, projects } from "@/lib/projects";

const process = [
  {
    index: "01",
    title: "ENTENDER",
    text: "Primero modelo el problema, las personas y las restricciones. La herramienta viene después.",
  },
  {
    index: "02",
    title: "CONECTAR",
    text: "Uno servicios, datos, redes o dispositivos en un flujo que se pueda explicar y mantener.",
  },
  {
    index: "03",
    title: "AUTOMATIZAR",
    text: "La IA interpreta donde hace falta; la lógica determinística protege lo que no puede fallar.",
  },
  {
    index: "04",
    title: "MEDIR",
    text: "Pruebo el resultado, documento decisiones y dejo señales claras para operar y mejorar.",
  },
];

const capabilities = [
  "N8N",
  "POSTGRES",
  "PYTHON",
  "DOCKER",
  "OPENAI",
  "GEMINI",
  "ARDUINO",
  "GNS3",
  "FIGMA",
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Announcement />
      <div className="heroShell">
        <SiteHeader inverted />
        <Hero />
      </div>

      <section className="manifesto sectionPad" aria-labelledby="manifesto-title">
        <div className="manifestoLabel" aria-hidden="true">↳</div>
        <div className="manifestoCopy">
          <h2 id="manifesto-title">
            De un mensaje de WhatsApp a un sensor sobre una mesa.
          </h2>
          <p>
            Trabajo en la parte donde las herramientas dejan de estar aisladas y empiezan a resolver juntas. Diseño el flujo,
            construyo la integración y documento cómo funciona.
          </p>
        </div>
      </section>

      <section id="proyectos" className="workSection sectionPad" aria-labelledby="projects-title">
        <div className="sectionHeading sectionHeadingLight">
          <div>
            <h2 id="projects-title">PROYECTOS QUE CONECTAN CAPAS.</h2>
          </div>
          <p className="sectionSidecopy">
            Automatización, infraestructura, interfaces y prototipos físicos construidos como sistemas completos.
          </p>
        </div>
        <Link href="/proyectos" className="archiveTopLink">
          <span>Ver todos los casos</span>
          <small>{projects.length} proyectos · 3 categorías</small>
          <ArrowIcon />
        </Link>
        <ProjectGrid projects={featuredProjects} compact />
        <Link href="/proyectos" className="archiveGateway">
          <span className="archiveGatewayEyebrow">Archivo completo · 3 categorías</span>
          <strong>VER LOS<br />{projects.length} CASOS.</strong>
          <span className="archiveGatewayAction">
            Explorar índice <ArrowIcon />
          </span>
        </Link>
      </section>

      <section className="zubuFeature sectionPad" aria-labelledby="zubu-title">
        <div className="zubuFeatureIntro">
          <p>COFUNDADOR · 2026</p>
          <h2 id="zubu-title">ZUBU<br />AGENCY.</h2>
        </div>
        <div className="zubuFeatureBody">
          <p className="zubuFeatureLead">
            No es un proyecto aislado. Es la agencia que cofundé para convertir procesos reales en software, automatizaciones,
            bots, tiendas e integraciones que se puedan operar y hacer crecer.
          </p>
          <p>
            Desde ZUBU trabajamos con comercio, servicios y operaciones internas. Ahí conviven relevamiento, dirección de
            producto, implementación, despliegue y acompañamiento; desde una landing hasta un ERP conectado.
          </p>
          <div className="zubuWorks" aria-label="Trabajos vinculados a ZUBU Agency">
            {[
              ["Agro Gross", "/proyectos/agroveterinaria-gross"],
              ["OrdenYa", "/proyectos/tienda-ordenya"],
              ["Yeryos", "/proyectos/yeryos"],
              ["Ceferina", "/proyectos/ceferina-accesorios"],
              ["Mamayucca", "/proyectos/tienda-mamayucca"],
            ].map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </div>
          <div className="zubuLinks">
            <a href="https://zubuagency.com/" target="_blank" rel="noreferrer">Sitio <ArrowIcon /></a>
            <a href="https://www.instagram.com/zubuagency/" target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a>
            <a href="https://wa.me/5493764502803" target="_blank" rel="noreferrer">WhatsApp <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="enfoque" className="processSection sectionPad" aria-labelledby="process-title">
        <div className="sectionHeading">
          <div>
            <h2 id="process-title">MENOS MAGIA.<br />MÁS SISTEMA.</h2>
          </div>
          <p className="sectionSidecopy">
            El movimiento visual acompaña la misma idea que el código: cada transición debe explicar una relación, no esconderla.
          </p>
        </div>

        <div className="processList">
          {process.map((step) => (
            <div className="processRow" key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="capabilities" aria-label="Tecnologías">
        <div className="capabilitiesTrack">
          {[...capabilities, ...capabilities].map((capability, index) => (
            <span key={`${capability}-${index}`} aria-hidden={index >= capabilities.length}>
              {capability}<i>✦</i>
            </span>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="aboutSection sectionPad" aria-labelledby="about-title">
        <div className="aboutImage">
          <Image
            src="/images/foto.png"
            alt="Retrato de Tobías Tarnowski"
            width={928}
            height={1120}
            sizes="(max-width: 760px) 100vw, 42vw"
          />
          <span className="imageStamp">POSADAS / ARGENTINA</span>
        </div>

        <div className="aboutCopy">
          <h2 id="about-title">TÉCNICO POR FORMACIÓN. CURIOSO POR DEPORTE.</h2>
          <p className="aboutLead">
            Soy Analista de Sistemas de Información, Técnico Informático y estudiante de 4.º año de Ingeniería en Sistemas.
            Cofundé ZUBU Agency en 2026 y trabajo de forma independiente en tecnología desde 2021.
          </p>
          <p>
            Trabajo con automatización, IA, desarrollo web, infraestructura y prototipado. Esa mezcla me permite moverme desde la conversación con una persona hasta la API, la base de datos o el dispositivo que hace que el proceso termine de verdad.
          </p>
          <div className="educationList" aria-label="Formación">
            <div>
              <span>2023—2027</span>
              <strong>Ingeniería en Sistemas de Información</strong>
              <small>Universidad de la Cuenca del Plata · 4.º año en curso</small>
            </div>
            <div>
              <span>2025</span>
              <strong>Analista de Sistemas de Información</strong>
              <small>Título universitario intermedio obtenido al finalizar 3.er año</small>
            </div>
            <div>
              <span>2016—2021</span>
              <strong>Técnico Informático</strong>
              <small>E.P.E.T. N.º 1 · Posadas, Misiones</small>
            </div>
          </div>
          <div className="aboutLinks">
            <a href="https://www.linkedin.com/in/tobiastarnowski/" target="_blank" rel="noreferrer">
              LinkedIn <ArrowIcon />
            </a>
            <a href="https://github.com/trobias" target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="contactSection sectionPad" aria-labelledby="contact-title">
        <p className="contactIntro">¿Tenés un sistema por destrabar?</p>
        <h2 id="contact-title">HAGAMOS ALGO<br />QUE FUNCIONE.</h2>
        <div className="contactBottom">
          <ContactMenu />
          <div className="contactDetails">
            <a href="mailto:tobias.44276@gmail.com">tobias.44276@gmail.com</a>
            <a href="https://wa.me/5493764260055" target="_blank" rel="noreferrer">+54 9 376 426 0055</a>
            <span>Posadas, Misiones, Argentina</span>
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <span>© {new Date().getFullYear()} TOBÍAS TARNOWSKI</span>
        <span>DISEÑADO PARA CONECTAR</span>
        <a href="#top">VOLVER ARRIBA ↑</a>
      </footer>
    </main>
  );
}
