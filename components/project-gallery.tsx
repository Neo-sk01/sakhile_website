"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react"

const projects = [
  // ----------------------------------------
  // Interior (8 images)
  // ----------------------------------------
  {
    id: 1,
    title: "Modernist Lounge Integration",
    category: "Interior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/artsy_living_area2.jpeg",
  },
  {
    id: 2,
    title: "Serene Minimalist Retreat",
    category: "Interior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/bedroom(Artsy).jpeg",
  },
  {
    id: 3,
    title: "Earthy Tonal Master Suite",
    category: "Interior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/interior(brownBR).jpeg",
  },
  {
    id: 4,
    title: "Organic Form Sitting Room",
    category: "Interior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/interior_wood_livingroom.jpeg",
  },
  {
    id: 5,
    title: "Timber Accent Atrium",
    category: "Interior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/interior_wood_livingroom2.jpeg",
  },
  {
    id: 6,
    title: "Biophilic Open Concept",
    category: "Interior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/leafygreen_openplan.jpeg",
  },
  {
    id: 7,
    title: "Monochrome Urban Living",
    category: "Interior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/living_room(grey).jpeg",
  },
  {
    id: 8,
    title: "Luminous White Expanse",
    category: "Interior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/posh_white_livingarea.jpeg",
  },

  // ----------------------------------------
  // Exterior (16 images)
  // ----------------------------------------
  {
    id: 9,
    title: "Crimson Accented Facade",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/exterior(redcar).jpeg",
  },
  {
    id: 10,
    title: "Sunset Brick Exterior",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/exterior(redcar2).jpeg",
  },
  {
    id: 11,
    title: "Suburban Heritage Residence",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasi_house%205.jpeg",
  },
  {
    id: 12,
    title: "Contemporary Township Villa",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasi_house(exterior).jpeg",
  },
  {
    id: 13,
    title: "Vernacular Modern Home",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasi_house2.jpeg",
  },
  {
    id: 14,
    title: "Asymmetric Gable Estate",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasi_house3.jpeg",
  },
  {
    id: 15,
    title: "Terraced Brick Dwelling",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasi_house4.jpeg",
  },
  {
    id: 16,
    title: "Modular Community House",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasi_house6(ext).jpeg",
  },
  {
    id: 17,
    title: "Angular Perspective Estate",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasiHouse(differentSide).jpeg",
  },
  {
    id: 18,
    title: "Elevated Corner Residence",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasiHouse7.jpeg",
  },
  {
    id: 19,
    title: "Textured Masonry Home",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/Kasihouse8.jpeg",
  },
  {
    id: 20,
    title: "Compact Urban Pavilion",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/kasiHouse9.jpeg",
  },
  {
    id: 21,
    title: "Aerial Plot Configuration",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/Kasihouse9(top_view).jpeg",
  },
  {
    id: 22,
    title: "Metropolitan Dual-Level",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/UrbanHouse(1).jpeg",
  },
  {
    id: 23,
    title: "Cityscape Modernist Block",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/urbanHOuse(2).jpeg",
  },
  {
    id: 24,
    title: "Sleek Rectilinear Profile",
    category: "Exterior",
    description: "Curated 3D architectural visualization and design for modern living.",
    src: "/images/UrbanHOuse(side).jpeg",
  },

  // ----------------------------------------
  // Commercial (2 images)
  // ----------------------------------------
  {
    id: 25,
    title: "Artisan Coffee Boutique",
    category: "Commercial",
    description: "Curated 3D architectural visualization and design for modern commercial spaces.",
    src: "/images/sk_cafe1.jpeg",
  },
  {
    id: 26,
    title: "Industrial Chic Cafe Interior",
    category: "Commercial",
    description: "Curated 3D architectural visualization and design for modern commercial spaces.",
    src: "/images/skCafe2.jpeg",
  },

  // ----------------------------------------
  // Student Accommodation (3 images)
  // ----------------------------------------
  {
    id: 27,
    title: "Campus Living Complex",
    category: "Student Accommodation",
    description: "Curated 3D architectural visualization for student housing developments.",
    src: "/images/student_accomodation.jpeg",
  },
  {
    id: 28,
    title: "Communal Housing Wing",
    category: "Student Accommodation",
    description: "Curated 3D architectural visualization for student housing developments.",
    src: "/images/student_accom_side.jpeg",
  },
  {
    id: 29,
    title: "Scholars Quad Aerial",
    category: "Student Accommodation",
    description: "Curated 3D architectural visualization for student housing developments.",
    src: "/images/student_accom(topview).jpeg",
  },
]

const CATEGORY_ORDER = ["Exterior", "Interior", "Commercial", "Student Accommodation"]


const categories = ["All", ...CATEGORY_ORDER]

// Build a flat indexed list that respects the grouped order for lightbox navigation
function buildGroupedList(activeCategory: string) {
  if (activeCategory !== "All") {
    return projects.filter((p) => p.category === activeCategory)
  }
  return CATEGORY_ORDER.flatMap((cat) => projects.filter((p) => p.category === cat))
}

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<Map<number, HTMLElement>>(new Map())

  const filtered = buildGroupedList(activeCategory)

  // Grouped structure for the "All" view
  const groups: { cat: string; items: typeof projects }[] =
    activeCategory === "All"
      ? CATEGORY_ORDER.map((cat) => ({
        cat,
        items: projects.filter((p) => p.category === cat),
      }))
      : [{ cat: activeCategory, items: filtered }]

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

  // Compute flattened index for lightbox from group + local index
  const getGlobalIndex = (cat: string, localIndex: number) => {
    if (activeCategory !== "All") return localIndex
    let offset = 0
    for (const group of groups) {
      if (group.cat === cat) return offset + localIndex
      offset += group.items.length
    }
    return localIndex
  }

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

        {/* Grouped gallery */}
        <div className="space-y-20">
          {groups.map(({ cat, items }) => (
            <div key={cat}>
              {/* Category heading — only shown in "All" view */}
              {activeCategory === "All" && (
                <div className="mb-8 flex items-center gap-5">
                  <div className="h-px flex-1 bg-border" />
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <h3 className="font-serif text-xl font-bold tracking-wide text-foreground">
                      {cat}
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground">
                      {items.length} projects
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>
              )}

              {/* Grid for this category */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((project, localIndex) => {
                  const globalIndex = getGlobalIndex(cat, localIndex)
                  return (
                    <button
                      key={project.id}
                      data-project-id={project.id}
                      ref={(el) => {
                        if (el) itemRefs.current.set(project.id, el)
                      }}
                      onClick={() => openLightbox(globalIndex)}
                      className={`group relative overflow-hidden bg-secondary aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-700 ease-out ${visibleItems.has(project.id)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                        }`}
                      style={{ transitionDelay: `${localIndex * 80}ms` }}
                    >
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Subtle bottom gradient */}
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

                      {/* Red accent line on hover */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
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

            {/* Counter dots */}
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
