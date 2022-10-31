export interface CustomNetwork {
  substrateNodeUrl: string,
  ipfsNodeUrl: string
}

// Testnet configuration for the playground.
// This connects with SoonSocialX testnet.
// You get the free test tokens by using our Discord bot. 
// Check here: https://docs.subsocial.network/docs/develop/getting-started/testnet
export const Testnet: CustomNetwork = {
  substrateNodeUrl: 'wss://rco-para.subsocial.network',
  ipfsNodeUrl: 'https://crustwebsites.net'
}

// Mainnet configuration for the playground.
// This connects with SubSocial parachain.
// This is the default configuration
export const Mainnet: CustomNetwork = {
  substrateNodeUrl: 'wss://para.f3joule.space',
  ipfsNodeUrl: 'https://crustwebsites.net'
}

// Localnet configuration for the playground.
// This allows you to connect to a local node.
// You need to run the local nodes of subsocial, ipfs & offchain.
// Links to the repository: 
// Subsocial Node: https://github.com/dappforce/subsocial-node
// IPFS Node: https://ipfs.io/#install
export const Localnet: CustomNetwork = {
  substrateNodeUrl: 'http://127.0.0.1:9944',
  ipfsNodeUrl: 'http://127.0.0.1:8080'
}