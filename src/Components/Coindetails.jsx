import {
  Box,
  Container,
  Badge,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Progress,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Loder from "./Loder";
import { useEffect } from "react";
import { server } from "../main";
import Error from "./Error";
import { useParams } from "react-router-dom";
import axios from "axios";
import Charts from "./Charts";

const Coindetails = () => {
  const params = useParams();

  const [coin, setcoin] = useState([]);
  const [loding, setloding] = useState(true);
  const [error, seterror] = useState(false);
  const [currancy, setcurrancy] = useState("inr");
  const [days, setdays] = useState("14d");

  const [chartArray, setchartArray] = useState([]);

  const symbolcurrancy =
    currancy === "inr" ? "₹" : currancy === "eur" ? "€" : "$";

  // btns are starting from hear

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "365d"];

  const switchChart = (btns) => {
    switch (btns) {
      case "24h":
        setdays("24h");
        setloding(true);
        break;

      case "7d":
        setdays("7d");
        setloding(true);
        break;

      case "14d":
        setdays("14d");
        setloding(true);
        break;

      case "30d":
        setdays("30d");
        setloding(true);
        break;

      case "60d":
        setdays("60d");
        setloding(true);
        break;

      case "200d":
        setdays("200d");
        setloding(true);
        break;

      case "365d":
        setdays("365d");
        setloding(true);
        break;

      default:
        setdays("24h");
        setloding(true);
        break;
    }
  };

  useEffect(() => {
    const fecthcoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currancy}&days=${days}`
        );

        setcoin(data);
        console.log(chartData);
        setchartArray(chartData.prices);
        console.log(data);
        console.log(params.name);
        setloding(false);
      } catch (err) {
        seterror(true);
        setloding(false);
      }
    };
    fecthcoins();
  }, [params.id, currancy, days]);

  if (error) {
    return <Error status={429} massage={"Error while catching Coni details"} />;
  }

  return (
    <div>
      <Container maxW={"container.xl"}>
        {loding ? (
          <Loder />
        ) : (
          <>
            <HStack p={"4"}  overflowX={'auto'}>
              {btns.map((i) => (
                <Button key={i} onClick={() => switchChart()}>
                  {i}
                </Button>
              ))}
            </HStack>

            <Box w={"full"} borderWidth={1}>
              <Charts arr={chartArray} currancy={symbolcurrancy} days={days} />
            </Box>

            {/* Button */}

            <RadioGroup value={currancy} onChange={setcurrancy} p={"6"}>
              <HStack spacing={"4"}>
                <Radio value="inr">INR</Radio>
                <Radio value="usd">USD</Radio>
                <Radio value="eur">EUR</Radio>
              </HStack>
            </RadioGroup>

            <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
              <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
                Last updat on{Date(coin.market_data.last_updated).split("G")[0]}
              </Text>

              {
                <>
                  <Image
                    src={coin.image.large}
                    w={"16"}
                    h={"16"}
                    objectFit={"contain"}
                    alt="coin"
                  />

                  <Stat>
                    <StatLabel>{coin.name}</StatLabel>

                    <StatNumber>
                      {symbolcurrancy}{" "}
                      {coin.market_data.current_price[currancy]}
                    </StatNumber>

                    <StatHelpText>
                      <StatArrow
                        type={
                          coin.market_data.price_change_percentage_24h > 0
                            ? "increase"
                            : "decrease"
                        }
                      />
                      {coin.market_data.price_change_percentage_24h}%
                    </StatHelpText>
                  </Stat>

                  <Badge
                    fontSize={"2xl"}
                    bgColor={"blackAlpha.800"}
                    color={"white"}
                  >
                    {`#${coin.market_cap_rank}`}
                  </Badge>

                  <Custombar
                    high={`${symbolcurrancy}${coin.market_data.high_24h[currancy]}`}
                    low={`${symbolcurrancy}${coin.market_data.low_24h[currancy]}`}
                  />

                  <Box w={"full"} p={"4"}>
                    <Item
                      title={"Max Supply"}
                      value={coin.market_data.max_supply}
                    />
                    <Item
                      title={"Circulating Supply"}
                      value={coin.market_data.circulating_supply}
                    />
                    <Item
                      title={"Market Cap"}
                      value={`${symbolcurrancy}${coin.market_data.market_cap[currancy]}`}
                    />
                    <Item
                      title={"All Time Low"}
                      value={`${symbolcurrancy}${coin.market_data.atl[currancy]}`}
                    />
                    <Item
                      title={"All Time High"}
                      value={`${symbolcurrancy}${coin.market_data.ath[currancy]}`}
                    />
                  </Box>
                </>
              }
            </VStack>
          </>
        )}
      </Container>

      {}
    </div>
  );
};

const Item = ({ title, value }) => (
  <HStack w={"full"} my={"4"} justifyContent={"space-between"}>
    <Text letterSpacing={"widest"} fontFamily={"Bebas Neue"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const Custombar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress w={"full"} value={50} colorScheme="teal" />
    <HStack w={"full"} justifyContent={"space-evenly"}>
      <Badge children={low} colorScheme="red" />
      <Badge children={high} colorScheme="green" />
    </HStack>
  </VStack>
);
export default Coindetails;
