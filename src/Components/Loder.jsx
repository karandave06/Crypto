 import {VStack ,Box, Spinner} from '@chakra-ui/react'
const Loder = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
    <Box transform={'scale(3)'}>

    <Spinner size={'xl'}/>

    </Box>
    </VStack>
  )
}

export default Loder
