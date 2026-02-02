import { useStore, type Zone } from '../../store/useStore'

const zones: { id: Zone; label: string }[] = [
  { id: 'landing', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
]

export function Nav() {
  const currentZone = useStore((s) => s.currentZone)
  const setZone = useStore((s) => s.setZone)

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-10 flex gap-1 rounded-full border border-white/10 bg-black/40 px-1.5 py-1.5 backdrop-blur-md">
      {zones.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setZone(id)}
          className={`rounded-full px-4 py-1.5 text-xs tracking-wider transition-all cursor-pointer ${
            currentZone === id
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
