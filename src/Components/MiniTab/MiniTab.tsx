import { useEffect } from 'react'
import { Box, Divider } from '@mui/material'

import PanelDropdown from '../CabinetsTab/PanelDropdown'
import PositionsDropdown from '../CabinetsTab/PositionsDropdown'
import MountDropdown from '../CabinetsTab/MountDropdown'
import Qty from '../CabinetsTab/Qty'
import AddCabinet from '../AddCabinet'

import { useBuildContext } from '../../hooks/useBuildContext'

import DataFile from '../../types/types'

interface Props {
  data: DataFile
}

const MiniTab = ({ data }: Props) => {
  const { dispatch } = useBuildContext()

  useEffect(() => {
    dispatch({ type: 'LOAD_MINI' })
  }, [dispatch])

  return (
    <Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          <PanelDropdown panels={data.panels} />
          <PositionsDropdown maxPanels={1} disabled={true} />
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
        <AddCabinet />
      </Box>
    </Box>
  )
}
export default MiniTab
