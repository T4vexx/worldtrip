import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

interface SwiperItemProps {
    link: string;
    url: string;
    name: string;
    children: string;
}

export function SwiperItem({ link, url, name, children}: SwiperItemProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const mountedlink = `/continent/${link}`
    const mountedurl = `url(${url})`
    if (isWideVersion) {
        return (
            <Link href={mountedlink}>
                <Box w="100%" h="100%" 
                    bgImage={mountedurl}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="1733px auto"
                >
                    <Stack direction="column" gap="1" mt={["36","24"]}>
                    <Text fontSize={["24px","48px"]} fontWeight="bold" color="white">{name}</Text>
                    <Text fontSize={["14px","24px"]} fontWeight="bold" color="white">{children}</Text>
                    </Stack>
                </Box>
            </Link>
        );
    } else {
        return (
            <Link href={mountedlink}>
                <Box w="100%" h="100%" 
                    bgImage={mountedurl}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="375px auto"
                >
                    <Stack direction="column" gap="1" mt={["36","24"]}>
                    <Text fontSize={["24px","48px"]} fontWeight="bold" color="white">{name}</Text>
                    <Text fontSize={["14px","24px"]} fontWeight="bold" color="white">{children}</Text>
                    </Stack>
                </Box>
            </Link>
        );
    }
}