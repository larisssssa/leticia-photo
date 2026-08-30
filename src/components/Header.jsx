import { useEffect, useState } from 'react'
import content from '../content'
import './Header.css'

export default function Header() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={solid ? 'solid' : ''}>
      <a href="#" className="logo">{content.brand.name}</a>
      <nav>
        <ul>
          {content.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
