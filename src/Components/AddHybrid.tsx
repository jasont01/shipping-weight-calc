import { Button } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'
import { useShipmentContext } from '../hooks/useShipmentContext'

import data from '../data.json'

const AddHybrid = () => {
  const { state } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const addToShipment = () => {
    const buildDesc = `Hybrid ${state.panelCount * state.panelType.positions}${
      state.panelType.type
    } with ${1 * state.hybridType.positions}${state.hybridType.type} ${
      state.isAddon ? 'Addon' : 'Complete'
    }`

    const partPrefix = `MKE${String(
      state.panelCount * state.panelType.positions +
        state.hybridType.positions * state.hybridPanels
    )}`

    const partSuffix = `${state.hybridType.suffix}${state.config.suffix}`

    const buildPart = `${partPrefix}${partSuffix}|${state.cabinet.size}`

    const maxPanels = state.isAddon
      ? state.cabinet.maxPanels + 1
      : state.cabinet.maxPanels

    const box = state.mount === 'stand' ? data.stand.box : state.cabinet.box
    console.log({ state }, { maxPanels }, { box })

    const buildWeight =
      state.panelType.weight * state.panelCount +
      state.hybridType.weight * state.hybridPanels +
      state.cabinet.weight +
      state.config.weight +
      (maxPanels - (state.panelCount + state.hybridPanels)) *
        data.blank.weight +
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
export default AddHybrid
