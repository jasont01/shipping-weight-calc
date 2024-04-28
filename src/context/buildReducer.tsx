import { State } from './BuildContext'
import { PanelType, Accessory, Cabinet } from '../types/types'
import { Cab, Config, Hybrid, Tab } from '../enums'

import data from '../data.json'
import DEFAULT_STATE from './defaultState'

export const isLargeCab = (state: State) => {
  switch (state.currentTab) {
    case Tab.Hybrids:
      return (
        state.hybridType === data.hybrids[Hybrid.DP] ||
        state.panelCount + state.hybridPanels >
          data.cabinets[Cab.Small].maxPanels
      )

    case Tab.DealerPlate:
      return state.panelCount > 1

    default:
      return state.panelCount > data.cabinets[Cab.Small].maxPanels
  }
}

export type Action =
  | { type: 'SET_TAB'; payload: Tab }
  | { type: 'SET_PANEL_TYPE'; payload: PanelType }
  | { type: 'SET_HYBRID_TYPE'; payload: PanelType }
  | { type: 'SET_PANEL_COUNT'; payload: number }
  | { type: 'SET_HYBRID_PANELS'; payload: number }
  | { type: 'SET_CABINET'; payload: Cabinet }
  | { type: 'SET_MOUNT'; payload: string }
  | { type: 'SET_QTY'; payload: number }
  | { type: 'SET_ACCESSORIES'; payload: Accessory }
  | { type: 'SET_ADDON'; payload: boolean }
  | { type: 'SET_UPGRADE'; payload: boolean }
  | { type: 'LOAD_MINI' }
  | { type: 'RESET' }

const validateState = (prevState: State, action: Action) => {
  const state = buildReducer(prevState, action)

  if (state.currentTab === Tab.Mini) return state

  const isLarge = isLargeCab(state)

  const isUpgrade = state.isUpgrade && isLarge ? false : state.isUpgrade

  const cabinet =
    isLarge || isUpgrade ? data.cabinets[Cab.Large] : data.cabinets[Cab.Small]

  const panelCount =
    state.panelCount > cabinet.maxPanels ? cabinet.maxPanels : state.panelCount

  return {
    ...state,
    panelCount,
    cabinet,
    isUpgrade,
  }
}

const buildReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, currentTab: action.payload }

    case 'SET_PANEL_TYPE':
      return { ...state, panelType: action.payload }

    case 'SET_PANEL_COUNT':
      return { ...state, panelCount: action.payload }

    case 'SET_HYBRID_TYPE':
      return { ...state, hybridType: action.payload }

    case 'SET_HYBRID_PANELS':
      return { ...state, hybridPanels: action.payload }

    case 'SET_CABINET':
      return { ...state, cabinet: action.payload }

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
        config: action.payload
          ? data.config[Config.Addon]
          : data.config[Config.Kiosk],
        isAddon: action.payload,
      }

    case 'SET_UPGRADE': {
      return { ...state, isUpgrade: action.payload }
    }

    case 'LOAD_MINI':
      return {
        ...state,
        panelCount: data.cabinets[Cab.Mini].maxPanels,
        cabinet: data.cabinets[Cab.Mini],
        config: data.config[Config.Kiosk],
        isAddon: false,
        isUpgrade: false,
      }

    case 'RESET':
      return DEFAULT_STATE

    default:
      return state
  }
}

export default validateState
