import { Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import Header from "./components/Header";
import Stake from "./components/Stake";
import AppTabs from "./components/AppTabs";
import Unstake from "./components/Unstake";
import Stats from "./components/Stats";
import Balance from "./components/Balance";
import "@radix-ui/themes/styles.css";
import { Flex, Box } from "@radix-ui/themes";

configureWeb3Modal();

function App() {
  return (
    <>
      <Container>
        <Header />
        <Flex gap="4">
          <Box>
            <Stats className="mt-5" />
            <Balance />
          </Box>

          <AppTabs Stake={<Stake />} Unstake={<Unstake />} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
