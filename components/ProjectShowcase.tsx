import Image from "next/image";
import { ArrowUpRight, Check, Github } from "lucide-react";
import type { Project } from "@/data/content";
import { Reveal } from "./Reveal";

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_30px_60px_-30px_rgb(29_26_23/0.45)] sm:rounded-2xl">
      <div className="flex items-center gap-2 border-b border-ink/5 bg-sand/70 px-3 py-2 sm:px-4 sm:py-2.5">
        <span className="size-2 rounded-full bg-[#ff5f57] sm:size-2.5" />
        <span className="size-2 rounded-full bg-[#febc2e] sm:size-2.5" />
        <span className="size-2 rounded-full bg-[#28c840] sm:size-2.5" />
        <span className="ml-2 truncate rounded-md bg-paper px-2.5 py-0.5 text-[0.65rem] text-muted sm:ml-3 sm:text-xs">
          {url.replace(/^https?:\/\//, "")}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        sizes="(min-width: 1024px) 640px, 92vw"
        className="h-auto w-full"
      />
    </div>
  );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[1.4rem] bg-ink p-1.5 shadow-[0_25px_50px_-20px_rgb(29_26_23/0.6)] sm:rounded-[2rem] sm:p-2">
      <div className="relative overflow-hidden rounded-[1.05rem] bg-white sm:rounded-[1.6rem]">
        <span className="absolute left-1/2 top-1.5 z-10 h-1.5 w-1/3 -translate-x-1/2 rounded-full bg-ink sm:top-2 sm:h-2" />
        <Image
          src={src}
          alt={alt}
          width={780}
          height={1688}
          sizes="(min-width: 1024px) 180px, 30vw"
          className="aspect-[9/17] h-auto w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const mainLink = project.links.find((l) => l.primary) ?? project.links[0];

  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className={`relative lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <div
          className="absolute -inset-3 -z-10 rounded-[2rem] opacity-[0.12] blur-2xl sm:-inset-6"
          style={{ background: project.accent }}
          aria-hidden
        />
        <a href={mainLink.href} target="_blank" rel="noopener noreferrer" className="group block pr-[14%] pb-[10%]">
          <div className="transition-transform duration-500 group-hover:-translate-y-1">
            <BrowserFrame src={project.desktop} alt={`${project.title} en ordenador`} url={project.previewUrl} />
          </div>
          <div className="float absolute bottom-0 right-0 w-[29%] max-w-[190px]">
            <PhoneFrame src={project.mobile} alt={`${project.title} en el móvil`} />
          </div>
        </a>
      </Reveal>

      <Reveal delay={120} className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          <span className="font-serif text-2xl normal-case italic tracking-normal text-accent">0{index + 1}</span>
          {project.kicker}
        </p>
        <h3 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h3>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[0.95rem]">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                <Check className="size-3" strokeWidth={3} />
              </span>
              {h}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-line bg-white/60 px-3 py-1 text-xs font-medium">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                l.primary
                  ? "bg-ink text-paper hover:bg-accent"
                  : "border border-ink/15 bg-white/50 hover:border-ink/40"
              }`}
            >
              {l.href.includes("github.com") && <Github className="size-4" />}
              {l.label}
              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
