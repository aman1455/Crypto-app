import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import Loder from "./Loder";
import ErrorC from "./Error";
import CoinCard from "./CoinCard";

const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const pre = () => {
    if (page == 1) {
      return page;
    } else {
      changePage(page - 1);
    }
  };



  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorC />;

  return (
    <Container maxW={"container.xl"}>
      {Loading ? (
        <Loder />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack ml={"40%"} mr={"auto"} wrap={"wrap"}>
            <Button bgColor={"blue.400"} color={"white"} onClick={() => pre()}>
              pervious
            </Button>
            <Button bgColor={"blue.400"} color={"white"}>
              {page}
            </Button>
            <Button
              bgColor={"blue.400"}
              color={"white"}
              onClick={() => changePage(page + 1)}
            >
              {page + 1}
            </Button>
            <Button
              bgColor={"blue.400"}
              color={"white"}
              onClick={() => changePage(page + 2)}
            >
              {page + 2}
            </Button>
            <Button
              bgColor={"blue.400"}
              color={"white"}
              onClick={() => changePage(page + 1)}
            >
              next
            </Button>
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coin;
