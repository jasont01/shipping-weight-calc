import { AppBar, Toolbar, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

const Header = () => {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <LocalShippingIcon sx={{ mr: 2 }} />
        <Typography variant='h6' color='inherit' noWrap>
          Shipping Weight Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Header
