import { Box, Tab, Tabs, Paper } from '@mui/material'

import CabinetsTab from './Components/CabinetsTab/CabinetsTab'
import AccessoriesTab from './Components/AccessoriesTab/AccessoriesTab'
import HybridsTab from './Components/HybridsTab/HybridsTab'
import DealerPlateTab from './Components/DealerPlateTab/DealerPlateTab'
import MiniTab from './Components/MiniTab/MiniTab'
import MechanicalTab from './Components/MechanicalTab/MechanicalTab'

import data from './data.json'

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

interface TabPanelProps {
  tab: number
  setTab: (_: number) => void
}

const TabPanel = ({ tab, setTab }: TabPanelProps) => (
  <Paper elevation={2} sx={{ p: 4, pt: 2 }}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          variant='scrollable'
          scrollButtons='auto'
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
        >
          <Tab label='Cabinets' />
          <Tab label='Hybrid' />
          <Tab label='DealerPlate' />
          <Tab label='Mini' />
          <Tab label='Accessories' />
          <Tab label='Mechanical' />
        </Tabs>
      </Box>
      <Panel tab={tab} index={0}>
        <CabinetsTab data={data} />
      </Panel>
      <Panel tab={tab} index={1}>
        <HybridsTab />
      </Panel>
      <Panel tab={tab} index={2}>
        <DealerPlateTab />
      </Panel>
      <Panel tab={tab} index={3}>
        <MiniTab data={data} />
      </Panel>
      <Panel tab={tab} index={4}>
        <AccessoriesTab categories={data.accessories} />
      </Panel>
      <Panel tab={tab} index={5}>
        <MechanicalTab />
      </Panel>
    </Box>
  </Paper>
)

export default TabPanel
