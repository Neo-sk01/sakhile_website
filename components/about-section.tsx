import Image from "next/image"
import { PenTool, Building2, Ruler, Eye } from "lucide-react"

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "8+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
  { value: "3", label: "Design Awards" },
]

const services = [
  {
    icon: PenTool,
    title: "3D Visualization",
    description:
      "Photorealistic renders that bring architectural concepts to life before construction begins.",
  },
  {
    icon: Building2,
    title: "Architectural Design",
    description:
      "Full-service residential and commercial design from sketches to construction documents.",
  },
  {
    icon: Ruler,
    title: "Interior Design",
    description:
      "Curated interior spaces that balance aesthetics and functionality for modern living.",
  },
  {
    icon: Eye,
    title: "Consultation",
    description:
      "Expert guidance on materials, layouts, and spatial planning tailored to your vision.",
  },
]

export function AboutSection() {
  return (
    <>
      {/* About */}
      <section id="about" className="bg-secondary py-28 lg:py-36">
        {/* 1px red divider at top */}
        <div className="section-divider" />

        <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                About Us
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <span className="text-balance">
                  Designing spaces that inspire
                </span>
              </h2>
              <div className="mt-6 h-px w-16 bg-accent" />
              <p className="mt-8 text-muted-foreground leading-relaxed">
                SK Designs is an architectural and interior design studio
                committed to transforming ideas into immersive spaces. We
                specialize in 3D architectural visualization, giving our clients
                a true-to-life preview of their future environments.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From modern residences to commercial establishments, our design
                philosophy merges bold creativity with practical functionality,
                ensuring every project is tailored to its inhabitants.
              </p>

              <a
                href="#gallery"
                className="btn-wire mt-10 inline-block px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.2em]"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-accent pl-6 py-2"
                >
                  <span className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm text-muted-foreground tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1px red divider between about and services */}
      <div className="section-divider" />

      {/* Services */}
      <section className="relative bg-foreground py-28 lg:py-36 overflow-hidden">
        {/* Decorative background image */}
        <div className="absolute inset-0 opacity-[0.04]">
          <Image
            src="/images/WhatsApp%20Image%202026-02-17%20at%2012.56.19%20(1).jpeg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              What We Do
            </span>
            <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-background sm:text-5xl">
              <span className="text-balance">Our Services</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-accent" />
          </div>

          <div className="grid gap-px bg-background/5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-foreground p-10 transition-all duration-500 hover:bg-foreground/80"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-accent/30 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  <service.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-8 text-base font-bold text-background tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-background/50 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
