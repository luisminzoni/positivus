// Token components for syntax highlighting — mirrors VS Code dark+ theme
const Kw = ({ c }: { c: string }) => (
  <span style={{ color: '#C084FC' }}>{c}</span>
)
const Fn = ({ c }: { c: string }) => (
  <span style={{ color: '#60A5FA' }}>{c}</span>
)
const Str = ({ c }: { c: string }) => (
  <span style={{ color: '#4ADE80' }}>{c}</span>
)
const Ty = ({ c }: { c: string }) => (
  <span style={{ color: '#34D399' }}>{c}</span>
)
const Cm = ({ c }: { c: string }) => (
  <span style={{ color: '#52525B', fontStyle: 'italic' }}>{c}</span>
)
const Nu = ({ c }: { c: string }) => (
  <span style={{ color: '#F59E0B' }}>{c}</span>
)
const Pl = ({ c }: { c: string }) => (
  <span style={{ color: '#E4E4E7' }}>{c}</span>
)

function Ln({ n, active }: { n: number; active?: boolean }) {
  return (
    <span
      className={`inline-block w-7 text-right pr-4 select-none text-xs shrink-0 ${
        active ? 'text-zinc-500' : 'text-zinc-700'
      }`}
    >
      {n}
    </span>
  )
}

function Line({
  n,
  children,
  active,
}: {
  n: number
  children?: React.ReactNode
  active?: boolean
}) {
  return (
    <div
      className={`flex items-baseline min-h-[1.75em] px-2 -mx-2 rounded ${
        active ? 'bg-violet-500/5' : ''
      }`}
    >
      <Ln n={n} active={active} />
      <span className="whitespace-pre leading-7 text-[13px]">{children}</span>
    </div>
  )
}

export default function CodeWindow() {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl shadow-black/70"
      style={{ background: '#141416' }}
    >
      {/* Window chrome — macOS style */}
      <div
        className="flex items-center gap-0 px-4 py-3 border-b border-zinc-800/80"
        style={{ background: '#1C1C1E' }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="opacity-60"
            >
              <rect width="12" height="12" rx="2" fill="#4ADE80" opacity="0.3" />
              <path
                d="M3 6.5L5 8.5L9 4"
                stroke="#4ADE80"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-zinc-300 text-xs font-mono">projeto_ia.py</span>
          </div>
        </div>

        {/* Right side: running indicator */}
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-medium">Running</span>
        </div>
      </div>

      {/* Code body */}
      <div className="relative p-5 font-mono overflow-hidden">
        {/* Lines */}
        <Line n={1}>
          <Kw c="from" />
          <Pl c=" openai " />
          <Kw c="import" />
          <Pl c=" " />
          <Ty c="OpenAI" />
        </Line>

        <Line n={2}>
          <Kw c="import" />
          <Pl c=" pandas " />
          <Kw c="as" />
          <Pl c=" pd" />
        </Line>

        <Line n={3} />

        <Line n={4}>
          <Pl c="client = " />
          <Ty c="OpenAI" />
          <Pl c="()" />
        </Line>

        <Line n={5} />

        <Line n={6}>
          <Kw c="def " />
          <Fn c="analisar_vendas" />
          <Pl c="(" />
          <Pl c="df: " />
          <Ty c="pd.DataFrame" />
          <Pl c=") -> " />
          <Ty c="str" />
          <Pl c=":" />
        </Line>

        <Line n={7}>
          <Pl c="    resposta = client.chat.completions." />
          <Fn c="create" />
          <Pl c="(" />
        </Line>

        <Line n={8}>
          <Pl c="        model=" />
          <Str c='"gpt-4o"' />
          <Pl c="," />
        </Line>

        <Line n={9}>
          <Pl c="        messages=[" />
        </Line>

        <Line n={10}>
          <Pl c={'            {"role": '} />
          <Str c={'"user"'} />
          <Pl c={', "content": '} />
          <Fn c="str" />
          <Pl c="(df.describe())}" />
        </Line>

        <Line n={11}>
          <Pl c="        ]" />
        </Line>

        <Line n={12}>
          <Pl c="    )" />
        </Line>

        <Line n={13}>
          <Pl c="    " />
          <Kw c="return" />
          <Pl c=" resposta.choices[" />
          <Nu c="0" />
          <Pl c="].message.content" />
        </Line>

        <Line n={14} />

        <Line n={15}>
          <Cm c="# ✅ Você constrói isso no Módulo 1" />
        </Line>

        <Line n={16}>
          <Pl c="dados = pd." />
          <Fn c="read_csv" />
          <Pl c="(" />
          <Str c='"vendas_2024.csv"' />
          <Pl c=")" />
        </Line>

        <Line n={17} active>
          <Fn c="print" />
          <Pl c="(analisar_vendas(dados))" />
          {/* Blinking cursor */}
          <span
            className="inline-block w-[7px] h-[14px] bg-violet-400 animate-cursor ml-px translate-y-[2px]"
            aria-hidden="true"
          />
        </Line>

        {/* Bottom fade-out */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #141416)',
          }}
        />
      </div>
    </div>
  )
}
