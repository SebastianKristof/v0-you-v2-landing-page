"use client"

import { useEffect, useRef } from "react"

interface AbstractShapeProps {
  className?: string
}

export default function AbstractShape({ className = "" }: AbstractShapeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    let animationFrameId: number
    const shapes: Array<{
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
    }> = []

    // Create shapes
    for (let i = 0; i < 5; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 50 + Math.random() * 100,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        opacity: 0.1 + Math.random() * 0.2,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw shapes
      shapes.forEach((shape) => {
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.globalAlpha = shape.opacity

        // Draw geometric shape
        ctx.beginPath()
        if (Math.random() > 0.5) {
          // Rectangle
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
        } else {
          // Circle
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
        }
        ctx.strokeStyle = "rgba(180, 120, 90, 0.3)"
        ctx.lineWidth = 2
        ctx.stroke()

        // Update rotation
        shape.rotation += shape.rotationSpeed

        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`${className}`} />
}
