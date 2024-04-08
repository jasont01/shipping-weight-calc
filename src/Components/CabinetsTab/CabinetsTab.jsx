import { useState, useEffect } from 'react'
import { Box, Divider, Button } from '@mui/material'

import PanelDropdown from './PanelDropdown'
import PositionsDropdown from './PositionsDropdown'
import MountDropdown from './MountDropdown'
import AddonSwitch from './AddonSwitch'
import UpgradeSwitch from './UpgradeSwitch'
import Qty from './Qty'

import { useBuildContext } from '../../hooks/useBuildContext'
import { useShipmentContext } from '../../hooks/useShipmentContext'

import AddCabinet from '../../AddCabinet'

const CabinetsTab = ({ data }) => {
  const {
    panelType,
    panelCount,
    cabinet,
    config,
    mount,
    qty,
    isAddon,
    dispatch: buildDispatch,
  } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const [panelCountOpts, setPanelCountOpts] = useState([
    { panels: panelCount, positions: panelType.positions * panelCount },
  ])

  useEffect(() => {
    buildDispatch({ type: 'RESET' })
  }, [])

  useEffect(() => {
    let opts = []

    let i = isAddon ? cabinet.maxPanels + 1 : cabinet.maxPanels
    for (i; i > 0; i--) {
      opts.push({
        panels: i,
        positions: panelType.positions * i,
      })
    }

    setPanelCountOpts(opts)
  }, [panelType, cabinet, isAddon])

  // const addToShipment = () => {
  //   //Cabinet
  //   const buildDesc = `${panelType.type}${panelCount * panelType.positions} ${
  //     isAddon ? 'Addon' : 'Complete'
  //   }`

  //   const partPrefix = `MKE${String(panelCount * panelType.positions)}`

  //   const buildPart = `${partPrefix}${panelType.suffix}${config.suffix}|${cabinet.size}`

  //   const maxPanels = isAddon ? cabinet.maxPanels + 1 : cabinet.maxPanels

  //   const panelBlank = data.panels.find((panel) => panel.type === 'Blank')

  //   const box =
  //     mount.type === 'stand'
  //       ? data.boxes.find((box) => box.size === 'Stand').weight
  //       : data.boxes.find((box) => box.part === cabinet.box).weight

  //   const buildWeight =
  //     panelType.weight * panelCount +
  //     cabinet.weight +
  //     config.weight +
  //     (maxPanels - panelCount) * panelBlank.weight +
  //     box

  //   dispatch({
  //     type: 'ADD_ITEM',
  //     payload: {
  //       desc: buildDesc,
  //       size: cabinet.size,
  //       part: buildPart,
  //       qty: qty,
  //       weight: buildWeight,
  //     },
  //   })

  //   //Mount
  //   if (mount.type !== 'none') {
  //     const mountAccessories = data.accessories.find(
  //       (accessory) => accessory.type === mount.accessoryType
  //     )

  //     const mountItem = mountAccessories.items.find(
  //       (item) => item.part === cabinet.mount[mount.type]
  //     )

  //     dispatch({ type: 'ADD_ITEM', payload: { ...mountItem, qty: qty } })
  //   }
  // }

  return (
    <Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          <PanelDropdown panels={data.panels} />
          <PositionsDropdown options={panelCountOpts} />
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
        {/* <Button variant='contained' onClick={addToShipment}>
          Add
        </Button> */}
        <AddCabinet />
      </Box>
    </Box>
  )
}

export default CabinetsTab
