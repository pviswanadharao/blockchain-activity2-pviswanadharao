# CampusCredit Hardhat Starter

Local-first Hardhat project for deploying an ERC-20 (CampusCredit), running transactions, and analyzing receipts & events.

## Quick Start (Local Testing)

```bash
npm install
npx hardhat compile
# Terminal A
npx hardhat node
# Terminal B
npx hardhat run scripts/deploy.cjs --network localhost
npx hardhat run scripts/interact.cjs --network localhost
npx hardhat run scripts/analyze.cjs --network localhost

Blockchain Activity 2 - CampusCredit Token

This is my Activity 2 project where I used Hardhat to create and test an ERC-20 token called CampusCredit (CAMP).

Steps I did

Checked Node.js and npm versions

Created a workspace for the project

Installed Hardhat and other dependencies

Wrote the CampusCredit.sol ERC-20 contract with an initial supply of 1,000,000 CAMP

Compiled the contract successfully

Started a local Hardhat node (20 test accounts with ETH)

Deployed the CampusCredit contract and saw deployer got all tokens

Interacted with the contract (transfers and approvals)

Analyzed the transactions (gas fees, events, etc.)

Used Hardhat console to check balances and send tokens

Wrote minimal unit tests, both tests passed

Connected to professor’s Classnet using .env (RPC URL, Chain ID, Private Key)

Deployed on Classnet and verified balances

Imported CAMP token into MetaMask and sent 100 CAMP (transaction confirmed)

Committed the project and added screenshots to GitHub

Screenshots

All screenshots are in the screenshots/ folder:

Step1_NodeNpm.png

Step1_Workspace.png

Step2_HardhatVersion.png

Step2_InstallHardhat.png

Step3_Compile.png

Step4_HardhatNode.png

Step4_HardhatNode2.png

Step5_Deploy.png

Step6_Interact.png

Step6_Interact code change .png

Step7_Analyze1.png

Step7_Analyze2.png

Step7_Analyze code change .png

Step8_Console1.png

Step8_Console2.png

Step9_Tests.png

Step9_Tests code .png

MetaMask_CAMP_Balance.png

MetaMask_CAMP_Transfer.png

Result

The token was deployed and worked as expected. Transfers, approvals, and analysis all worked.
The unit tests passed. CAMP token was added in MetaMask, and transfer of 100 CAMP was confirmed.
Screenshots show the process step by step.
