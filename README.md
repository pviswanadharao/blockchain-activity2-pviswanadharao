# CampusCredit Hardhat Starter

Local-first Hardhat project for deploying an ERC-20 (CampusCredit), running transactions, and analyzing receipts & events.

## Quick Start

```bash
npm install
npx hardhat compile
# Terminal A
npx hardhat node
# Terminal B
npx hardhat run scripts/deploy.js --network localhost
npx hardhat run scripts/interact.js --network localhost
npx hardhat run scripts/analyze.js --network localhost
```

See `contracts/`, `scripts/`, and `test/` for examples.

---

# Blockchain Activity 2 - CampusCredit Token

This is my Activity 2 project where I used Hardhat to create and test an ERC-20 token called CampusCredit (CAMP).

## Steps I did

1. Checked Node.js and npm versions
2. Created a workspace for the project
3. Installed Hardhat and other dependencies
4. Wrote the CampusCredit.sol ERC-20 contract with an initial supply of 1,000,000 CAMP
5. Compiled the contract successfully
6. Started a local Hardhat node (20 test accounts with ETH)
7. Deployed the CampusCredit contract and saw deployer got all tokens
8. Interacted with the contract (transfers and approvals)
9. Analyzed the transactions (gas fees, events, etc.)
10. Optional: used Hardhat console to check balances and send tokens
11. Optional: wrote unit tests, both tests passed
12. Committed the project and added screenshots to GitHub

## Screenshots

All screenshots are in the `screenshots/` folder:
- Step1_NodeNpm.png
- Step1_Workspace.png
- Step2_HardhatVersion.png
- Step2_InstallHardhat.png
- Step3_Compile.png
- Step4_HardhatNode.png
- Step4_HardhatNode2.png
- Step5_Deploy.png
- Step6_Interact.png
- Step6_Interact code change .png
- Step7_Analyze1.png
- Step7_Analyze2.png
- Step7_Analyze code change .png
- Step8_Console1.png
- Step8_Console2.png
- Step9_Tests.png
- Step9_Tests code .png

## Result

The token was deployed and worked as expected. Transfers, approvals, and analysis all worked. The unit tests passed. Screenshots show the process step by step.
