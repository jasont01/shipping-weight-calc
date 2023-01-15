import { Box, Typography, Button } from '@mui/material'
import { useDataContext } from '../hooks/useDataContext'
import { useShipmentContext } from '../hooks/useShipmentContext'

const PalletButton = ({ pallet }) => {
  const { dispatch } = useShipmentContext()

  const handleClick = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...pallet, desc: `${pallet.desc} Pallet`, qty: 1 },
    })
  }

  return (
    <Button variant='text' size='small' sx={{ ml: 3 }} onClick={handleClick}>
      {pallet.desc}
    </Button>
  )
}

const PalletButtons = () => {
  const { data } = useDataContext()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          borderRadius: '10px 10px 0 0',
          backgroundColor: '#fff',
          pl: 3,
          pt: 2,
          pb: 1,
          pr: 3,
          borderBottom: '1px solid rgb(224, 224, 224)',
        }}
      >
        <Typography
          variant='subtitle2'
          sx={{ position: 'relative', bottom: -4 }}
        >
          Pallets:
        </Typography>
        <Box>
          {data.pallets.map((pallet) => (
            <PalletButton key={pallet.part} pallet={pallet} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
export default PalletButtons
