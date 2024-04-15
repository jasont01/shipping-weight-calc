import { Dispatch, createContext, useReducer } from 'react'

import { PanelType, Cabinet, Config, Accessory } from '../types/types'

import data from '../data.json'

const DEFAULT_STATE = {
  panelType: data.panels[0],
  panelCount: data.cabinets[0].maxPanels,
  cabinet: data.cabinets[0],
  config: data.config[0],
  mount: data.mount[0],
  qty: 1,
  accessories: [
    ...data.cabinets.map((cab) => ({ ...cab.wallboard, qty: 0 })),
    { ...data.stand, qty: 0 },
    ...data.accessories.map((item) => ({ ...item, qty: 0 })),
  ],
  isAddon: false,
  isHybrid: false,
  isUpgrade: false,
}

interface State {
  panelType: PanelType
  panelCount: number
  cabinet: Cabinet
  config: Config
  mount: string
  qty: number
  accessories: Accessory[]
  isAddon: boolean
  isHybrid: boolean
  isUpgrade: boolean
}

type Action =
  | { type: 'SET_PANEL_TYPE'; payload: PanelType }
  | { type: 'SET_PANEL_COUNT'; payload: number }
  | { type: 'SET_MOUNT'; payload: string }
  | { type: 'SET_QTY'; payload: number }
  | { type: 'SET_ACCESSORIES'; payload: Accessory }
  | { type: 'SET_ADDON'; payload: boolean }
  | { type: 'SET_HYBRID'; payload: boolean }
  | { type: 'SET_UPGRADE'; payload: boolean }
  | { type: 'LOAD_MINI' }
  | { type: 'RESET' }

const buildReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_PANEL_TYPE':
      return { ...state, panelType: action.payload }

    case 'SET_PANEL_COUNT':
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
          action.payload || state.panelCount > data.cabinets[1].maxPanels
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

    case 'RESET':
      return DEFAULT_STATE

    default:
      return state
  }
}

export interface BuildContextInterface {
  state: State
  dispatch: Dispatch<Action>
}

export const BuildContext = createContext<BuildContextInterface>({
  state: DEFAULT_STATE,
  dispatch: () => {},
})

const BuildContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(buildReducer, DEFAULT_STATE)

  return (
    <BuildContext.Provider value={{ state, dispatch }}>
      {children}
    </BuildContext.Provider>
  )
}

export default BuildContextProvider
