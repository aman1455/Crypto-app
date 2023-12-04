import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
    return (
       <HStack p={'4'} bgColor={'blue.400'} shadow={'base'}>
        <Button color={"white"} variant={'unstyled'}>
            <Link to="/">Home</Link>
        </Button>
        <Button color={"white"} variant={'unstyled'}>
            <Link to="/exchange">Exchange</Link>
        </Button>
        <Button color={"white"} variant={'unstyled'}>
            <Link to="/coin">Coin</Link>
        </Button>
        
       </HStack>
    )
}

export default Header;