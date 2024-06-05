import {FC, memo, useCallback} from 'react'
import { Box,Flex,Heading,Link,  useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { MenueIconButton } from '../../atoms/buttons/MenueIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'
export const Header:FC = memo(()=>{
    const {isOpen,onClose,onOpen} = useDisclosure()

    const navigate = useNavigate();

    const onclickHome =  useCallback(()=> navigate("/home"),[])

    const onclickUserManagement = useCallback(()=>navigate("/home/user_management"),[])

    const onclickSetting = useCallback(()=>navigate("/home/setting"),[])



    return(
        <>
           <Flex as="nav"
                 bg = "teal.500"
                 color="gray.50"
                 align="center"
                 justify="space-between"
                 padding={{base:3,md:5}}
                 >


            <Flex align="center"  as ="a" mr={8} _hover={{cursor:"pointer"}} onClick={onclickHome}>
              <Heading as="h1"  fontSize={{base:"md",md:"lg"}}>
                  ユーザー管理アプリ
              </Heading>
            </Flex>

            <Flex
            align='center'
            fontSize="sm"
            flexGrow = {2}
            display={{base:"none",md:"flex"}}
            >


                <Box pr={4}>
                  <Link  onClick={onclickUserManagement}>ユーザー一覧</Link>
                </Box>

                <Link   onClick={onclickSetting}>設定</Link>
            </Flex>


            <MenueIconButton onOpen={onOpen}/>




           </Flex>

           <MenuDrawer

             isOpen={isOpen}
             onClose={onClose}
             onclickHome ={onclickHome}
             onclickUserManagement ={onclickUserManagement}
             onclickSetting ={onclickSetting}

             />



        </>
    )
})

