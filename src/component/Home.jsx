import { motion, isValidMotionProp } from 'framer-motion';
import btcp from "../assets/btc.png";
import { Box, Image, Text } from "@chakra-ui/react";


function Home() {
   return(
    <Box h={"80vh"} w={"full"}>
        <motion.div 
       style={{
        height: "75vh",
      }}
      animate={{
        translateY: "20px",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}>
      <Image h={"full"} w={"full"} objectFit={"contain"} src={btcp} />

        </motion.div>
       <motion.div>
       <Text
        textAlign={"center"}
        mt={"-19"}
        fontSize={"4xl"}
        color={"blue.400"}
        fontWeight={"bold"}
        fontFamily={['Bebas Neue',"sans-serif"]}
      >
        Aman Crypto App
      </Text>
       </motion.div>
       
       
    
    </Box>
  );
}

export default Home;
