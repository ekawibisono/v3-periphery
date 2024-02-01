import { abi as POOL_ABI } from '@ekawibisono/v3-core/artifacts/contracts/ONLYV3Pool.sol/ONLYV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { IONLYV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IONLYV3Pool {
  return new Contract(address, POOL_ABI, wallet) as IONLYV3Pool
}
