import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const useDataContext = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw Error('useDataContext must be used inside a DataContextProvider')
  }

  return context
}
