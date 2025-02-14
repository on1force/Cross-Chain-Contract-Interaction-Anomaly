import { JsonRpcProvider, Wallet, Contract } from 'ethers';
import { contract_abi } from './abi';

const BSC_RPC = "https://binance.llamarpc.com";
const UNICHAIN_RPC = "https://unichain-rpc.publicnode.com";
const pk = ""; // Private key of the wallet for testing

const bsc_contract_target = "0x3985581a5634F401B1afafe45e4F7d7FcC8123Ca"; // Assumed to be deployed on BSC
const unichain_contract_target = "0x3985581a5634F401B1afafe45e4F7d7FcC8123Ca"; // Valid deployment on Unichain

const bsc_provider = new JsonRpcProvider(BSC_RPC);
const unichain_provider = new JsonRpcProvider(UNICHAIN_RPC);

const wallet_bsc = new Wallet(pk, bsc_provider);
const wallet_unichain = new Wallet(pk, unichain_provider);

const bsc_contract = new Contract(bsc_contract_target, contract_abi, bsc_provider);
const unichain_contract = new Contract(unichain_contract_target, contract_abi, unichain_provider);

/**
 * Check if contract code is exists
 * on both chains
 *
 * RETURNS
 * BSC: 0x
 * UNICHAIN: Valid contract bytecode
 */
// const bsc_code = await bsc_provider.getCode(bsc_contract_target).catch((error) => {
//     console.log(error);
//     return null;
// });
// const unichain_code = await unichain_provider.getCode(unichain_contract_target).catch((error) => {
//     console.log(error);
//     return null;
// });

// console.log(`BSC: ${bsc_code}`);
// console.log(`UNICHAIN: ${unichain_code}`);

/**
 * Validating response from contract
 * with direct call to contract using
 * wallet as the contract runner with method contract.whitelist()
 *
 * RETURNS
 * BSC: Error: could not decode result data (value="0x", info={ "method": "whitelist", "signature": "whitelist(address)" }, code=BAD_DATA,
 * UNICHAIN: True
 */

// const wl_bsc = await bsc_contract.whitelist(wallet.address)
//     .catch((error) => {
//         console.log(error);
//         return null;
//     });
// const wl_unichain = await unichain_contract.whitelist(wallet.address)
//     .catch((error) => {
//         console.log(error);
//         return null;
//     });

// console.log(`BSC: ${wl_bsc}`);
// console.log(`UNICHAIN: ${wl_unichain}`);

/**
 * Validating response from contract
 * with direct call to contract using
 * wallet as the contract runner with method contract.whitelist.staticCall()
 *
 * RETURNS
 * BSC: Error: could not decode result data (value="0x", info={ "method": "whitelist", "signature": "whitelist(address)" }, code=BAD_DATA,
 * UNICHAIN: True
 */
// const wl_bsc = await bsc_contract.whitelist.staticCall(wallet.address)
//     .catch((error) => {
//         console.log(error);
//         return null;
//     });
// const wl_unichain = await unichain_contract.whitelist.staticCall(wallet.address)
//     .catch((error) => {
//         console.log(error);
//         return null;
//     });

// console.log(`BSC: ${wl_bsc}`);
// console.log(`UNICHAIN: ${wl_unichain}`);

/**
 * Validating response from contract
 * with wallet.call()
 *
 * Returns
 * BSC: 0x
 * UNICHAIN: 0x0000000000000000000000000000000000000000000000000000000000000001 (boolean: true)
 */
// const wl_bsc_data = bsc_contract.interface.encodeFunctionData("whitelist", [wallet_bsc.address]);
// const wl_unichain_data = unichain_contract.interface.encodeFunctionData("whitelist", [wallet_unichain.address]);

// const wl_bsc = await wallet_bsc.call({
//     to: bsc_contract_target,
//     data: wl_bsc_data
// });

// const wl_unichain = await wallet_unichain.call({
//     to: unichain_contract_target,
//     data: wl_unichain_data
// });

// console.log(`BSC: ${wl_bsc}`);
// console.log(`UNICHAIN: ${wl_unichain}`);

// /**
//  * Validating response from contract
//  * with wallet.sendTransaction()
//  *
//  * RETURNS
//  * BSC:
//  * error: could not coalesce error
//  * (error={ "code": -32603, "message": "failed to send tx" },
//  * payload={ "id": 10, "jsonrpc": "2.0", "method": "eth_sendRawTransaction", "params": [ "0xf88849843b9aca0082545e943985581a5634f401b1afafe45e4f7d7fcc8123ca80a49b19251a000000000000000000000000f782585c32b9fcec9d5665165d918479741f70e48194a06dda98cfd84886b3b71c315d13428fda0bb3359ba1bb9a3c0b0ee0af0d730611a02d9a376a24601ff9bbf43da0ab20e834f534605f84f44c8379814adcfc3280ae" ] },
//  * Yet successfull on chain transaction with hash : https://bsctrace.com/tx/0x6a99fca21b6f425a04cd7441efbe4f9f1e0da00b4f7d81dd96e8efa8414fded5
//  *
//  * UNICHAIN: return with expected hash
//  */
// const wl_bsc_data = bsc_contract.interface.encodeFunctionData("whitelist", [wallet_bsc.address]);
// const wl_unichain_data = unichain_contract.interface.encodeFunctionData("whitelist", [wallet_unichain.address]);

// const wl_bsc = await wallet_bsc.sendTransaction({
//     to: bsc_contract_target,
//     data: wl_bsc_data,
//     value: 0n
// }).catch((error) => {
//     console.log(error);
//     return null;
// });

// const wl_unichain = await wallet_unichain.sendTransaction({
//     to: unichain_contract_target,
//     data: wl_unichain_data,
//     value: 0n
// }).catch((error) => {
//     console.log(error);
//     return null;
// });

// console.log(`BSC: ${wl_bsc?.hash}`);
// console.log(`UNICHAIN: ${wl_unichain?.hash}`);
