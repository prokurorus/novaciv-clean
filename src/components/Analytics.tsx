
import React, { useEffect } from 'react'

export default function Analytics() {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN
    if (!domain) return
    const s = document.createElement('script')
    s.defer = true
    s.setAttribute('data-domain', domain)
    s.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(s)
    return () => { document.head.removeChild(s) }
  }, [])
  return null
}
