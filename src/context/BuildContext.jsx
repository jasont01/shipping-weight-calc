import { createContext, useReducer } from 'react'

import data from '../data.json'

const DEFAULT_STATE = {
  data,
  panelType: data.panels[0],
  panelCount: data.cabinets[0].maxPanels,
  cabinet: data.cabinets[0],
  config: data.config[0],
  mount: data.mount[0],
  qty: 1,
  accessories: data.accessories
    .map((category) => category.items.map((item) => ({ ...item, qty: 0 })))
    .flat(),
  isAddon: false,
  isHybrid: false,
  isUpgrade: false,
}

export const BuildContext = createContext()

const buildReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PANEL_TYPE':
      return { ...state, panelType: action.payload }

    case 'SET_PANELS':
      return {
        ...state,
        panelCount: action.payload,
        cabinet:
          action.payload > data.cabinets[1].maxPanels
            ? data.cabinets[0]
            : data.cabinets[1],
        isUpgrade:
          state.isUpgrade && action.payload > data.cabinets[1].maxPanels
            ? false
            : state.isUpgrade,
      }

    case 'SET_MOUNT':
      return { ...state, mount: action.payload }

    case 'SET_QTY':
      return { ...state, qty: action.payload }

    case 'SET_ACCESSORIES':
      return {
        ...state,
        accessories: state.accessories.map((accessory) =>
          accessory.part === action.payload.part ? action.payload : accessory
        ),
      }

    case 'SET_ADDON':
      return {
        ...state,
        panelCount:
          state.panelCount > state.cabinet.maxPanels
            ? state.cabinet.maxPanels
            : state.panelCount,
        config: action.payload ? data.config[1] : data.config[0],
        isAddon: action.payload,
      }

    case 'SET_HYBRID':
      return {
        ...state,
        panelType: action.payload ? data.hybrids[0] : data.panels[0],
        panelCount: action.payload
          ? data.cabinets[0].maxPanels - 2
          : data.cabinets[0].maxPanels,
        isHybrid: action.payload,
        isUpgrade: false,
      }

    case 'SET_UPGRADE':
      return {
        ...state,
        cabinet:
          action.payload || state.panelCount > data.cabinets[1]
            ? data.cabinets[0]
            : data.cabinets[1],
        isUpgrade: action.payload,
      }

    case 'LOAD_MINI':
      return {
        ...state,
        panelCount: 1,
        cabinet: data.cabinets[2],
        config: data.config[0],
        isAddon: false,
        isHybrid: false,
        isUpgrade: false,
      }

    // case 'SET_DATA':
    //   return { ...state, data }

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
