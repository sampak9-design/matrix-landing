import { MatrixRain } from "@/components/MatrixRain"

// ====== TROQUE AQUI PELO SEU LINK DO TELEGRAM ======
const TELEGRAM_URL = "https://t.me/"
// ===================================================

const GREEN = "#00e676"

function IconChip() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  )
}
function IconLock({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}
function IconTarget() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill={GREEN} />
    </svg>
  )
}
function IconTrend() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 5h4v4" />
    </svg>
  )
}

const features = [
  { icon: <IconChip />, title: "Automático", desc: "A IA opera sozinha por você" },
  { icon: <IconClock />, title: "24 Horas", desc: "Analisa o mercado sem parar" },
  { icon: <IconTarget />, title: "Precisão", desc: "Decisões baseadas em dados" },
  { icon: <IconTrend />, title: "Controle", desc: "Acompanhe tudo em tempo real" },
]

const corner = (pos: React.CSSProperties): React.CSSProperties => ({
  position: "absolute",
  width: 20,
  height: 20,
  ...pos,
})

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#000" }}>
      {/* Fundo Matrix + centro escuro */}
      <MatrixRain />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse 72% 68% at center, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.93) 30%, rgba(0,0,0,0.72) 58%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0.1) 100%)",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.35) 25%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0.9))",
        }}
      />

      {/* Conteúdo */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(40px, 8vh, 64px) clamp(16px, 5vw, 24px)",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <p style={{ fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(0,230,118,0.8)", marginBottom: 40 }}>
          Inteligência Artificial · Mercado Financeiro
        </p>

        <p style={{ fontSize: 15, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(167,255,207,0.85)", marginBottom: 12 }}>
          A máquina vê o que você não vê
        </p>

        <h1
          style={{
            fontSize: "clamp(2.6rem, 9vw, 4.6rem)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#3dff6a",
            textShadow: "0 0 12px rgba(0,255,90,0.85), 0 0 42px rgba(0,255,90,0.5)",
            marginBottom: 24,
            lineHeight: 1.05,
          }}
        >
          Entre na Matrix
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 3.4vw, 1.2rem)",
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "rgba(210,255,225,0.92)",
            maxWidth: 560,
            lineHeight: 1.6,
            marginBottom: 24,
          }}
        >
          A inteligência artificial que opera no mercado por você.
        </p>

        <p style={{ fontSize: 14, color: "rgba(167,255,207,0.6)", maxWidth: 480, lineHeight: 1.7, marginBottom: 40 }}>
          24 horas por dia, a MATRIX analisa milhares de dados e executa operações automáticas com precisão — sem medo,
          sem ganância, sem erro humano.
        </p>

        {/* Botão */}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: 460,
            padding: "24px 18px",
            marginBottom: 20,
            border: "1px solid rgba(0,255,90,0.6)",
            background: "rgba(0,255,90,0.06)",
            boxShadow: "0 0 26px rgba(0,255,90,0.28), inset 0 0 26px rgba(0,255,90,0.08)",
          }}
        >
          <span style={corner({ top: -1, left: -1, borderTop: `2px solid ${GREEN}`, borderLeft: `2px solid ${GREEN}` })} />
          <span style={corner({ top: -1, right: -1, borderTop: `2px solid ${GREEN}`, borderRight: `2px solid ${GREEN}` })} />
          <span style={corner({ bottom: -1, left: -1, borderBottom: `2px solid ${GREEN}`, borderLeft: `2px solid ${GREEN}` })} />
          <span style={corner({ bottom: -1, right: -1, borderBottom: `2px solid ${GREEN}`, borderRight: `2px solid ${GREEN}` })} />
          <span
            style={{
              fontSize: "clamp(0.78rem, 3.6vw, 1.35rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
              color: "#5aff7f",
              textShadow: "0 0 14px rgba(0,255,90,0.75)",
            }}
          >
            Clique aqui para entrar
          </span>
          <span style={{ marginTop: 6, fontSize: 15, letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(167,255,207,0.85)" }}>
            Grátis
          </span>
        </a>

        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(0,230,118,0.6)",
            marginBottom: 64,
          }}
        >
          <IconLock size={14} /> Acesso 100% gratuito e seguro
        </p>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "clamp(18px, 4vw, 28px)",
            width: "100%",
            maxWidth: 760,
            borderTop: "1px solid rgba(0,230,118,0.15)",
            paddingTop: 32,
          }}
        >
          {features.map((f) => (
            <div key={f.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ marginBottom: 12, filter: "drop-shadow(0 0 6px rgba(0,255,90,0.65))" }}>{f.icon}</div>
              <p style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3dff6a", marginBottom: 4 }}>{f.title}</p>
              <p style={{ fontSize: 11, lineHeight: 1.4, color: "rgba(167,255,207,0.5)" }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 56, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,230,118,0.7)" }}>
          A escolha é sua: azul ou vermelho?
        </p>
      </div>
    </main>
  )
}
