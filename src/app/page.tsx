"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import { FaLinkedin, FaGithub, FaAt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { AiFillSound } from "react-icons/ai";

import { SIDE_PROJECTS } from "@/data/projects";
import { WORK_EXPERIENCES } from "@/data/experience";

const ThemeSelector = dynamic(() => import("@/components/ThemeSelector"), {
  ssr: false,
  loading: () => <div className="lg:top-8 w-20 h-8"></div>,
});

export default function Home() {
  const playNameSound = () => {
    const audio = new Audio("/name-pronunciation.mp3");
    audio.play().catch((error) => console.error("Error playing audio:", error));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen max-w-screen-xl m-auto px-4 md:px-8 lg:px-20 py-8 lg:py-0 lg:-right-8">
      <header className="flex flex-col h-max lg:sticky lg:top-0 lg:py-24 reveal d-0">
        <div className="portrait-frame mb-8">
          <Image
            className="relative top-[-50px] scale-[1.3]"
            src="/images/IMG_6246.jpg"
            alt="me"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="flex flex-row items-end gap-3 mb-3 flex-wrap">
          <h1 className="display text-5xl sm:text-6xl font-light cursor-pointer transition-colors duration-400 hover:text-[#169f4d]">
            Hyunyi <span className="display-italic">Kim</span>
          </h1>
        </div>
        <button
          type="button"
          onClick={playNameSound}
          className="listen-pill self-start mb-6"
          title="Listen to pronunciation"
        >
          <AiFillSound size={11} />
          <span>hear it</span>
        </button>
      </header>
      <div>
        <div className="fixed top-8 right-3 lg:sticky col-span-1 lg:col-span-2 flex justify-end lg:-right-6 lg:top-8">
          <ThemeSelector />
        </div>
        <main className="flex flex-col gap-8 lg:gap-16 lg:pt-16 lg:pb-24">
          <section className="reveal d-1">
            <div className="section-label">
              <span className="num">§ 01</span>
              <span>About</span>
            </div>
            <div className="mb-5">
              <p className="text-lg mb-2 leading-relaxed">
                <span className="highlight first">Full-stack engineer</span>{" "}
                with 6 years of experience building web apps at scale, including
                a K-pop platform with 5M users and a B2C startup that grew 10x
                in a year. <br />I own{" "}
                <span className="highlight second">features end to end</span>,
                from backend APIs to user-facing UI. I also use{" "}
                <span className="highlight third">AI tooling</span> to speed up
                UI work, cutting implementation time from days to about an hour
                .
              </p>
              <p className="text-lg mb-2 leading-relaxed">
                Outside work, I love being in{" "}
                <span className="highlight fourth">nature</span>. I often go
                jogging and lie on the grass, watching the trees and sky, which
                gives me the energy to work on my computer. I’m also{" "}
                <span className="highlight fifth">
                  a huge Korean food lover
                </span>
                .
              </p>
            </div>
            <div className="flex flex-row gap-5 items-center">
              <a
                className="opacity-70 hover:opacity-100 hover:text-[#169f4d] transition"
                href="https://www.linkedin.com/in/hyunyikim/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                className="opacity-70 hover:opacity-100 hover:text-[#169f4d] transition"
                href="https://github.com/hyunyikim"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="opacity-70 hover:opacity-100 hover:text-[#169f4d] transition"
                href="mailto:hi.hyunyi.kim@gmail.com"
                aria-label="Email"
              >
                <FaAt size={18} />
              </a>
            </div>
          </section>
          <section className="reveal d-2">
            <div className="section-label">
              <span className="num">§ 02</span>
              <span>Experience</span>
            </div>
            <div className="flex flex-row items-baseline justify-between flex-wrap gap-3">
              <h3 className="display text-3xl sm:text-4xl font-light">
                Working Experience
              </h3>
              <a
                className="flex flex-row gap-1.5 items-center group text-sm tracking-wide"
                href="https://assets.hyunyikim.xyz/public/CV.pdf"
                target="_blank"
              >
                <span className="underline underline-offset-4 decoration-1 group-hover:text-[#169f4d] group-hover:decoration-[#169f4d] transition-colors">
                  Résumé
                </span>
                <FiExternalLink
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
            <ul className="flex flex-col gap-3 mt-4">
              {WORK_EXPERIENCES.map((exp) => (
                <li
                  key={`${exp.company}-${exp.period}`}
                  className="project-card no-link"
                >
                  <div className="flex flex-row justify-between items-start flex-wrap gap-2">
                    <div>
                      <span className="font-semibold">{exp.role}</span>
                      <span className="opacity-50 mx-1.5">·</span>
                      <span className="display-italic">{exp.company}</span>
                    </div>
                    <span className="tag-chip">{exp.period}</span>
                  </div>
                  {exp.description && (
                    <div className="text-sm opacity-75 leading-relaxed">
                      {exp.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section className="reveal d-3">
            <div className="section-label">
              <span className="num">§ 03</span>
              <span>Side Projects</span>
            </div>
            <h3 className="display text-3xl sm:text-4xl font-light mb-4">
              Side Projects
            </h3>
            <ul className="flex flex-col gap-3">
              {SIDE_PROJECTS.map((project) => (
                <li
                  key={project.name}
                  className={`project-card${project.url ? "" : " no-link"}`}
                  onClick={
                    project.url
                      ? (e) => {
                          e.preventDefault();
                          window.open(project.url, "_blank");
                        }
                      : undefined
                  }
                >
                  <div
                    className={`flex flex-row flex-wrap items-center justify-between gap-2${
                      project.icon ? " pr-6" : ""
                    }`}
                  >
                    <div className="flex flex-row items-center gap-2.5">
                      {project.icon && (
                        <Image
                          src={project.icon}
                          alt={project.name}
                          width={28}
                          height={28}
                          className="rounded"
                        />
                      )}
                      <span className="font-semibold text-base">
                        {project.name}
                      </span>
                    </div>
                    <div className="flex flex-row gap-1.5">
                      <span className="tag-chip">{project.tag}</span>
                      {project.inDevelopment && (
                        <span className="tag-chip warn">In development</span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm opacity-75 leading-relaxed">
                    {project.description}
                  </div>
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-row flex-wrap gap-1.5 mt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-full border border-current opacity-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section className="reveal d-4">
            <div className="section-label">
              <span className="num">§ 04</span>
              <span>Moments</span>
            </div>
            <h3 className="display text-3xl sm:text-4xl font-light mb-5">
              What I like
            </h3>
            <article className="grid grid-cols-2 grid-rows-4 gap-2">
              <div className="favoriate vertical" data-caption="Berliner Dom">
                <Image
                  src="/images/IMG_5864.jpg"
                  alt="berlin dom"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="favoriate vertical" data-caption="A single leaf">
                <Image
                  src="/images/IMG_6081.jpg"
                  alt="leaf"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className="favoriate horizontal col-span-2"
                data-caption="Sunset over Tempelhof"
              >
                <Image
                  src="/images/IMG_7279.jpg"
                  alt="sunset in tempelhof"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className="favoriate vertical"
                data-caption="A very good dog"
              >
                <Image
                  src="/images/IMG_6646.jpg"
                  alt="dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className="favoriate vertical"
                data-caption="Ice cream afternoons"
              >
                <Image
                  src="/images/IMG_3241.jpg"
                  alt="icecream"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="favoriate vertical" data-caption="Backlit leaves">
                <Image
                  src="/images/IMG_6846.jpg"
                  alt="leaf"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className="favoriate vertical"
                data-caption="Ein Bier, bitte"
              >
                <Image
                  src="/images/IMG_7424.jpg"
                  alt="beer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className="favoriate horizontal col-span-2"
                data-caption="Roses in bloom"
              >
                <Image
                  src="/images/IMG_6787.jpg"
                  alt="roses"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
