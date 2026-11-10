import {
  ArrowUpRight,
  Check,
  Clock,
  CreditCard,
  Globe,
  MessageCircle,
  Plus,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { faqs, maintenance, plans, processSteps, profile, type Plan } from "@/data/content";

/** Enlace a WhatsApp con un mensaje ya escrito para el plan elegido. */
function waLink(text: string) {
  return `${profile.whatsapp}?text=${encodeURIComponent(text)}`;
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const featured = plan.featured;
  return (
    <Reveal
      delay={index * 90}
      className={`relative flex flex-col rounded-[2rem] p-7 sm:p-8 ${
        featured
          ? "bg-ink text-paper shadow-[0_40px_80px_-30px_rgb(29_26_23/0.55)] lg:-my-4 lg:py-12"
          : "border border-line bg-white/80"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          <Sparkles className="size-3.5" /> La más elegida
        </span>
      )}

      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-2xl font-bold tracking-tight">{plan.name}</h3>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
            featured ? "bg-paper/10 text-paper/80" : "bg-sand text-muted"
          }`}
        >
          <Clock className="size-3.5" /> {plan.delivery}
        </span>
      </div>
      <p className={`mt-2 text-[0.95rem] leading-relaxed ${featured ? "text-paper/70" : "text-muted"}`}>{plan.idealFor}</p>

      <div className="mt-7 flex items-end gap-2">
        {plan.from && <span className={`mb-2 text-sm ${featured ? "text-paper/60" : "text-muted"}`}>desde</span>}
        <span className="font-display text-6xl font-bold leading-none tracking-tight">{plan.price}</span>
        <span className={`mb-1.5 text-2xl font-bold ${featured ? "text-accent" : "text-accent"}`}>€</span>
      </div>
      <p className={`mt-2 text-sm ${featured ? "text-paper/60" : "text-muted"}`}>Pago único · {plan.payment}</p>

      <a
        href={waLink(plan.whatsappText)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold transition-all hover:-translate-y-0.5 ${
          featured ? "bg-accent text-white hover:bg-[#ec6a45]" : "bg-ink text-paper hover:bg-accent"
        }`}
      >
        <MessageCircle className="size-5" /> {plan.cta}
      </a>

      <div className={`my-7 h-px ${featured ? "bg-paper/15" : "bg-line"}`} />

      {plan.includesPrevious && (
        <p className={`mb-4 text-sm font-semibold ${featured ? "text-paper" : "text-ink"}`}>
          Todo lo de {plan.includesPrevious}, y además:
        </p>
      )}
      <ul className="space-y-3 text-[0.95rem]">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3">
            <span
              className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                featured ? "bg-accent text-white" : "bg-accent-soft text-accent"
              }`}
            >
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            <span className={featured ? "text-paper/90" : ""}>{f}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

const guarantees = [
  { icon: CreditCard, title: "Pagas en dos veces", text: "La mitad al empezar y la otra mitad cuando la web te guste y esté publicada." },
  { icon: Globe, title: "Todo a tu nombre", text: "El dominio y la web son tuyos desde el primer día. Sin permanencias ni ataduras." },
  { icon: Smartphone, title: "Perfecta en el móvil", text: "Diseño pensado primero para el móvil, que es desde donde te van a encontrar tus clientes." },
  { icon: ShieldCheck, title: "Trato directo conmigo", text: "Sin intermediarios ni agencias: hablas siempre con la persona que hace tu web." },
];

export function Pricing() {
  return (
    <section id="precios" className="relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute -left-40 top-40 -z-10 size-[30rem] rounded-full bg-accent-soft/70 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* Cabecera */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Precios</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Tu web profesional, <span className="font-serif font-normal italic text-accent">sin pagar</span> lo que cobra
            una agencia.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Precios claros y cerrados desde el principio. Sin cuotas escondidas ni sorpresas en la factura: eliges el
            plan, hablamos y en pocos días tienes tu web funcionando.
          </p>
        </Reveal>

        {/* Planes */}
        <div className="mt-16 grid items-stretch gap-6 sm:mt-20 lg:grid-cols-3 lg:gap-5">
          {plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} index={i} />
          ))}
        </div>
        <Reveal className="mt-6 text-center text-sm text-muted">
          IVA no incluido · El dominio (unos 12 € al año) se contrata a tu nombre y lo pagas directamente tú.
        </Reveal>

        {/* Mantenimiento + app a medida */}
        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <Reveal className="flex flex-col justify-between gap-6 rounded-[2rem] border border-line bg-sand/60 p-7 sm:flex-row sm:items-center sm:p-8 lg:col-span-3">
            <div className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-accent shadow-sm">
                <RefreshCw className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight">{maintenance.name}</h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{maintenance.text}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
                  {maintenance.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <Check className="size-4 text-leaf" strokeWidth={3} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="shrink-0 sm:text-right">
              <p className="font-display text-4xl font-bold tracking-tight">
                {maintenance.price}
                <span className="text-xl text-accent">€</span>
                <span className="text-base font-medium text-muted">/mes</span>
              </p>
              <p className="text-sm text-muted">Opcional · Cancela cuando quieras</p>
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="relative flex flex-col justify-between gap-5 overflow-hidden rounded-[2rem] bg-accent p-7 text-white sm:p-8 lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/15 blur-2xl" aria-hidden />
            <div className="relative">
              <h3 className="font-display text-xl font-bold tracking-tight">¿Necesitas una app o algo a medida?</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-white/85">
                Paneles de gestión, reservas, áreas de clientes o apps para el móvil. Cuéntame tu idea y te preparo un
                presupuesto sin compromiso.
              </p>
            </div>
            <a
              href={waLink("¡Hola Daniel! Tengo una idea para una app o un proyecto a medida y me gustaría pedirte presupuesto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Pedir presupuesto <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </div>

        {/* Garantías */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 80} className="rounded-3xl border border-line bg-white/70 p-6">
              <g.icon className="size-7 text-accent" />
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{g.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{g.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Proceso */}
        <div className="mt-24">
          <Reveal className="max-w-2xl">
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Así trabajamos, <span className="font-serif font-normal italic">paso a paso</span>.
            </h3>
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="relative rounded-3xl bg-ink p-6 text-paper">
                <span className="font-serif text-5xl italic text-accent">0{i + 1}</span>
                <h4 className="mt-3 font-display text-lg font-bold">{s.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/70">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Preguntas frecuentes */}
        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h3>
            <p className="mt-4 leading-relaxed text-muted">¿Tienes otra duda? Escríbeme y te respondo en el mismo día.</p>
            <a
              href={waLink("¡Hola Daniel! Tengo una duda sobre las webs:")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 font-semibold text-[#0b2e17] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" /> Pregúntame por WhatsApp
            </a>
          </Reveal>
          <div className="space-y-3 lg:col-span-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group rounded-2xl border border-line bg-white/70 open:bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold sm:p-6 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus className="size-5 shrink-0 text-accent transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="-mt-1 px-5 pb-5 leading-relaxed text-muted sm:px-6 sm:pb-6">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
