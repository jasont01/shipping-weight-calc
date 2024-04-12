import { useEffect, useState } from 'react'
import { Box, Divider } from '@mui/material'

import PanelDropdown from './PanelDropdown'
import PositionsDropdown from './PositionsDropdown'
import MountDropdown from './MountDropdown'
import AddonSwitch from './AddonSwitch'
import UpgradeSwitch from './UpgradeSwitch'
import Qty from './Qty'
import AddCabinet from '../AddCabinet'

import { useBuildContext } from '../../hooks/useBuildContext'

import DataFile from '../../types/dataFile'

interface Props {
  data: DataFile
}

const CabinetsTab = ({ data }: Props) => {
  const { state, dispatch } = useBuildContext()

  const [upgradeAvailable, setUpgradeAvailable] = useState(false)

  useEffect(() => {
    setUpgradeAvailable(state.panelCount > data.cabinets[1].maxPanels)
  }, [state.panelCount, data.cabinets])

  useEffect(() => {
    dispatch({ type: 'RESET' })
  }, [dispatch])

  return (
    <Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          <PanelDropdown panels={data.panels} />
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
          <UpgradeSwitch disabled={!upgradeAvailable} />
        </Box>
      </Box>
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <AddCabinet />
      </Box>
    </Box>
  )
}

export default CabinetsTab
