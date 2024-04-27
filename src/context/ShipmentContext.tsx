import { Dispatch, createContext, useReducer } from 'react'

import shipmentReducer, { Action } from './shipmentReducer'

export interface Details {
  desc: string
  weight?: number
  qty?: number
  totalWeight: number
  isVisible: boolean
}

export type Item = {
  desc: string
  size?: string
  part: string
  weight: number
  qty: number
  details?: Details[]
}

export interface State {
  items: Item[]
}

interface ShipmentContextInterface {
  state: State
  dispatch: Dispatch<Action>
}

export const ShipmentContext = createContext<ShipmentContextInterface>({
  state: { items: [] },
  dispatch: () => {},
})

const ShipmentProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(shipmentReducer, {
    items: [],
  })

  return (
    <ShipmentContext.Provider value={{ state, dispatch }}>
      {children}
    </ShipmentContext.Provider>
  )
}

export default ShipmentProvider
