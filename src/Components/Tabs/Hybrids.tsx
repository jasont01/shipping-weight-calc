import { useEffect } from 'react'
import { Box, Divider } from '@mui/material'

import PanelDropdown from '../Dropdowns/Panel'
import HybridPositions from '../Dropdowns/HybridPositions'
import MountDropdown from '../Dropdowns/Mount'
import AddonSwitch from '../AddonSwitch'
import UpgradeSwitch from '../UpgradeSwitch'
import Qty from '../Dropdowns/Qty'
import AddCabinet from '../AddCabinet'

import { useBuildContext } from '../../hooks/useBuildContext'

import { DataFile } from '../../types/types'
import { Panel } from '../../enums'
import { isLargeCab } from '../../context/buildReducer'

interface Props {
  data: DataFile
}

const HybridsTab = ({ data }: Props) => {
  const { state, dispatch } = useBuildContext()

  useEffect(() => {
    dispatch({ type: 'SET_PANEL_TYPE', payload: data.panels[Panel.MX] })
  }, [data, dispatch])

  return (
    <Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          <PanelDropdown panels={data.panels} hidden />
          <PanelDropdown panels={data.hybrids} label={'Type'} hybrid />
          <HybridPositions />
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
          <UpgradeSwitch disabled={isLargeCab(state)} />
        </Box>
      </Box>
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <AddCabinet />
      </Box>
    </Box>
  )
}
export default HybridsTab
