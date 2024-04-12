import { Button } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'
import { useShipmentContext } from '../hooks/useShipmentContext'

import data from '../data.json'

const AddCabinet = () => {
  const { state } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const addToShipment = () => {
    //Cabinet
    const buildDesc = `${state.panelType.type}${
      state.panelCount * state.panelType.positions
    } ${state.isAddon ? 'Addon' : 'Complete'}`

    const partPrefix = `MKE${
      state.cabinet.size === 'Mini'
        ? '3256'
        : String(state.panelCount * state.panelType.positions)
    }`

    const buildPart = `${partPrefix}${state.panelType.suffix}${state.config.suffix}|${state.cabinet.size}`

    const maxPanels = state.isAddon
      ? state.cabinet.maxPanels + 1
      : state.cabinet.maxPanels

    const panelBlank = data.panels.find((panel) => panel.type === 'Blank')

    const box =
      state.mount.type === 'stand'
        ? data.boxes.find((box) => box.size === 'Stand').weight
        : data.boxes.find((box) => box.part === state.cabinet.box).weight

    const buildWeight =
      state.panelType.weight * state.panelCount +
      state.cabinet.weight +
      state.config.weight +
      (maxPanels - state.panelCount) * panelBlank.weight +
      box

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

    //Mount
    if (state.mount.type !== 'none') {
      const mountAccessories = data.accessories.find(
        (a) => a.type === state.mount.accessoryType
      )

      const mountItem = mountAccessories.items.find(
        (item) => item.part === state.cabinet.mount[state.mount.type]
      )

      dispatch({ type: 'ADD_ITEM', payload: { ...mountItem, qty: state.qty } })
    }
  }
  return (
    <Button variant='contained' onClick={addToShipment}>
      Add
    </Button>
  )
}
export default AddCabinet
