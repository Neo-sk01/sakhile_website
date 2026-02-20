"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Interior",
    description:
      "Contemporary TV wall unit with sculptural wood slat accents and warm ambient lighting.",
    src: "/images/WhatsApp%20Image%202026-02-17%20at%2012.56.22%20(1).jpeg",
  },
  {
    id: 2,
    title: "Luxury Bedroom Suite",
    category: "Interior",
    description:
      "Sophisticated bedroom with dark wood accent wall, integrated workspace, and ambient cove lighting.",
    src: "/images/WhatsApp%20Image%202026-02-17%20at%2012.56.18.jpeg",
  },
  {
    id: 3,
    title: "Restaurant Dining Hall",
    category: "Commercial",
    description:
      "Open-plan restaurant with floor-to-ceiling glass walls, copper pendant lighting, and modern furnishings.",
    src: "/images/WhatsApp%20Image%202026-02-17%20at%2012.56.19.jpeg",
  },
  {
    id: 4,
    title: "Cafe Kitchen & Bar",
    category: "Commercial",
    description:
      "Industrial-chic cafe interior with open shelving, botanical accents, and artisan copper fixtures.",
    src: "/images/WhatsApp%20Image%202026-02-17%20at%2012.56.26%20(3).jpeg",
  },
  {
    id: 5,
    title: "Cafe Exterior",
    category: "Architecture",
    description:
      "Modern commercial facade with bold signage, glass storefront, and minimalist silhouette.",
    src: "/images/WhatsApp%20Image%202026-02-17%20at%2012.56.20.jpeg",
  },
  {
    id: 6,
    title: "Contemporary Residence",
    category: "Architecture",
    description:
      "Two-storey modern home with mixed cladding, rooftop terrace, and covered entertaining area.",
    src: "/images/WhatsApp%20Image%202026-02-17%20at%2012.56.26%20(1).jpeg",
  },
  {
    id: 7,
    title: "Cafe Lounge Interior",
    category: "Commercial",
    description:
      "Spacious cafe lounge with sculptural wall art, oversized windows, and copper globe pendants.",
    src: "/images/WhatsApp%20Image%202026-02-17%20at%2012.56.18%20(2).jpeg",
  },
]

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
]

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<Map<number, HTMLElement>>(new Map())

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  // Intersection observer for scroll-reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-project-id"))
            setVisibleItems((prev) => new Set([...prev, id]))
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    itemRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ""
  }, [])

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }, [lightboxIndex, filtered.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }, [lightboxIndex, filtered.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  return (
    <section id="gallery" className="bg-background py-28 lg:py-36">
      {/* 1px red divider at top of section */}
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        {/* Section header */}
        <div className="mb-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Our Work
          </span>
          <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">Design Gallery</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground leading-relaxed">
            A curated collection of 3D visualizations across residential,
            commercial, and interior design projects.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setVisibleItems(new Set())
              }}
              className={`relative px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${activeCategory === cat
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
              {/* Red dot indicator for active filter */}
              {activeCategory === cat && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry-inspired gallery grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => {
            // Create visual variety with different aspect ratios
            const isLarge = index === 0 || index === 3
            return (
              <button
                key={project.id}
                data-project-id={project.id}
                ref={(el) => {
                  if (el) itemRefs.current.set(project.id, el)
                }}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-700 ease-out ${visibleItems.has(project.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  } ${isLarge ? "aspect-[4/3] sm:col-span-2 lg:col-span-1 lg:row-span-1" : "aspect-[4/3]"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle bottom gradient - always visible */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Expand icon */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-foreground/60 text-background opacity-0 transition-all duration-300 group-hover:opacity-100 backdrop-blur-sm">
                  <Expand className="h-4 w-4" />
                </div>

                {/* Info overlay */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6">
                  <span className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-accent opacity-0 transition-all duration-500 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-background transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-background/70 leading-relaxed opacity-0 transition-all duration-500 delay-75 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Red accent line on hover — 2px */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </button>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/97 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Project lightbox"
        >
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center text-background/60 transition-colors hover:text-background"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center text-background/40 transition-colors hover:text-background sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center text-background/40 transition-colors hover:text-background sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image container */}
          <div
            className="relative w-full max-w-6xl px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                {filtered[lightboxIndex].category}
              </span>
              <h3 className="mt-2 text-xl font-bold text-background">
                {filtered[lightboxIndex].title}
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-background/50 leading-relaxed">
                {filtered[lightboxIndex].description}
              </p>
            </div>

            {/* Counter */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`h-0.5 transition-all duration-300 ${lightboxIndex === i
                    ? "w-8 bg-accent"
                    : "w-3 bg-background/20 hover:bg-background/40"
                    }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
