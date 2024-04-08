import { useState, useEffect } from 'react'
import { Box, Divider, Button } from '@mui/material'

import PanelDropdown from '../CabinetsTab/PanelDropdown'
import PositionsDropdown from '../CabinetsTab/PositionsDropdown'
import MountDropdown from '../CabinetsTab/MountDropdown'
import Qty from '../CabinetsTab/Qty'

import { useBuildContext } from '../../hooks/useBuildContext'
import { useShipmentContext } from '../../hooks/useShipmentContext'
import AddCabinet from '../../AddCabinet'

const MiniTab = ({ data }) => {
  const {
    panelType,
    panelCount,
    cabinet,
    config,
    mount,
    qty,
    dispatch: buildDispatch,
  } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const [panelCountOpts, setPanelCountOpts] = useState([
    { panels: panelCount, positions: panelType.positions * panelCount },
  ])

  useEffect(() => {
    buildDispatch({ type: 'LOAD_MINI' })
  }, [])

  useEffect(() => {
    setPanelCountOpts([
      {
        panels: 1,
        positions: panelType.positions,
      },
    ])
  }, [panelType])

  // const addToShipment = () => {
  //   //Cabinet
  //   const buildDesc = `${panelType.type}${
  //     panelCount * panelType.positions
  //   } ${'Complete'}`

  //   const partPrefix = `MKE3256`

  //   const buildPart = `${partPrefix}${panelType.suffix}${config.suffix}|${cabinet.size}`

  //   const box =
  //     mount.type === 'stand'
  //       ? data.boxes.find((box) => box.size === 'Stand').weight
  //       : data.boxes.find((box) => box.part === cabinet.box).weight

  //   const buildWeight =
  //     panelType.weight * panelCount + cabinet.weight + config.weight + box

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
          <PositionsDropdown options={panelCountOpts} disabled={true} />
          <MountDropdown options={data.mount} />
          <Qty />
        </Box>
        <Box
          marginBottom={'1em'}
          display={'flex'}
          flexDirection={'column'}
          marginLeft={'2em'}
        ></Box>
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
export default MiniTab
