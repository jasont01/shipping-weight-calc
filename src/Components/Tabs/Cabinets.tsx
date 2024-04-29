import { Box, Divider } from '@mui/material'

import PanelDropdown from '../Dropdowns/Panel'
import PositionsDropdown from '../Dropdowns/Positions'
import MountDropdown from '../Dropdowns/Mount'
import AddonSwitch from '../AddonSwitch'
import UpgradeSwitch from '../UpgradeSwitch'
import Qty from '../Dropdowns/Qty'
import AddCabinet from '../AddCabinet'

import { DataFile } from '../../types/types'

interface Props {
  data: DataFile
}

const CabinetsTab = ({ data }: Props) => {
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
