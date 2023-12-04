import { Avatar, Box,  Stack, Text, VStack } from "@chakra-ui/react";
import owner from "../assets/owner.jpg"

function Footer() {
    return ( <Box bgColor={"blue.400"}>
        <Stack direction={["column","row"]} alignItems={"center"} h={"full"} p={1} >
            <VStack alignItems={["center" , "flex-start"]} w={"full"}>
                <Text color={"white"} fontWeight={"bold"}>
                    About us
                </Text>
                <Text color={"white"} textAlign={["center","left"]} fontSize={"sm"} letterSpacing={"wider"}>
                We are the best crypto trading app in India, we provide our guidance
            at a very affordable price.
                </Text>
            </VStack>
            <VStack boxSize={"28"} mt={["4","3"]}>
                
            <Avatar src={owner}/>
            <Text color={"white"}>Our Founder</Text>
                
            </VStack>
        </Stack>
    </Box> );
}

export default Footer;