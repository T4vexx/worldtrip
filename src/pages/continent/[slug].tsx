import { Box, Flex, Grid, GridItem, Icon, Image, SimpleGrid, Stack, Text, Tooltip, useBreakpointValue  } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from "next/head";
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface ContinentDataProps {
    id: number;
    title: string;
    name:  string;
    description: string; 
    countries:  string;
    lenguages:  string;
    cities:  string;
    banner_url: string;
}

interface citiesDataProps {
    id: number;
    name:  string;
    country: string;
    img_url: string;
    flag_url: string;
}

interface ContinentDataRawProps {
    cities: {
        id: number;
        name:  string;
        country: string;
        img_url: string;
        flag_url: string;
    }[],
    continentData: { 
        id: number;
        title: string;
        name:  string;
        description: string; 
        countries:  string;
        lenguages:  string;
        cities:  string;
        banner_url: string;
    }
}


export default function Continent({ continentData, cities }: ContinentDataRawProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const mountUrl = `url(${continentData.banner_url})`
    const sizeWide = isWideVersion ? "1920px auto" : "auto 163px"

    return (
        <>
            <Head>
                <title>worldtrip | {continentData.name}</title>
            </Head>

            <Header isWideVersion={isWideVersion} continent={true} />
            { isWideVersion ? (<Box>
                <Image src={continentData.banner_url} alt="banner" />
            </Box>) 
            : (<Box position="absolute" zIndex='0' w="100%" h="100%" 
                    bgImage={mountUrl}
                    bgRepeat="no-repeat"
                    bgSize={sizeWide}
                ></Box>)
                }

            <Flex w="100%" maxWidth={["375px","1733px"]} mx="auto" mt={["10vh","-10vh"]} px={["4","6"]} zIndex="999" direction="column" >
                <Box textAlign={["center","left"]} zIndex="2"><Text fontSize={["28px","48px"]} fontWeight="bold" color="white">{continentData.name}</Text></Box>
                <Flex w="100%" mt="16" direction={["column","row"]}>
                    <Box w={["100%","50%"]} textAlign={["left"]}>
                        <Text fontSize={["14px","24px"]} color="gray.500">{continentData.description}</Text>
                    </Box>
                    <Stack direction="row" gap={["14","16"]} ml={["","48"]} mt={["6",""]}>
                        <Flex direction="column" justify="center" align={["left","center"]} >
                            <Text fontWeight="bold" color="yellow.400" fontSize={["24px","64px"]}>{continentData.countries}</Text>
                            <Text fontWeight="bold" color="gray.700" fontSize={["14px","32px"]}>países</Text>
                        </Flex>
                        <Flex direction="column" justify="center" align={["left","center"]} >
                            <Text fontWeight="bold" color="yellow.400" fontSize={["24px","64px"]}>{continentData.lenguages}</Text>
                            <Text fontWeight="bold" color="gray.700" fontSize={["14px","32px"]}>línguas</Text>
                        </Flex>
                        <Flex direction="column" justify="center" align={["left","center"]} >
                            <Text fontWeight="bold" color="yellow.400" fontSize={["24px","64px"]}>{continentData.cities}</Text>
                            <Text fontWeight="bold" color="gray.700" fontSize={["14px","32px"]}>cidades +100<Tooltip label='As cidades +100' bg='gray.300' color='black' ><span><Icon as={AiOutlineInfoCircle} fontSize={["10px","16px"]}/></span></Tooltip></Text>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex direction="column" mt={["8","16"]}> 
                    <Text fontWeight="medium" fontSize={["24px","36px"]} color="gray.700">Cidades +100</Text>
                    <Flex mt="16" mb="10" direction="row" >
                        <SimpleGrid columns={[1,6]} spacing={12}>
                            {cities.map(post => (
                                <Box w="60" h="72" ml={["10",""]} borderRadius="4px" overflow="hidden" key={post.name}>
                                    <Flex h="65%" width="100%">
                                        <Image boxSize='100%' src={post.img_url} alt={post.name} objectFit='cover' />
                                    </Flex>

                                    <Flex 
                                        h="35%" 
                                        width="100%" 
                                        borderBottomWidth="1px" 
                                        borderBottomColor="yellow.300" 
                                        borderLeftWidth="1px" 
                                        borderLeftColor="yellow.300" 
                                        borderRightWidth="1px" 
                                        borderRightColor="yellow.300" 
                                    >
                                        <Grid
                                            templateRows='repeat(2, 1fr)'
                                            templateColumns='repeat(5, 1fr)'
                                            h="100%"
                                            mt="6"
                                            ml="2"
                                        >
                                            <GridItem rowSpan={1} colSpan={4} >
                                                <Text fontWeight="bold" fontSize="20px" color="gray.700">{post.name}</Text>
                                                <Text fontWeight="medium" fontSize="16px" color="gray.400">{post.country}</Text>
                                            </GridItem>
                                            
                                            <GridItem rowSpan={2} colSpan={1}>
                                                <Box borderRadius="50%" bg="gray.500" w="10" h="10" overflow="hidden">
                                                    <Image  src={post.flag_url} alt={post.country} objectFit='cover' boxSize='100%'/>
                                                </Box>
                                            </GridItem>
                                        </Grid> 
                                    </Flex> 
                                </Box>
                            ))} 
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;

    const response = await api.get<ContinentDataProps>(`/continents?title=${slug}`)
    const continentData = response.data[0]

    const citiesResponse = await api.get<citiesDataProps[]>(`/${slug}`)
    const cities = citiesResponse.data
    return {
      props: {
        continentData,
        cities,
      },
      revalidate: 60*30, // 24 horas
    }
  };