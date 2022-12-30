import { useContext } from 'react'
import { ShipmentContext } from '../context/ShipmentContext'

export const useShipmentContext = () => {
  const context = useContext(ShipmentContext)

  if (!context) {
    throw Error(
      'useShipmentContext must be used inside a ShipmentContextProvider'
    )
  }

  return context
}
