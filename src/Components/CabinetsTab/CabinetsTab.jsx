import { Box, Divider, Button } from '@mui/material'

import PanelDropdown from './PanelDropdown'
import PositionsDropdown from './PositionsDropdown'
import MountDropdown from './MountDropdown'
import AddonSwitch from './AddonSwitch'
import UpgradeSwitch from './UpgradeSwitch'
import Qty from './Qty'

import { useBuildContext } from '../../hooks/useBuildContext'
import { useShipmentContext } from '../../hooks/useShipmentContext'

const CabinetsTab = ({ data }) => {
  const { panelType, panels, cabinet, config, mount, qty, isHybrid, isAddon } =
    useBuildContext()
  const { dispatch } = useShipmentContext()

  const addToShipment = () => {
    //Cabinet
    const buildDesc = `${panelType.type}${panels * panelType.positions} ${
      isAddon ? 'Addon' : 'Complete'
    }`

    const partPrefix = `MKE${String(panels * panelType.positions)}`

    const buildPart = `${partPrefix}${panelType.suffix}${config.suffix}|${cabinet.size}`

    const maxPanels = isAddon ? cabinet.maxPanels + 1 : cabinet.maxPanels

    const panelBlank = data.panels.find((panel) => panel.type === 'Blank')

    const box =
      mount.type === 'stand'
        ? data.boxes.find((box) => box.size === 'Stand').weight
        : data.boxes.find((box) => box.part === cabinet.box).weight

    const buildWeight =
      panelType.weight * panels +
      cabinet.weight +
      config.weight +
      (maxPanels - panels) * panelBlank.weight +
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
    <Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          <PanelDropdown panels={isHybrid ? data.hybrids : data.panels} />
          <PositionsDropdown />
          <MountDropdown options={data.mount} />
          <Qty />
        </Box>
        <Box
          marginBottom={'1em'}
          display={'flex'}
          flexDirection={'column'}
          marginLeft={'2em'}
        >
          <AddonSwitch />
          <UpgradeSwitch />
        </Box>
      </Box>
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
