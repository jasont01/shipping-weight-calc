import { useEffect } from 'react'
import { Box, Divider } from '@mui/material'

import PanelDropdown from '../Dropdowns/Panel'
import HybridPositions from '../Dropdowns/HybridPositions'
import MountDropdown from '../Dropdowns/Mount'
import AddonSwitch from '../AddonSwitch'
import UpgradeSwitch from '../UpgradeSwitch'
import Qty from '../Dropdowns/Qty'
import AddHybrid from '../AddHybrid'

import { useBuildContext } from '../../hooks/useBuildContext'

import { DataFile } from '../../types/types'
import { Panel, Cabinet, Hybrid } from '../../enums'

interface Props {
  data: DataFile
}

const HybridsTab = ({ data }: Props) => {
  const { state, dispatch } = useBuildContext()

  useEffect(() => {
    dispatch({ type: 'SET_PANEL_TYPE', payload: data.panels[Panel.MX] })
    dispatch({ type: 'SET_HYBRID_TYPE', payload: data.hybrids[Hybrid.DP] })

    return () => {
      dispatch({ type: 'SET_HYBRID_TYPE', payload: data.hybrids[Hybrid.Xi] })
    }
  }, [data, dispatch])

  return (
    <Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          <PanelDropdown panels={data.panels} hidden />
          <PanelDropdown panels={data.hybrids} label={'Type'} hybrid />
          <HybridPositions
            maxPanels={data.cabinets[Cabinet.Large].maxPanels}
            mxPanel={data.panels[Panel.MX]}
          />
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
          <UpgradeSwitch
            disabled={
              state.hybridType === data.hybrids[Hybrid.DP] ||
              state.panelCount > data.cabinets[Cabinet.Small].maxPanels
            }
          />
        </Box>
      </Box>
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <AddHybrid />
      </Box>
    </Box>
  )
}
export default HybridsTab
