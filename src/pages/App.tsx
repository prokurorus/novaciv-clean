
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { useLang } from '@/hooks/useLang'

function NavItem({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-xl transition ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function App() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="font-bold tracking-wide">NovaCiv</div>
          <nav className="flex gap-2">
            <NavItem to="/">{t('nav.home')}</NavItem>
            <NavItem to="/charter">{t('nav.charter')}</NavItem>
            <NavItem to="/join">{t('nav.join')}</NavItem>
            <NavItem to="/forum">{t('nav.forum')}</NavItem>
          </nav>
          <div className="flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-2 py-1 bg-white"
              aria-label="Language"
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="es">ES</option>
            </select>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-500">
          © NovaCiv. Built for clarity, not hype.
        </div>
      </footer>
    </div>
  )
}
