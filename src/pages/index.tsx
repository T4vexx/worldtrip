import { Box, Divider, Flex, Grid, GridItem, Icon, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IconItems } from "../components/IconItems";

import { BsFillCircleFill } from 'react-icons/bs'

import Styles from './home.module.scss'
import Link from "next/link";
import { SwiperItem } from "../components/swiperItem";

export default function Home() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const sizeWide = isWideVersion ? "1920px auto" : "auto 163px"

    return (   
        <>
            <Head>
                <title>WorldTrip | Home</title>
            </Head>

            <Flex direction="column" h="100%" w="100%">
                <Header isWideVersion={isWideVersion} continent={false} />

                <Box position="absolute" mt={["12","16"]} zIndex='0' w="100%" h="100%" 
                    bgImage="url(https://media.discordapp.net/attachments/593999593386278912/942963264676061194/Banner.png)"
                    bgRepeat="no-repeat"
                    bgSize={sizeWide}
                ></Box>

                <Flex w="100%" maxWidth={["375px","1733px"]} mx="auto" mt={["4",""]} px={["0","6"]} zIndex="1" direction="column" alignItems="center" >
                    <Stack gap="4" direction="row">
                        <Flex direction="column" w={["90vw","48vw"]} justify='center' textAlign="left">
                            <Text fontWeight="medium" fontSize={["20px","36px"]} color="gray.50">5 Continentes, infinitas possibilidades.</Text>
                            <Text fontWeight="regular" fontSize={["14px","20px"]} color="gray.300">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                        </Flex>

                       { isWideVersion && (<Box h="52vh">
                            <Image boxSize="xl"  src="/Airplane.svg" alt="airplane" />
                        </Box>)}
                    </Stack>

                   <Flex mt="12" justify="center" alignItems="center">

                        { isWideVersion ? <IconItems /> : (
                            <Grid
                                mt="9"
                                h='120px'
                                templateRows='repeat(3, 1fr)'
                                templateColumns='repeat(2, 1fr)'
                                gap={6}
                                justifyItems="center"
                            >
                            <GridItem ><Flex align="center"><Icon as={BsFillCircleFill} color="yellow.400" fontSize="10px" mr="1.5" /><Text fontWeight="medium" fontSize="18px">vida noturna</Text></Flex></GridItem>
                            <GridItem ><Flex align="center"><Icon as={BsFillCircleFill} color="yellow.400" fontSize="10px" mr="1.5" /><Text fontWeight="medium" fontSize="18px">praia</Text></Flex></GridItem>
                            <GridItem ><Flex align="center"><Icon as={BsFillCircleFill} color="yellow.400" fontSize="10px" mr="1.5" /><Text fontWeight="medium" fontSize="18px">moderno</Text></Flex></GridItem>
                            <GridItem ><Flex align="center"><Icon as={BsFillCircleFill} color="yellow.400" fontSize="10px" mr="1.5" /><Text fontWeight="medium" fontSize="18px">clássico</Text></Flex></GridItem>
                            <GridItem colSpan={2} rowSpan={3} ><Flex align="center"><Icon as={BsFillCircleFill} color="yellow.400" fontSize="10px"mr="1.5" /><Text fontWeight="medium" fontSize="18px">e mais...</Text></Flex></GridItem>
                          </Grid>
                        )}

                    </Flex>

                    <Box mt={["9","20"]}> 
                        <Divider h='0.2' orientation='horizontal' w="90px" bgColor="gray.600" />
                    </Box>

                    <Box mt={["6","14"]}>
                        <Text align="center" fontWeight="medium" fontSize={["20px","36px"]}>Vamos nessa?</Text>
                        <Text align="center" fontWeight="medium" fontSize={["20px","36px"]}>Então escolha seu continente</Text>
                    </Box>

                    
                    <Swiper
                        className={Styles.swiper}
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className={Styles.swiperSlide}>
                            <SwiperItem 
                                name="Europa" 
                                link="europa" 
                                url="https://images.unsplash.com/photo-1510997017461-3c4b81f07779?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                            >O continente mais antigo.
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide className={Styles.swiperSlide}>
                            <SwiperItem 
                                name="Ásia" 
                                link="asia" 
                                url="https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" 
                            >O continente mais exotico do mundo.
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide className={Styles.swiperSlide}>
                            <SwiperItem 
                                name="Àfrica" 
                                link="africa" 
                                url="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
                            >O continente muito naturalista.
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide className={Styles.swiperSlide}>
                            <SwiperItem 
                                name="America do Norte" 
                                link="america-do-norte" 
                                url="https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
                            >O continente onde os sonhos se tornar realidade.
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide className={Styles.swiperSlide}>
                            <SwiperItem 
                                name="America do Sul" 
                                link="america-do-sul" 
                                url="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80" 
                            >O continente da diversidade.
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide className={Styles.swiperSlide}>
                        <SwiperItem 
                                name="Oceania" 
                                link="oceania" 
                                url="https://images.unsplash.com/photo-1524820197278-540916411e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80" 
                            >O menor, porém mais interessante do mundo.
                            </SwiperItem>
                        </SwiperSlide>
                    </Swiper>
                    
                </Flex>
            </Flex>
        </>  
    );
}