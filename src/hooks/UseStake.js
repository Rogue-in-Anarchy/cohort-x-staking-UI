import { ethers } from "ethers";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import contractAbi from "../constants/ABIs/contractAbi.json";

const useStake = (poolId, amount) => {
  console.log("looking for me? :", poolId, amount);
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    console.log(signer, readWriteProvider);
    console.log(
      import.meta.env.VITE_staking_contract_address,
      readWriteProvider
    );

    const stakingContract = new ethers.Contract(
      import.meta.env.VITE_staking_contract_address,
      contractAbi,
      signer
    );
    console.log("contracted");

    const value = ethers.parseUnits(String(amount), 18);


    try {
      console.log("trying to approve", poolId, value);
        const Stake = await stakingContract.stake(poolId.poolId, value);
        console.log("staked");

        const receipt = await Stake.wait();
        console.log("trying 3", receipt);

        if (receipt.status) {
          return console.log("Staked Successfully");
        }
    } catch (err) {
      console.log(err);
      return err;
    }
  }, [poolId, amount, chainId, walletProvider]);
};
export default useStake;
