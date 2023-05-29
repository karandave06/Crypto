
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider} from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider>
   <App />
</ChakraProvider>


)

export const server = 'https://api.coingecko.com/api/v3'