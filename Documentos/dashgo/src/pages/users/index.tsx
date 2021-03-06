import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Th, Thead, Tr, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
    return (
        <Box>

            <Header />
            <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex marginBottom='8' justify='space-between' alignItems='center'>
                        <Heading size='lg' fontWeight='normal' > Usuários </Heading> 

                        <Button 
                        as='a' 
                        size='sm' 
                        fontSize='sm' 
                        colorScheme='pink'
                        leftIcon={<Icon as={RiAddLine} fontSize='20'/>}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink'/>
                                </Th>   
                                <Th> Usuário </Th>
                                <Th> Data de cadastro </Th>
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr px='6'>
                                <Td>
                                    <Checkbox colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'> Nayara Helen </Text> 
                                        <Text fontSize='sm' color='gray.300'> nayHelenSilva2@gmail.com </Text> 
                                    </Box>
                                </Td>
                                <Td>
                                    06 de Junho, 2022
                                </Td>
                                <Td>
                                    <Button 
                                    as='a' 
                                    size='sm' 
                                    fontSize='sm' 
                                    colorScheme='purple'
                                    opacity='0.7'
                                    leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr px='6'>
                                <Td>
                                    <Checkbox colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'> Jon Doe </Text> 
                                        <Text fontSize='sm' color='gray.300'> Doe.Jhon@gmail.com </Text> 
                                    </Box>
                                </Td>
                                <Td>
                                    06 de Junho, 2022
                                </Td>
                                <Td>
                                    <Button 
                                    as='a' 
                                    size='sm' 
                                    fontSize='sm' 
                                    colorScheme='purple'
                                    opacity='0.7'
                                    leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr px='6'>
                                <Td>
                                    <Checkbox colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'> Unknown People </Text> 
                                        <Text fontSize='sm' color='gray.300'> discoverySomeone@gmail.com </Text> 
                                    </Box>
                                </Td>
                                <Td>
                                    06 de Junho, 2022
                                </Td>
                                <Td>
                                    <Button 
                                    as='a' 
                                    size='sm' 
                                    fontSize='sm' 
                                    colorScheme='purple'
                                    opacity='0.7'
                                    leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>

        </Box>
    )
}
