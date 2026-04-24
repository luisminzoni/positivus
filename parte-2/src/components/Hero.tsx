import { useState, useEffect, useRef } from 'react'
import CodeWindow from './CodeWindow'

const bullets = [
  '+40 horas de conteúdo direto ao ponto',
  'Projetos com Python + IA desde o módulo 1',
  'Suporte da comunidade com +20.000 alunos',
  'Certificado reconhecido pelo mercado',
]

const navLinks = [
  { label: 'Cursos', href: '#' },
  { label: 'Projetos', href: '#' },
  { label: 'Comunidade', href: '#' },
  { label: 'Preços', href: '#' },
]

/**
 * Linear.app–style word reveal.
 * Each word slides up out of a clip mask with a staggered delay.
 */
function RevealWords({
  text,
  className = '',
  baseDelay = 0,
  stagger = 65,
}: {
  text: string
  className?: string
  baseDelay?: number
  stagger?: number
}) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            marginRight: i < words.length - 1 ? '0.28em' : undefined,
            paddingBottom: '0.06em',
          }}
        >
          <span
            className={className}
            style={{
              display: 'inline-block',
              animation: 'slideUpWord 0.75s cubic-bezier(0.16, 1, 0.3, 1) both',
              animationDelay: `${baseDelay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </>
  )
}

/** Staggered fade-up for block elements */
function FadeUp({
  delay = 0,
  className = '',
  children,
  as: Tag = 'div',
}: {
  delay?: number
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}) {
  return (
    <Tag
      className={className}
      style={{
        animation: 'fadeUpEl 0.75s cubic-bezier(0.16, 1, 0.3, 1) both',
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}

const BADGE_FULL = 'Python + IA  ·  Nova Turma 2026'

function TerminalBadge() {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [done, setDone] = useState(false)
  const idx = useRef(0)

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        idx.current += 1
        setDisplayed(BADGE_FULL.slice(0, idx.current))
        if (idx.current >= BADGE_FULL.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 48)
      return () => clearInterval(interval)
    }, 300)
    return () => clearTimeout(startDelay)
  }, [])

  useEffect(() => {
    if (!done) return
    const timeout = setTimeout(() => setShowCursor(false), 1200)
    return () => clearTimeout(timeout)
  }, [done])

  return (
    <span className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/[0.08] text-violet-300 text-sm font-medium font-mono">
      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shrink-0" />
      <span>
        {displayed}
        {showCursor && (
          <span
            className="inline-block w-[7px] h-[13px] bg-violet-400 translate-y-[2px] ml-px"
            style={{ animation: done ? 'none' : 'cursor 0.9s ease-in-out infinite' }}
          />
        )}
      </span>
    </span>
  )
}

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 border border-emerald-500/30 bg-emerald-500/10">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke="#4ADE80"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#09090B] overflow-hidden selection:bg-violet-500/30">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.35] pointer-events-none" />

      <div
        className="absolute top-[-180px] right-[-80px] w-[780px] h-[780px] rounded-full pointer-events-none animate-blob"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(109,40,217,0.08) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[-60px] left-[-120px] w-[540px] h-[540px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 65%)',
        }}
      />

      <nav
        className="relative z-20 border-b border-white/[0.06]"
        style={{ animation: 'fadeDownEl 0.55s ease both' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a href="#" className="group select-none">
            <span
              className="text-white"
              style={{
                fontFamily: '"Voltaire", sans-serif',
                fontSize: '26px',
                fontWeight: 300,
                letterSpacing: '0.18em',
              }}
            >
              ASIMOV
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:block text-zinc-400 hover:text-zinc-100 text-sm transition-colors duration-150"
            >
              Entrar
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-150 shadow-md shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero começar
            </a>
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 text-zinc-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.06] bg-zinc-950/95 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-zinc-300 hover:text-white text-sm py-1 transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#" className="text-zinc-400 hover:text-white text-sm py-1 transition-colors border-t border-zinc-800 pt-4">
                Entrar
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-36 lg:pt-20 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 xl:gap-24 items-center">
          <div className="flex flex-col gap-7">
            <FadeUp delay={80} className="self-start">
              <TerminalBadge />
            </FadeUp>

            <h1 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-[3rem] font-black leading-[1.2] tracking-[-0.02em] text-white">
              <RevealWords
                text="Aprenda Python do zero e construa"
                baseDelay={160}
                stagger={58}
              />
              <br className="hidden sm:block" />
              <RevealWords
                text="projetos reais com IA"
                className="text-gradient"
                baseDelay={620}
                stagger={65}
              />
            </h1>

            <FadeUp delay={980}>
              <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-[500px]">
                O curso mais prático do Brasil para quem quer entrar em tecnologia{' '}
                <span className="text-zinc-200 font-medium">sem enrolação</span>.
              </p>
            </FadeUp>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {bullets.map((bullet, i) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3"
                  style={{
                    animation: 'fadeUpEl 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
                    animationDelay: `${1080 + i * 90}ms`,
                  }}
                >
                  <CheckIcon />
                  <span className="text-zinc-300 text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <FadeUp delay={1460} className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
                  boxShadow: '0 4px 24px rgba(124,58,237,0.35)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 36px rgba(124,58,237,0.55)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(124,58,237,0.35)' }}
              >
                Quero começar agora
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-all duration-150 hover:bg-zinc-800/40"
              >
                Ver o que vou aprender
              </a>
            </FadeUp>
          </div>

          <div
            className="hidden lg:block relative"
            style={{ animation: 'fadeUpEl 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both' }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none blur-2xl scale-95 opacity-40"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(124,58,237,0.25), transparent 70%)' }}
            />

            <div className="relative group">
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.4) 0%, rgba(37,99,235,0.2) 100%)',
                  filter: 'blur(1px)',
                }}
              />

              <CodeWindow />

              <div
                className="absolute -bottom-5 -left-8 z-10 max-w-[270px]"
                style={{ animation: 'fadeUpEl 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both' }}
              >
                <div
                  className="rounded-xl border border-zinc-700/50 p-4 shadow-2xl shadow-black/50"
                  style={{ background: 'rgba(24,24,27,0.92)', backdropFilter: 'blur(16px)' }}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-semibold">Análise concluída</span>
                    <span className="text-zinc-600 text-xs ml-auto">2.1s</span>
                  </div>
                  <p className="text-zinc-300 text-xs leading-[1.6]">
                    "Receita cresceu <span className="text-emerald-400 font-semibold">+34%</span> no Q3 2024.
                    Produto Python Pro: <span className="text-violet-400 font-semibold">+127%</span> conversão."
                  </p>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-6 z-10"
                style={{ animation: 'fadeUpEl 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both' }}
              >
                <div
                  className="rounded-xl border border-zinc-700/50 px-3.5 py-2.5 shadow-xl shadow-black/40 flex items-center gap-2"
                  style={{ background: 'rgba(24,24,27,0.92)', backdropFilter: 'blur(16px)' }}
                >
                  <span className="text-base">🚀</span>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-semibold leading-tight">Módulo 1</span>
                    <span className="text-zinc-500 text-[10px]">Python + IA na prática</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FadeUp delay={1700} className="lg:hidden mt-12">
          <CodeWindow />
        </FadeUp>

        <div
          className="mt-20 lg:mt-24"
          style={{ animation: 'fadeUpEl 0.75s cubic-bezier(0.16,1,0.3,1) 1.8s both' }}
        >
          <p className="text-zinc-500 text-xs uppercase tracking-[0.18em] font-medium mb-6 text-center">
            O que você encontra na Asimov
          </p>

          <div className="w-full h-px bg-zinc-800/80 mb-8" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                value: '+18 mil',
                unit: 'alunos',
                desc: 'Junte-se a uma comunidade com milhares de estudantes.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0zM15.99 17c.01-.16.01-.33.01-.5C16 14 13.31 12 10 12s-6 2-6 4.5c0 .17 0 .34.01.5h11.98z" fill="currentColor"/>
                  </svg>
                ),
                gradient: 'from-violet-400 to-fuchsia-400',
              },
              {
                value: '275h',
                unit: 'de aulas',
                desc: 'Tudo que você precisa para se aprofundar na linguagem.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                ),
                gradient: 'from-blue-400 to-cyan-400',
              },
              {
                value: '61',
                unit: 'cursos',
                desc: 'Acesso imediato a todos nossos conteúdos e cursos.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" fill="currentColor"/>
                  </svg>
                ),
                gradient: 'from-emerald-400 to-teal-400',
              },
              {
                value: '79',
                unit: 'projetos',
                desc: 'Aprenda na prática e coloque projetos reais no seu portfólio.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" fill="currentColor" clipRule="evenodd"/>
                  </svg>
                ),
                gradient: 'from-amber-400 to-orange-400',
              },
            ].map((item, i) => (
              <div
                key={item.unit}
                className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-800/50 hover:border-zinc-700/80 transition-all duration-300 cursor-default overflow-hidden"
                style={{
                  animation: `fadeUpEl 0.65s cubic-bezier(0.16,1,0.3,1) ${1.9 + i * 0.08}s both`,
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08), transparent 70%)' }}
                />

                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0`}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span className="text-white flex">{item.icon}</span>
                  </div>
                  <div>
                    <p
                      className={`text-2xl font-black leading-none bg-gradient-to-r ${item.gradient}`}
                      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    >
                      {item.value}
                    </p>
                    <p className="text-zinc-400 text-xs font-medium mt-0.5 uppercase tracking-wide">{item.unit}</p>
                  </div>
                </div>

                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
