import { Box, Typography, Divider, Button } from '@mui/material'

import Accessory from '../Accessory'

import { useBuildContext } from '../../hooks/useBuildContext'
import { useShipmentContext } from '../../hooks/useShipmentContext'

import { Item } from '../../types/types'

interface Props {
  wallboards: Item[]
  accessories: Item[]
  stand: Item
}

const AccessoriesTab = ({ wallboards, stand, accessories }: Props) => {
  const { state, dispatch: reset } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const addToShipment = () => {
    state.accessories.map(
      (item) => item.qty > 0 && dispatch({ type: 'ADD_ITEM', payload: item })
    )
    reset({ type: 'RESET' })
  }

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 15%',
        }}
      >
        <Box sx={{ mb: 2, gridColumnStart: 1 }}>
          <Typography variant='subtitle2' sx={{ mb: 1 }}>
            {'Wallboards'}
          </Typography>
          {wallboards.map((wallboard) => (
            <Accessory item={wallboard} key={wallboard.part} />
          ))}
        </Box>
        <Box sx={{ mb: 2, gridColumnStart: 2 }}>
          <Typography variant='subtitle2' sx={{ mb: 1 }}>
            {stand.desc}
          </Typography>
          <Accessory item={stand} />
        </Box>
        {accessories.map((item, idx) => (
          <Box sx={{ mb: 2, gridColumnStart: (idx % 2) + 1 }} key={item.part}>
            <Typography variant='subtitle2' sx={{ mb: 1 }}>
              {item.desc}
            </Typography>
            <Accessory item={item} />
          </Box>
        ))}
      </Box>
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={addToShipment}>
          Add
        </Button>
      </Box>
    </>
  )
}

export default AccessoriesTab
