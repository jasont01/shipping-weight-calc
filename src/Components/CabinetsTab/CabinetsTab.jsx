import { useEffect } from 'react'
import { Box, Divider } from '@mui/material'

import PanelDropdown from './PanelDropdown'
import PositionsDropdown from './PositionsDropdown'
import MountDropdown from './MountDropdown'
import AddonSwitch from './AddonSwitch'
import UpgradeSwitch from './UpgradeSwitch'
import Qty from './Qty'
import AddCabinet from '../../AddCabinet'

import { useBuildContext } from '../../hooks/useBuildContext'

const CabinetsTab = ({ data }) => {
  const { dispatch } = useBuildContext()

  useEffect(() => {
    dispatch({ type: 'RESET' })
  }, [])

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
          <UpgradeSwitch />
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
