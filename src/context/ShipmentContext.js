import { createContext, useReducer } from 'react'

export const ShipmentContext = createContext()

const shipmentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      }

    case 'DECREMENT':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      }

    case 'RESET':
      return { ...state, items: [] }

    default:
      return state
  }
}

//=======================================================
const testData = [
  { id: 'MKE228XC', desc: 'MX288C', qty: 1, weight: 280 },
  { id: 'AAX010', desc: 'Large Wallboard', qty: 1, weight: 35 },
  { id: 'MKE112HC', desc: 'HC112', qty: 1, weight: 160 },
  { id: 'AAX020', desc: 'Small Wallboard', qty: 1, weight: 18 },
  { id: 'A600', desc: 'Stand', qty: 42, weight: 60 },
  { id: 'ATX020', desc: 'APC', qty: 1, weight: 6 },
]
//=========================================================

const ShipmentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shipmentReducer, {
    items: [...testData],
  })

  return (
    <ShipmentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShipmentContext.Provider>
  )
}

export default ShipmentContextProvider
