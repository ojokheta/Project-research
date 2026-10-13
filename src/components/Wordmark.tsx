type WordmarkProps = {
  compact?: boolean
}

export function Wordmark({ compact = false }: WordmarkProps) {
  return (
    <span className="wordmark" aria-label="Project RESET">
      <small>PROJECT</small>
      <svg
        width={compact ? 108 : 148}
        height={compact ? 22 : 30}
        viewBox="0 0 148 30"
        fill="none"
        aria-hidden="true"
      >
        <text
          x="0"
          y="24"
          fill="white"
          fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
          fontSize="26"
          fontWeight="700"
          letterSpacing="1.5"
        >
          R
        </text>
        <g transform="translate(24,7)" fill="white">
          <rect width="16" height="3.2" rx="0.4" />
          <rect y="7.2" width="16" height="3.2" rx="0.4" />
          <rect y="14.4" width="16" height="3.2" rx="0.4" />
        </g>
        <text
          x="46"
          y="24"
          fill="#D6E24A"
          fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
          fontSize="26"
          fontWeight="700"
        >
          S
        </text>
        <g transform="translate(68,7)" fill="white">
          <rect width="16" height="3.2" rx="0.4" />
          <rect y="7.2" width="16" height="3.2" rx="0.4" />
          <rect y="14.4" width="16" height="3.2" rx="0.4" />
        </g>
        <text
          x="90"
          y="24"
          fill="white"
          fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
          fontSize="26"
          fontWeight="700"
        >
          T
        </text>
      </svg>
    </span>
  )
}
