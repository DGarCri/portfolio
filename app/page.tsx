import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Reveal } from "@/components/Reveal";
import { education, experience, languages, profile, projects, skills, type TimelineItem } from "@/data/content";

const marquee = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shopware", "PHP", "PostgreSQL", "MySQL", "Android", "Kotlin", "Git", "Vercel"];

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-5 border-l border-line pl-6 sm:pl-8">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 100} className="relative">
          <span className="absolute -left-[31px] top-7 size-3.5 rounded-full border-[3px] border-paper bg-accent sm:-left-[39px]" />
          <div className="rounded-2xl border border-line bg-white/70 p-5 transition-shadow hover:shadow-[0_20px_40px_-25px_rgb(29_26_23/0.35)] sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted">{item.period}</span>
              {item.badge && (
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">{item.badge}</span>
              )}
            </div>
            <div className="mt-2 flex items-start gap-4">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt=""
                  width={120}
                  height={120}
                  className="size-12 shrink-0 rounded-xl border border-line bg-white object-contain p-2"
                />
              )}
              <div>
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{item.title}</h3>
                <p className="mt-1 text-[0.95rem] text-muted">{item.place}</p>
              </div>
            </div>
            {item.points.length > 0 && (
              <ul className="mt-4 space-y-1.5 text-[0.95rem] leading-relaxed">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-ink/40" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio" className="overflow-x-clip">
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
          <div
            className="pointer-events-none absolute -right-32 -top-20 -z-10 size-[28rem] rounded-full bg-accent-soft blur-3xl sm:size-[36rem]"
            aria-hidden
          />
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <Reveal delay={80}>
                <h1 className="font-display text-[2.75rem] font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
                  Hago webs y apps que dan{" "}
                  <span className="font-serif font-normal italic text-accent">ganas</span> de usar.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                  Soy <strong className="font-semibold text-ink">Daniel García</strong>, desarrollador de páginas web y
                  aplicaciones en {profile.location}. He trabajado como desarrollador frontend en una empresa de Alemania y
                  creo webs y apps para negocios con React, Next.js y Tailwind CSS.
                </p>
              </Reveal>
              <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-accent"
                >
                  Ver mis proyectos <ArrowDown className="size-4" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-4 font-semibold transition-all hover:-translate-y-0.5 hover:border-ink/40"
                >
                  Hablemos
                </a>
              </Reveal>
            </div>

            <Reveal className="order-1 lg:order-2 lg:col-span-5">
              <div className="relative mx-auto w-60 sm:w-72 lg:w-full lg:max-w-sm">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.5rem] bg-accent sm:translate-x-4 sm:translate-y-4" aria-hidden />
                <Image
                  src="/daniel.webp"
                  alt="Daniel García Cristellys"
                  width={900}
                  height={1200}
                  priority
                  sizes="(min-width: 1024px) 384px, 288px"
                  className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover object-[center_25%]"
                />
                <div className="float-delay absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border border-line bg-white px-3 py-2 text-sm font-medium shadow-lg sm:-right-8">
                  <Code2 className="size-4 text-accent" /> Desarrollador de webs y apps
                </div>
              </div>
            </Reveal>
          </div>

          {/* Datos rápidos */}
          <Reveal delay={300}>
            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4 lg:mt-20">
              {[
                { k: "3", v: "proyectos publicados" },
                { k: "3 meses", v: "en una empresa alemana" },
                { k: "Avanzado", v: "nivel de inglés" },
                { k: "2", v: "títulos de grado superior en desarrollo" },
              ].map((s) => (
                <div key={s.v} className="bg-paper p-5 sm:p-6">
                  <dt className="whitespace-nowrap font-display text-3xl font-bold tracking-tight sm:text-[1.75rem] lg:text-4xl">{s.k}</dt>
                  <dd className="mt-1 text-sm text-muted">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Cinta de tecnologías */}
        <div className="border-y border-line bg-ink py-4 text-paper" aria-hidden>
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-medium sm:text-xl">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Proyectos */}
        <section id="proyectos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <SectionTitle
            eyebrow="Proyectos"
            title={
              <>
                Trabajo real, <span className="font-serif font-normal italic">publicado</span> y funcionando.
              </>
            }
            intro="Webs para negocios y una aplicación completa que diseñé, programé y desplegué. Todas se ven bien en el móvil, que es donde las usan sus clientes."
          />
          <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
            {projects.map((p, i) => (
              <ProjectShowcase key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="border-t border-line bg-sand/50">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionTitle
                  eyebrow="Experiencia"
                  title={
                    <>
                      De Osnabrück a <span className="font-serif font-normal italic">Madrid</span>.
                    </>
                  }
                  intro="Trabajé tres meses en Alemania desarrollando el frontend de una tienda online con Shopware. Desde entonces hago webs y apps para negocios."
                />
                <Reveal delay={150} className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-paper p-4">
                  <Image
                    src="/empresas/hob-by-horse.png"
                    alt="Logo de Hob-by-Horse"
                    width={120}
                    height={120}
                    className="size-14 shrink-0 rounded-xl border border-line bg-white object-contain p-2.5"
                  />
                  <p className="text-sm leading-relaxed text-muted">
                    <strong className="block text-base text-ink">Hob-by-Horse · Osnabrück</strong>
                    Tres meses de trabajo en un equipo internacional, en inglés.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Timeline items={experience} />
            </div>
          </div>
        </section>

        {/* Formación */}
        <section id="formacion" className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Formación"
              title={
                <>
                  Web primero, <span className="font-serif font-normal italic">multiplataforma</span> después.
                </>
              }
              intro="Terminé el grado superior de Desarrollo de Aplicaciones Web y ahora estoy en segundo de Desarrollo de Aplicaciones Multiplataforma."
            />
          </div>
          <div className="lg:col-span-7">
            <Timeline items={education} />
          </div>
        </section>

        {/* Tecnologías e idiomas */}
        <section id="stack" className="border-t border-line bg-sand/50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <SectionTitle
              eyebrow="Tecnologías"
              title={
                <>
                  Con lo que <span className="font-serif font-normal italic">trabajo</span>.
                </>
              }
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s, i) => (
                <Reveal key={s.group} delay={i * 80} className="rounded-3xl border border-line bg-paper p-6">
                  <h3 className="font-display text-lg font-semibold">{s.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="rounded-full bg-sand px-3 py-1.5 text-sm font-medium">
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
              <Reveal delay={skills.length * 80} className="rounded-3xl bg-ink p-6 text-paper">
                <h3 className="font-display text-lg font-semibold">Idiomas</h3>
                <ul className="mt-4 space-y-3">
                  {languages.map((l) => (
                    <li key={l.name}>
                      <span className="font-semibold">{l.name}</span>
                      <span className="block text-sm text-paper/70">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-paper sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-16">
            <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/40 blur-3xl" aria-hidden />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contacto</p>
            <h2 className="relative mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              ¿Necesitas una web o una app?{" "}
              <span className="font-serif font-normal italic text-accent">Hablemos.</span>
            </h2>
            <p className="relative mt-6 max-w-xl text-lg text-paper/70">
              Escríbeme por WhatsApp, por correo o por LinkedIn y te respondo lo antes posible. Estoy en Madrid.
            </p>
            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25d366] px-7 py-4 font-semibold text-[#0b2e17] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-5" /> WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/20 px-7 py-4 font-semibold transition-colors hover:bg-paper/10"
              >
                <Mail className="size-5" /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/20 px-7 py-4 font-semibold transition-colors hover:bg-paper/10"
              >
                <Linkedin className="size-5" /> LinkedIn <ArrowUpRight className="size-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/20 px-7 py-4 font-semibold transition-colors hover:bg-paper/10"
              >
                <Github className="size-5" /> GitHub <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="flex items-center gap-1.5">
            <MapPin className="size-4" /> Hecho con Next.js y Tailwind CSS en Madrid
          </p>
        </div>
      </footer>
    </>
  );
}
