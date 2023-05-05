# Tokenizing Employee Rewards: A Blockchain-Based Incentives System
## UTD 4485 Senior Design Project, Sponsored by Toyota Financial Services

This project is presented by students: 

[Daniel Dogbey](https://github.com/ddmac1009) \
[Ryan Evans](https://github.com/JRyanEv) \
[Rithvik Kalidindi]() \
[Bennett Quigley](https://github.com/bquigley1) \
[Philip Wallis](https://github.com/tamong) 


## Abstract

The purpose of the project is to create a prototype ecosystem, using the Ethereum blockchain to create an ERC20 Token, "TFS Coin", that can be used by the Toyota Financial Services to reward employees. The student team used and created a MySQL database on Amazon Web Services (AWS), Relational Database Service (RDS), two Ethereum smart contracts tested on the Sepolia test network, a NodeJs / ExpressJS backend server, and a ReactJS frontend. The result is an interactive website that the TFS employee can utilize to earn and redeem "TFS Coin" without directly interacting with the blockchain. The website has login authorization methods implemented by JWT, and an interactive rewards store that a user can claim rewards from. The website also includes two methods of earning coins: a daily check-in, and a bug bounty system. The website also includes an admin page where authorized users can modify the rewards list and reward bug bounties.

#### Keywords
Blockchain, Ethereum, Fungible Token, MySQL, NodeJS, Express, React, AWS

#

#### This Repository is a Monorepo that contains the following: 

[backend](https://github.com/bquigley1/TFS/tree/main/backend) - An ExpressJS Server \
[contracts](https://github.com/bquigley1/TFS/tree/main/contracts) - Ethereum's ERC-20 Token \
[database](https://github.com/bquigley1/TFS/tree/main/database) - MySQL Database \
[frontend](https://github.com/bquigley1/TFS/tree/main/frontend) - A React Server \
[usecases](https://github.com/bquigley1/TFS/tree/main/usecases) - Use cases for the app



## Try it yourself
Live Demo of the website can be viewed [here](http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:4000/signup). \
To try the app yourself, Login with the following, or [create an account](http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:4000/signup):


<details>
  <summary>Sample User 1</summary>

  | Username | Password |
| :---  | :---   |
| sampleuser1 | my1password123 |
</details>

<details>
  <summary>Sample User 2</summary>

  | Username | Password |
| :---  | :---   |
| sampleuser2 | my2password123! |
</details>

<details>
  <summary>Sample Admin</summary>

  | Username | Password |
| :---  | :---   |
| sampleadmin | securePassword4485! |
</details>


