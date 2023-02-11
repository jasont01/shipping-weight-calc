import { useState } from 'react'
import { Box, Tab, Tabs, Button, useMediaQuery, Paper } from '@mui/material'
import PalletButtons from './PalletButtons'
import TabPanel from './TabPanel'
import Summary from './Summary'

import { useShipmentContext } from '../hooks/useShipmentContext'
import { useBuildContext } from '../hooks/useBuildContext'
import Pallet from './Pallet'

const Shipment = ({ setTab }) => {
  const { items, dispatch: resetShipment } = useShipmentContext()
  const { dispatch: resetBuild } = useBuildContext()

  const [tab, setTab2] = useState(0)

  const isMobile = useMediaQuery('(max-width: 600px)')

  const resetBtnStyles = isMobile
    ? { display: 'flex', justifyContent: 'center' }
    : { display: 'block', position: 'relative', bottom: '8em' }

  const handleReset = () => {
    resetShipment({ type: 'RESET' })
    resetBuild({ type: 'RESET' })
    setTab(0)
  }

  if (!items || items.length === 0) return

  const pallets = [
    {
      name: 'Pallet#1',
      items: items,
    },
    {
      name: 'Pallet#2',
      items: [
        ...items,
        { desc: 'Hello World', part: 'ASD427', qty: 4, weight: 99 },
      ],
    },
  ]

  return (
    <Box sx={{ mt: 4 }}>
      <PalletButtons />
      <Paper>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            variant='scrollable'
            scrollButtons='auto'
            value={tab}
            onChange={(e, newValue) => setTab2(newValue)}
          >
            {pallets.map((pallet) => (
              <Tab key={pallet.name} label={pallet.name} />
            ))}
          </Tabs>
        </Box>
        {pallets.map((pallet, idx) => (
          <TabPanel key={idx} tab={tab} index={idx}>
            <Pallet items={pallet.items} />
          </TabPanel>
        ))}
      </Paper>

      <Summary />
      <Box sx={resetBtnStyles}>
        <Button sx={{ mt: '1em' }} onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </Box>
  )
}

export default Shipment
