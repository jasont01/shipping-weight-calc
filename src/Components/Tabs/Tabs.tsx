import { Box, Tab, Tabs as MuiTabs, Paper } from '@mui/material'

import CabinetsTab from './Cabinets'
import AccessoriesTab from './Accessories'
import HybridsTab from './Hybrids'
import DealerPlateTab from './DealerPlate'
import MiniTab from './Mini'
import MechanicalTab from './Mechanical'

import data from '../../data.json'

interface PanelProps {
  tab: number
  index: number
  children: React.ReactNode
}

const Panel = (props: PanelProps) => {
  const { tab, index, children } = props

  return (
    <div role='tabpanel' hidden={tab !== index} id={`tabpanel-${index}`}>
      {tab === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

interface Props {
  tab: number
  setTab: (_: number) => void
}

const Tabs = ({ tab, setTab }: Props) => (
  <Paper elevation={2} sx={{ p: 4, pt: 2 }}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs
          variant='scrollable'
          scrollButtons='auto'
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
        >
          <Tab label='Cabinets' />
          <Tab label='Hybrids' />
          <Tab label='DealerPlate' />
          <Tab label='Mini' />
          <Tab label='Accessories' />
          <Tab label='Mechanical' disabled />
        </MuiTabs>
      </Box>
      <Panel tab={tab} index={0}>
        <CabinetsTab data={data} />
      </Panel>
      <Panel tab={tab} index={1}>
        <HybridsTab data={data} />
      </Panel>
      <Panel tab={tab} index={2}>
        <DealerPlateTab data={data} />
      </Panel>
      <Panel tab={tab} index={3}>
        <MiniTab data={data} />
      </Panel>
      <Panel tab={tab} index={4}>
        <AccessoriesTab
          wallboards={data.cabinets.map((cab) => cab.wallboard)}
          stand={data.stand}
          accessories={data.accessories}
        />
      </Panel>
      <Panel tab={tab} index={5}>
        <MechanicalTab />
      </Panel>
    </Box>
  </Paper>
)

export default Tabs
