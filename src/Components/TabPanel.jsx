import { Box } from '@mui/material'

const TabPanel = ({ children, tab, index }) => {
  return (
    <div hidden={tab !== index}>
      {tab === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}
export default TabPanel
