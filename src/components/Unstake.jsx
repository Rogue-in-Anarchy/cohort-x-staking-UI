import {  Flex, Dialog, Button } from "@radix-ui/themes";
import useUnStake from "../hooks/UseUnStake";

const Unstake = (poolId) => {
  const handleUnStaking = useUnStake(poolId)

  return (
    <Dialog.Root>
    <Dialog.Trigger>
        <Button className="bg-blue-600 ml-3">UnStake</Button>
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Unstake Pool</Dialog.Title>
        <Dialog.Description size="2" mb="4">
            Unstake
        </Dialog.Description>

        <Flex direction="column" gap="3">
        </Flex>

        <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                <Button variant="soft" color="gray">
                    Cancel
                </Button>
            </Dialog.Close>
            <Button
                className="bg-blue-600"
                onClick={handleUnStaking}
            >
                UnStake
            </Button>
        </Flex>
    </Dialog.Content>
</Dialog.Root>

  );
};

export default Unstake;
