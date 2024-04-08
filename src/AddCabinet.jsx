import { Button } from '@mui/material'

import { useBuildContext } from './hooks/useBuildContext'
import { useShipmentContext } from './hooks/useShipmentContext'

const AddCabinet = () => {
  const { panelType, panelCount, cabinet, config, mount, qty, isAddon, data } =
    useBuildContext()
  const { dispatch } = useShipmentContext()

  const addToShipment = () => {
    //Cabinet
    const buildDesc = `${panelType.type}${panelCount * panelType.positions} ${
      isAddon ? 'Addon' : 'Complete'
    }`

    const partPrefix = `MKE${
      cabinet.size === 'Mini'
        ? '3256'
        : String(panelCount * panelType.positions)
    }`

    const buildPart = `${partPrefix}${panelType.suffix}${config.suffix}|${cabinet.size}`

    const maxPanels = isAddon ? cabinet.maxPanels + 1 : cabinet.maxPanels

    const panelBlank = data.panels.find((panel) => panel.type === 'Blank')

    const box =
      mount.type === 'stand'
        ? data.boxes.find((box) => box.size === 'Stand').weight
        : data.boxes.find((box) => box.part === cabinet.box).weight

    const buildWeight =
      panelType.weight * panelCount +
      cabinet.weight +
      config.weight +
      (maxPanels - panelCount) * panelBlank.weight +
      box

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        desc: buildDesc,
        size: cabinet.size,
        part: buildPart,
        qty: qty,
        weight: buildWeight,
      },
    })

    //Mount
    if (mount.type !== 'none') {
      const mountAccessories = data.accessories.find(
        (accessory) => accessory.type === mount.accessoryType
      )

      const mountItem = mountAccessories.items.find(
        (item) => item.part === cabinet.mount[mount.type]
      )

      dispatch({ type: 'ADD_ITEM', payload: { ...mountItem, qty: qty } })
    }
  }
  return (
    <Button variant='contained' onClick={addToShipment}>
      Add
    </Button>
  )
}
export default AddCabinet
