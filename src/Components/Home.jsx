import { Box,Image, Text } from "@chakra-ui/react"
import {motion} from 'framer-motion'

 

const Home = () => {
  return (

    <Box bgColor={'blackAlpha.900'}   h={'85vh'} minH={'48'} px={'16'} py={['16', '8']}>
<motion.div 

style={{
  height:"80vh"

}}

animate={{
  translateY:'20px'
}}

transition ={{
  duration:1,
  repeat:Infinity,
  repeatType:"reverse"
}}
>

    <Image w={'full'} h={'full'} objectFit={'contain'} filter={"grayscale(1)"} src="../../public/btc.png"/>
</motion.div>

    <Text  fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.800'} mt={'-20'}>

      Xcrypto
    </Text>

     </Box>
  )
}

export default Home
 