import { useContext } from 'react'
import { BuildContext } from '../context/BuildContext'

export const useBuildContext = () => {
  const context = useContext(BuildContext)

  if (!context) {
    throw Error('useBuildContext must be used inside a BuildContextProvider')
  }

  return context
}
