import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './pages/main';


const root = createRoot(document.body);
root.render(
    <ChakraProvider>
        <MainPage />
    </ChakraProvider>
);