import { createContext, useReducer } from 'react'

export const DataContext = createContext()

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { data: action.payload }

    default:
      return state
  }
}

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, { data: {} })

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
