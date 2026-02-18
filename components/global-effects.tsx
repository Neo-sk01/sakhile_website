"use client"

import { useEffect, useRef } from "react"

export function GlobalEffects() {
    const glowRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Cursor glow
        const handleMouseMove = (e: MouseEvent) => {
            if (glowRef.current) {
                glowRef.current.style.left = `${e.clientX}px`
                glowRef.current.style.top = `${e.clientY}px`
            }
        }

        // Scroll progress
        const handleScroll = () => {
            if (progressRef.current) {
                const scrollTop = window.scrollY
                const docHeight = document.documentElement.scrollHeight - window.innerHeight
                const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
                progressRef.current.style.width = `${progress}%`
            }
        }

        window.addEventListener("mousemove", handleMouseMove, { passive: true })
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <div id="scroll-progress" ref={progressRef} />
            <div id="cursor-glow" ref={glowRef} />
        </>
    )
}
