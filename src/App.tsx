import { ChakraProvider } from "@chakra-ui/react";
import { TopPage } from "./pages/TopPage"

export const App = () => {
  return (
    <>
    <ChakraProvider>
      <TopPage />
    </ChakraProvider>
    </>
  );
}
