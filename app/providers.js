// app/providers.js
'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { 
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true) 
  }, []) 

  if (!mounted) { 
    return <div className="min-h-screen bg-[#FDFBD4] dark:bg-[#0a0a0a] transition-colors duration-500">{children}</div>
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}