 import {Button, HStack, position} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
  <HStack css={{position:"sticky",top:"0",left:'0',zIndex:'99'}} p={4} shadow={'base'} background={'blackAlpha.900'}>

     <Button variant={'unstyled'} color={'white'}>

     <Link to={'/'}>Home</Link>

     </Button>

     <Button variant={'unstyled'} color={'white'}>

     <Link to={ '/exchange'}>Exchanges</Link>

     </Button>

     <Button variant={'unstyled'} color={'white'}>

     <Link to={'/coin'}>Coins</Link>

     </Button>
    </HStack>
  )
}

export default Header
