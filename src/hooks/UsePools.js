// import { ethers } from "ethers";
// import { useCallback, useState } from "react";
// import { isSupportedChain } from "../utils";
// import { getProvider } from "../constants/providers";
// import {
//   useWeb3ModalAccount,
//   useWeb3ModalProvider,
// } from "@web3modal/ethers/react";
// import contractAbi from "../constants/ABIs/contractAbi.json";

// const usePools = () => {
//   const [pools, setPools] = useState([]);
//   console.log("swimming in ", pools);
//   console.log("looking for me? :");
//   const { chainId } = useWeb3ModalAccount();
//   const { walletProvider } = useWeb3ModalProvider();

//   return useCallback(async () => {
//     if (!isSupportedChain(chainId)) return console.error("Wrong network");
//     const readWriteProvider = getProvider(walletProvider);
//     const signer = await readWriteProvider.getSigner();

//     console.log(signer, readWriteProvider);
//     console.log(
//       import.meta.env.VITE_staking_contract_address,
//       readWriteProvider
//     );

//     const stakingContract = new ethers.Contract(
//       import.meta.env.VITE_staking_contract_address,
//       contractAbi,
//       signer
//     );
//     console.log("contracted");

//     try {
//       console.log("trying to approve");

//       const createPool = await stakingContract.id();
//       console.log("staked");

//       const stakingIDs = [...Array.from({ length: Number(createPool) })].map(
//         (_, index) => index
//       );

//       const promises = stakingIDs.map(
//         async (x) => await stakingContract.getPoolByID(x)
//       );

//       const poolResponses = await Promise.all(promises);

//       const proxyPools = [];

//       for (let i = 0; i < poolResponses.length; i++) {
//         const pool = await poolResponses[i];
//         proxyPools.push({ ...pool });
//       }

//       return console.log(
//         "Pools gotten: ",
//         [proxyPools],
//         setPools([proxyPools])
//       );
//     } catch (err) {
//       console.log(err);
//       return err;
//     }
//   }, [chainId, walletProvider]);
// };
// export default usePools;
