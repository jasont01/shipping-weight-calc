import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  useMediaQuery,
} from '@mui/material'
import Item from './Item'
import PalletButtons from './PalletButtons'
import Summary from './Summary'

import { useShipmentContext } from '../../hooks/useShipmentContext'
import { useBuildContext } from '../../hooks/useBuildContext'

const Shipment = ({ setTab }) => {
  const { items, dispatch: resetShipment } = useShipmentContext()
  const { dispatch: resetBuild } = useBuildContext()

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

  return (
    <Box sx={{ mt: 4 }}>
      <PalletButtons />
      <TableContainer component={Paper} sx={{ p: 1, pb: 0 }}>
        <Table sx={{ minWidth: 700 }} size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell>Size</TableCell>
              <TableCell align='right'>Part</TableCell>
              <TableCell align='right' sx={{ pr: '4em' }}>
                Qty
              </TableCell>
              <TableCell align='right'>Weight</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <Item key={item.part} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
