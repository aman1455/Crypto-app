import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loder from "./Loder";
import ErrorC from "./Error";
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Chart from "./chart";


function CoinDetails() {
  const [coin, setCoin] = useState({});
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("7d");
  const [chartArray, setChartArray] = useState([]);
  const param = useParams();
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${param.id}`);
        const {data: chartData}= await axios.get(`${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`)
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
        console.log(data);
        console.log(chartData);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [param.id,currency,days]);
 function change (d){
    setDays(d)
 }

  if (error) return <ErrorC />;

  return (
    <>
      <Container maxW={"container.xl"}>
        {Loading ? (
          <Loder />
        ) : (
          <>
           <Box width={"full"} borderWidth={1}>
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </Box>
          <Button m={4} onClick={()=>change("24h")}>24Hour</Button>
          <Button m={4} onClick={()=>change("7d")} >7Days</Button>
          <Button m={4} onClick={()=>change("30d")}>30Days</Button>
          <Button m={4} onClick={()=>change("365d")}>1Year</Button>
            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack spacing={"4"}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>
              </HStack>
            </RadioGroup>
            <VStack spacing={"4"} p="16" alignItems={"self-start"}>
              <Text
                fontSize={"small"}
                alignItems={"flex-start"}
                opacity={"0.7"}
              >
                Last update on{" "}
                {Date(coin.market_data.last_updated).split("G")[0]}
              </Text>
              <Image
                src={coin.image.large}
                w={"16"}
                h={"16"}
                objectFit={"contain"}
              ></Image>

              <Stat>
                <StatLabel>{coin.name}</StatLabel>
                <StatNumber>
                  {currencySymbol}
                  {coin.market_data.current_price[currency]}
                </StatNumber>
                <StatHelpText>
                  <StatArrow
                    type={
                      coin.market_data.market_cap_change_percentage_24h > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {coin.market_data.market_cap_change_percentage_24h}%
                </StatHelpText>
              </Stat>
              <Badge
                fontSize={"2xl"}
                bgColor={"blue.400"}
                color={"whiteAlpha.600"}
              >
                #{coin.market_data.market_cap_rank}
              </Badge>
              <CoustomBar low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}/>
               <Item title={"Market Supply"} value={ `${currencySymbol}${coin.market_data.max_supply}`}/>
               <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply}/>
               <Item title={"Market Cap"} value={coin.market_data.market_cap[currency]}/>
               <Item title={"All Time Low"} value={coin.market_data.atl[currency]}/>
               <Item title={"All Time High"} value={ coin.market_data.ath[currency]}/>
            </VStack>
          </>
        )}
      </Container>
    </>
  );
}

const Item =({title, value})=>(
  <HStack justifyContent={"space-between"} w={"full"}>
  <Text>{title}</Text>
  <Text>{value}</Text>
  </HStack>
)

const CoustomBar = ({low, high}) => (
  <VStack w={"full"}>
    <Progress  colorScheme={"teal"} w={"full"} value={50} />
    <HStack justifyContent={"space-between"}w={"full"}>
      <Badge colorScheme="red">{low}</Badge>
      <Text pl={"4"} fontSize={"sm"}>24 Hour Range</Text>
      <Badge colorScheme="green">{high}</Badge>
    </HStack>
  </VStack>
);

export default CoinDetails;
