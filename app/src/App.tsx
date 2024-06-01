import { Button,ChakraProvider } from '@chakra-ui/react'

import {theme} from './theme/Theme';


function App() {

  return (

    <ChakraProvider theme={theme}>
       <Button colorScheme="red">関淳一ボタン</Button>
    </ChakraProvider>


  )
}

export default App
