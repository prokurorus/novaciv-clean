
import { useEffect, useMemo, useState } from 'react'
import ru from '@/locales/ru.json'
import en from '@/locales/en.json'
import de from '@/locales/de.json'
import es from '@/locales/es.json'

const dicts: Record<string, any> = { ru, en, de, es }

export function useLang() {
  const [lang, setLangState] = useState<string>(() => localStorage.getItem('lang') || 'ru')

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = useMemo(() => {
    const d = dicts[lang] || dicts['ru']
    return (key: string) => key.split('.').reduce((acc: any, k: string) => (acc ? acc[k] : undefined), d) || key
  }, [lang])

  const setLang = (v: 'ru'|'en'|'de'|'es') => setLangState(v)

  return { lang: lang as 'ru'|'en'|'de'|'es', setLang, t }
}
