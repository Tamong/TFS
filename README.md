# TFS
Toyota Financial Services CS 4485 Project
## Ehlo there

# TFS Coin Use Cases

## User End

### Employee Sign in
![alt text](https://github.com/bquigley1/TFS/blob/main/usecases/Employee_Sign_In_SD.png)

* Employee clicks on sign in
* Backend call to authentication api
* Return payload to frontend
* User connects to their wallet
* Display rewards page with transfer/claim

## Employee Purchases Reward
 ![alt text](https://github.com/bquigley1/TFS/blob/main/usecases/Employee_Purchases_Reward_SD.png)
 
* Employee signs in
* Employee connects wallet to rewards store
* Employee selects ‘view rewards’
* Reward/ Reward Quality table api request is sent to database (read)
* Rewards are presented to user on front-end
* Employee selects reward and any reward qualities
* Employee selects ‘purchase reward’
* ERC20 smart contract transaction request is sent to metamask
* Employee validates ERC20 transaction through metamask
* Transaction details saved in database

## Employee Transfers Token
![Transfer Token](https://github.com/bquigley1/TFS/blob/main/usecases/Employee_TransferToken.png)
* Employee signs in
* Employee connects wallet to rewards store
* Employee selects ‘Transfer Coins’
* Form will open for employee to enter the new wallet to transfer towards
* Once the wallet address is entered, validate the address (exists within database)
* Employee enters amount to be transferred
* Once the amount is entered, validate amount (balance exists within the wallet)
* Once both form entries are validated, enable ‘Submit’ Button
* ERC20 smart contract transaction request is sent to metamask
* Employee approves ERC20 transaction through metamask
* Refresh Page to update current balance

## Time Tracking (Daily Check-in)
![Transfer Token](https://github.com/bquigley1/TFS/blob/main/usecases/Employee_Daily_CheckIn_SD.png)
* Employee signs in
* Employee connects wallet to rewards store
* Employee clicks on ‘Check in’
* Update database on employee check in
* Add a coin to a stack?
* Upon update, check streak of the employee
* Based on streak (increments of 5?), add extra coin(s) to the stack
* Get coins from the stack
* ERC20 smart contract transaction request is sent to metamask
* Employee validates ERC20 transaction through metamask

## Employee Bug Bounty Report
![alt text](https://github.com/bquigley1/TFS/blob/main/usecases/Employee_Bug_Report_SD.png)
![alt text](https://github.com/bquigley1/TFS/blob/main/usecases/Admin_Validates_Bug_Report_SD.png)
* Employee signs in
* Employee navigates to bug bounty application
* Employee connects wallet to bug bounty application
* Employee selects ‘view active bug bounties’
* Database is called to retrieve active bug bounties
* Active bug bounties are displayed to front-end
* Employee selects a bug bounty 
* Employee selects ‘report/ claim bug bounty’
* Employee fills required fields related to the bug bounty
* ERC20 smart contract bug bounty claim request is sent to metamask
* Employee approves ERC20 claim through metamask
* The bug report is stored in the database
* Administrator approves bug bounty claim and initiates ERC20 reward transaction
* The coin reward is sent to the employee’s wallet address
* The bug bounty is set to inactive



## Admin End

### Admin Sign In
![Admin Sign In](https://github.com/bquigley1/TFS/blob/main/usecases/Admin_SignIn.png)

### Add Rewards
![Add Reward](https://github.com/bquigley1/TFS/blob/main/usecases/Admin_AddReward.png)
* Sign in to admin page
* Admin selects ‘Add Rewards’
* Form opens with Name, Description, Price, and Image fields
* Verify name does not contain duplicates
* Once filled out and validated, unlock ‘submit’ button
* Push to database

### Remove Rewards
![Remove Reward](https://github.com/bquigley1/TFS/blob/main/usecases/Admin_RemoveReward.png)
* Sign in to admin page
* Admin selects ‘View Rewards’
* Load the list of rewards from the database
* From the list of rewards, admin selects a specific reward
* Admin clicks on remove reward
* Popup validating the deletion, admin clicks remove again
* Once the second remove button is pressed, push to database

### Edit Rewards
![Edit Reward](https://github.com/bquigley1/TFS/blob/main/usecases/Admin_EditReward.png)
* Sign in to admin page
* Admin selects ‘View Rewards’
* Load the list of rewards from the database
* From the list of rewards, admin selects a specific reward
* Admin clicks on edit reward
* Form opens with Name, Description, Price, and Image fields
* Verify name does not contain duplicates
* Once filled out and validated, unlock ‘submit’ button
* Push to database


__Helpful Resources__
* Create develop branch
* protect main and develop branch

#### next steps:

* Develop diagrams for use cases

[Markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/)

[UML Knowledge](https://plantuml.com/)
