import { State } from './BuildContext'
import { PanelType, Accessory } from '../types/types'
import { Panel, Cabinet, Config, Hybrid } from '../enums'

import data from '../data.json'
import DEFAULT_STATE from './defaultState'

export type Action =
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
          action.payload > data.cabinets[Cabinet.Small].maxPanels
            ? data.cabinets[Cabinet.Large]
            : data.cabinets[Cabinet.Small],
        isUpgrade:
          state.isUpgrade &&
          action.payload > data.cabinets[Cabinet.Small].maxPanels
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
        config: action.payload
          ? data.config[Config.Addon]
          : data.config[Config.Kiosk],
        isAddon: action.payload,
      }
    //? Needed?
    case 'SET_HYBRID':
      return {
        ...state,
        panelType: action.payload
          ? data.hybrids[Hybrid.DP]
          : data.panels[Panel.MX],
        panelCount: action.payload
          ? data.cabinets[Cabinet.Large].maxPanels - 2
          : data.cabinets[Cabinet.Large].maxPanels,
        isHybrid: action.payload,
        isUpgrade: false,
      }

    case 'SET_UPGRADE':
      return {
        ...state,
        cabinet:
          action.payload ||
          state.panelCount > data.cabinets[Cabinet.Small].maxPanels
            ? data.cabinets[Cabinet.Large]
            : data.cabinets[Cabinet.Small],
        isUpgrade: action.payload,
      }

    case 'LOAD_MINI':
      return {
        ...state,
        panelCount: 1,
        cabinet: data.cabinets[Cabinet.Mini],
        config: data.config[Config.Kiosk],
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

export default buildReducer
