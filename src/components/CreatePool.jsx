import { Box, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";
import usePool from "../hooks/UsePool";

const CreatePool = (stakes) => {
  const [rate, setRate] = useState(0);
  const [poolId, setPoolId] = useState(0);

  const handleCreatePool = useCreatePool(rate);

  const handleUsePool = usePool();

  return (
    <Card size="2" style={{ width: 400 }} className="mt-5 mb-5">
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Text as="div" weight="bold" gap="5">
            $ Create Pool
          </Text>
          <Flex justify={"between"} align={"center"}>
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
          </Flex>
          <button
            className="text-white bg-blue-600 py-1 px-4 rounded-md mt-5"
            onClick={() => handleUsePool(setPoolId())}
          >
            Get Pools
          </button>
          <Text as="div" weight="bold" className="mt-5">
            Total Staked Monie
          </Text>
          <Flex align="center" className="mt-5" gap="5">
            <div>
              <Text>You will receive</Text>
              <Text>APR</Text>
              <Text>{poolId}</Text>
            </div>
            <Text>NO. of Stakes</Text>
            <Text>{stakes.stakes}</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default CreatePool;
