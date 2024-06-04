import { Button,ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';


import {theme} from './theme/Theme';
import { Router } from './router/Router';


function App() {

  const Seki=()=>{
    alert("責任者呼べ")
  };

  return (

    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Router/>
       <Button colorScheme="red" onClick={Seki}>関淳一ボタン</Button>
      </BrowserRouter>
    </ChakraProvider>


  )
}

export default App
