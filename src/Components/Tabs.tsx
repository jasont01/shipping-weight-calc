import { Box, Tab, Tabs, Paper } from '@mui/material'

import CabinetsTab from './CabinetsTab/CabinetsTab'
import AccessoriesTab from './AccessoriesTab/AccessoriesTab'
import HybridsTab from './HybridsTab/HybridsTab'
import DealerPlateTab from './DealerPlateTab/DealerPlateTab'
import MiniTab from './MiniTab/MiniTab'
import MechanicalTab from './MechanicalTab/MechanicalTab'

import { useBuildContext } from '../hooks/useBuildContext'

const TabPanel = (props) => {
  const { children, tab, index } = props

  return (
    <div role='tabpanel' hidden={tab !== index} id={`tabpanel-${index}`}>
      {tab === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const Tabs = ({ tab, setTab }) => {
  const { data } = useBuildContext()

  return (
    <Paper elevation={2} sx={{ p: 4, pt: 2 }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            variant='scrollable'
            scrollButtons='auto'
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
          >
            <Tab label='Cabinets' />
            <Tab label='Hybrid' />
            <Tab label='DealerPlate' />
            <Tab label='Mini' />
            <Tab label='Accessories' />
            <Tab label='Mechanical' />
          </Tabs>
        </Box>
        <TabPanel tab={tab} index={0}>
          <CabinetsTab data={data} />
        </TabPanel>
        <TabPanel tab={tab} index={1}>
          <HybridsTab />
        </TabPanel>
        <TabPanel tab={tab} index={2}>
          <DealerPlateTab />
        </TabPanel>
        <TabPanel tab={tab} index={3}>
          <MiniTab data={data} />
        </TabPanel>
        <TabPanel tab={tab} index={4}>
          <AccessoriesTab categories={data.accessories} />
        </TabPanel>
        <TabPanel tab={tab} index={5}>
          <MechanicalTab />
        </TabPanel>
      </Box>
    </Paper>
  )
}

export default Tabs
