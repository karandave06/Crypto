import { Avatar,Text, Box, Stack, VStack } from "@chakra-ui/react"

 

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'}
    color={'whiteAlpha.700'}
    minH={'48'}
    px={'16'}
    py={["16", "8"]}

    >
    <h1>

  <Stack direction={['column', 'row']} h={'full'}  align={'center'} justifyContent={'space-between'}>

<VStack>
  <Text fontWeight={'bold'}>About Us</Text>
  <Text fontSize={"sm"} letterSpacing={'widest'} textAlign={['center', 'left']}>We are the best crypto trending app in India, we provide our gydence at very
  cheap prices.</Text>
</VStack>

<VStack>
  <Avatar boxSize={'28'} mt={['4', '0']}/>
  <Text>
    Our Founder
  </Text>
</VStack>
  </Stack>
    </h1>
    </Box>
  )
}

export default Footer
