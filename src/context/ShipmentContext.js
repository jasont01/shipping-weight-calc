import { createContext, useReducer } from 'react'

export const ShipmentContext = createContext()

const shipmentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const exists = state.items.find(
        (item) => item.part === action.payload.part
      )
      if (exists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.part === action.payload.part
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          ),
        }
      } else {
        return { ...state, items: [...state.items, action.payload] }
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.part !== action.payload),
      }

    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((item) =>
          item.part === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      }

    case 'DECREMENT':
      return {
        ...state,
        items: state.items.map((item) =>
          item.part === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      }

    case 'RESET':
      return { ...state, items: [] }

    default:
      return state
  }
}

const ShipmentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shipmentReducer, {
    items: [],
  })

  return (
    <ShipmentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShipmentContext.Provider>
  )
}

export default ShipmentContextProvider
