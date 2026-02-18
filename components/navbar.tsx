"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1))
      let current = "#home"
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = `#${id}`
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background ${scrolled
        ? "shadow-[0_1px_0_0_var(--border)]"
        : ""
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/Untitled design.png"
            alt="SK Designs Logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`hover-underline-sweep nav-dot text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 text-muted-foreground hover:text-foreground ${activeSection === link.href ? "active" : ""
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden text-[13px] font-semibold uppercase tracking-[0.15em] px-7 py-2.5 transition-all duration-300 md:inline-block btn-wire"
        >
          Start a Project
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-colors text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } bg-background border-t border-border`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors hover-underline-sweep ${activeSection === link.href
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-wire inline-block px-7 py-2.5 text-[13px] font-semibold uppercase tracking-[0.15em]"
            >
              Start a Project
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
