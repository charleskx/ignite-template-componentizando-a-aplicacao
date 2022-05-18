import { createContext, ReactNode, useState } from 'react'

interface SelectedGenreContextProps {
  setSelectedGenreId: (id: number) => void
  selectedGenreId: number
}

interface SelectedGenreProviderProps {
  children: ReactNode
}

export const SelectedGenreContext = createContext({} as SelectedGenreContextProps)

export function SelectedGenreProvider({ children }: SelectedGenreProviderProps) {
  const [id, setId] = useState(1)

  function setSelectedGenreId(genre: number) {
    setId(genre)
  }

  return (
    <SelectedGenreContext.Provider value={{ selectedGenreId: id, setSelectedGenreId}}>
      {children}
    </SelectedGenreContext.Provider>
  )
}
