# API DOCUMENTATION

#### Execute the server by: 
install the necessary packages: `npm i` \
install nodemon package (auto restart server on update): `npm i -g nodemon` \
start server: `node server.js` or `nodemon server.js` 

### API's below uses `/` endpoint
``` js
headers: { 
  "Content-Type": "application/json"
}
```

|  URL  | Method | Data Parameters | Action | Return |
| :--- | :---:  | :---   | :---         | :---  | 
| `/login`    | `POST`  | `{username: string, password: string}` | Login to the website   | `{UserInfo, Token}` |
| `/register` | `POST`  | `{username: string, password: string}` | Create a user account   | `{status}` |


### API's below uses `/api` endpoint
``` js
headers: { 
  "Content-Type": "application/json",
  "Authorization": `Bearer + ${token}`
}
```

### `/user`
|  URL  | Method | Body | Action |Return |
| :--- | :---:  | :---  | :---   | :---  | 
| `/user/approve`    | `POST`  | `{username: string}` | give admin access to blockchain wallet  | `{status}` |
| `/user/newwallet` | `POST`  |    | Generate an ETH wallet and approve   | `{status}` |
| `/user/:id/checkin` | `POST`  | `{id: number}`  | Reward user with coin and increase checkin counter  | `checkin_counter` |
| `/user/:id/checkin` | `GET`  | `{id: number}`  |    | `checkin_counter` |
| `/user/:id` | `GET`  | `{id: number}`   |    | `{userInfo}` |



### `/rewards`
|  URL  | Method | Body | Action | Return |
| :--- | :---:  | :---  | :---   | :---  | 
| `/rewards/`    | `GET`  | |    | `{allRewards}` |
| `/rewards/` | `POST`  | `{ title: string, coin_price: number, inventory: number, img_url: url, descriptions: [number] }`  |    | `{status}` |
| `/rewards/claim` | `POST`  | `{  ee_id: number, reward_id: number, desc_ids: [number] }`  | Claim reward on blockchain   | ee |
| `/rewards/claimed` | `GET`  |   |    | `{claimedRewards}` |
| `/rewards/:id/descriptions` | `GET`  | `{reward_id: number}`  |    | ee |
| `/rewards/:id/descriptions` | `POST`  | `{reward_id: number, desc_type: string, desc_value: number}`  |    | ee |
| `/rewards/:id` | `GET`  | `{id: number}`  |    | ee |


### `/balances`
|  URL  | Method | Body | Return |
| :--- | :---:  | :---            | :---  | 
| `/balances/user/:username`    | `GET`  | `{username: string}`   | `TFS Coin Balance` |
| `/balances/id/:id` | `GET`  | `{id: number}`     | `TFS Coin Balance` |
| `/balances/wallet/:wallet` | `GET`  | `{wallet: string}`    | `TFS Coin Balance` |


### `/transfer`
|  URL  | Method | Body | Action | Return |
| :--- | :---:  | :---            | :---  | :--- |
| `/transfer/usernames`   | `POST`  | `{from: string, to: string, amount: number}`| Transfer coin(s) to another user | `{status}` |



### `/bounty`
|  URL  | Method | Body | Action | Return |
| :--- | :---:  | :---   | :---   | :---  | 
| `/bounty/` | `GET` |  | | `{allBounties}` |
| `/bounty/create`   | `POST`  | `{id: number, title: string, desc: string}`   | create bounty on server | `{status}` |
| `/bounty/process`  | `POST`  | `{report_id: number, ee_id: number, processor_ee_id: number, reward_amount: number, notes: string}` | process the bounty and award user | `{status}` |
| `/bounty/:id`   | `GET`  | `{id: number}` | | `{bounty}` |
| `/bounty/:id`  | `DELETE`  | `{id: number}` | Delete bounty  | `{status}` |

### `/claims`
|  URL  | Method | Body | Return |
| :--- | :---:  | :---            | :---  | 
| `/claims/`    | `GET`  |     | `{reward_orders}`  |
