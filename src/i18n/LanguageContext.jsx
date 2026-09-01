import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations.js'

const STORAGE_KEY = 'nerkod-lang'
const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'bs'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'bs' || stored === 'en') return stored

  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'bs'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
