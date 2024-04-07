import { Box, Tab, Tabs, Paper } from '@mui/material'

import CabinetsTab from './Components/CabinetsTab/CabinetsTab'
import AccessoriesTab from './Components/AccessoriesTab/AccessoriesTab'
import HybridsTab from './Components/HybridsTab/HybridsTab'
import DealerPlateTab from './Components/DealerPlateTab/DealerPlateTab'
import MiniTab from './Components/MiniTab/MiniTab'
import MechanicalTab from './Components/MechanicalTab/MechanicalTab'

import { useBuildContext } from './hooks/useBuildContext'

const TabPanel = (props) => {
  const { children, tab, index } = props

  return (
    <div role='tabpanel' hidden={tab !== index} id={`tabpanel-${index}`}>
      {tab === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const Main = ({ tab, setTab }) => {
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
            <Tab label='Hybrids' />
            <Tab label='DealerPlate' />
            <Tab label='Minis' />
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
          <MiniTab />
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

export default Main
