"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

const heroImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-17%20at%2012.56.13-nwa6aKU29ds7F8Vg3JshrtudNa2Ll1.jpeg",
    alt: "Contemporary Residence by SK Designs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-17%20at%2012.56.16-yXQ45XB0RNUYHLYhuOPZCwULCLuKdd.jpeg",
    alt: "Luxury Bedroom Suite by SK Designs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-17%20at%2012.56.18%20%282%29-3IJPF44d37iVDgERDKI0zppVH3FYyh.jpeg",
    alt: "SK's Cafe Exterior by SK Designs",
  },
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Sliding background images */}
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: currentImage === i ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover scale-105"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

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

        <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-[5.5rem]">
          <span className="block text-background">Create and</span>
          {/* Red line cutting through the headline */}
          <span className="relative block">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-accent/60" />
            <span className="relative text-accent">Inhabit</span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-background/60 sm:text-lg">
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

        {/* Slide indicators */}
        <div className="mt-16 flex items-center justify-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-0.5 transition-all duration-500 ${currentImage === i ? "w-10 bg-accent" : "w-5 bg-background/30"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
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
