"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { ArrowIcon } from "@/components/arrow-icon";

const lineTransition = {
  duration: 0.9,
  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageTransform = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? ["translate3d(0, 0, 0) scale(1.04)", "translate3d(0, 0, 0) scale(1.04)"]
      : ["translate3d(0, 0, 0) scale(1.08)", "translate3d(0, -7%, 0) scale(1.08)"],
  );

  const hiddenLine = reduceMotion ? { opacity: 0 } : { transform: "translate3d(0, 110%, 0)" };
  const visibleLine = reduceMotion ? { opacity: 1 } : { transform: "translate3d(0, 0, 0)" };

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <motion.div
        className="heroMedia"
        style={{ transform: imageTransform }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <Image
          src="/images/arduino.jpeg"
          alt="Tobías armando un prototipo electrónico con Arduino"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="heroScrim" aria-hidden="true" />

      <div className="heroContent">
        <h1 id="hero-title" className="heroTitle" aria-label="Conecto. Automatizo. Resuelvo.">
          {["CONECTO.", "AUTOMATIZO.", "RESUELVO."].map((line, index) => (
            <span className="heroTitleLine" key={line} aria-hidden="true">
              <motion.span
                initial={hiddenLine}
                animate={visibleLine}
                transition={{ ...lineTransition, delay: 0.16 + index * 0.08 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="heroFooter"
          initial={{ opacity: 0, transform: reduceMotion ? "none" : "translate3d(0, 18px, 0)" }}
          animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          transition={{ duration: 0.7, delay: 0.54, ease: [0.23, 1, 0.32, 1] }}
        >
          <p>
            Diseño y construyo sistemas que conectan <strong>IA, automatización, redes y hardware</strong> para resolver trabajo real.
          </p>
          <a className="heroCta" href="#proyectos">
            Ver proyectos
            <ArrowIcon />
          </a>
        </motion.div>
      </div>

    </section>
  );
}
