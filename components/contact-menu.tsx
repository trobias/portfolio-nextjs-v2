"use client";

import { useRef } from "react";

import { AnimatedPillLink } from "@/components/animated-pill-link";
import { ArrowIcon } from "@/components/arrow-icon";

const contactOptions = [
  {
    label: "Abrir Gmail",
    detail: "Redactar un correo nuevo",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=tobias.44276%40gmail.com",
  },
  {
    label: "Abrir Outlook",
    detail: "Redactar desde Outlook web",
    href: "https://outlook.live.com/mail/0/deeplink/compose?to=tobias.44276%40gmail.com",
  },
  {
    label: "Ver Instagram",
    detail: "@tobias.tarnowski",
    href: "https://www.instagram.com/tobias.tarnowski/",
  },
  {
    label: "Escribir por WhatsApp",
    detail: "+54 9 376 426 0055",
    href: "https://wa.me/5493764260055",
  },
];

export function ContactMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  };

  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      <AnimatedPillLink
        className="contactButton"
        href="#contacto"
        aria-haspopup="dialog"
        onClick={(event) => {
          event.preventDefault();
          openMenu();
        }}
      >
        Escribime <ArrowIcon />
      </AnimatedPillLink>

      <dialog
        className="contactDialog"
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="contactDialogPanel">
          <div className="contactDialogTop">
            <div>
              <span>Contacto directo</span>
              <h3 id="contact-dialog-title">¿POR DÓNDE HABLAMOS?</h3>
            </div>
            <button type="button" onClick={closeMenu} aria-label="Cerrar menú de contacto">×</button>
          </div>

          <div className="contactDialogLinks">
            {contactOptions.map((option) => (
              <a href={option.href} target="_blank" rel="noreferrer" key={option.label}>
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.detail}</small>
                </span>
                <ArrowIcon />
              </a>
            ))}
          </div>

          <a className="contactMailFallback" href="mailto:tobias.44276@gmail.com">
            Usar otra aplicación de correo
          </a>
        </div>
      </dialog>
    </>
  );
}
