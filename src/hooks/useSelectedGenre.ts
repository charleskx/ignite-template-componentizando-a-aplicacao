import { useContext } from 'react'

import { SelectedGenreContext } from '../context/SelectedGenreContext'

export function useSelectedGenre() {
  const genre = useContext(SelectedGenreContext)

  return genre
}
