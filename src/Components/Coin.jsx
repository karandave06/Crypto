import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import {
  Container,
  HStack,
  VStack,
  Image,
  Text,
  Heading, 
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import Error from "./Error";
import Loder from "./Loder";
import { Link } from "react-router-dom";

const Coin = () => {
  const [coins, setcoins] = useState([]);
  const [loding, setloding] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);
  const [currancy, setcurrancy] = useState("inr");

  const symbolcurrancy =
    currancy === "inr" ? "₹" : currancy === "eur" ? "€" : "$";

 


 

  useEffect(() => {
    const fecthcoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currancy}&page=${page}`
        );
        setcoins(data);
        console.log(data);
        setloding(false);
      } catch (err) {
        seterror(true);
        setloding(false);

        if(err){
          <Error />
        }
      }
    };
    fecthcoins();
  }, [currancy, page]);

  if (error) {
    return <Error massage={"To many request fatch from api plase try after some time....."} status={429}/>;
  }
  return (
    <Container maxW={"container.xl"}>
      {loding ? (
        <Loder />
      ) : (
        <>
        {/* currancy === "inr" ? "₹" : currancy === "eur" ? "€" : "$"; */}

        <RadioGroup value={currancy} onChange={setcurrancy} p={'6'}>
          <HStack spacing={'4'}>
            <Radio value="inr">INR</Radio>
            <Radio value="usd">USD</Radio>
            <Radio value="eur">EUR</Radio>
          </HStack>
        </RadioGroup>
          <HStack
            wrap={"wrap"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {coins.map((i) => (
              <div style={{ display: "flex", alignItems: "center" }} key={i.id}>
                <Link to={`/coin/${i.id}`} target="blank">
                  <VStack
                    w={"52"}
                    shadow={"lg"}
                    p={"8"}
                    borderRadius={"lg"}
                    transition={"all 0.3s"}
                    m={"4"}
                    css={{
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Image
                      src={i.image}
                      w={"10"}
                      h={"10"}
                      objectFit={"contain"}
                      alt="exchange"
                    />
                    <Heading size={"md"} noOfLines={1}>
                      {i.trust_score_rank}
                    </Heading>
                    <Text noOfLines={1}>{i.name}</Text>
                    <Text noOfLines={1}>
                      {" "}
                      {symbolcurrancy} {i.current_price}
                    </Text>
                  </VStack>
                </Link>
              </div>
            ))}
          </HStack>

           
        </>
      )}
    </Container>
  );
};

export default Coin;

/*

<HStack>
          {
            btns.map((item,index) =>{
            <Button bgColor={'blackAlpha.900'} color={'white'} onClick={()=>setpage(index + 1)}>
            {index + 1}
            </Button>
                      
            })
          }
         
          </HStack>
*/
