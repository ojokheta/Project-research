import { useReducedMotion } from '@react-spring/web'

const WORDS = ['Reset', 'Rebuild', 'Recover', 'Rise']

function Group() {
  return (
    <div className="marquee__group" aria-hidden="true">
      {WORDS.map((word, i) => (
        <span key={word} style={{ display: 'contents' }}>
          <span
            className={`marquee__word${i % 2 ? ' marquee__word--ghost' : ''}`}
          >
            {word}
          </span>
          <span className="marquee__dot" />
        </span>
      ))}
    </div>
  )
}

/** The movement's four words, running as a slow ambient band. */
export function Marquee() {
  const reduced = useReducedMotion()

  return (
    <div
      className="marquee"
      role="presentation"
      style={reduced ? { animation: 'none' } : undefined}
    >
      <div
        className="marquee__track"
        style={
          reduced
            ? { animation: 'none' }
            : { animation: 'marquee 34s linear infinite' }
        }
      >
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
    </div>
  )
}
