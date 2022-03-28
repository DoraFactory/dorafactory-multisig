## Background
As multisig wallets are more and more adopted in blockchain systems, we want to find an easy to use multisig product to support our chain. After serveral rounds of
study, we find that there are to0 few options. In order to promote multisig ecosystem, we decided to apply a grant to develop an open source multisig product.
At first, we plan to develop a multisig pallet and a frontend MVP to demonstrate our desgin. Luckily, our grant reviewer told us that there's alreay a multisig
pallet developed by partiy. So we just need to focus on the frontend part.

## Introduction
To be honest, we do not spend enough time to study the mechanism of the multisig pallet. During the product design, we focus more on the user experience. Thus,
we encountered some blockers during the development. Some of them are due to the lack of multisig pallet support. As we're more familiar with Vue 
than React, we choose Vue3 to develop the product. Vue3 is helpful for us to build the product faster, but also it helps to promote polkadot api adoption
in Vue community.

## Product desgin
We referred some famous multisig products before we desgin. Also during the discussion with Polkadot web3 team, we adjust some of our desgin. The final version
is [here](https://www.figma.com/file/NBavL709zClLkDMAqP1maR/Substrate-Multisig-Frontend-MVP). The product consists of 4 major functions.  
- Create wallet by organization, it displayed in the `Create new multisig wallet` part. User MUST select which chain will he use to create a wallet, after that
we'll ask user to connect polkadot wallet to connect an existing account. Then, he can add other memebers as he wish, we use a plain input here is to make sure
user can paste his accounts from anywhere, which is more flexible.
- Multi-asset management, this function is desgined for parachains which host many kinds of currency, we'll query the local currency first and then query all balance
of other currency.
- Initiate a transaction in a wallet, sign a transaction, confirm a transaction, just like the `transaction` menu on the left, it'll query transactions waiting for owner's 
approval
- Switch wallet, manage multiple multisig account at the same time, just like it displayed, it allows user to switch to other wallets created by same owner.

## Conlusion
Although our design desribes an easy-to-use flow for a multisig wallet, our MVP can not implement all of them. They're listed here  
1. Current pallet will delete executed multisig calls, so the completed tab in `transactions` can not retrieve data from chain
2. Only multisig call intiator can cancel/reject, so reject option is NOT available in pending tab
3. Some other small issues are listed in `Known issues` part of our project README
