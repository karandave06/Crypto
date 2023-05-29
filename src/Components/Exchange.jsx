 import axios from 'axios'
import { useEffect, useState } from 'react'
import { server } from '../main'
import { Container, HStack,VStack,Image,Text, Heading } from '@chakra-ui/react';
import Error from './Error';
import Loder from './Loder';
 

const Exchange = () => {

  const [exchanges,setexchanges] = useState([]);
  const [loding,setloding] = useState(true);
  const [error,seterror] = useState(false);
  useEffect(() =>{
    const fecthexchenges = async() =>{

     try{
      const {data} = await axios.get(`${server}/exchanges`)
      setexchanges(data);
      console.log(data)
      setloding(false)
    
     }catch(err){
      seterror(true)
      setloding(false)
     }
       
    }
    fecthexchenges();
  })

  if(error){return <Error msg={"Error while catching Exchenges"}/>}
  return (
    <Container  maxW={"container.xl"}>     
    {loding ? <Loder /> : <>
<HStack wrap={'wrap'} display={'flex'} justifyContent={"center"} alignItems={'center'}>

  {exchanges.map((i) => (

   <div style={{display:"flex",   alignItems:"center"}} key={i.id}>

   <a href={i.url} target='blank'>

<VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'}
m={"4"}
css ={{
  "&:hover" : {
    transform: "scale(1.1)"
  }
}}
>

  <Image src={i.image} w={'10'} h={'10'} objectFit={'contain'} alt='exchange'/>
  <Heading size={'md'} noOfLines={1}>
    {i.trust_score_rank}
  </Heading>
<Text noOfLines={1}>
  {i.name}
</Text>
</VStack>

</a>
 
   </div>

  
   
    
  ))}
</HStack>
    </>
      }
    </Container>
  )
}

 

export default Exchange
 