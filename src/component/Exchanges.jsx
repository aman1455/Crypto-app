import axios from "axios";
import React, { useEffect, useState } from 'react';
import { server } from "../main";
import { Container, HStack } from "@chakra-ui/react";
import Loder from "./Loder";
import ErrorC from "./Error";
import ExchangeCard from "./ExchangeCard";

function Exchanges() {
  const [exchanges, setexchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror]= useState(false)
  useEffect(()=>{
    const fetchexchange = async()=>{
        
        try {
          const {data}= await axios(`${server}/exchanges`)
        setexchanges(data);
        setLoading(false);
        } catch (error) {
          seterror(true)
          setLoading(false)
        }
        
    }
    fetchexchange();
  },[])
  if(error) return <ErrorC/>;
    return ( 
        <Container maxW={"container.xl"} >
           {loading? <Loder/> :<div>
            <HStack wrap={'wrap'} justifyContent={"space-evenly"}>
                {exchanges.map((i)=><div>
                    <ExchangeCard
                    name={i.name}
                    key={i.id}
                    img={i.image}
                    rank={i.trust_score_rank}
                    url={i.url}
                    />
                    </div>)}
            </HStack>
           </div>

           }

        </Container>
    );
}

export default Exchanges;



