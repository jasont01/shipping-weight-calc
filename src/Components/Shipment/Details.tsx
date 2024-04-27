import {
  TableCell,
  TableRow,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
} from '@mui/material'

import { Details as DetailsType } from '../../context/ShipmentContext'

interface Props {
  details: DetailsType[]
  open: boolean
}

const Details = ({ details, open }: Props) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Box sx={{ margin: '0', marginLeft: '7em', marginBottom: '1em' }}>
            <Typography variant='subtitle2' marginTop={'1em'}>
              Details
            </Typography>
            <Table size='small' sx={{ marginTop: '-1em' }}>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align='right'>Weight</TableCell>
                  <TableCell align='right'>Qty</TableCell>
                  <TableCell align='right'>Total Weight</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {details.map(
                  (row) =>
                    row.isVisible && (
                      <TableRow key={row.desc}>
                        <TableCell component='th' scope='row'>
                          {row.desc}
                        </TableCell>
                        <TableCell align='right'>{row.weight}</TableCell>
                        <TableCell align='right'>{row.qty}</TableCell>
                        <TableCell align='right'>{row.totalWeight}</TableCell>
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  )
}
export default Details
