import { ethers } from "ethers";
import multicallAbi from "../constants/ABIs/multicall.json";
import contractAbi from "../constants/ABIs/contractAbi.json";

import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { readOnlyProvider } from "../constants/providers";
import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const usePool = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      if (!isSupportedChain(chainId)) return console.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const stakingContract = new ethers.Contract(
        import.meta.env.VITE_staking_contract_address,
        contractAbi,
        signer
      );
      const createPool = await stakingContract.id();

      const poolIDs = () =>
        [...Array.from({ length: Number(createPool) })].map(
          (_, index) => index
        );

      const itf = new ethers.Interface(contractAbi);

      const calls = poolIDs().map((x) => ({
        target: import.meta.env.VITE_staking_contract_address,
        callData: itf.encodeFunctionData("getPoolByID", [x]),
      }));

      const multicall = new ethers.Contract(
        import.meta.env.VITE_multicall_address,
        multicallAbi,
        readOnlyProvider
      );

      const callResults = await multicall.tryAggregate.staticCall(false, calls);

      const validResponsesIndex = [];
      const validResponses = callResults.filter((x, i) => {
        if (x[0] === true) {
          validResponsesIndex.push(i);
          return true;
        }
        return false;
      });

      const decodedResponses = validResponses.map((x) =>
        itf.decodeFunctionResult("getPoolByID", x[1])
      );

      const ownedPoolIds = [];
      const unproxiedOwnedPoolIds = [];

      decodedResponses.forEach((x) => {
        ownedPoolIds.push(...x);
      });

      ownedPoolIds.forEach((x) => {
        unproxiedOwnedPoolIds.push({ ...x });
      });

      setData(unproxiedOwnedPoolIds);
    })();
  }, [address, chainId, walletProvider]);

  return data;
};

export default usePool;
