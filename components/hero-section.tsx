"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Static background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/posh_white_livingarea.jpeg"
          alt="Posh White Living Area by SK Designs"
          fill
          className="object-cover transition-transform duration-[10s] ease-out scale-105"
          priority
          sizes="100vw"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/65" />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-5xl px-6 text-center transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Architectural Design Studio
          </span>
          <div className="h-px w-16 bg-accent" />
        </div>

        <h1 className="font-serif text-[43px] font-bold leading-[1.1] tracking-tight sm:text-[65px] lg:text-[5rem]">
          <span className="block text-background">Create and</span>
          {/* Red line cutting through the headline */}
          <span className="relative block">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-accent/60" />
            <span className="relative text-accent">Inhabit</span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-background/60 sm:text-base">
          Transforming vision into immersive spaces through cutting-edge 3D
          architectural visualization and design.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#gallery"
            className="btn-wire px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] !bg-foreground !text-background hover:shadow-lg hover:shadow-accent/20"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="btn-accent-wire px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.2em]"
          >
            Our Story
          </a>
        </div>


      </div>

      {/* Scroll indicator */}
      <a
        href="#gallery"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to gallery"
      >
        <ArrowDown className="h-5 w-5 text-background/40" />
      </a>
    </section>
  )
}
