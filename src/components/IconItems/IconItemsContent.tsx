import { Text, Flex, Icon } from "@chakra-ui/react";
import { ElementType } from "react";

interface IconItemsContentProps {
    icon: ElementType;
    children: string;
}

export function IconItemsContent({icon, children, ...rest}: IconItemsContentProps) {
    return (
        <Flex direction="column" justify="center" align="center" {...rest}>
            <Icon as={icon} fontSize="8xl" color="yellow.400"/>
            <Text fontWeight="bold" fontSize="24px">{children}</Text>
        </Flex>
    );
}