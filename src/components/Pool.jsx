import { Avatar, Box, Flex, Text, Button } from "@radix-ui/themes";
import Stake from "./Stake";
import Unstake from "./Unstake";
import useGetUserStakeBalance from "../hooks/UseGetUserStakeBalance";

const Pools = (bets) => {
  const handleBalance = useGetUserStakeBalance(bets.index);
  console.log("Balance!! ", handleBalance);
  return (
    <Flex gap="3" align="center">
      <Avatar size="3" radius="full" fallback={bets.index + 1} />
      <Box>
        <Text as="div" size="2" weight="bold">
          Pool {Number(bets.index + 1)}
        </Text>
        <Text as="div" size="2" color="gray">
          Amount Staked: {Number(bets.bet[1])}
        </Text>

        <Text as="div" size="2" color="gray">
          Time Elapsed: {Number(bets.bet[3])}
        </Text>
        <Flex>
          {handleBalance === 0 ? (
            <Stake poolId={bets.index} />
          ) : (
            <Unstake poolId={bets.index} />
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Pools;
