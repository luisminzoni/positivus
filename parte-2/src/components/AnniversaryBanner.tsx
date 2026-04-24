import { useEffect, useCallback, useState } from 'react'

const TARGET = new Date('2026-05-05T22:00:00.000Z') // 19h BRT = 22h UTC
const CTA_HREF =
  'https://asimov.academy/pre-inscricao-aniversario-2026-org/?src=v3_4667e051-c603-41e2-9f8c-69391d5c482f_68cb003f2372e2ed854d14ac_10_s-1'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[2.6rem]">
      <span
        className="text-xl sm:text-2xl font-bold tabular-nums leading-none"
        style={{
          background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {pad(value)}
      </span>
      <span className="text-zinc-500 text-[10px] uppercase tracking-widest mt-0.5">
        {label}
      </span>
    </div>
  )
}

export default function AnniversaryBanner() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft)

  const tick = useCallback(() => setTime(getTimeLeft()), [])

  useEffect(() => {
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [tick])

  if (TARGET.getTime() <= Date.now()) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ animation: 'fadeUpEl 0.55s cubic-bezier(0.16,1,0.3,1) 2s both' }}
    >
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(124,58,237,0.6) 30%, rgba(96,165,250,0.6) 70%, transparent)',
        }}
      />

      <div
        className="relative px-4 py-3 sm:py-2.5"
        style={{
          background: 'rgba(9,9,11,0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-lg hidden sm:block select-none">🎂</span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-center sm:text-left">
              <span className="text-white text-md font-semibold leading-tight">
                O aniversário da Asimov está chegando!
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Unit value={time.days} label="dias" />
            <span className="text-zinc-600 text-lg font-bold mb-3 select-none">:</span>
            <Unit value={time.hours} label="horas" />
            <span className="text-zinc-600 text-lg font-bold mb-3 select-none">:</span>
            <Unit value={time.minutes} label="min" />
            <span className="text-zinc-600 text-lg font-bold mb-3 select-none">:</span>
            <Unit value={time.seconds} label="seg" />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-150 hover:scale-[1.04] active:scale-[0.97] whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
                boxShadow: '0 2px 14px rgba(124,58,237,0.4)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 4px 20px rgba(124,58,237,0.6)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 2px 14px rgba(124,58,237,0.4)'
              }}
            >
              Aproveitar oportunidade
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
