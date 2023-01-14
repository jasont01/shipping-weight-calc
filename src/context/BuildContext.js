import { createContext, useReducer } from 'react'

import data from '../data.json'

const DEFAULT_STATE = {
  build: {
    panelType: data.cabinets.panels[0],
    panels:
      data.cabinets.size[0].interiorPanels + data.cabinets.size[0].doorPanels,
    size: data.cabinets.size[0],
    config: data.cabinets.config[0],
    mount: data.cabinets.mount[0],
    qty: 1,
  },
  accessories: data.accessories
    .map((category) => category.items.map((item) => ({ ...item, qty: 0 })))
    .flat(),
  shipping: [...data.pallets.map((size) => ({ ...size, qty: 0 }))],
}

export const BuildContext = createContext()

const buildReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BUILD':
      return {}

    case 'SET_ACCESSORIES':
      return {}

    case 'SET_SHIPPING':
      return {}

    case 'RESET':
      return DEFAULT_STATE

    default:
      return state
  }
}

const BuildContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(buildReducer, DEFAULT_STATE)

  return (
    <BuildContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BuildContext.Provider>
  )
}

export default BuildContextProvider
