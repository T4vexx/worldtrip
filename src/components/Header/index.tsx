import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

interface HeaderProps {
    continent: boolean;
    isWideVersion: boolean;
}

export function Header({ isWideVersion, continent }: HeaderProps) {

    return (
        <Flex w="100%" h={["12","16"]} justify="center" overflow="hidden"> 
           { continent && (<Link href="/"><Box><Icon mt={["18px","4"]} ml={["-120px","-700px"]} fontSize={["16px","28px"]} as={IoChevronBackOutline} /></Box></Link>)}

           { isWideVersion ? (
           <Box mt={["-6","1"]}>
                <Image src="/logo.svg" alt="logo" />
            </Box>
            ) : (
            <Box mt={["-6","1"]}>
                <Image src="/logo.svg" alt="logo" boxSize={['100px',""]} />
            </Box>
            )}
        </Flex>
    );
}