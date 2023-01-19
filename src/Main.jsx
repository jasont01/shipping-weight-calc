import { Box, Tab, Tabs, Paper } from '@mui/material'
import CabinetsTab from './Components/CabinetsTab'
import AccessoriesTab from './Components/AccessoriesTab'
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
            <Tab label='Accessories' />
          </Tabs>
        </Box>
        <TabPanel tab={tab} index={0}>
          <CabinetsTab data={data} />
        </TabPanel>
        <TabPanel tab={tab} index={1}>
          <AccessoriesTab categories={data.accessories} />
        </TabPanel>
      </Box>
    </Paper>
  )
}

export default Main
