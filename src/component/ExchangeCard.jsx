import { Heading, Image, VStack } from "@chakra-ui/react";

function ExchangeCard({url, img, name, rank}) {
    return ( 
       <a href={url} target={"blank"}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"10"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}>
      <Image 
       src= {img} 
       w={'10'} 
       h={'10'}
       objectFit={'contain'}
       alt="Exchange"/>
       <Heading size={"md"} noOfLines={1}>{rank}</Heading>
       <text noOfLines={1}>{name}</text>
      </VStack>
       </a>
     );
}

export default ExchangeCard;