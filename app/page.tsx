"use client"

import { motion } from "motion/react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { MatrixRain } from "@/components/MatrixRain"

// ====== TROQUE AQUI PELO SEU LINK DO TELEGRAM ======
const TELEGRAM_URL = "https://t.me/+jjC11RSfym5hODAx"
// ===================================================

const GREEN = "#00e676"

function Sunburst({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" fill={GREEN} stroke="none" />
      <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  )
}

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        background: "transparent",
      }}
    >
      <a href={TELEGRAM_URL} style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Sunburst size={22} />
        <span
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.14em",
            color: "#eafff2",
            textShadow: "0 0 12px rgba(0,230,118,0.5)",
          }}
        >
          MATRIX
        </span>
      </a>

      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 18px",
          borderRadius: 9999,
          border: "1px solid rgba(0,230,118,0.4)",
          background: "rgba(0,230,118,0.08)",
          color: "#eafff2",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Entrar <ChevronRight size={15} />
      </a>
    </nav>
  )
}

const features = [
  { title: "Automático", desc: "A IA opera sozinha por você" },
  { title: "24 Horas", desc: "Analisa o mercado sem parar" },
  { title: "Precisão", desc: "Decisões baseadas em dados" },
  { title: "Controle", desc: "Acompanhe tudo em tempo real" },
]

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#000" }}>
      {/* Fundo: chuva de código Matrix */}
      <MatrixRain />

      {/* Overlay escuro + leve blur */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      />

      {/* Vignette radial para legibilidade */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse 70% 65% at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Brilhos decorativos verdes */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          left: "18%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(0,230,118,0.18)",
          filter: "blur(120px)",
          mixBlendMode: "screen",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-12%",
          right: "16%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(16,185,129,0.16)",
          filter: "blur(120px)",
          mixBlendMode: "screen",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Navbar />

      {/* Conteúdo da hero */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(96px, 14vh, 140px) clamp(16px, 5vw, 24px) clamp(56px, 8vh, 80px)",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {/* Eyebrow mono */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono-m"
          style={{
            fontSize: 11,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(0,230,118,0.85)",
            marginBottom: 22,
          }}
        >
          Inteligência Artificial · Mercado Financeiro
        </motion.p>

        {/* Pré-headline serif */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-serif-i"
          style={{
            fontSize: "clamp(1.6rem, 5.2vw, 3rem)",
            lineHeight: 1.1,
            color: "#eafff2",
            marginBottom: 14,
          }}
        >
          A máquina vê o que você não vê
        </motion.p>

        {/* Headline com gradiente */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: "clamp(3.2rem, 13vw, 8.5rem)",
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 42%, #6dffab 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            marginBottom: 28,
            filter: "drop-shadow(0 0 32px rgba(0,230,118,0.35))",
          }}
        >
          Entre na Matrix
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.72 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontSize: "clamp(1rem, 2.6vw, 1.25rem)",
            lineHeight: 1.65,
            color: "#ffffff",
            maxWidth: 620,
            marginBottom: 40,
          }}
        >
          A inteligência artificial que opera no mercado por você — 24 horas por dia, analisando milhares de dados e
          executando operações automáticas com precisão. Sem medo, sem ganância, sem erro humano.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {/* Primário — pill branco com seta verde */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
              width: "min(420px, 90vw)",
              padding: "10px 10px 10px 32px",
              borderRadius: 9999,
              background: "#ffffff",
              color: "#05130b",
              fontSize: "1.15rem",
              fontWeight: 600,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Liberar meu acesso
            <span
              className="btn-primary-arrow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: GREEN,
                transition: "background 0.2s",
              }}
            >
              <ArrowRight size={20} color="#05130b" />
            </span>
          </a>

        </motion.div>
      </section>

      {/* Como funciona / features */}
      <section
        id="como-funciona"
        style={{
          position: "relative",
          zIndex: 10,
          padding: "clamp(40px, 8vh, 72px) clamp(16px, 5vw, 24px) clamp(64px, 10vh, 96px)",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "clamp(18px, 3vw, 28px)",
            borderTop: "1px solid rgba(0,230,118,0.15)",
            paddingTop: "clamp(28px, 5vh, 44px)",
          }}
        >
          {features.map((f) => (
            <div key={f.title} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: 13,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#6dffab",
                  marginBottom: 8,
                  textShadow: "0 0 14px rgba(0,230,118,0.4)",
                }}
              >
                {f.title}
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.55)" }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <p
          className="font-mono-m"
          style={{
            textAlign: "center",
            marginTop: "clamp(40px, 7vh, 64px)",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(0,230,118,0.7)",
          }}
        >
          A escolha é sua: azul ou vermelho?
        </p>
      </section>
    </main>
  )
}
