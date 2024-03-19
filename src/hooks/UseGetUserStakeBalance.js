import { ethers } from "ethers";
import { useEffect, useState } from "react";
("../utils");
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import contractAbi from "../constants/ABIs/contractAbi.json";

const useGetUserStakeBalance = (poolId) => {
  console.log("looking for me? :", poolId);
  const { address } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [balance, setBalance] = useState(0);

  useEffect(() => async () => {
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

    try {
      console.log("trying to approve", poolId, address);
      const userStakeBalance = await stakingContract.getUserStakeBalance(
        poolId,
        address
      );

      setBalance(Number(userStakeBalance));
      console.log("Got User Staked Balanced Successfully");
    } catch (err) {
      console.log(err);
      return err;
    }
  });
  return balance;
};
export default useGetUserStakeBalance;
