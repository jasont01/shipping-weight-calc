import { Box, Divider, Button } from '@mui/material'
import PanelDropdown from './PanelDropdown'
import PositionsDropdown from './PositionsDropdown'
import SizeDropdown from './SizeDropdown'
import ConfigDropdown from './ConfigDropdown'
import MountDropdown from './MountDropdown'
import Qty from './Qty'

import { useBuildContext } from '../hooks/useBuildContext'
import { useShipmentContext } from '../hooks/useShipmentContext'

const CabinetsTab = ({ data }) => {
  const { panelType, panels, size, config, mount, qty } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const addToShipment = () => {
    //Cabinet
    const buildDesc = `${panelType.type}${panels * panelType.positions} ${
      size.type
    } ${config.type}`

    const positions = panels * panelType.positions

    const buildPart = `MKE${String(positions).padStart(3, '0')}${
      panelType.suffix
    }${config.suffix}`

    const totalPanels =
      size.interiorPanels + size.doorPanels + config.extraPanels

    const panelBlank = data.panels.find((panel) => panel.type === 'Blank')

    const box =
      mount.type === 'stand'
        ? data.boxes.find((box) => box.size === 'Stand').weight
        : data.boxes.find((box) => box.part === size.box).weight

    const buildWeight =
      panelType.weight * panels +
      size.weight +
      config.weight +
      (totalPanels - panels) * panelBlank.weight +
      box

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        desc: buildDesc,
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
        (item) => item.part === size.mount[mount.type]
      )

      dispatch({ type: 'ADD_ITEM', payload: { ...mountItem, qty: qty } })
    }
  }

  return (
    <Box>
      <PanelDropdown panels={data.panels} />
      <PositionsDropdown />
      <SizeDropdown cabinets={data.cabinets} />
      <ConfigDropdown options={data.config} />
      <MountDropdown options={data.mount} />
      <Qty />
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={addToShipment}>
          Add
        </Button>
      </Box>
    </Box>
  )
}

export default CabinetsTab
