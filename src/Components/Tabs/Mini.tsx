import { useEffect } from 'react'
import { Box, Divider } from '@mui/material'

import PanelDropdown from '../Dropdowns/Panel'
import PositionsDropdown from '../Dropdowns/Positions'
import MountDropdown from '../Dropdowns/Mount'
import Qty from '../Dropdowns/Qty'
import AddCabinet from '../AddCabinet'

import { useBuildContext } from '../../hooks/useBuildContext'

import { DataFile } from '../../types/types'

interface Props {
  data: DataFile
  isMobile: boolean
}

const MiniTab = ({ data, isMobile }: Props) => {
  const { dispatch } = useBuildContext()

  useEffect(() => {
    dispatch({ type: 'SET_ADDON', payload: false })
  }, [dispatch])

  return (
    <Box data-testid='mini-tab'>
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <Box sx={isMobile ? { display: 'flex', flexDirection: 'column' } : {}}>
          <PanelDropdown panels={data.panels} />
          <PositionsDropdown disabled={true} />
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
