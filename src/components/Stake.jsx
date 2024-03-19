import { Flex, Text, TextField, Dialog, Button } from "@radix-ui/themes";
import { useState } from "react";
import useStake from "../hooks/UseStake";

const Stake = (poolId) => {
  const [amount, setAmount] = useState(0);
  const handleStaking = useStake( poolId,amount)

  return (
    <Dialog.Root>
    <Dialog.Trigger>
        <Button className="bg-blue-600">Stake</Button>
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Stake Pool</Dialog.Title>
        <Dialog.Description size="2" mb="4">
            Stake an Amount
        </Dialog.Description>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Staking Amount
                </Text>
                <TextField.Input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter Staking Amount"
                />
            </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                <Button variant="soft" color="gray">
                    Cancel
                </Button>
            </Dialog.Close>
            <Button
                className="bg-blue-600"
                onClick={handleStaking}
            >
                Stake
            </Button>
        </Flex>
    </Dialog.Content>
</Dialog.Root>

    // <Card size="2" style={{ width: 500, height: 500 }}>
    //   <Flex gap="" align="center">
    //     <Box width={"100%"}>
    //       <Flex justify={"between"} align={"center"}>
    //         <Text as="div" weight="bold">
    //           Stake
    //         </Text>
    //         <TextField.Input
    //           value={amount}
    //           onChange={(e) => setAmount(e.target.value)}
    //           placeholder="Enter Voter's Address"
    //         />
    //         <button
    //           className="text-white bg-blue-600 py-1 px-4 rounded-md"
    //           // onClick={() => handleVote(id)}
    //         >
    //           Approve
    //         </button>
    //       </Flex>
    //       <Flex align="center">
    //         <Text>You will receive</Text>
    //         <Text>MONIE</Text>
    //       </Flex>
    //       <Flex align="center">
    //         <Text>Staking APR</Text>
    //         <Text>0.5% Daily</Text>
    //       </Flex>
    //     </Box>
    //   </Flex>
    // </Card>
  );
};

export default Stake;
