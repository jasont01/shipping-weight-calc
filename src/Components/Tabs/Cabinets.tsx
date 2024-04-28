import { useEffect } from 'react'
import { Box, Divider } from '@mui/material'

import PanelDropdown from '../Dropdowns/Panel'
import PositionsDropdown from '../Dropdowns/Positions'
import MountDropdown from '../Dropdowns/Mount'
import AddonSwitch from '../AddonSwitch'
import UpgradeSwitch from '../UpgradeSwitch'
import Qty from '../Dropdowns/Qty'
import AddCabinet from '../AddCabinet'

import { useBuildContext } from '../../hooks/useBuildContext'

import { DataFile } from '../../types/types'
import { Cab } from '../../enums'
import { isLargeCab } from '../../context/buildReducer'

interface Props {
  data: DataFile
}

const CabinetsTab = ({ data }: Props) => {
  const { state, dispatch } = useBuildContext()

  const cabSize =
    isLargeCab(state) || state.isUpgrade
      ? data.cabinets[Cab.Large]
      : data.cabinets[Cab.Small]

  useEffect(() => {
    if (cabSize !== state.cabinet) {
      dispatch({
        type: 'SET_CABINET',
        payload: cabSize,
      })
    }
  }, [state.cabinet, cabSize, data, dispatch])

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

export default CabinetsTab
