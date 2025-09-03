"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-primary/10 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            x: mousePosition.x * (20 + i * 10),
            y: mousePosition.y * (15 + i * 8),
            rotate: mousePosition.x * 360,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        />
      ))}

      {/* Larger floating elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-8 h-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg"
          style={{
            right: `${10 + i * 20}%`,
            top: `${20 + i * 25}%`,
          }}
          animate={{
            x: mousePosition.x * -(30 + i * 15),
            y: mousePosition.y * -(20 + i * 10),
            rotateX: mousePosition.y * 45,
            rotateY: mousePosition.x * 45,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 25,
          }}
        />
      ))}
    </div>
  )
}
