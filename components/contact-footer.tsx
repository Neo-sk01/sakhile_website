import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactFooter() {
  return (
    <>
      {/* 1px red divider above contact */}
      <div className="section-divider" />

      {/* Contact CTA */}
      <section id="contact" className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Get in Touch
            </span>
            <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <span className="text-balance">
                {"Let's bring your vision to life"}
              </span>
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-accent" />
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Whether you have a detailed brief or just a spark of an idea, we
              would love to hear from you. Reach out to discuss your next
              project.
            </p>

            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {[
                { icon: Mail, label: "info@skdesigns.co", href: "mailto:info@skdesigns.co" },
                { icon: Phone, label: "+27 12 345 6789", href: "tel:+27123456789" },
                { icon: MapPin, label: "Johannesburg, SA", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col items-center gap-4 transition-colors"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-foreground transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20">
                    <item.icon className="h-5 w-5 text-background" />
                  </div>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent hover-underline-sweep">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <a
              href="mailto:info@skdesigns.co"
              className="btn-wire mt-14 inline-block px-12 py-4 text-[13px] font-semibold uppercase tracking-[0.2em]"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-10">
        {/* 1px red line at top of footer */}
        <div className="h-px w-full bg-accent/30" />
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/Untitled design.png"
                alt="SK Designs Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-wide text-background">
                  SK Designs
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-background/40">
                  Create and Inhabit
                </span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              {["Home", "Gallery", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover-underline-sweep text-[11px] font-medium uppercase tracking-[0.15em] text-background/40 transition-colors hover:text-accent"
                >
                  {link}
                </a>
              ))}
            </div>

            <p className="text-[11px] text-background/30">
              {"\u00A9"} {new Date().getFullYear()} SK Designs
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
