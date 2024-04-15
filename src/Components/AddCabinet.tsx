import { Button } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'
import { useShipmentContext } from '../hooks/useShipmentContext'

import data from '../data.json'

const AddCabinet = () => {
  const { state } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const addToShipment = () => {
    const buildDesc = `${state.panelType.type}${
      state.panelCount * state.panelType.positions
    } ${state.isAddon ? 'Addon' : 'Complete'}`

    const partPrefix = `MKE${
      state.cabinet.size === 'Mini'
        ? '3256'
        : String(state.panelCount * state.panelType.positions)
    }`

    const partSuffix =
      state.cabinet.size === 'Mini'
        ? `${state.panelType.type}`
        : `${state.panelType.suffix}${state.config.suffix}`

    const buildPart = `${partPrefix}${partSuffix}|${state.cabinet.size}`

    const maxPanels = state.isAddon
      ? state.cabinet.maxPanels + 1
      : state.cabinet.maxPanels

    const box = state.mount === 'stand' ? data.stand.box : state.cabinet.box

    const buildWeight =
      state.panelType.weight * state.panelCount +
      state.cabinet.weight +
      state.config.weight +
      (maxPanels - state.panelCount) * data.blank.weight +
      box.weight

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        desc: buildDesc,
        size: state.cabinet.size,
        part: buildPart,
        qty: state.qty,
        weight: buildWeight,
      },
    })

    if (state.mount === 'wall') {
      dispatch({
        type: 'ADD_ITEM',
        payload: { ...state.cabinet.wallboard, qty: state.qty },
      })
    }

    if (state.mount === 'stand') {
      dispatch({ type: 'ADD_ITEM', payload: { ...data.stand, qty: state.qty } })
    }
  }

  return (
    <Button variant='contained' onClick={addToShipment}>
      Add
    </Button>
  )
}
export default AddCabinet
