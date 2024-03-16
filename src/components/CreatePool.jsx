import { Box, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";
import usePools from "../hooks/UsePools";

const CreatePool = () => {
  const [rate, setRate] = useState(0);
  const [poolId, setPoolId] = useState(0);

  console.log(rate);

  const handleCreatePool = useCreatePool(rate);

  const handleUsePool = usePools();

  return (
    <Card size="2" style={{ width: 500, height: 500 }} className="mt-5 mb-5">
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
              $ Create Pool
            </Text>
            <Text as="div" weight="bold">
              Stake
            </Text>
            <TextField.Input
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter Voter's Address"
            />
            <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              onClick={() => handleCreatePool()}
            >
              Create Pool
            </button>
            <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              onClick={() => handleUsePool(setPoolId())}
            >
              Get Pools
            </button>
            <Text as="div" weight="bold">
              Total Staked Monie
            </Text>
          </Flex>
          <Flex align="center">
            <div>
              <Text>You will receive</Text>
              <Text>APR</Text>
              <Text>{poolId}</Text>
            </div>
            <Text>NO. of Stakers</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default CreatePool;