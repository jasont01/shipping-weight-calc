import { useState } from 'react'
import { Box, Button, Tab, Tabs, Paper, Divider } from '@mui/material'
import CabinetsTab from './Components/CabinetsTab'
import AccessoriesTab from './Components/AccessoriesTab'
import ShippingTab from './Components/ShippingTab'

const TabPanel = (props) => {
  const { children, value, index } = props

  return (
    <div role='tabpanel' hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const Main = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper elevation={2} sx={{ p: 4, pt: 2 }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Cabinets' />
            <Tab label='Accessories' />
            <Tab label='Shipping Materials' />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CabinetsTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccessoriesTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ShippingTab />
        </TabPanel>
      </Box>
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained'>Add</Button>
      </Box>
    </Paper>
  )
}

export default Main
