import { State, Item } from './ShipmentContext'

export type Action =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'INCREMENT'; payload: string }
  | { type: 'DECREMENT'; payload: string }
  | { type: 'RESET' }

const shipmentReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
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
      return { items: [] }

    default:
      return state
  }
}

export default shipmentReducer
