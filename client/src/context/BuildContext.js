import { createContext, useReducer } from 'react'

//import data from '../data.json'

// const DEFAULT_STATE = {
//   data,
//   panelType: data.panels[0],
//   panels: data.cabinets[0].interiorPanels + data.cabinets[0].doorPanels,
//   size: data.cabinets[0],
//   config: data.config[0],
//   mount: data.mount[0],
//   qty: 1,
//   accessories: data.accessories
//     .map((category) => category.items.map((item) => ({ ...item, qty: 0 })))
//     .flat(),
// }

export const BuildContext = createContext()

const buildReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PANEL_TYPE':
      return { ...state, panelType: action.payload }

    case 'SET_PANELS':
      return { ...state, panels: action.payload }

    case 'SET_CABINET_SIZE':
      return { ...state, size: action.payload }

    case 'SET_CONFIG':
      return { ...state, config: action.payload }

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

    case 'SET_DATA':
      return {
        data: action.payload,
        panelType: action.payload.panels[0],
        panels:
          action.payload.cabinets[0].interiorPanels +
          action.payload.cabinets[0].doorPanels,
        size: action.payload.cabinets[0],
        config: action.payload.config[0],
        mount: action.payload.mount[0],
        qty: 1,
        accessories: action.payload.accessories
          .map((category) =>
            category.items.map((item) => ({ ...item, qty: 0 }))
          )
          .flat(),
      }

    case 'RESET':
      return {
        ...state,
        panelType: state.data.panels[0],
        panels:
          state.data.cabinets[0].interiorPanels +
          state.data.cabinets[0].doorPanels,
        size: state.data.cabinets[0],
        config: state.data.config[0],
        mount: state.data.mount[0],
        qty: 1,
        accessories: state.data.accessories
          .map((category) =>
            category.items.map((item) => ({ ...item, qty: 0 }))
          )
          .flat(),
      }

    default:
      return state
  }
}

const BuildContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(buildReducer, {})

  return (
    <BuildContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BuildContext.Provider>
  )
}

export default BuildContextProvider
