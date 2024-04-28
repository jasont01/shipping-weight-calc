import { Dispatch, createContext, useReducer } from 'react'

import { PanelType, Cabinet, Config, Accessory } from '../types/types'
import buildReducer, { Action } from './buildReducer'
import DEFAULT_STATE from './defaultState'
import { Tab } from '../enums'

export interface State {
  currentTab: Tab
  panelType: PanelType
  panelCount: number
  hybridType: PanelType
  hybridPanels: number
  maxPanels: number
  cabinet: Cabinet
  config: Config
  mount: string
  qty: number
  accessories: Accessory[]
  isAddon: boolean
  isUpgrade: boolean
}

interface BuildContextInterface {
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
