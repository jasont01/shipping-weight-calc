import { Box, Typography, Divider, Button } from '@mui/material'
import Accessory from './Accessory'
import { useBuildContext } from '../hooks/useBuildContext'
import { useShipmentContext } from '../hooks/useShipmentContext'

const AccessoriesTab = ({ categories }) => {
  const { accessories } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const addToShipment = () => {
    accessories.map(
      (item) => item.qty > 0 && dispatch({ type: 'ADD_ITEM', payload: item })
    )
  }

  //TODO: Grid
  return (
    <>
      <Box sx={{ display: 'grid' }}>
        {categories.map((category) => (
          <Box sx={{ mb: 2 }} key={category.type}>
            <Typography variant='subtitle2' sx={{ mb: 1 }}>
              {category.type}
            </Typography>
            {category.items.map((item) => (
              <Accessory item={item} />
            ))}
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
