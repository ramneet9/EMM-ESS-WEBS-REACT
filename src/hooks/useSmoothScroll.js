import { useEffect } from 'react'

export function useSmoothScroll(headerSelector = '#header') {
  useEffect(() => {
    const header = document.querySelector(headerSelector)
    const scrolltoOffset = header ? header.offsetHeight - 2 : 0

    function handleClick(e) {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href || href === '#' || href.length < 2) return
      const id = href.substring(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      const top = el.getBoundingClientRect().top + window.pageYOffset - scrolltoOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    document.addEventListener('click', handleClick)
    // Scroll to hash on load or when hash changes
    const scrollHash = () => {
      if (!window.location.hash) return
      const id = window.location.hash.substring(1)
      const el = document.getElementById(id)
      if (!el) return
      const top = el.getBoundingClientRect().top + window.pageYOffset - scrolltoOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    const onPop = () => setTimeout(scrollHash, 0)
    setTimeout(scrollHash, 0)
    window.addEventListener('popstate', onPop)
    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('popstate', onPop)
    }
  }, [headerSelector])
}


