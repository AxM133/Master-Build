export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 48 44" aria-hidden="true" className={className}>
      <rect x="9" y="4" width="4.5" height="10" fill="currentColor" />
      <polyline points="3,23 24,5 45,23" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="miter" />
      <rect x="11" y="21" width="26" height="22" fill="currentColor" />
      <text x="24" y="38" textAnchor="middle" fill="#fff" fontFamily="Montserrat, sans-serif" fontSize="13" fontWeight="800">
        MS
      </text>
    </svg>
  )
}
