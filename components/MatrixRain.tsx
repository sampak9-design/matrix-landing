"use client"

import { useEffect, useRef } from "react"

/** Chuva de código "Matrix" desenhada em canvas, preenchendo a tela toda. */
export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "01ｱｶｻﾀﾅﾊﾏﾔﾗ7ﾘｳｼﾉﾎﾄｹﾒｴｶﾆｷﾑ01ﾃﾎ".split("")
    const fontSize = 14
    let drops: number[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.max(1, Math.floor(canvas.width / fontSize))
      drops = Array.from({ length: cols }, () => Math.floor((Math.random() * canvas.height) / fontSize))
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      ctx.fillStyle = "rgba(0, 4, 2, 0.09)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillStyle = Math.random() > 0.975 ? "#a7ffcf" : "#00e676"
        ctx.fillText(text, x, y)
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    const interval = setInterval(draw, 55)
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
    />
  )
}
