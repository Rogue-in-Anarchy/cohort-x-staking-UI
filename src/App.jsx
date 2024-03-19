import { Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import Header from "./components/Header";
import "@radix-ui/themes/styles.css";
import { Flex, Box, Text, Card } from "@radix-ui/themes";
import CreatePool from "./components/CreatePool";
import usePool from "./hooks/UsePool";
import Pools from "./components/Pool";

configureWeb3Modal();

function App() {
  const pool = usePool();
  console.log("pools", pool);
  return (
    <>
      <Container>
        <Header />
        <Flex gap="4" className="justify-between items-center">
          <Box>
            <CreatePool stakes={pool.length} />
          </Box>

          <Box gap="5">
            {/* <AppTabs Stake={<Stake />} Unstake={<Unstake />} /> */}
            <Box align="center" gap="8" wrap={"wrap"}>
              {pool.length === 0 ? (
                <Text>No Pools yet</Text>
              ) : (
                pool.map((x, index) => (
                  <Card key={index} style={{ width: 700 }}>
                    <Pools bet={x} index={index} />
                  </Card>
                ))
              )}
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default App;
