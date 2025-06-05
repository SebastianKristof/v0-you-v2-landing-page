"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import enTranslations from "@/translations/en.json"
import ruTranslations from "@/translations/ru.json"

type Language = "en" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, options?: { returnObjects?: boolean }) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Create a mapping of all translations
const translations = {
  en: enTranslations,
  ru: ruTranslations,
}

interface LanguageProviderProps {
  children: ReactNode
  initialLanguage?: Language
}

export function LanguageProvider({ children, initialLanguage = "en" }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language") as Language | null;
      if (stored === "en" || stored === "ru") return stored;
      if (navigator.language.split("-")[0] === "ru") return "ru";
    }
    return initialLanguage;
  });

  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    const keys = key.split(".")
    let value = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, any>)[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    // If returnObjects is true and value is an array or object, return it directly
    if (options?.returnObjects && (Array.isArray(value) || typeof value === "object")) {
      return value
    }

    if (typeof value === "string") {
      return value
    }

    console.warn(`Translation value is not a string for key: ${key}`)
    return key
  }

  // Store language preference in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") as Language | null
      if (storedLanguage && (storedLanguage === "en" || storedLanguage === "ru")) {
        setLanguage(storedLanguage)
      } else {
        // Check browser language
        const browserLanguage = navigator.language.split("-")[0]
        if (browserLanguage === "ru") {
          setLanguage("ru")
        }
      }
    }
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
