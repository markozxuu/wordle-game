import { useState, createContext } from 'react'

export const ContextSettings = createContext<any>({})

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [win, setWin] = useState<number>(0)
  const [played, setPlayed] = useState<number>(0)
  return (
    <ContextSettings.Provider
      value={{
        win,
        setWin,
        played,
        setPlayed,
      }}
    >
      {children}
    </ContextSettings.Provider>
  )
}
