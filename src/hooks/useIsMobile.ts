import { useEffect, useState } from 'react'

/** Keep in sync with the `max-width: 760px` breakpoint in index.css. */
export const MOBILE_QUERY = '(max-width: 760px)'

/**
 * Tracks the mobile breakpoint.
 *
 * Uses matchMedia so it stays correct on rotate/resize, and initializes from
 * the current viewport to avoid a first-paint flash of the wrong layout.
 */
export function useIsMobile(): boolean {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(MOBILE_QUERY).matches
      : false,
  )

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (e: MediaQueryListEvent) => setMobile(e.matches)
    // first value comes from the useState initializer above; only changes from
    // here on need to be written back
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return mobile
}
