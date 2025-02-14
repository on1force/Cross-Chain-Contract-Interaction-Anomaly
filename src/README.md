## **BSC Contract Interaction Anomaly: Security Disclosure**

### **Overview**  
This report highlights an anomaly in **Binance Smart Chain (BSC)** where transactions to **non-existent contracts** are **successfully mined**, which deviates from standard Ethereum Virtual Machine (**EVM**) behavior. The issue was identified through a comparative test between BSC and **Unichain**, an EVM-compatible blockchain that enforces correct execution rules.

### **Test Methodology**  
A script was executed to analyze contract interactions on both **BSC and Unichain** by performing the following operations:
1. **Checking contract existence** using `getCode(contractAddress)`.  
2. **Performing a static contract call** (`staticCall()`) to verify function execution.  
3. **Sending an actual transaction** (`sendTransaction()`) to observe how each network processes interactions.

### **Findings**  
#### ✅ **Unichain (Expected EVM Behavior)**  
- **`getCode()`** correctly returns the deployed contract’s bytecode.  
- **`staticCall()`** returns a valid boolean (`true` or `false`).  
- **`sendTransaction()`** fails when interacting with a non-existent contract or invalid transaction handling, as expected.

#### ❌ **BSC (Anomalous Behavior)**  
- **`getCode()` returns `0x`**, indicating the contract does not exist.  
- **`staticCall()` fails, which is expected.**  
- **`sendTransaction()` unexpectedly succeeds and gets mined**, despite the contract being non-existent.

### **Security Implications**  
- **Cross-chain bridge vulnerabilities**: Bridges may incorrectly assume contract calls are valid if transactions succeed, leading to potential **fund extraction exploits**.
- **Gas refund manipulation**: If transactions to non-existent contracts can be executed, attackers could exploit undefined behavior in gas calculations.
- **DeFi protocol risks**: Smart contracts that rely on successful transactions as proof of execution could be vulnerable to manipulation.

### **Recommended Actions**  
- **BSC developers should enforce standard EVM behavior** by ensuring transactions **revert** when interacting with non-existent contracts.
- **Developers on BSC should validate contract existence** using `extcodesize()` or `getCode()` before executing transactions.
- **Cross-chain protocols should avoid relying solely on transaction success** as proof of contract execution, using cryptographic verification methods instead.

### **Next Steps**  
We encourage the **BSC developer community and security researchers** to investigate this issue further and implement appropriate mitigations. Responsible disclosure has been made to ensure the safety and integrity of the BSC ecosystem.

---

📌 **If you are a blockchain security researcher or developer and have encountered similar issues, please contribute to this discussion or report findings.**
