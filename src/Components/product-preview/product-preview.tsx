import { Box, Card, SimpleGrid, CardBody, Image, Stack, Heading, Text, CardFooter, Button, Center } from "@chakra-ui/react"
import { FC } from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import perfumePic from '../../assets/image-product-desktop.jpg'
export const ProductPreview: FC = () => {
    return (
        <>


            <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }}>
                <Center>

                    <Box p="8"
                        w={{ base: '98%', md: '80%', lg: '50%' }}
                        textAlign="start">

                        <Card
                            direction={{ base: 'column', sm: 'row', }}
                            overflow='hidden'
                            variant='outline'
                            rounded='2xl'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '220px' }}
                                src={perfumePic}
                            />
                            <Stack>
                                <CardBody  >
                                    <Text letterSpacing={6} display='flex' textTransform='uppercase' textColor='gray.500'>

                                        Perfume
                                    </Text>
                                    <Heading my={3} >
                                        <Text lineHeight={0.9} >
                                            Gabrielle Essence Eau De Parfum
                                        </Text>
                                    </Heading>
                                    <Box>
                                        <Text textColor='gray.500'>
                                            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                                        </Text>
                                    </Box>
                                </CardBody>

                                <CardFooter>
                                    <Box display='flex' alignItems='center' >
                                        <Text as='b' textColor='green' fontSize='4xl' mx={4} mt={-1}>
                                            $149.99
                                        </Text>
                                        <Text as='del' fontSize='lg'>
                                            $169.99
                                        </Text>
                                    </Box>

                                </CardFooter>
                                <Center>

                                    <Button p={7} leftIcon={<AiOutlineShoppingCart />} colorScheme='green' w='3xs' display='flex' justifyContent='center' mb={8}>Add to Cart</Button>
                                </Center>
                            </Stack>
                        </Card>
                    </Box>
                </Center>

            </SimpleGrid>
        </>
    )
}