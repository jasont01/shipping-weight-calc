import { Box, Typography, Button } from '@mui/material'

const TEMP = [
  { desc: '56x42', part: 'PBX028', weight: 44, qty: 1 },
  { desc: '48x40', part: 'PBX021', weight: 38, qty: 0 },
  { desc: '36x36', part: 'PBX003', weight: 32, qty: 0 },
  { desc: "Int'l", part: 'N/A', weight: 35, qty: 0 },
]

const PalletButton = ({ pallet }) => {
  const handleClick = () => {
    console.log(pallet.part)
  }

  return (
    <Button variant='text' size='small' sx={{ mx: 2 }} onClick={handleClick}>
      {pallet.desc}
    </Button>
  )
}

const PalletButtons = () => {
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
          backgroundColor: 'white',
          pl: 3,
          pt: 2,
          pb: 1,
          borderBottom: '1px solid rgba(224, 224, 224, 1)',
        }}
      >
        <Typography
          variant='subtitle2'
          sx={{ position: 'relative', bottom: -4 }}
        >
          Pallets:
        </Typography>
        <Box>
          {TEMP.map((pallet) => (
            <PalletButton pallet={pallet} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
export default PalletButtons
