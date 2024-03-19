import { ethers } from "ethers";
import Abi from "../constants/ABIs/contractAbi.json";

export const getStakingContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_staking_contract_address,
    Abi,
    providerOrSigner
  );
