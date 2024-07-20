# Introduction
## Why Wagmi

### The Problems

Building Ethereum applications is hard. Apps need to support connecting wallets, multiple chains, signing messages and data, sending transactions, listening for events and state changes, refreshing stale blockchain data, and much more. This is all on top of solving for app-specific use-cases and providing polished user experiences.

The ecosystem is also continuously evolving, meaning you need to adapt to new improvements or get left behind. App developers should not need to worry about connecting tens of different wallets, the intricacies of multi-chain support, typos accidentally sending an order of magnitude more ETH or calling a misspelled contract function, or accidentally spamming their RPC provider, costing thousands in compute units.

Wagmi solves all these problems and more — allowing app developers to focus on building high-quality and performant experiences for Ethereum — by focusing on **developer experience**, **performance**, **feature coverage**, and **stability.**

### Developer Experience

Wagmi delivers a great developer experience through modular and composable APIs, automatic type safety and inference, and comprehensive documentation.

It provides developers with intuitive building blocks to build their Ethereum apps. While Wagmi's APIs might seem more verbose at first, it makes Wagmi's modular building blocks extremely flexible. Easy to move around, change, and remove. It also allows developers to better understand Ethereum concepts as well as understand _what_ and _why_ certain properties are being passed through. Learning how to use Wagmi is a great way to learn how to interact with Ethereum in general.

Wagmi also provides [strongly typed APIs](/react/typescript), allowing consumers to get the best possible experience through [autocomplete](https://twitter.com/awkweb/status/1555678944770367493), [type inference](https://twitter.com/jakemoxey/status/1570244174502588417?s=20), as well as static validation. You often just need to provide an ABI and Wagmi can help you autocomplete your way to success, identify type errors before your users do, drill into blockchain errors [at compile and runtimes](/react/guides/error-handling) with surgical precision, and much more.

The API documentation is comprehensive and contains usage info for _every_ module in Wagmi. The core team uses a [documentation](https://gist.github.com/zsup/9434452) and [test driven](https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%2Ddriven%20development%20(TDD),software%20against%20all%20test%20cases.) development approach to building modules, which leads to predictable and stable APIs.

### Performance

Performance is critical for applications on all sizes. Slow page load and interactions can cause users to stop using applications. Wagmi uses and is built by the same team behind [Viem](https://viem.sh), the most performant production-ready Ethereum library.

End users should not be required to download a module of over 100kB in order to interact with Ethereum. Wagmi is optimized for tree-shaking and dead-code elimination, allowing apps to minimize bundle size for fast page load times.

Data layer performance is also critical. Slow, unnecessary, and manual data fetching can make apps unusable and cost thousands in RPC compute units. Wagmi supports caching, deduplication, persistence, and much more through [TanStack Query](/react/guides/tanstack-query).

### Feature Coverage

Wagmi supports the most popular and commonly-used Ethereum features out of the box with 40+ React Hooks for accounts, wallets, contracts, transactions, signing, ENS, and more. Wagmi also supports just about any wallet out there through it's official [connectors](/react/api/connectors), [EIP-6963 support](/react/api/createConfig#multiinjectedproviderdiscovery), and [extensible API](/dev/creating-connectors).

If you need lower-level control, you can always drop down to [Wagmi Core](/core/getting-started) or [Viem](https://viem.sh), which Wagmi uses internally to perform blockchain operations. Wagmi also manages multi-chain support automatically so developers can focus on their applications instead of adding custom code.

Finally, Wagmi has a [CLI](/cli/getting-started) to manage ABIs as well as a robust ecosystem of third-party libraries, like [ConnectKit](https://docs.family.co/connectkit), [RainbowKit](https://www.rainbowkit.com), [AppKit](https://walletconnect.com/appkit), [Dynamic](https://www.dynamic.xyz), [Privy](https://privy.io), and many more, so you can get started quickly without needing to build everything from scratch.

### Stability

Stability is a fundamental principle for Wagmi. Many organizations, large and small, rely heavily on Wagmi and expect it to be entirely stable for their users and applications.

Wagmi's test suite runs against forked Ethereum nodes to make sure functions work across chains. The test suite also runs type tests against many different versions of peer dependencies, like TypeScript, to ensure compatibility with the latest releases of other popular software.

Wagmi follows semver so developers can upgrade between versions with confidence. Starting with Wagmi v2, new functionality will be opt-in with old functionality being deprecated alongside the new features. This means upgrading to the latest major versions will not require immediate changes.

Lastly, the core team works full-time on Wagmi and [related projects](https://github.com/wevm), and is constantly improving Wagmi and keeping it up-to-date with industry trends and changes.


<script setup>
import packageJson from '../../packages/react/package.json'
import Browsers from '../components/Browsers.vue'

const docsPath = 'react'
const packageDir = 'react'
const packageName = 'wagmi'
const viemVersion = packageJson.peerDependencies.viem
</script>

## Installation

Install Wagmi via your package manager, a `<script>` tag, or build from source.

### Package Manager

Install the required packages.

::: code-group
```bash-vue [pnpm]
pnpm add wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [npm]
npm install wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [yarn]
yarn add wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [bun]
bun add wagmi viem@{{viemVersion}} @tanstack/react-query
```
:::

- [Viem](https://viem.sh) is a TypeScript interface for Ethereum that performs blockchain operations.
- [TanStack Query](https://tanstack.com/query/v5) is an async state manager that handles requests, caching, and more.
- [TypeScript](/react/typescript) is optional, but highly recommended. Learn more about [TypeScript support](/react/typescript).

### CDN

If you're not using a package manager, you can also use Wagmi via an ESM-compatible CDN such as [esm.sh](https://esm.sh). Simply add a `<script type="module">` tag to the bottom of your HTML file with the following content.

```html-vue
<script type="module">
  import React from 'https://esm.sh/react@18.2.0'
  import { QueryClient } from 'https://esm.sh/@tanstack/react-query'
  import { createClient } from 'https://esm.sh/viem@{{viemVersion}}'
  import { createConfig } from 'https://esm.sh/wagmi'
</script>
```

Check out the React docs for info on how to use [React without JSX](https://react.dev/reference/react/createElement#creating-an-element-without-jsx).

<!--@include: @shared/installation.md-->

<script setup>
import packageJson from '../../packages/react/package.json'

const viemVersion = packageJson.peerDependencies.viem
</script>

## Getting Started

### Overview

Wagmi is a React Hooks library for Ethereum. You can learn more about the rationale behind the project in the [Why Wagmi](/react/why) section.

### Automatic Installation

For new projects, it is recommended to set up your Wagmi app using the [`create-wagmi`](/cli/create-wagmi) command line interface (CLI). This will create a new Wagmi project using TypeScript and install the required dependencies.

::: code-group
```bash [pnpm]
pnpm create wagmi
```

```bash [npm]
npm create wagmi@latest
```

```bash [yarn]
yarn create wagmi
```

```bash [bun]
bun create wagmi
```
:::

Once the command runs, you'll see some prompts to complete.

```ansi
Project name: wagmi-project
Select a framework: React / Vanilla
...
```

After the prompts, `create-wagmi` will create a directory with your project name and install the required dependencies. Check out the `README.md` for further instructions (if required).

### Manual Installation

To manually add Wagmi to your project, install the required packages.

::: code-group
```bash-vue [pnpm]
pnpm add wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [npm]
npm install wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [yarn]
yarn add wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [bun]
bun add wagmi viem@{{viemVersion}} @tanstack/react-query
```
:::

- [Viem](https://viem.sh) is a TypeScript interface for Ethereum that performs blockchain operations.
- [TanStack Query](https://tanstack.com/query/v5) is an async state manager that handles requests, caching, and more.
- [TypeScript](/react/typescript) is optional, but highly recommended. Learn more about [TypeScript support](/react/typescript).

#### Create Config

Create and export a new Wagmi config using `createConfig`.

::: code-group
<<< @/snippets/react/config.ts[config.ts]
:::

In this example, Wagmi is configured to use the Mainnet and Sepolia chains, and `injected` connector. Check out the [`createConfig` docs](/react/api/createConfig) for more configuration options.


::: details TypeScript Tip
If you are using TypeScript, you can "register" the Wagmi config or use the hook `config` property to get strong type-safety across React Context in places that wouldn't normally have type info.

::: code-group
```ts twoslash [register config]
// @errors: 2322
import { type Config } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

declare const config: Config<readonly [typeof mainnet, typeof sepolia]>
// ---cut---
import { useBlockNumber } from 'wagmi'

useBlockNumber({ chainId: 123 })

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
```

```ts twoslash [hook config property]
// @errors: 2322
import { type Config } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

declare const config: Config<readonly [typeof mainnet, typeof sepolia]>
// ---cut---
import { useBlockNumber } from 'wagmi'

useBlockNumber({ chainId: 123, config })
```

By registering or using the hook `config` property, `useBlockNumber`'s `chainId` is strongly typed to only allow Mainnet and Sepolia IDs. Learn more by reading the [TypeScript docs](/react/typescript#config-types).
:::

#### Wrap App in Context Provider

Wrap your app in the `WagmiProvider` React Context Provider and pass the `config` you created earlier to the `value` property.

::: code-group
```tsx [app.tsx]
import { WagmiProvider } from 'wagmi' // [!code focus]
import { config } from './config' // [!code focus]

function App() {
  return (
    <WagmiProvider config={config}> // [!code focus]
      {/** ... */} // [!code focus]
    </WagmiProvider> // [!code focus]
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

Check out the [`WagmiProvider` docs](/react/api/WagmiProvider) to learn more about React Context in Wagmi.

#### Setup TanStack Query

Inside the `WagmiProvider`, wrap your app in a TanStack Query React Context Provider, e.g. `QueryClientProvider`, and pass a new `QueryClient` instance to the `client` property.

::: code-group
```tsx [app.tsx]
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // [!code focus]
import { WagmiProvider } from 'wagmi'
import { config } from './config'

const queryClient = new QueryClient() // [!code focus]

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> // [!code focus]
        {/** ... */} // [!code focus]
      </QueryClientProvider> // [!code focus]
    </WagmiProvider>
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

Check out the [TanStack Query docs](https://tanstack.com/query/latest/docs/framework/react) to learn about the library, APIs, and more.

#### Use Wagmi

Now that everything is set up, every component inside the Wagmi and TanStack Query Providers can use Wagmi React Hooks.

::: code-group
```tsx [profile.tsx]
import { useAccount, useEnsName } from 'wagmi'

export function Profile() {
  const { address } = useAccount()
  const { data, error, status } = useEnsName({ address })
  if (status === 'pending') return <div>Loading ENS name</div>
  if (status === 'error')
    return <div>Error fetching ENS name: {error.message}</div>
  return <div>ENS name: {data}</div>
}
```

```tsx [app.tsx]
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { Profile } from './profile'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Profile />
      </QueryClientProvider>
    </WagmiProvider>
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### Next Steps

For more information on what to do next, check out the following topics.

- [**TypeScript**](/react/typescript) Learn how to get the most out of Wagmi's type-safety and inference for an enlightened developer experience.
- [**Connect Wallet**](/react/guides/connect-wallet) Learn how to enable wallets to connect to and disconnect from your apps and display information about connected accounts.
- [**React Hooks**](/react/api/hooks) Browse the collection of React Hooks and learn how to use them.
- [**Viem**](/react/guides/viem) Learn about Viem and how it works with Wagmi.

<script setup>
import packageJson from '../../packages/react/package.json'

const typescriptVersion = packageJson.peerDependencies.typescript
</script>

## TypeScript

### Requirements

Wagmi is designed to be as type-safe as possible! Things to keep in mind:

- Types currently require using TypeScript {{typescriptVersion}}.
- [TypeScript doesn't follow semver](https://www.learningtypescript.com/articles/why-typescript-doesnt-follow-strict-semantic-versioning) and often introduces breaking changes in minor releases.
- Changes to types in this repository are considered non-breaking and are usually released as patch changes (otherwise every type enhancement would be a major version!).
- It is highly recommended that you lock your `wagmi` and `typescript` versions to specific patch releases and upgrade with the expectation that types may be fixed or upgraded between any release.
- The non-type-related public API of Wagmi still follows semver very strictly.

To ensure everything works correctly, make sure your `tsconfig.json` has [`strict`](https://www.typescriptlang.org/tsconfig#strict) mode set to `true`.

::: code-group
```json [tsconfig.json]
{
  "compilerOptions": {
    "strict": true
  }
}
```
:::

### Config Types

By default React Context does not work well with type inference. To support strong type-safety across the React Context boundary, there are two options available:

- Declaration merging to "register" your `config` globally with TypeScript.
- `config` property to pass your `config` directly to hooks.

#### Declaration Merging

[Declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) allows you to "register" your `config` globally with TypeScript. The `Register` type enables Wagmi to infer types in places that wouldn't normally have access to type info via React Context alone.

To set this up, add the following declaration to your project. Below, we co-locate the declaration merging and the `config` set up.

```ts
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

declare module 'wagmi' { // [!code focus]
  interface Register { // [!code focus]
    config: typeof config // [!code focus]
  } // [!code focus]
} // [!code focus]

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

Since the `Register` type is global, you only need to add it once in your project. Once set up, you will get strong type-safety across your entire project. For example, query hooks will type `chainId` based on your `config`'s `chains`.

```ts twoslash
// @errors: 2322
import { type Config } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

declare module 'wagmi' {
  interface Register {
    config: Config<readonly [typeof mainnet, typeof sepolia]>
  }
}
// ---cut---
import { useBlockNumber } from 'wagmi'

useBlockNumber({ chainId: 123 })
```

You just saved yourself a runtime error and you didn't even need to pass your `config`. 🎉

#### Hook `config` Property

For cases where you have more than one Wagmi `config` or don't want to use the declaration merging approach, you can pass a specific `config` directly to hooks via the `config` property.

```ts
import { createConfig, http } from 'wagmi'
import { mainnet, optimism } from 'wagmi/chains'

export const configA = createConfig({ // [!code focus]
  chains: [mainnet], // [!code focus]
  transports: { // [!code focus]
    [mainnet.id]: http(), // [!code focus]
  }, // [!code focus]
}) // [!code focus]

export const configB = createConfig({ // [!code focus]
  chains: [optimism], // [!code focus]
  transports: { // [!code focus]
    [optimism.id]: http(), // [!code focus]
  }, // [!code focus]
}) // [!code focus]
```

As you expect, `chainId` is inferred correctly for each `config`.

```ts twoslash
// @errors: 2322
import { type Config } from 'wagmi'
import { mainnet, optimism } from 'wagmi/chains'

declare const configA: Config<readonly [typeof mainnet]>
declare const configB: Config<readonly [typeof optimism]>
// ---cut---
import { useBlockNumber } from 'wagmi'

useBlockNumber({ chainId: 123, config: configA })
useBlockNumber({ chainId: 123, config: configB })
```

This approach is more explicit, but works well for advanced use-cases, if you don't want to use React Context or declaration merging, etc.

### Const-Assert ABIs & Typed Data

Wagmi can infer types based on [ABIs](https://docs.soliditylang.org/en/latest/abi-spec.html#json) and [EIP-712](https://eips.ethereum.org/EIPS/eip-712) Typed Data definitions, powered by [Viem](https://viem.sh) and [ABIType](https://github.com/wevm/abitype). This achieves full end-to-end type-safety from your contracts to your frontend and enlightened developer experience by autocompleting ABI item names, catching misspellings, inferring argument and return types (including overloads), and more.

For this to work, you must either [const-assert](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) ABIs and Typed Data (more info below) or define them inline. For example, `useReadContract`'s `abi` configuration parameter:

```ts
const { data } = useReadContract({
  abi: […], // <--- defined inline // [!code focus]
})
```

```ts
const abi = […] as const // <--- const assertion // [!code focus]
const { data } = useReadContract({ abi })
```

If type inference isn't working, it's likely you forgot to add a `const` assertion or define the configuration parameter inline. Also, make sure your ABIs, Typed Data definitions, and [TypeScript configuration](#requirements) are valid and set up correctly.

::: tip
Unfortunately [TypeScript doesn't support importing JSON `as const` yet](https://github.com/microsoft/TypeScript/issues/32063). Check out the [Wagmi CLI](/cli/getting-started) to help with this! It can automatically fetch ABIs from Etherscan and other block explorers, resolve ABIs from your Foundry/Hardhat projects, generate React Hooks, and more.
:::

Anywhere you see the `abi` or `types` configuration property, you can likely use const-asserted or inline ABIs and Typed Data to get type-safety and inference. These properties are also called out in the docs.

Here's what [`useReadContract`](/react/api/hooks/useReadContract) looks like with and without a const-asserted `abi` property.

::: code-group
```ts twoslash [Const-Asserted]
const erc721Abi = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ type: 'address', name: 'owner' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    stateMutability: 'view',
    inputs: [
      { type: 'address', name: 'owner' },
      { type: 'address', name: 'operator' },
    ],
    outputs: [{ type: 'bool' }],
  },
  {
    name: 'getApproved',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ type: 'uint256', name: 'tokenId' }],
    outputs: [{ type: 'address' }],
  },
  {
    name: 'ownerOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ type: 'uint256', name: 'tokenId' }],
    outputs: [{ type: 'address' }],
  },
  {
    name: 'tokenURI',
    type: 'function',
    stateMutability: 'pure',
    inputs: [{ type: 'uint256', name: 'tokenId' }],
    outputs: [{ type: 'string' }],
  },
] as const
// ---cut---
import { useReadContract } from 'wagmi'

const { data } = useReadContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: erc721Abi,
  functionName: 'balanceOf',
  // ^?



  args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
  // ^?
})

data
// ^?
```
```ts twoslash [Not Const-Asserted]
declare const erc721Abi: {
  name: string;
  type: string;
  stateMutability: string;
  inputs: {
    type: string;
    name: string;
  }[];
  outputs: {
    type: string;
  }[];
}[]
// ---cut---
import { useReadContract } from 'wagmi'

const { data } = useReadContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: erc721Abi,
  functionName: 'balanceOf',
  // ^?



  args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
  // ^?
})

data
// ^?
```
:::

You can prevent runtime errors and be more productive by making sure your ABIs and Typed Data definitions are set up appropriately. 🎉

```ts twoslash
// @errors: 2820
const erc721Abi = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ type: 'address', name: 'owner' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    stateMutability: 'view',
    inputs: [
      { type: 'address', name: 'owner' },
      { type: 'address', name: 'operator' },
    ],
    outputs: [{ type: 'bool' }],
  },
  {
    name: 'getApproved',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ type: 'uint256', name: 'tokenId' }],
    outputs: [{ type: 'address' }],
  },
  {
    name: 'ownerOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ type: 'uint256', name: 'tokenId' }],
    outputs: [{ type: 'address' }],
  },
  {
    name: 'tokenURI',
    type: 'function',
    stateMutability: 'pure',
    inputs: [{ type: 'uint256', name: 'tokenId' }],
    outputs: [{ type: 'string' }],
  },
] as const
// ---cut---
import { useReadContract } from 'wagmi'

useReadContract({
  abi: erc721Abi,
  functionName: 'balanecOf',
})
```

### Configure Internal Types

For advanced use-cases, you may want to configure Wagmi's internal types. Most of Wagmi's types relating to ABIs and EIP-712 Typed Data are powered by [ABIType](https://github.com/wevm/abitype). See the [ABIType docs](https://abitype.dev) for more info on how to configure types.

## Comparison

There are multiple options when it comes to React libraries for Ethereum that help manage wallet connections, provide utility methods/hooks, etc.

::: tip
Comparisons strive to be as accurate and as unbiased as possible. If you use any of these libraries and feel the information could be improved, feel free to suggest changes.
:::

### Overview

|                      | [wagmi](https://github.com/wagmi-dev/wagmi)                                                     | [web3-react](https://github.com/NoahZinsmeister/web3-react)                                             | [useDApp](https://github.com/EthWorks/useDApp)                                                     |
| -------------------- | :---------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------- |
| GitHub Stars         | ![wagmi star count](https://img.shields.io/github/stars/wagmi-dev/wagmi?colorB=27292E&label=)   | ![web3-react star count](https://img.shields.io/github/stars/Uniswap/web3-react?colorB=27292E&label=)   | ![useDApp star count](https://img.shields.io/github/stars/EthWorks/useDApp?colorB=27292E&label=)   |
| Open Issues          | ![wagmi issue count](https://img.shields.io/github/issues/wagmi-dev/wagmi?colorB=27292E&label=) | ![web3-react issue count](https://img.shields.io/github/issues/Uniswap/web3-react?colorB=27292E&label=) | ![useDApp issue count](https://img.shields.io/github/issues/EthWorks/useDApp?colorB=27292E&label=) |
| Downloads            | ![wagmi downloads](https://img.shields.io/npm/dw/wagmi?colorB=27292E&label=)                    | ![web3-react downloads](https://img.shields.io/npm/dw/@web3-react/core?colorB=27292E&label=)            | ![useDApp downloads](https://img.shields.io/npm/dw/@usedapp/core?colorB=27292E&label=)             |
| License              | ![wagmi license](https://img.shields.io/github/license/wagmi-dev/wagmi?colorB=27292E&label=)    | ![web3-react license](https://img.shields.io/github/license/Uniswap/web3-react?colorB=27292E&label=)    | ![useDApp license](https://img.shields.io/github/license/EthWorks/useDApp?colorB=27292E&label=)    |
| Their Comparison     | –                                                                                               | none                                                                                                    | none                                                                                               |
| Supported Frameworks | React, Vanilla JS                                                                               | React                                                                                                   | React                                                                                              |
| Documentation        | ✅                                                                                              | 🛑                                                                                                      | ✅                                                                                                 |
| TypeScript           | ✅                                                                                              | 🔶                                                                                                      | 🔶                                                                                                 |
| EIP-6963 Support     | ✅                                                                                              | 🔴                                                                                                      | 🔴                                                                                                 |
| Test Suite           | ✅                                                                                              | 🔶                                                                                                      | 🔶                                                                                                 |
| Examples             | ✅                                                                                              | 🔶                                                                                                      | ✅                                                                                                 |

::: details Comparison Key

1. Documentation
- Comprehensive documentation for all library features ✅
- No documentation 🔴
2. Typescript
- Infer types from ABIs, EIP-712 Typed Data, etc. ✅
- Can add types with explicit generics, type annotations, etc. 🔶
3. Test Suite
- Runs against forked Ethereum network(s) ✅
- Mocking functionality (i.e. RPC calls) is 🔶
4. EIP-6963 Support
- Fully compatible with EIP-6963 ✅
- Not compatible with EIP-6963 🔴
5. Examples
- Has multiple examples ✅
- Has single example 🔶
  :::

### [Wagmi](https://github.com/wagmi-dev/wagmi)

#### Pros

- 20+ hooks for working with wallets, ENS, contracts, transactions, signing, etc.
- Built-in wallet connectors for injected providers (EIP-6963 support), WalletConnect, MetaMask, Coinbase Wallet
- Caching, request deduplication, and persistence powered by TanStack Query
- Auto-refresh data on wallet, block, and network changes
- Multicall support
- Test suite running against forked Ethereum networks
- TypeScript ready (infer types from ABIs and EIP-712 Typed Data)
- Extensive documentation and examples
- Used by Coinbase, Stripe, Shopify, Uniswap, Optimism, ENS, Sushi, and [many more](https://github.com/wagmi-dev/wagmi/discussions/201)
- MIT License

#### Cons

- Not as many built-in connectors as `web3-react`

### [web3-react](https://github.com/Uniswap/web3-react)

#### Pros

- Supports many different connectors (conceptually similar to Wagmi's connectors)
- Basic hooks for managing account

#### Cons

- Need to set up connectors and method for connecting wallet on your own
- Need to install connectors separately
- Almost no tests or documentation; infrequent updates
- GPL-3.0 License

### [useDApp](https://github.com/EthWorks/useDApp)

#### Pros

- Auto-refresh on new blocks and wallet changes
- Multicall support
- Transaction notifications
- Chrome extension and Firefox add-on
- MIT License

#### Cons

- Non-standard hook API

# 教程

## TanStack Query

Wagmi Hooks 不仅是围绕核心 [Wagmi Actions](/core/api/actions)的封装，它们还利用了 [TanStack Query](https://tanstack.com/query/v5) ，在您的 React 应用程序中轻松直观地实现了异步数据的获取、缓存、同步和更新。

如果没有异步数据获取的抽象层，你需要处理由此产生的一系列负面副作用，例如：表示有限状态（加载中、错误、成功）、处理竞态条件、根据确定性标识符进行缓存等等

### 查询与变更

Wagmi Hooks 代表了 **查询** 或 **变更**.

**查询** 用于获取数据（例如获取区块号、从合约中读取数据等），通常在默认情况下会在挂载时调用。 所有查询都与一个独特的 [Query Key](#query-keys) 关联, 可以用于进一步的操作，例如重新获取数据、预取数据或修改缓存的数据。

**变更** 用于修改数据（例如连接/断开账户、写入合约、切换链等），通常在响应用户交互时调用。不像 **查询**, 它们不与查询键关联。

### 术语

- **查询**: 一个异步的数据获取（例如读取数据）操作，并且与一个唯一的查询键绑定。
- **变更**: 一个异步的数据变更（例如创建/更新/删除数据或副作用）操作。
- **查询键**: 一个用于确定性地标识查询的唯一标识符。它通常是查询名称和查询参数的元组。
- **陈旧数据**: 在一定时间后未使用或不活动的数据。
- **查询获取**: 调用异步查询函数的过程。
- **查询重新获取**: 重新获取**已渲染**查询的过程。
- **[查询失效](https://tanstack.com/query/v5/docs/react/guides/query-invalidation)**: 将查询数据标记为陈旧（例如不活跃/未使用）并重新获取**已渲染**查询的过程。
- **[查询预取](https://tanstack.com/query/v5/docs/react/guides/prefetching)**: 预取查询并将其存入缓存的过程。

### 通过外部存储持久化

默认情况下，TanStack Query 将所有查询数据保存在内存中。这意味着如果您刷新页面，所有存储在内存中的查询数据将会丢失。

如果您想将查询数据持久化到外部存储，可以使用 TanStack Query 的 [`createSyncStoragePersister`](https://tanstack.com/query/v5/docs/react/plugins/createSyncStoragePersister) 或 [`createAsyncStoragePersister`](https://tanstack.com/query/v5/docs/react/plugins/createAsyncStoragePersister) 来接入外部存储，例如 `localStorage`、`sessionStorage`、[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) 或 [`AsyncStorage`](https://reactnative.dev/docs/asyncstorage)（React Native）。

#### 同步存储

以下是如何使用 `Wagmi + TanStack Query` 设置同步外部存储（例如 `localStorage` 或 `sessionStorage`）的示例。

##### 安装

::: code-group
```bash [pnpm]
pnpm i @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

```bash [npm]
npm i @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

```bash [yarn]
yarn add @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

```bash [bun]
bun i @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```
:::

##### 用法

```tsx
// 1. 导入模块. // [!code hl]
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister' // [!code hl]
import { QueryClient } from '@tanstack/react-query' // [!code hl]
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client' // [!code hl]
import { WagmiProvider, deserialize, serialize } from 'wagmi' // [!code hl]

// 2. 创建一个新的 Query Client，默认 `gcTime`。 // [!code hl]
const queryClient = new QueryClient({ // [!code hl]
  defaultOptions: { // [!code hl]
    queries: { // [!code hl]
      gcTime: 1_000 * 60 * 60 * 24, // 24 hours // [!code hl]
    }, // [!code hl] 
  }, // [!code hl]
}) // [!code hl]

// 3. 设置持久化器. // [!code hl]
const persister = createSyncStoragePersister({ // [!code hl]
  serialize, // [!code hl]
  storage: window.localStorage, // [!code hl]
  deserialize, // [!code hl]
}) // [!code hl]

function App() {
  return (
    <WagmiProvider config={config}>
      {/* 4. 将应用包裹在 PersistQueryClientProvider 中 */} // [!code hl]
      <PersistQueryClientProvider // [!code hl]
        client={queryClient} // [!code hl]
        persistOptions={{ persister }} // [!code hl]
      > // [!code hl]
        {/* ... */}
      </PersistQueryClientProvider> // [!code hl]
    </WagmiProvider>
  )
}
```

Read more about [Sync Storage Persistence](https://tanstack.com/query/v5/docs/react/plugins/createSyncStoragePersister).

#### 异步存储

以下是如何使用 Wagmi + TanStack Query 设置异步外部存储，例如 [`IndexedDB`](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) 或 [`AsyncStorage`](https://reactnative.dev/docs/asyncstorage).

##### 安装

::: code-group
```bash [pnpm]
pnpm i @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```

```bash [npm]
npm i @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```

```bash [yarn]
yarn add @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```

```bash [bun]
bun i @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```
:::

##### 用法

```tsx
// 1. 导入模块. // [!code hl]
import AsyncStorage from '@react-native-async-storage/async-storage' // [!code hl]
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister' // [!code hl]
import { QueryClient } from '@tanstack/react-query' // [!code hl]
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client' // [!code hl]
import { WagmiProvider, deserialize, serialize } from 'wagmi' // [!code hl]

// 2.创建一个新的 Query Client，默认 `gcTime`. // [!code hl]
const queryClient = new QueryClient({ // [!code hl]
  defaultOptions: { // [!code hl]
    queries: { // [!code hl]
      gcTime: 1_000 * 60 * 60 * 24, // 24 hours // [!code hl]
    }, // [!code hl] 
  }, // [!code hl]
}) // [!code hl]

// 3. 设置持久化器. // [!code hl]
const persister = createAsyncStoragePersister({ // [!code hl]
  serialize, // [!code hl]
  storage: AsyncStorage, // [!code hl]
  deserialize, // [!code hl]
}) // [!code hl]

function App() {
  return (
    <WagmiProvider config={config}>
      {/* 4. 将应用包裹在 PersistQueryClientProvider 中 */} // [!code hl]
      <PersistQueryClientProvider // [!code hl]
        client={queryClient} // [!code hl]
        persistOptions={{ persister }} // [!code hl]
      > // [!code hl]
        {/* ... */}
      </PersistQueryClientProvider> // [!code hl]
    </WagmiProvider>
  )
}
```

Read more about [Async Storage Persistence](https://tanstack.com/query/v5/docs/react/plugins/createAsyncStoragePersister).

### 查询键

查询键通常用于对查询执行高级操作，例如：失效、重新获取、预取等。

Wagmi 为每个 Hook 导出查询键，它们可以通过 Hook (React) 或 导入 (Vanilla JS) 获取。

阅读更多关于 查询键 的信息，请访问 TanStack Query 文档。

#### Hook (React)

每个 Hook 返回一个 queryKey 值。当你想在 React 组件中使用查询键时，可以使用这种方法，因为它为你处理了响应性。

```ts 
import { useBlock } from 'wagmi' // [!code hl]

function App() {
  const { queryKey } = useBlock() // [!code hl]
}
```

#### Import (Vanilla JS)

 每个 Hook 都有一个对应的`get<X>QueryOptions`函数，该函数返回一个查询键。当你想在 Vanilla JS 上下文（如在实用函数中）使用查询键时，可以使用这种方法。

```ts 
import { getBlockQueryOptions } from 'wagmi' // [!code hl]
import { config } from './config'

function perform() {
  const { queryKey } = getBlockQueryOptions(config, { // [!code hl]
    chainId: config.state.chainId // [!code hl]
  }) // [!code hl]
}
```

::: warning

这种方法的一个缺点是，它不会为你处理响应性（例如活动帐户/链更改、参数更改等）。你需要通过显式传递参数给 get<X>QueryOptions 自己处理这些问题。

:::

### 使查询失效

使查询失效是将查询数据标记为陈旧（例如，未使用的），并重新获取已渲染的查询的过程。

阅读更多关于**使查询失效**的信息，请访问 [TanStack Query 文档](https://tanstack.com/query/v5/docs/react/guides/query-invalidation)。

##### 示例：监视用户余额

你可能希望“监视”用户的余额，并在每个新块到来后使余额失效。我们可以在 `useEffect` 中调用 `invalidateQueries`，并将块号作为它的唯一依赖项——这将在 `blockNumber` 变化时重新获取所有已渲染的余额查询。

```tsx
import { useQueryClient } from '@tanstack/react-query' 
import { useEffect } from 'react' 
import { useBlockNumber, useBalance } from 'wagmi' 

function App() {
  const queryClient = useQueryClient()
  const { data: blockNumber } = useBlockNumber({ watch: true }) // [!code hl]
  const { data: balance, queryKey } = useBalance() // [!code hl]
  
  useEffect(() => { // [!code hl]
    queryClient.invalidateQueries({ queryKey }) // [!code hl]
  }, [blockNumber]) // [!code hl]

  return <div>{balance}</div>
}
```

##### 示例：用户交互后

也许你想在某些交互后使用户的余额失效。这将标记余额为陈旧，并重新获取所有已渲染的余额查询。

```tsx
import { useBalance } from 'wagmi'

function App() {
  // 1. Extract `queryKey` from the useBalance Hook. // [!code hl]
  const { queryKey } = useBalance() // [!code hl]

  return (
    <button
      onClick={async () => {
        // 2. Invalidate the query when the user clicks "Invalidate". // [!code hl]
        await queryClient.invalidateQueries({ queryKey }) // [!code hl]
      }}
    >
      Invalidate
    </button>
  )
}

function Example() {
  // 3. Other `useBalance` Hooks in your rendered React tree will be refetched! // [!code hl]
  const { data: balance } = useBalance() // [!code hl]

  return <div>{balance}</div>
}
```

### 获取查询

获取查询是调用查询函数以检索数据的过程。如果查询存在且数据未失效或未超过给定的 `staleTime`，则将返回缓存中的数据。否则，查询将获取最新的数据。

::: code-group
```tsx [example.tsx]
import { getBlockQueryOptions } from 'wagmi'
import { queryClient } from './app'
import { config } from './config'

export async function fetchBlockData() {
  return queryClient.fetchQuery( // [!code hl]
    getBlockQueryOptions(config, { // [!code hl]
      chainId: config.state.chainId, // [!code hl]
    } // [!code hl]
  )) // [!code hl]
}
```
<<< @/snippets/react/app.tsx[app.tsx]
<<< @/snippets/react/config.ts[config.ts]
:::

### 检索和更新查询数据

你可以使用 `getQueryData` 和 `setQueryData` 以命令式方式检索和更新查询数据。这对于你希望在 React 组件外部检索或更新查询的场景非常有用。

请注意，这些函数不会使查询失效或重新获取查询。

::: code-group
```tsx [example.tsx]
import { getBlockQueryOptions } from 'wagmi'
import type { Block } from 'viem'
import { queryClient } from './app'
import { config } from './config'

export function getPendingBlockData() {
  return queryClient.getQueryData( // [!code hl]
    getBlockQueryOptions(config, { // [!code hl]
      chainId: config.state.chainId, // [!code hl]
      tag: 'pending' // [!code hl]
    } // [!code hl]
  )) // [!code hl]
}

export function setPendingBlockData(data: Block) {
  return queryClient.setQueryData( // [!code hl]
    getBlockQueryOptions(config, { // [!code hl]
      chainId: config.state.chainId, // [!code hl]
      tag: 'pending' // [!code hl]
    }, // [!code hl]
    data // [!code hl]
  )) // [!code hl]
}
```
<<< @/snippets/react/app.tsx[app.tsx]
<<< @/snippets/react/config.ts[config.ts]
:::

### 预取查询

预取查询是提前获取数据并用返回的数据填充缓存的过程。这在你希望在用户导航到页面之前获取数据，或在服务器上获取数据以在客户端复用时非常有用。

阅读更多关于 **预取查询** 的信息，请访问 [TanStack Query 文档](https://tanstack.com/query/v5/docs/react/guides/prefetching)。
##### Example: Prefetching in Event Handler

```tsx
import { Link } from 'next/link'
import { getBlockQueryOptions } from 'wagmi'

function App() {
  const config = useConfig()
  const chainId = useChainId()

  // 1. Set up a function to prefetch the block data. // [!code hl]
  const prefetch = () => // [!code hl]
    queryClient.prefetchQuery(getBlockQueryOptions(config, { chainId })) // [!code hl]
  

  return (
    <Link
      // 2. Add event handlers to prefetch the block data // [!code hl] 
      // when user hovers over or focuses on the button. // [!code hl]
      onMouseEnter={prefetch} // [!code hl]
      onFocus={prefetch} // [!code hl]
      to="/block-details"
    >
      Block details
    </Link>
  )
}
```

### SSR

It is possible to utilize TanStack Query's SSR strategies with Wagmi Hooks & Query Keys. Check out the [Server Rendering & Hydration](https://tanstack.com/query/v5/docs/react/guides/ssr) & [Advanced Server Rendering](https://tanstack.com/query/v5/docs/react/guides/advanced-ssr) guides.

### Devtools

TanStack Query includes dedicated [Devtools](https://tanstack.com/query/latest/docs/framework/react/devtools) that assist in visualizing and debugging your queries, their cache states, and much more. You will have to pass a custom `queryKeyFn` to your `QueryClient` for Devtools to correctly serialize BigInt values for display. Alternatively, You can use the `hashFn` from `@wagmi/core/query`, which already handles this serialization.

##### Install

::: code-group
```bash [pnpm]
pnpm i @tanstack/react-query-devtools
```

```bash [npm]
npm i @tanstack/react-query-devtools
```

```bash [yarn]
yarn add @tanstack/react-query-devtools
```

```bash [bun]
bun i @tanstack/react-query-devtools
```
:::

##### Usage

```tsx
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // [!code hl]
import { hashFn } from "@wagmi/core/query"; // [!code hl]

const queryClient = new QueryClient({
  defaultOptions: { // [!code hl]
    queries: { // [!code hl]
      queryKeyHashFn: hashFn, // [!code hl]
    }, // [!code hl]
  }, // [!code hl]
});
```

## Viem

[Viem](https://viem.sh) is a low-level TypeScript Interface for Ethereum that enables developers to interact with the Ethereum blockchain, including: JSON-RPC API abstractions, Smart Contract interaction, wallet & signing implementations, coding/parsing utilities and more.

**Wagmi Core** is essentially a wrapper over **Viem** that provides multi-chain functionality via [Wagmi Config](/react/api/createConfig) and automatic account management via [Connectors](/react/api/connectors).

### Leveraging Viem Actions

All of the core [Wagmi Hooks](/react/api/actions) are friendly wrappers around [Viem Actions](https://viem.sh/docs/actions/public/introduction.html) that inject a multi-chain and connector aware [Wagmi Config](/react/api/createConfig).

There may be cases where you might want to dig deeper and utilize Viem Actions directly (maybe a Hook doesn't exist in Wagmi yet). In these cases, you can create your own custom Wagmi Hook by importing Viem Actions directly via `viem/actions` and plugging in a Viem Client returned by the [`useClient` Hook](/react/api/hooks/useClient).

The example below demonstrates two different ways to utilize Viem Actions:

1. **Tree-shakable Actions (recommended):** Uses `useClient` (for public actions) and `useConnectorClient` (for wallet actions).
2. **Client Actions:** Uses `usePublicClient` (for public actions) and  `useWalletClient` (for wallet actions).

::: tip

It is highly recommended to use the **tree-shakable** method to ensure that you are only pulling modules you use, and keep your bundle size low.

:::

::: code-group

```tsx [Tree-shakable Actions]
// 1. Import modules. 
import { useMutation, useQuery } from '@tanstack/react-query'
import { http, createConfig, useClient, useConnectorClient } from 'wagmi' 
import { base, mainnet, optimism, zora } from 'wagmi/chains' 
import { getLogs, watchAsset } from 'viem/actions'

// 2. Set up a Wagmi Config 
export const config = createConfig({ 
  chains: [base, mainnet, optimism, zora], 
  transports: { 
    [base.id]: http(), 
    [mainnet.id]: http(), 
    [optimism.id]: http(), 
    [zora.id]: http(), 
  }, 
}) 

function Example() {
  // 3. Extract a Viem Client for the current active chain. // [!code hl]
  const publicClient = useClient({ config }) // [!code hl]

  // 4. Create a "custom" Query Hook that utilizes the Client. // [!code hl]
  const { data: logs } = useQuery({ // [!code hl]
    queryKey: ['logs', publicClient.uid], // [!code hl]
    queryFn: () => getLogs(publicClient, /* ... */) // [!code hl]
  }) // [!code hl]
  
  // 5. Extract a Viem Client for the current active chain & account. // [!code hl]
  const { data: walletClient } = useConnectorClient({ config }) // [!code hl]

  // 6. Create a "custom" Mutation Hook that utilizes the Client. // [!code hl]
  const { mutate } = useMutation({ // [!code hl]
    mutationFn: (asset) => watchAsset(walletClient, asset) // [!code hl]
  }) // [!code hl]

  return (
    <div>
      {/* ... */}
    </div>
  )
}
```

```tsx [Client Actions]
// 1. Import modules. 
import { useMutation, useQuery } from '@tanstack/react-query'
import { http, createConfig, useClient, useConnectorClient } from 'wagmi' 
import { base, mainnet, optimism, zora } from 'wagmi/chains' 

// 2. Set up a Wagmi Config 
export const config = createConfig({ 
  chains: [base, mainnet, optimism, zora], 
  transports: { 
    [base.id]: http(), 
    [mainnet.id]: http(), 
    [optimism.id]: http(), 
    [zora.id]: http(), 
  }, 
}) 

function Example() {
  // 3. Extract a Viem Client for the current active chain. // [!code hl]
  const publicClient = useClient({ config }) // [!code hl]

  // 4. Create a "custom" Query Hook that utilizes the Client. // [!code hl]
  const { data: logs } = useQuery({ // [!code hl]
    queryKey: ['logs', publicClient.uid], // [!code hl]
    queryFn: () => publicClient.getLogs(/* ... */) // [!code hl]
  }) // [!code hl]
  
  // 5. Extract a Viem Client for the current active chain & account. // [!code hl]
  const { data: walletClient } = useConnectorClient({ config }) // [!code hl]

  // 6. Create a "custom" Mutation Hook that utilizes the Client. // [!code hl]
  const { mutate } = useMutation({ // [!code hl]
    mutationFn: (asset) => walletClient.watchAsset(asset) // [!code hl]
  }) // [!code hl]

  return (
    <div>
      {/* ... */}
    </div>
  )
}
```

:::

### Private Key & Mnemonic Accounts

It is possible to utilize Viem's [Private Key & Mnemonic Accounts](https://viem.sh/docs/accounts/local.html) with Wagmi by explicitly passing through the account via the `account` argument on Wagmi Actions.

```tsx
import { http, createConfig, useSendTransaction } from 'wagmi' 
import { base, mainnet, optimism, zora } from 'wagmi/chains' 
import { parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

export const config = createConfig({ 
  chains: [base, mainnet, optimism, zora], 
  transports: { 
    [base.id]: http(), 
    [mainnet.id]: http(), 
    [optimism.id]: http(), 
    [zora.id]: http(), 
  }, 
}) 

const account = privateKeyToAccount('0x...') // [!code hl]

function Example() {
  const { data: hash } = useSendTransaction({
    account, // [!code hl]
    to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
    value: parseEther('0.001')
  })
}
```

::: info

Wagmi currently does not support hoisting Private Key & Mnemonic Accounts to the top-level Wagmi Config – meaning you have to explicitly pass through the account to every Action. If you feel like this is a feature that should be added, please [open an discussion](https://github.com/wevm/wagmi/discussions/new?category=ideas).

:::


## Error Handling

The `error` property in Wagmi Hooks is strongly typed with it's corresponding error type. This enables you to have granular precision with handling errors in your application.

You can discriminate the error type by using the `name` property on the error object.

::: code-group
```tsx twoslash [index.tsx]
// @noErrors
import { useBlockNumber } from 'wagmi'

function App() {
  const { data, error } = useBlockNumber()
  //            ^?

  error?.name
  //     ^?






  if (error?.name === 'HttpRequestError') {
    const { status } = error
    //      ^?      


    return <div>A HTTP error occurred. Status: {status}</div>
  }
  if (error?.name === 'LimitExceededRpcError') {
    const { code } = error
    //      ^?

    
    return <div>Rate limit exceeded. Code: {code}</div>
  }
  // ...
}
```
<<< @/snippets/react/config.ts[config.ts]
:::


## Ethers.js Adapters

It is recommended for projects to migrate to [Viem](https://viem.sh) when using Wagmi, but there are some cases where you might still need to use [Ethers.js](https://ethers.org) in your project:

- You may want to **incrementally migrate** Ethers.js usage to Viem
- Some **third-party libraries & SDKs** may only support Ethers.js
- Personal preference

We have provided reference implementations for Viem → Ethers.js adapters that you can copy + paste in your project.

### Client → Provider

#### Reference Implementation

Copy the following reference implementation into a file of your choice:

::: code-group

```ts [Ethers v5]
import { providers } from 'ethers'
import { useMemo } from 'react'
import type { Chain, Client, Transport } from 'viem'
import { Config, useClient } from 'wagmi'

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback')
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<Transport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    )
  return new providers.JsonRpcProvider(transport.url, network)
}

/** Hook to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({
  chainId,
}: { chainId?: number | undefined } = {}) {
  const client = useClient<Config>({ chainId })
  return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}
```

```ts [Ethers v6]
import { FallbackProvider, JsonRpcProvider } from 'ethers'
import { useMemo } from 'react'
import type { Chain, Client, Transport } from 'viem'
import { type Config, useClient } from 'wagmi'

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback') {
    const providers = (transport.transports as ReturnType<Transport>[]).map(
      ({ value }) => new JsonRpcProvider(value?.url, network),
    )
    if (providers.length === 1) return providers[0]
    return new FallbackProvider(providers)
  }
  return new JsonRpcProvider(transport.url, network)
}

/** Action to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const client = useClient<Config>({ chainId })
  return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}
```

:::

#### Usage

Now you can use the `useEthersProvider` function in your components:

::: code-group

```ts [example.ts]
import { useEthersProvider } from './ethers'

function Example() {
  const provider = useEthersProvider()
  ...
}
```

```ts [ethers.ts (Ethers v5)]
import { providers } from 'ethers'
import { useMemo } from 'react'
import type { Chain, Client, Transport } from 'viem'
import { Config, useClient } from 'wagmi'

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback')
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<Transport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    )
  return new providers.JsonRpcProvider(transport.url, network)
}

/** Hook to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({
  chainId,
}: { chainId?: number | undefined } = {}) {
  const client = useClient<Config>({ chainId })
  return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}
```

```ts [ethers.ts (Ethers v6)]
import { FallbackProvider, JsonRpcProvider } from 'ethers'
import { useMemo } from 'react'
import type { Chain, Client, Transport } from 'viem'
import { type Config, useClient } from 'wagmi'

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback') {
    const providers = (transport.transports as ReturnType<Transport>[]).map(
      ({ value }) => new JsonRpcProvider(value?.url, network),
    )
    if (providers.length === 1) return providers[0]
    return new FallbackProvider(providers)
  }
  return new JsonRpcProvider(transport.url, network)
}

/** Action to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const client = useClient<Config>({ chainId })
  return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}
```

:::

### Connector Client → Signer

#### Reference Implementation

Copy the following reference implementation into a file of your choice:

::: code-group

```ts [Ethers v5]
import { providers } from 'ethers'
import { useMemo } from 'react'
import type { AccountCard, Chain, Client, Transport } from 'viem'
import { Config, useConnectorClient } from 'wagmi'

export function clientToSigner(client: Client<Transport, Chain, AccountCard>) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

/** Hook to convert a Viem Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
```

```ts [Ethers v6]
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { useMemo } from 'react'
import type { AccountCard, Chain, Client, Transport } from 'viem'
import { type Config, useConnectorClient } from 'wagmi'

export function clientToSigner(client: Client<Transport, Chain, AccountCard>) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new BrowserProvider(transport, network)
  const signer = new JsonRpcSigner(provider, account.address)
  return signer
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
```

:::

#### Usage

Now you can use the `useEthersSigner` function in your components:

::: code-group

```ts [example.ts]
import { useEthersSigner } from './ethers'

function example() {
  const signer = useEthersSigner()
  ...
}
```

```ts [ethers.ts (Ethers v5)]
import { providers } from 'ethers'
import { useMemo } from 'react'
import type { AccountCard, Chain, Client, Transport } from 'viem'
import { Config, useConnectorClient } from 'wagmi'

export function clientToSigner(client: Client<Transport, Chain, AccountCard>) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

/** Action to convert a Viem Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
```

```ts [ethers.ts (Ethers v6)]
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { useMemo } from 'react'
import type { AccountCard, Chain, Client, Transport } from 'viem'
import { type Config, useConnectorClient } from 'wagmi'

export function clientToSigner(client: Client<Transport, Chain, AccountCard>) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new BrowserProvider(transport, network)
  const signer = new JsonRpcSigner(provider, account.address)
  return signer
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
```

:::


## Chain Properties

Some chains support additional properties related to blocks and transactions. This is powered by Viem's [formatters](https://viem.sh/docs/clients/chains.html#formatters) and [serializers](https://viem.sh/docs/clients/chains.html#serializers). For example, Celo, ZkSync, OP Stack chains all support additional properties. In order to use these properties in a type-safe way, there are a few things you should be aware of.

<br/>

::: tip
Make sure you follow the TypeScript guide's [Config Types](/react/typescript#config-types) section before moving on. The easiest way to do this is to use [Declaration Merging](/react/typescript#declaration-merging) to "register" your `config` globally with TypeScript.

<<< @/snippets/react/config-chain-properties.ts[config.ts]
:::

### Narrowing Parameters

Once your Config is registered with TypeScript, you are ready to access chain-specific properties! For example, Celo's `feeCurrency` is available.

::: code-group
```ts [index.tsx]
import { parseEther } from 'viem'
import { useSimulateContract } from 'wagmi'

const result = useSimulateContract({
  to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  value: parseEther('0.01'),
  feeCurrency: '0x…', // [!code focus]
})
```
<<< @/snippets/react/config-chain-properties.ts[config.ts]
:::

This is great, but if you have multiple chains that support additional properties, your autocomplete could be overwhelmed with all of them. By setting the `chainId` property to a specific value (e.g. `celo.id`), you can narrow parameters to a single chain.

::: code-group
```ts [index.tsx]
import { parseEther } from 'viem'
import { useSimulateContract } from 'wagmi'
import { celo } from 'wagmi/chains'

const result = useSimulateContract({
  to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  value: parseEther('0.01'),
  chainId: celo.id, // [!code focus]
  feeCurrency: '0x…', // [!code focus]
  // ^? (property) feeCurrency?: `0x${string}` | undefined // [!code focus]
})
```
<<< @/snippets/react/config-chain-properties.ts[config.ts]
:::

### Narrowing Return Types

Return types can also have chain-specific properties attached to them. There are a couple approaches for extracting these properties.

#### `chainId` Parameter

Not only can you use the `chainId` parameter to [narrow parameters](#narrowing-parameters), you can also use it to narrow the return type.

::: code-group
```ts [index.tsx]
import { useWaitForTransactionReceipt } from 'wagmi'
import { zkSync } from 'wagmi/chains'

const { data } = useWaitForTransactionReceipt({
  chainId: zkSync.id,
  hash: '0x16854fcdd0219cacf5aec5e4eb2154dac9e406578a1510a6fc48bd0b67e69ea9',
})

data?.logs
//    ^? (property) logs: ZkSyncLog[] | undefined
```
<<< @/snippets/react/config-chain-properties.ts[config.ts]
:::

#### `chainId` Data Property

Wagmi internally will set a `chainId` property on return types that you can use to narrow results. The `chainId` is determined from the `chainId` parameter or global state (e.g. connector). You can use this property to help TypeScript narrow the type.

::: code-group
```ts [index.tsx]
import { useWaitForTransactionReceipt } from 'wagmi'
import { zkSync } from 'wagmi/chains'

const { data } = useWaitForTransactionReceipt({
  hash: '0x16854fcdd0219cacf5aec5e4eb2154dac9e406578a1510a6fc48bd0b67e69ea9',
})

if (data?.chainId === zkSync.id) {
  data?.logs
  //    ^? (property) logs: ZkSyncLog[] | undefined
}
```
<<< @/snippets/react/config-chain-properties.ts[config.ts]
:::

### Troubleshooting

If chain properties aren't working, make sure [TypeScript](/react/guides/faq#type-inference-doesn-t-work) is configured correctly. Not all chains have additional properties, to check which ones do, see the [Viem repo](https://github.com/wevm/viem/tree/main/src/chains) (chains that have a top-level directory under [`src/chains`](https://github.com/wevm/viem/tree/main/src/chains) support additional properties).


---
outline: deep
---

## SSR

Wagmi uses client-only external stores (such as `localStorage` and `mipd`) to show the user the most relevant data as quickly as possible on first render.

However, the caveat of using these external client stores is that frameworks which incorporate SSR (such as Next.js) will throw hydration warnings on the client when it identifies mismatches between the server-rendered HTML and the client-rendered HTML.

To stop this from happening, you can toggle on the [`ssr`](/react/api/createConfig#ssr) property in the Wagmi Config.

```tsx
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

const config = createConfig({ // [!code focus:99]
  chains: [mainnet, sepolia],
  ssr: true, // [!code ++]
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

Turning on the `ssr` property means that content from the external stores will be hydrated on the client after the initial mount.

### Persistence using Cookies

As a result of turning on the `ssr` property, external persistent stores like `localStorage` will be hydrated on the client **after the initial mount**.

This means that you will still see a flash of "empty" data on the client (e.g. a `"disconnected"` account instead of a `"reconnecting"` account, or an empty address instead of the last connected address) until after the first mount, when the store hydrates.

In order to persist data between the server and the client, you can use cookies.

#### 1. Set up cookie storage

First, we will set up cookie storage in the Wagmi Config.

```tsx
import { 
  createConfig, 
  http, 
  cookieStorage, // [!code ++]
  createStorage // [!code ++]
} from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia],
    ssr: true,
    storage: createStorage({  // [!code ++]
      storage: cookieStorage, // [!code ++]
    }),  // [!code ++]
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  })
}
```

#### 2. Hydrate the cookie

Next, we will need to add some mechanisms to hydrate the stored cookie in Wagmi.

##### Next.js App Directory

In our `app/layout.tsx` file (a [Server Component](https://nextjs.org/docs/app/building-your-application/rendering/server-components)), we will need to extract the cookie from the `headers` function and pass it to [`cookieToInitialState`](/react/api/utilities/cookieToInitialState).

We will need to pass this result to the [`initialState` property](/react/api/WagmiProvider#initialstate) of the `WagmiProvider`. The `WagmiProvider` **must** be in a Client Component tagged with `"use client"` (see `app/providers.tsx` tab).

::: code-group
```tsx [app/layout.tsx]
import { type ReactNode } from 'react'
import { headers } from 'next/headers' // [!code ++]
import { cookieToInitialState } from 'wagmi' // [!code ++]

import { getConfig } from './config'
import { Providers } from './providers'

export default function Layout({ children }: { children: ReactNode }) {
  const initialState = cookieToInitialState( // [!code ++]
    getConfig(), // [!code ++]
    headers().get('cookie') // [!code ++]
  ) // [!code ++]
  return (
    <html lang="en">
      <body>
        <Providers> // [!code --]
        <Providers initialState={initialState}> // [!code ++]
          {children}
        </Providers>
      </body>
    </html>
  )
}

```

```tsx [app/providers.tsx]
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'
import { type State, WagmiProvider } from 'wagmi'

import { getConfig } from './config'

type Props = {
  children: ReactNode,
  initialState: State | undefined, // [!code ++]
}

export function Providers({ children }: Props) {  // [!code --]
export function Providers({ children, initialState }: Props) {  // [!code ++]
  const [config] = useState(() => getConfig())
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}> // [!code --]
    <WagmiProvider config={config} initialState={initialState}> // [!code ++]
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

```

```tsx [app/config.ts]
import { 
  createConfig, 
  http, 
  cookieStorage,
  createStorage 
} from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia],
    ssr: true,
    storage: createStorage({  // [!code ++]
      storage: cookieStorage, // [!code ++]
    }),  // [!code ++]
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  })
}
```
:::

##### Next.js Pages Directory

Would you like to contribute this content? Feel free to [open a Pull Request](https://github.com/wevm/wagmi/pulls)!
<!-- TODO -->

##### Vanilla SSR

Would you like to contribute this content? Feel free to [open a Pull Request](https://github.com/wevm/wagmi/pulls)!
<!-- TODO -->


## 连接钱包

The ability for a user to connect their wallet is a core function for any Dapp. It allows users to perform tasks such as: writing to contracts, signing messages, or sending transactions.

Wagmi contains everything you need to get started with building a Connect Wallet module. To get started, you can either use a [third-party library](#third-party-libraries) or [build your own](#build-your-own).

### Third-party Libraries

You can use a pre-built Connect Wallet module from a third-party library such as:

- [ConnectKit](https://docs.family.co/connectkit) - [Guide](https://docs.family.co/connectkit/getting-started)
- [AppKit](https://walletconnect.com/appkit) - [Guide](https://docs.walletconnect.com/appkit/react/core/installation)
- [RainbowKit](https://www.rainbowkit.com/) - [Guide](https://www.rainbowkit.com/docs/installation)
- [Dynamic](https://www.dynamic.xyz/) - [Guide](https://docs.dynamic.xyz/quickstart)
- [Privy](https://privy.io) - [Guide](https://docs.privy.io/guide/react/wallets/usage/wagmi)

The above libraries are all built on top of Wagmi, handle all the edge cases around wallet connection, and provide a seamless Connect Wallet UX that you can use in your Dapp.

### Build Your Own

Wagmi provides you with the Hooks to get started building your own Connect Wallet module.

It takes less than five minutes to get up and running with Browser Wallets, WalletConnect, and Coinbase Wallet.

#### 1. 配置 Wagmi

`config.ts` 

::: code-group

```tsx [config.ts]
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
```

:::

In the above configuration, we want to set up connectors for Injected (browser), WalletConnect (browser + mobile), MetaMask, and Safe wallets. This configuration uses the **Mainnet** and **Base** chains, but you can use whatever you want.

::: warning

Make sure to replace the `projectId` with your own WalletConnect Project ID, if you wish to use WalletConnect!

[Get your Project ID](https://cloud.walletconnect.com/)

:::

#### 2. 把 App 用Context Provider包裹

Next, we will need to wrap our React App with Context so that our application is aware of Wagmi & React Query's reactive state and in-memory caching.

::: code-group

```tsx [app.tsx]
 // 1. Import modules
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'

// 2. Set up a React Query client.
const queryClient = new QueryClient()

function App() {
  // 3. Wrap app with Wagmi and React Query context.
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        {/** ... */} 
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
```

:::

#### 3. 放置钱包选项

After that, we will create a `WalletOptions` component that will display our connectors. This will allow users to select a wallet and connect.

Below, we are rendering a list of `connectors` retrieved from `useConnect`. When the user clicks on a connector, the `connect` function will connect the users' wallet.

::: code-group

```tsx [wallet-options.tsx]
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}
```

```tsx [app.tsx]
 // 1. Import modules
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'

// 2. Set up a React Query client.
const queryClient = new QueryClient()

function App() {
  // 3. Wrap app with Wagmi and React Query context.
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        {/* ... */}
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
```

```tsx [config.ts]
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
```

:::

#### 4. Display Connected AccountCard

Lastly, if an account is connected, we want to show some basic information, like the connected address and ENS name and avatar.

Below, we are using hooks like `useAccount`, `useEnsAvatar` and `useEnsName` to extract this information.

We are also utilizing `useDisconnect` to show a "Disconnect" button so a user can disconnect their wallet.

::: code-group

```tsx [account-card.tsx]
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function AccountCard() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}
```

```tsx [wallet-options.tsx]
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ))
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector
  onClick: () => void
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <button disabled={!ready} onClick={onClick}>
      {connector.name}
    </button>
  )
}
```

```tsx [app.tsx]
 // 1. Import modules
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'

// 2. Set up a React Query client.
const queryClient = new QueryClient()

function App() {
  // 3. Wrap app with Wagmi and React Query context.
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        {/* ... */}
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
```

```tsx [config.ts]
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
```

:::

#### 5. Wire it up!

Finally, we can wire up our Wallet Options and AccountCard components to our application's entrypoint.

::: code-group

```tsx [app.tsx]
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { AccountCard } from './account' // [!code ++]
import { WalletOptions } from './wallet-options' // [!code ++]

const queryClient = new QueryClient()

function ConnectWallet() { // [!code ++]
  const { isConnected } = useAccount() // [!code ++]
  if (isConnected) return <AccountCard /> // [!code ++]
  return <WalletOptions /> // [!code ++]
} // [!code ++]

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <ConnectWallet /> // [!code ++]
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
```

```tsx [account-card.tsx]
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function AccountCard() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}
```

```tsx [wallet-options.tsx]
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ))
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector
  onClick: () => void
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <button disabled={!ready} onClick={onClick}>
      {connector.name}
    </button>
  )
}
```

```tsx [config.ts]
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
```

:::

#### Playground

Want to see the above steps all wired up together in an end-to-end example? Check out the below StackBlitz playground.

<br/>

<iframe frameborder="0" width="100%" height="500px" src="https://stackblitz.com/edit/vitejs-vite-ujbsuv?embed=1&file=src%2FApp.tsx&hideExplorer=1&view=preview"></iframe>


## Send Transaction

The following guide teaches you how to send transactions in Wagmi. The example below builds on the [Connect Wallet guide](/react/guides/connect-wallet) and uses the [useSendTransaction](/react/api/hooks/useSendTransaction) & [useWaitForTransaction](/react/api/hooks/useWaitForTransactionReceipt) hooks.

### Example

Feel free to check out the example before moving on:

<iframe frameborder="0" width="100%" height="500px" src="https://stackblitz.com/edit/vitejs-vite-zkzqj7?embed=1&file=src%2FApp.tsx&hideExplorer=1&view=preview"></iframe>

### Steps

#### 1. Connect Wallet

Follow the [Connect Wallet guide](/react/guides/connect-wallet) guide to get this set up.

#### 2. Create a new component

Create your `SendTransaction` component that will contain the send transaction logic.

::: code-group

```tsx [send-transaction.tsx]
import * as React from 'react'
 
export function SendTransaction() {
  return (
    <form>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button type="submit">Send</button>
    </form>
  )
}
```

:::

#### 3. Add a form handler

Next, we will need to add a handler to the form that will send the transaction when the user hits "Send". This will be a basic handler in this step.

::: code-group

```tsx [send-transaction.tsx]
import * as React from 'react'
 
export function SendTransaction() {
  async function submit(e: React.FormEvent<HTMLFormElement>) { // [!code ++]
    e.preventDefault() // [!code ++]
    const formData = new FormData(e.target as HTMLFormElement) // [!code ++]
    const to = formData.get('address') as `0x${string}` // [!code ++]
    const value = formData.get('value') as string // [!code ++]
  } // [!code ++]

  return (
    <form> // [!code --]
    <form onSubmit={submit}> // [!code ++]
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button type="submit">Send</button>
    </form>
  )
}
```

:::

#### 4. Hook up the `useSendTransaction` Hook

Now that we have the form handler, we can hook up the [`useSendTransaction` Hook](/react/api/hooks/useSendTransaction) to send the transaction.

::: code-group

```tsx [send-transaction.tsx]
import * as React from 'react'
import { useSendTransaction } from 'wagmi' // [!code ++]
import { parseEther } from 'viem' // [!code ++]
 
export function SendTransaction() {
  const { data: hash, sendTransaction } = useSendTransaction() // [!code ++]

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const to = formData.get('address') as `0x${string}` 
    const value = formData.get('value') as string 
    sendTransaction({ to, value: parseEther(value) }) // [!code ++]
  } 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button type="submit">Send</button>
      {hash && <div>Transaction Hash: {hash}</div>} // [!code ++]
    </form>
  )
}
```

:::

#### 5. Add loading state (optional)

We can optionally add a loading state to the "Send" button while we are waiting confirmation from the user's wallet.

::: code-group

```tsx [send-transaction.tsx]
import * as React from 'react'
import { useSendTransaction } from 'wagmi' 
import { parseEther } from 'viem' 
 
export function SendTransaction() {
  const { 
    data: hash, 
    isPending, // [!code ++]
    sendTransaction 
  } = useSendTransaction() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const to = formData.get('address') as `0x${string}` 
    const value = formData.get('value') as string 
    sendTransaction({ to, value: parseEther(value) }) 
  } 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} // [!code ++]
        type="submit"
      >
        Send // [!code --]
        {isPending ? 'Confirming...' : 'Send'} // [!code ++]
      </button>
      {hash && <div>Transaction Hash: {hash}</div>} 
    </form>
  )
}
```

:::

#### 6. Wait for transaction receipt (optional)

We can also display the transaction confirmation status to the user by using the [`useWaitForTransactionReceipt` Hook](/react/api/hooks/useWaitForTransactionReceipt).

::: code-group

```tsx [send-transaction.tsx]
import * as React from 'react'
import { 
  useSendTransaction, 
  useWaitForTransactionReceipt // [!code ++]
} from 'wagmi' 
import { parseEther } from 'viem' 
 
export function SendTransaction() {
  const { 
    data: hash, 
    isPending, 
    sendTransaction 
  } = useSendTransaction() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const to = formData.get('address') as `0x${string}` 
    const value = formData.get('value') as string 
    sendTransaction({ to, value: parseEther(value) }) 
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = // [!code ++]
    useWaitForTransactionReceipt({ // [!code ++]
      hash, // [!code ++]
    }) // [!code ++]

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Send'} 
      </button>
      {hash && <div>Transaction Hash: {hash}</div>} 
      {isConfirming && <div>Waiting for confirmation...</div>} // [!code ++]
      {isConfirmed && <div>Transaction confirmed.</div>} // [!code ++]
    </form>
  )
}
```

:::

#### 7. Handle errors (optional)

If the user rejects the transaction, or the user does not have enough funds to cover the transaction, we can display an error message to the user.

::: code-group

```tsx [send-transaction.tsx]
import * as React from 'react'
import { 
  type BaseError, // [!code ++]
  useSendTransaction, 
  useWaitForTransactionReceipt 
} from 'wagmi' 
import { parseEther } from 'viem' 
 
export function SendTransaction() {
  const { 
    data: hash,
    error, // [!code ++] 
    isPending, 
    sendTransaction 
  } = useSendTransaction() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const to = formData.get('address') as `0x${string}` 
    const value = formData.get('value') as string 
    sendTransaction({ to, value: parseEther(value) }) 
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Send'} 
      </button>
      {hash && <div>Transaction Hash: {hash}</div>} 
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Transaction confirmed.</div>} 
      {error && ( // [!code ++]
        <div>Error: {(error as BaseError).shortMessage || error.message}</div> // [!code ++]
      )} // [!code ++]
    </form>
  )
}
```

:::

#### 8. Wire it up!

Finally, we can wire up our Send Transaction component to our application's entrypoint.

::: code-group

```tsx [app.tsx]
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { SendTransaction } from './send-transaction' // [!code ++]

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <SendTransaction /> // [!code ++]
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
```

```tsx [send-transaction.tsx]
import * as React from 'react'
import { 
  type BaseError, 
  useSendTransaction, 
  useWaitForTransactionReceipt 
} from 'wagmi' 
import { parseEther } from 'viem' 
 
export function SendTransaction() {
  const { 
    data: hash,
    error, 
    isPending, 
    sendTransaction 
  } = useSendTransaction() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const to = formData.get('address') as `0x${string}` 
    const value = formData.get('value') as string 
    sendTransaction({ to, value: parseEther(value) }) 
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Send'} 
      </button>
      {hash && <div>Transaction Hash: {hash}</div>} 
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Transaction confirmed.</div>} 
      {error && ( 
        <div>Error: {(error as BaseError).shortMessage || error.message}</div> 
      )} 
    </form>
  )
}
```

```tsx [config.ts]
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
```

:::

[See the Example.](#example)


## Read from Contract

The [`useReadContract` Hook](/react/api/hooks/useReadContract) allows you to read data on a smart contract, from a `view` or `pure` (read-only) function. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.

The component below shows how to retrieve the token balance of an address from the [Wagmi Example](https://etherscan.io/token/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2) contract

:::code-group

```tsx [read-contract.tsx]
import { useReadContract } from 'wagmi'

function ReadContract() {
  const { data: balance } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'balanceOf',
    args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
  })

  return (
    <div>Balance: {balance?.toString()}</div>
  )
}
```

:::

### Loading & Error States

The [`useReadContract` Hook](/react/api/hooks/useReadContract) also returns loading & error states, which can be used to display a loading indicator while the data is being fetched, or an error message if contract execution reverts.

:::code-group

```tsx [read-contract.tsx]
import { type BaseError, useReadContract } from 'wagmi'

function ReadContract() {
  const { 
    data: balance,
    error, // [!code ++]
    isPending // [!code ++]
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'balanceOf',
    args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
  })

  if (isPending) return <div>Loading...</div> // [!code ++]

  if (error) // [!code ++]
    return ( // [!code ++]
      <div> // [!code ++]
        Error: {(error as BaseError).shortMessage || error.message} // [!code ++]
      </div> // [!code ++]
    )  // [!code ++]

  return (
    <div>Balance: {balance?.toString()}</div>
  )
}
```

:::

### Calling Multiple Functions

We can use the [`useReadContract` Hook](/react/api/hooks/useReadContract) multiple times in a single component to call multiple functions on the same contract, but this ends up being hard to manage as the number of functions increases, especially when we also want to deal with loading & error states.

Luckily, to make this easier, we can use the [`useReadContracts` Hook](/react/api/hooks/useReadContracts) to call multiple functions in a single call.

:::code-group

```tsx [read-contract.tsx]
import { type BaseError, useReadContracts } from 'wagmi'

function ReadContract() {
  const { 
    data,
    error,
    isPending
  } = useReadContracts({ 
    contracts: [{ 
      ...wagmiContractConfig,
      functionName: 'balanceOf',
      args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
    }, { 
      ...wagmiContractConfig, 
      functionName: 'ownerOf', 
      args: [69n], 
    }, { 
      ...wagmiContractConfig, 
      functionName: 'totalSupply', 
    }] 
  }) 
  const [balance, ownerOf, totalSupply] = data || [] 

  if (isPending) return <div>Loading...</div>

  if (error)
    return (
      <div>
        Error: {(error as BaseError).shortMessage || error.message}
      </div>
    ) 

  return (
    <>
      <div>Balance: {balance?.toString()}</div>
      <div>Owner of Token 69: {ownerOf?.toString()}</div> 
      <div>Total Supply: {totalSupply?.toString()}</div> 
    </>
  )
}
```

:::

## Write to Contract

The [`useWriteContract` Hook](/react/api/hooks/useWriteContract) allows you to mutate data on a smart contract, from a `payable` or `nonpayable` (write) function. These types of functions require gas to be executed, hence a transaction is broadcasted in order to change the state.

In the guide below, we will teach you how to implement a "Mint NFT" form that takes in a dynamic argument (token ID) using Wagmi. The example below builds on the [Connect Wallet guide](/react/guides/connect-wallet) and uses the [useWriteContract](/react/api/hooks/useWriteContract) & [useWaitForTransaction](/react/api/hooks/useWaitForTransactionReceipt) hooks.

If you have already completed the [Sending Transactions guide](/react/guides/send-transaction), this guide will look very similar! That's because writing to a contract internally broadcasts & sends a transaction.

### Example

Feel free to check out the example before moving on:

<iframe frameborder="0" width="100%" height="500px" src="https://stackblitz.com/edit/vitejs-vite-f5uwlm?embed=1&file=src%2FApp.tsx&hideExplorer=1&view=preview"></iframe>

### Steps

#### 1. Connect Wallet

Follow the [Connect Wallet guide](/react/guides/connect-wallet) guide to get this set up.

#### 2. Create a new component

Create your `MintNFT` component that will contain the Mint NFT logic.

::: code-group

```tsx [mint-nft.tsx]
import * as React from 'react'
 
export function MintNFT() {
  return (
    <form>
      <input name="tokenId" placeholder="69420" required />
      <button type="submit">Mint</button>
    </form>
  )
}
```

:::

#### 3. Add a form handler

Next, we will need to add a handler to the form that will send the transaction when the user hits "Mint". This will be a basic handler in this step.

::: code-group

```tsx [mint-nft.tsx]
import * as React from 'react'
 
export function MintNFT() {
  async function submit(e: React.FormEvent<HTMLFormElement>) { // [!code ++]
    e.preventDefault() // [!code ++]
    const formData = new FormData(e.target as HTMLFormElement) // [!code ++]
    const tokenId = formData.get('tokenId') as string // [!code ++]
  } // [!code ++]

  return (
    <form> // [!code --]
    <form onSubmit={submit}> // [!code ++]
      <input name="tokenId" placeholder="69420" required />
      <button type="submit">Mint</button>
    </form>
  )
}
```

:::

#### 4. Hook up the `useWriteContract` Hook

Now that we have the form handler, we can hook up the [`useWriteContract` Hook](/react/api/hooks/useWriteContract) to send the transaction.

::: code-group

```tsx [mint-nft.tsx]
import * as React from 'react'
import { useWriteContract } from 'wagmi' // [!code ++]
import { abi } from './abi' // [!code ++]
 
export function MintNFT() {
  const { data: hash, writeContract } = useWriteContract() // [!code ++]

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    writeContract({ // [!code ++]
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', // [!code ++]
      abi, // [!code ++]
      functionName: 'mint', // [!code ++]
      args: [BigInt(tokenId)], // [!code ++]
    }) // [!code ++]
  } 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button type="submit">Mint</button>
      {hash && <div>Transaction Hash: {hash}</div>} // [!code ++]
    </form>
  )
}
```

```ts [abi.ts]
export const abi = [
  {
    name: 'mint',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [{ internalType: 'uint32', name: 'tokenId', type: 'uint32' }],
    outputs: [],
  },
] as const
```

:::

#### 5. Add loading state (optional)

We can optionally add a loading state to the "Mint" button while we are waiting confirmation from the user's wallet.

::: code-group

```tsx [mint-nft.tsx]
import * as React from 'react'
import { useWriteContract } from 'wagmi'
import { abi } from './abi'
 
export function MintNFT() {
  const { 
    data: hash, 
    isPending, // [!code ++]
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    writeContract({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'mint',
      args: [BigInt(tokenId)],
    })
  } 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} // [!code ++]
        type="submit"
      >
        Mint // [!code --]
        {isPending ? 'Confirming...' : 'Mint'} // [!code ++]
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  )
}
```

```ts [abi.ts]
export const abi = [
  {
    name: 'mint',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [{ internalType: 'uint32', name: 'tokenId', type: 'uint32' }],
    outputs: [],
  },
] as const
```

:::

#### 6. Wait for transaction receipt (optional)

We can also display the transaction confirmation status to the user by using the [`useWaitForTransactionReceipt` Hook](/react/api/hooks/useWaitForTransactionReceipt).

::: code-group

```tsx [mint-nft.tsx]
import * as React from 'react'
import { 
  useWaitForTransactionReceipt, // [!code ++]
  useWriteContract 
} from 'wagmi'
import { abi } from './abi'
 
export function MintNFT() {
  const { 
    data: hash, 
    isPending, 
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    writeContract({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'mint',
      args: [BigInt(tokenId)],
    })
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = // [!code ++]
    useWaitForTransactionReceipt({ // [!code ++]
      hash, // [!code ++]
    }) // [!code ++]

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Mint'} 
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>} // [!code ++]
      {isConfirmed && <div>Transaction confirmed.</div>} // [!code ++]
    </form>
  )
}
```

```ts [abi.ts]
export const abi = [
  {
    name: 'mint',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [{ internalType: 'uint32', name: 'tokenId', type: 'uint32' }],
    outputs: [],
  },
] as const
```

:::

#### 7. Handle errors (optional)

If the user rejects the transaction, or the contract reverts, we can display an error message to the user.

::: code-group

```tsx [mint-nft.tsx]
import * as React from 'react'
import { 
  type BaseError, // [!code ++]
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi'
import { abi } from './abi'
 
export function MintNFT() {
  const { 
    data: hash,
    error, // [!code ++]  
    isPending, 
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    writeContract({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'mint',
      args: [BigInt(tokenId)],
    })
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Mint'} 
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Transaction confirmed.</div>} 
      {error && ( // [!code ++]
        <div>Error: {(error as BaseError).shortMessage || error.message}</div> // [!code ++]
      )} // [!code ++]
    </form>
  )
}
```

```ts [abi.ts]
export const abi = [
  {
    name: 'mint',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [{ internalType: 'uint32', name: 'tokenId', type: 'uint32' }],
    outputs: [],
  },
] as const
```

:::

#### 8. Wire it up!

Finally, we can wire up our Mint NFT component to our application's entrypoint.

::: code-group

```tsx [app.tsx]
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { MintNft } from './mint-nft' // [!code ++]

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <MintNft /> // [!code ++]
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
```

```tsx [mint-nft.tsx]
import * as React from 'react'
import { 
  type BaseError, 
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi'
import { abi } from './abi'
 
export function MintNFT() {
  const { 
    data: hash,
    error,   
    isPending, 
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    writeContract({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'mint',
      args: [BigInt(tokenId)],
    })
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Mint'} 
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Transaction confirmed.</div>} 
      {error && ( 
        <div>Error: {(error as BaseError).shortMessage || error.message}</div> 
      )} 
    </form>
  )
}
```

```ts [abi.ts]
export const abi = [
  {
    name: 'mint',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [{ internalType: 'uint32', name: 'tokenId', type: 'uint32' }],
    outputs: [],
  },
] as const
```

```tsx [config.ts]
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
```

:::

[See the Example.](#example)


<script setup>
const docsPath = 'react'
</script>

## FAQ / Troubleshooting

Collection of frequently asked questions with ideas on how to troubleshoot and resolve them.

<!--@include: @shared/faq.md-->

### How does Wagmi work?

Until there's a more in-depth write-up about Wagmi internals, here is the gist:

- Wagmi is essentially a wrapper around [Viem](https://viem.sh) and TanStack Query that adds connector and multichain support.
- [Connectors](/react/api/connectors) allow Wagmi and Ethereum accounts to communicate with each other.
- The Wagmi [`Config`](/react/api/createConfig#config) manages connections established between Wagmi and Connectors, as well as some global state. [Connections](/react/api/createConfig#connection) come with one or more addresses and a chain ID.
  - If there are connections, the Wagmi `Config` listens for connection changes and updates the [`chainId`](/react/api/createConfig#chainid) based on the ["current" connection](/react/api/createConfig#current). (The Wagmi `Config` can have [many connections established](/react/api/createConfig#connections) at once, but only one connection can be the "current" connection. Usually this is the connection from the last connector that is connected, but can changed based on event emitted from other connectors or through the [`useSwitchAccount`](/react/api/hooks/useSwitchAccount) hook and [`switchAccount`](/core/api/actions/switchAccount) action.)
  - If there are no connections, the Wagmi `Config` defaults the global state `chainId` to the first chain it was created with or last established connection.
  - The global `chainId` can be changed directly using the [`useSwitchChain`](/react/api/hooks/useSwitchChain) hook and [`switchChain`](/core/api/actions/switchChain) action. This works when there are no connections as well as for most connectors (not all connectors support chain switching).
- Wagmi uses the global `chainId` (from the "current" connection or global state) to internally create Viem Client's, which are used by hooks and actions.
- Hooks are constructed by TanStack Query options helpers, exported by the `'@wagmi/core/query'` entrypoint, and some additional code to wire up type parameters, hook into React Context, etc.
- There are three types of hooks: query hooks, mutation hooks, and config hooks. Query hooks, like [`useCall`](/react/api/hooks/useCall), generally read blockchain state and mutation hooks, like [`useSendTransaction`](/react/api/hooks/useSendTransaction), usually change state through sending transactions via the "current" connection. Config hooks are for getting data from and managing the Wagmi `Config` instance, e.g. [`useChainId`](/react/api/hooks/useChainId) and `useSwitchAccount`. Query and mutation hooks usually have corresponding [Viem actions.](https://viem.sh)


---
title: Migrate from v1 to v2
description: Guide for migrating from Wagmi v1 to v2.
---

<script setup>
import packageJson from '../../../packages/react/package.json'

const viemVersion = packageJson.peerDependencies.viem
</script>

## Migrate from v1 to v2

### Overview

Wagmi v2 redesigns the core APIs to mesh better with [Viem](https://viem.sh) and [TanStack Query](https://tanstack.com/query/v5/docs/react). This major version transforms Wagmi into a light wrapper around these libraries, sprinkling in multichain support and account management. As such, there are some breaking changes and deprecations to be aware of outlined in this guide.

To get started, install the latest version of Wagmi and it's required peer dependencies.

::: code-group
```bash-vue [pnpm]
pnpm add wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [npm]
npm install wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [yarn]
yarn add wagmi viem@{{viemVersion}} @tanstack/react-query
```

```bash-vue [bun]
bun add wagmi viem@{{viemVersion}} @tanstack/react-query
```
:::

::: info Wagmi v2 should be the last major version that will have this many actionable breaking changes.
Moving forward after Wagmi v2, new functionality will be opt-in with old functionality being deprecated alongside the new features. This means upgrading to the latest major versions will not require immediate changes.
:::

::: info Not ready to migrate yet?
The Wagmi v1 docs are still available at [1.x.wagmi.sh/react](https://1.x.wagmi.sh/react).
:::

### Dependencies

#### Moved TanStack Query to peer dependencies

Wagmi uses [TanStack Query](https://tanstack.com/query/v5/docs/react) to manage async state, handling requests, caching, and more. With Wagmi v1, TanStack Query was an internal implementation detail. With Wagmi v2, TanStack Query is a peer dependency. A lot of Wagmi users also use TanStack Query in their apps so making it a peer dependency gives them more control and removes some custom Wagmi code internally.

If you don't normally use TanStack Query, all you need to do is set it up and mostly forget about it (we'll provide guidance around version updates).

::: code-group
```tsx [app.tsx]
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // [!code ++]
import { WagmiProvider } from 'wagmi'
import { config } from './config'

const queryClient = new QueryClient() // [!code ++]

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> // [!code ++]
        {/** ... */}
      </QueryClientProvider> // [!code ++]
    </WagmiProvider>
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

For more information on setting up TanStack Query for Wagmi, follow the [Getting Started docs](/react/getting-started#setup-tanstack-query). If you want to set up persistence for your query cache (default behavior before Wagmi v2), check out the [TanStack Query docs](https://tanstack.com/query/v5/docs/react/plugins/persistQueryClient#usage-with-react).

#### Dropped CommonJS support

Wagmi v2 no longer publishes a separate `cjs` tag since very few people use this tag and ESM is the future. See [Sindre Sorhus' guide](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for more info about switching to ESM.

### Hooks

#### Removed mutation setup arguments

Mutation hooks are hooks that change network or application state, sign data, or perform write operations through mutation functions. With Wagmi v1, you could pass arguments directly to these hooks instead of using them with their mutation functions. For example:

```ts{3}
// Wagmi v1
const { signMessage } = useSignMessage({
  message: 'foo bar baz',
})
```

With Wagmi v2, you must pass arguments to the mutation function instead. This follows the same behavior as [TanStack Query](https://tanstack.com/query/v5/docs/react/guides/mutations) mutations and improves type-safety.

```tsx
import { useSignMessage } from 'wagmi'

const { signMessage } = useSignMessage({ message: 'foo bar baz' }) // [!code --]
const { signMessage } = useSignMessage() // [!code ++]

<button
  onClick={() => signMessage()} // [!code --]
  onClick={() => signMessage({ message: 'foo bar baz' })} // [!code ++]
>
  Sign message
</button>
```

#### Moved TanStack Query parameters to `query` property

Previously, you could pass TanStack Query parameters, like `enabled` and `staleTime`, directly to hooks. In Wagmi v2, TanStack Query parameters are now moved to the `query` property. This allows Wagmi to better support TanStack Query type inference, control for future breaking changes since [TanStack Query is now a peer dependency](#moved-tanstack-query-to-peer-dependencies), and expose Wagmi-related hook property at the top-level of editor features, like autocomplete.

```tsx
useReadContract({
  enabled: false, // [!code --]
  staleTime: 1_000, // [!code --]
  query: { // [!code ++]
    enabled: false, // [!code ++]
    staleTime: 1_000, // [!code ++]
  }, // [!code ++]
})
```

#### Removed watch property

The `watch` property was removed from all hooks besides [`useBlock`](/react/api/hooks/useBlock) and [`useBlockNumber`](/react/api/hooks/useBlockNumber). This property allowed hooks to internally listen for block changes and automatically refresh their data. In Wagmi v2, you can compose `useBlock` or `useBlockNumber` along with [`React.useEffect`](https://react.dev/reference/react/useEffect) to achieve the same behavior. Two different approaches are outlined for `useBalance` below.

::: code-group
```ts [invalidateQueries]
import { useQueryClient } from '@tanstack/react-query' // [!code ++]
import { useEffect } from 'react' // [!code ++]
import { useBlockNumber, useBalance } from 'wagmi' // [!code ++]

const queryClient = useQueryClient() // [!code ++]
const { data: blockNumber } = useBlockNumber({ watch: true }) // [!code ++]
const { data: balance, queryKey } = useBalance({ // [!code ++]
  address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
  watch: true, // [!code --]
})

useEffect(() => { // [!code ++]
  queryClient.invalidateQueries({ queryKey }) // [!code ++]
}, [blockNumber, queryClient]) // [!code ++]
```
```ts [refetch]
import { useEffect } from 'react' // [!code ++]
import { useBlockNumber, useBalance } from 'wagmi' // [!code ++]

const { data: blockNumber } = useBlockNumber({ watch: true }) // [!code ++]
const { data: balance, refetch } = useBalance({
  address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
  watch: true, // [!code --]
})

useEffect(() => { // [!code ++]
  refetch() // [!code ++]
}, [blockNumber]) // [!code ++]
```
:::

This is a bit more code, but removes a lot of internal code from hooks that can slow down your app when not used and gives you more control. For example, you can easily refresh data every five blocks instead of every block.

```ts
const { data: blockNumber } = useBlockNumber({ watch: true })
const { data: balance, queryKey } = useBalance({
  address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
})

useEffect(() => {
  if (blockNumber % 5 === 0) // [!code focus]
    queryClient.invalidateQueries({ queryKey }) // [!code focus]
}, [blockNumber, queryClient])
```

#### Removed suspense property

Wagmi used to support an experimental `suspense` property via TanStack Query. Since TanStack Query [removed `suspense`](https://tanstack.com/query/v5/docs/react/guides/migrating-to-v5#new-hooks-for-suspense) from its `useQuery` hook, it is no longer supported by Wagmi Hooks.

Instead, you can use `useSuspenseQuery` along with TanStack Query-related exports from the `'wagmi/query'` entrypoint.

```ts
import { useSuspenseQuery } from '@tanstack/react-query' // [!code ++]
import { useConfig } from 'wagmi' // [!code ++]
import { getBalanceQueryOptions } from 'wagmi/query' // [!code ++]
import { useBalance } from 'wagmi' // [!code --]

const config = useConfig() // [!code ++]
const options = getBalanceQueryOptions(config, { address: '0x…' }) // [!code ++]
const result = useSuspenseQuery(options) // [!code ++]
const result = useBalance({ // [!code --]
  address: '0x…', // [!code --]
  suspense: true, // [!code --]
}) // [!code --]
```

#### Removed prepare hooks

`usePrepareContractWrite` and `usePrepareSendTransaction` were removed and replaced with idiomatic Viem alternatives. For `usePrepareContractWrite`, use [`useSimulateContract`](/react/api/hooks/useSimulateContract). Similar to `usePrepareContractWrite`, `useSimulateContract` composes well with `useWriteContract`

```tsx
import { usePrepareContractWrite, useWriteContract } from 'wagmi' // [!code --]
import { useSimulateContract, useWriteContract } from 'wagmi' // [!code ++]

const { config } = usePrepareContractWrite({ // [!code --]
const { data } = useSimulateContract({ // [!code ++]
  address: '0x',
  abi: [{
    type: 'function',
    name: 'transferFrom',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ type: 'bool' }],
  }],
  functionName: 'transferFrom',
  args: ['0x', '0x', 123n],
})
const { write } = useWriteContract(config) // [!code --]
const { writeContract } = useWriteContract() // [!code ++]

<button
  disabled={!Boolean(write)} // [!code --]
  onClick={() => write()} // [!code --]
  disabled={!Boolean(data?.request)} // [!code ++]
  onClick={() => writeContract(data!.request)} // [!code ++]
>
  Write contract
</button>
```

Instead of `usePrepareSendTransaction`, use [`useEstimateGas`](/react/api/hooks/useEstimateGas). You can pass `useEstimateGas` `data` to `useSendTransaction` to compose the two hooks.

```tsx
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi' // [!code --]
import { useEstimateGas, useSendTransaction } from 'wagmi' // [!code ++]
import { parseEther } from 'viem'

const { config } = usePrepareSendTransaction({ // [!code --]
const { data } = useEstimateGas({ // [!code ++]
  to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  value: parseEther('0.01'),
})
const { sendTransaction } = useSendTransaction(config) // [!code --]
const { sendTransaction } = useSendTransaction() // [!code ++]

<button
  disabled={!Boolean(sendTransaction)} // [!code --]
  onClick={() => sendTransaction()} // [!code --]
  disabled={!Boolean(data)} // [!code ++]
  onClick={() => sendTransaction({ // [!code ++]
    gas: data, // [!code ++]
    to: '0xd2135CfB216b74109775236E36d4b433F1DF507B', // [!code ++]
    value: parseEther('0.01'), // [!code ++]
  })} // [!code ++]
>
  Send transaction
</button>
```

This might seem like more work, but it gives you more control and is more accurate representation of what is happening under the hood.

#### Removed `useNetwork` hook

The `useNetwork` hook was removed since the connected chain is typically based on the connected account. Use [`useAccount`](/react/api/hooks/useAccount) to get the connected `chain`.

```ts
import { useNetwork } from 'wagmi' // [!code --]
import { useAccount } from 'wagmi' // [!code ++]

const { chain } = useNetwork() // [!code --]
const { chain } = useAccount() // [!code ++]
```

Use `useConfig` for the list of `chains` set up with the Wagmi [`Config`](/react/api/createConfig#chains).

```ts
import { useNetwork } from 'wagmi' // [!code --]
import { useConfig } from 'wagmi' // [!code ++]

const { chains } = useNetwork() // [!code --]
const { chains } = useConfig() // [!code ++]
```

#### Removed `onConnect` and `onDisconnect` callbacks from `useAccount`

The `onConnect` and `onDisconnect` callbacks were removed from the `useAccount` hook since it is frequently used without these callbacks so it made sense to extract these into a new API, [`useAccountEffect`](/react/api/hooks/useAccountEffect), rather than clutter the `useAccount` hook.

```ts
import { useAccount } from 'wagmi' // [!code --]
import { useAccountEffect } from 'wagmi' // [!code ++]

useAccount({ // [!code --]
useAccountEffect({ // [!code ++]
  onConnect(data) {
    console.log('connected', data)
  },
  onDisconnect() {
    console.log('disconnected')
  },
}) 
```

#### Removed `useWebSocketPublicClient`

The Wagmi [`Config`](/react/api/createConfig) does not separate transport types anymore. Simply use Viem's [`webSocket`](https://viem.sh/docs/clients/transports/websocket.html) transport instead when setting up your Wagmi `Config`. You can get Viem `Client` instance with this transport attached by using [`useClient`](/react/api/hooks/useClient) or [`usePublicClient`](/react/api/hooks/usePublicClient).

#### Removed `useInfiniteReadContracts` `paginatedIndexesConfig`

In the spirit of removing unnecessary abstractions, `paginatedIndexesConfig` was removed. Use `useInfiniteReadContracts`'s `initialPageParam` and `getNextPageParam` parameters along with `fetchNextPage`/`fetchPreviousPage` from the result instead or copy `paginatedIndexesConfig`'s implementation to your codebase.

See the [TanStack Query docs](https://tanstack.com/query/v5/docs/react/guides/infinite-queries) for more information on infinite queries.

#### Updated `useSendTransaction` and `useWriteContract` return type

Updated [`useSendTransaction`](/react/api/hooks/useSendTransaction) and [`useWriteContract`](/react/api/hooks/useWriteContract) return type from `` { hash: `0x${string}` } `` to `` `0x${string}` ``.

```ts
const result = useSendTransaction()
result.data?.hash // [!code --]
result.data // [!code ++]
```

#### Updated `useConnect` return type

Updated [`useConnect`](/react/api/hooks/useConnect) return type from `` { account: Address; chain: { id: number; unsupported?: boolean }; connector: Connector } `` to `` { accounts: readonly Address[]; chainId: number } ``. This better reflects the ability to have multiple accounts per connector.

#### Renamed parameters and return types

All hook parameters and return types follow the naming pattern of `[PascalCaseHookName]Parameters` and `[PascalCaseHookName]ReturnType`. For example, `UseAccountParameters` and `UseAccountReturnType`.

```ts
import { UseAccountConfig, UseAccountResult } from 'wagmi' // [!code --]
import { UseAccountParameters, UseAccountReturnType } from 'wagmi' // [!code ++]
```

### Connectors

#### Updated connector API

In order to maximize type-safety and ease of creating connectors, the connector API changed. Follow the [Creating Connectors guide](/dev/creating-connectors) for more info on creating new connectors and converting Wagmi v1 connectors.

#### Removed individual entrypoints

Previously, each connector had it's own entrypoint to optimize tree-shaking. Since all connectors now have [`package.json#sideEffects`](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free) enabled, this is no longer necessary and the entrypoint is unified. Use the `'wagmi/connectors'` entrypoint instead.

```ts
import { InjectedConnector } from 'wagmi/connectors/injected' // [!code --]
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet' // [!code --]
import { coinbaseWallet, injected } from 'wagmi/connectors' // [!code ++]
```

#### Removed `MetaMaskConnector`

The `MetaMaskConnector` was removed since it was nearly the same thing as the `InjectedConnector`. Use the [`injected`](/react/api/connectors/injected) connector instead, along with the [`target`](/react/api/connectors/injected#target) parameter set to `'metaMask'`, for the same behavior.

```ts
import { MetaMaskConnector } from 'wagmi/connectors/metaMask' // [!code --]
import { injected } from 'wagmi/connectors' // [!code ++]

const connector = new MetaMaskConnector() // [!code --]
const connector = injected({ target: 'metaMask' }) // [!code ++]
```
#### Renamed connectors

In Wagmi v1, connectors were classes you needed to instantiate. In Wagmi v2, connectors are functions. As a result, the API has changed. Connectors have the following new names:

- `CoinbaseWalletConnector` is now [`coinbaseWallet`](/react/api/connectors/coinbaseWallet).
- `InjectedConnector` is now [`injected`](/react/api/connectors/injected).
- `SafeConnector` is now [`safe`](/react/api/connectors/safe).
- `WalletConnectConnector` is now [`walletConnect`](/react/api/connectors/walletConnect).

To create a connector, you now call the connector function with parameters.

```ts
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect' // [!code --]
import { walletConnect } from 'wagmi/connectors' // [!code ++]

const connector = new WalletConnectConnector({ // [!code --]
const connector = walletConnect({ // [!code ++]
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

#### Removed `WalletConnectLegacyConnector`

WalletConnect v1 was sunset June 28, 2023. Use the [`walletConnect`](/react/api/connectors/walletConnect) connector instead.

```ts
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy' // [!code --]
import { walletConnect } from 'wagmi/connectors' // [!code ++]

const connector = new WalletConnectLegacyConnector({ // [!code --]
const connector = walletConnect({ // [!code ++]
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

### Chains

#### Updated `'wagmi/chains'` entrypoint

Chains now live in the [Viem repository](https://github.com/wevm/viem). As a result, the `'wagmi/chains'` entrypoint now proxies all chains from `'viem/chains'` directly.

#### Removed `mainnet` and `sepolia` from main entrypoint

Since the `'wagmi/chains'` entrypoint now proxies `'viem/chains'`, `mainnet` and `sepolia` were removed from the main entrypoint. Use the `'wagmi/chains'` entrypoint instead.

```ts
import { mainnet, sepolia } from 'wagmi' // [!code --]
import { mainnet, sepolia } from 'wagmi/chains' // [!code ++]
```

### Errors

A number of errors were renamed to better reflect their functionality or replaced by Viem errors.

### Miscellaneous

#### Removed internal ENS name normalization

Before v2, Wagmi handled ENS name normalization internally for `useEnsAddress`, `useEnsAvatar`, and `useEnsResolver`, using Viem's [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function. This added extra bundle size as full normalization is quite heavy. For v2, you must normalize ENS names yourself before passing them to these hooks. You can use Viem's `normalize` function or any other function that performs [UTS-46 normalization](https://unicode.org/reports/tr46).

```ts
import { useEnsAddress } from 'wagmi'
import { normalize } from 'viem/ens' // [!code ++]

const result = useEnsAddress({
  name: 'wevm.eth', // [!code --]
  name: normalize('wevm.eth'), // [!code ++]
})
```

By inverting control, Wagmi let's you choose how much normalization to do. For example, maybe your project only allows ENS names that are numeric so no normalization is not needed. Check out the [ENS documentation](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) for more information on normalizing names.

#### Removed `configureChains`

The Wagmi v2 `Config` now has native multichain support using the [`chains`](/react/api/createConfig) parameter so the `configureChains` function is no longer required.

```ts
import { configureChains, createConfig } from 'wagmi' // [!code --]
import { http, createConfig } from 'wagmi' // [!code ++]
import { mainnet, sepolia } from 'wagmi/chains'

const { chains, publicClient } = configureChains( // [!code --]
  [mainnet, sepolia], // [!code --]
  [publicProvider(), publicProvider()], // [!code --]
) // [!code --]

export const config = createConfig({
  publicClient, // [!code --]
  chains: [mainnet, sepolia], // [!code ++]
  transports: { // [!code ++]
    [mainnet.id]: http(), // [!code ++]
    [sepolia.id]: http(), // [!code ++]
  }, // [!code ++]
})
```

#### Removed ABI exports

Import from Viem instead.

```ts
import { erc20ABI } from 'wagmi' // [!code --]
import { erc20Abi } from 'viem' // [!code ++]
```

#### Removed `'wagmi/providers/*` entrypoints

It never made sense that we would have provider URLs hardcoded in the Wagmi codebase. Use [Viem transports](https://viem.sh/docs/clients/intro.html#transports) along with RPC provider URLs instead.

```ts
import { alchemyProvider } from 'wagmi/providers/alchemy' // [!code --]
import { http } from 'viem' // [!code ++]

const transport = http('https://mainnet.example.com')
```

#### Updated `createConfig` parameters

- Removed `autoConnect`. The reconnecting behavior is now managed by React and not related to the Wagmi `Config`. Use `WagmiProvider` [`reconnectOnMount`](/react/api/WagmiProvider#reconnectonmount) or [`useReconnect`](/react/api/hooks/useReconnect) hook instead.
- Removed `publicClient` and `webSocketPublicClient`. Use [`transports`](/react/api/createConfig#transports) or [`client`](/react/api/createConfig#client) instead.
- Removed `logger`. Wagmi no longer logs debug information to console.

#### Updated `Config` object

- Removed `config.connector`. Use `config.state.connections.get(config.state.current)?.connector` instead.
- Removed `config.data`. Use `config.state.connections.get(config.state.current)` instead.
- Removed `config.error`. Was unused and not needed.
- Removed `config.lastUsedChainId`. Use `config.state.connections.get(config.state.current)?.chainId` instead.
- Removed `config.publicClient`. Use [`config.getClient()`](/react/api/createConfig#getclient) or [`getPublicClient`](/core/api/actions/getPublicClient) instead.
- Removed `config.status`. Use [`config.state.status`](/react/api/createConfig#status) instead.
- Removed `config.webSocketClient`. Use [`config.getClient()`](/react/api/createConfig#getclient) or [`getPublicClient`](/core/api/actions/getPublicClient) instead.
- Removed `config.clearState`. Was unused and not needed.
- Removed `config.autoConnect()`. Use [`reconnect`](/core/api/actions/reconnect) action instead.
- Renamed `config.setConnectors`. Use `config._internal.setConnectors` instead.
- Removed `config.setLastUsedConnector`. Use `config.storage?.setItem('recentConnectorId', connectorId)` instead.
- Removed `getConfig`. `config` should be passed explicitly to actions instead of using global `config`.

### Deprecations

#### Renamed `WagmiConfig`

`WagmiConfig` was renamed to [`WagmiProvider`](/react/api/WagmiProvider) to reduce confusion with the Wagmi [`Config`](/react/api/createConfig) type. React Context Providers usually follow the naming schema `*Provider` so this is a more idiomatic name. Now that Wagmi no longer uses Ethers.js (since Wagmi v1), the term "Provider" is less overloaded.

::: code-group
```tsx [app.tsx]
import { WagmiConfig } from 'wagmi' // [!code --]
import { WagmiProvider } from 'wagmi' // [!code ++]
import { config } from './config'

function App() {
  return (
    <WagmiConfig config={config}> // [!code --]
    <WagmiProvider config={config}> // [!code ++]
      {/** ... */}
    </WagmiProvider> // [!code ++]
    </WagmiConfig> // [!code --]
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### Deprecated `useBalance` `token` parameter

Moving forward, `useBalance` will only work for native currencies, thus the `token` parameter is no longer supported. Use [`useReadContracts`](/react/api/hooks/useReadContracts) instead.

```ts
import { useBalance } from 'wagmi' // [!code --]
import { useReadContracts } from 'wagmi' // [!code ++]
import { erc20Abi } from 'viem' // [!code ++]

const result = useBalance({ // [!code --]
  address: '0x4557B18E779944BFE9d78A672452331C186a9f48', // [!code --]
  token: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code --]
}) // [!code --]
const result = useReadContracts({ // [!code ++]
  allowFailure: false, // [!code ++]
  contracts: [ // [!code ++]
    { // [!code ++]
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code ++]
      abi: erc20Abi, // [!code ++]
      functionName: 'balanceOf', // [!code ++]
      args: ['0x4557B18E779944BFE9d78A672452331C186a9f48'], // [!code ++]
    }, // [!code ++]
    { // [!code ++]
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code ++]
      abi: erc20Abi, // [!code ++]
      functionName: 'decimals', // [!code ++]
    }, // [!code ++]
    { // [!code ++]
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code ++]
      abi: erc20Abi, // [!code ++]
      functionName: 'symbol', // [!code ++]
    }, // [!code ++]
  ] // [!code ++]
}) // [!code ++]
```

#### Deprecated `useBalance` `unit` parameter and `formatted` return value

Moving forward, `useBalance` will not accept the `unit` parameter or return a `formatted` value. Instead you can call `formatUnits` from Viem directly or use another number formatting library, like [dnum](https://github.com/bpierre/dnum) instead.

```ts
import { formatUnits } from 'viem' // [!code ++]
import { useBalance } from 'wagmi'

const result = useBalance({
  address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
  unit: 'ether', // [!code --]
})
result.data!.formatted // [!code --]
formatUnits(result.data!.value, result.data!.decimals) // [!code ++]
```

#### Deprecated `useToken`

Moving forward, `useToken` is no longer supported. Use [`useReadContracts`](/react/api/hooks/useReadContracts) instead.

```ts
import { useToken } from 'wagmi' // [!code --]
import { useReadContracts } from 'wagmi' // [!code ++]
import { erc20Abi } from 'viem' // [!code ++]

const result = useToken({ // [!code --]
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code --]
}) // [!code --]
const result = useReadContracts({ // [!code ++]
  allowFailure: false, // [!code ++]
  contracts: [ // [!code ++]
    { // [!code ++]
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code ++]
      abi: erc20Abi, // [!code ++]
      functionName: 'decimals', // [!code ++]
    }, // [!code ++]
    { // [!code ++]
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code ++]
      abi: erc20Abi, // [!code ++]
      functionName: 'name', // [!code ++]
    }, // [!code ++]
    { // [!code ++]
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code ++]
      abi: erc20Abi, // [!code ++]
      functionName: 'symbol', // [!code ++]
    }, // [!code ++]
    { // [!code ++]
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code ++]
      abi: erc20Abi, // [!code ++]
      functionName: 'totalSupply', // [!code ++]
    }, // [!code ++]
  ] // [!code ++]
}) // [!code ++]
```

#### Deprecated `formatUnits` parameters and return values

The `formatUnits` parameter and related return values (e.g. `result.formatted`) are deprecated for the following hooks:

- [`useEstimateFeesPerGas`](/react/api/hooks/useEstimateFeesPerGas)
- [`useToken`](/react/api/hooks/useToken)

Instead you can call `formatUnits` from Viem directly or use another number formatting library, like [dnum](https://github.com/bpierre/dnum) instead.

```ts
import { formatUnits } from 'viem' // [!code ++]

const result = useToken({
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  formatUnits: 'ether',
})
result.data!.totalSupply.formatted  // [!code --]
formatUnits(result.data!.totalSupply.value, 18)  // [!code ++]
```

This allows us to invert control to users so they can handle number formatting however they want, taking into account precision, localization, and more.

#### Renamed hooks

The following hooks were renamed to better reflect their functionality and underlying [Viem](https://viem.sh) actions:

- `useContractRead` is now [`useReadContract`](/react/api/hooks/useReadContract)
- `useContractReads` is now [`useReadContracts`](/react/api/hooks/useReadContracts)
- `useContractWrite` is now [`useWriteContract`](/react/api/hooks/useWriteContract)
- `useContractEvent` is now [`useWatchContractEvent`](/react/api/hooks/useWatchContractEvent)
- `useContractInfiniteReads` is now [`useInfiniteReadContracts`](/react/api/hooks/useInfiniteReadContracts)
- `useFeeData` is now [`useEstimateFeesPerGas`](/react/api/hooks/useEstimateFeesPerGas)
- `useSwitchNetwork` is now [`useSwitchChain`](/react/api/hooks/useSwitchChain)
- `useWaitForTransaction` is now [`useWaitForTransactionReceipt`](/react/api/hooks/useWaitForTransactionReceipt)

#### Miscellaneous

- `WagmiConfigProps` renamed to [`WagmiProviderProps`](/react/api/WagmiProvider#parameters).
- `Context` renamed to [`WagmiContext`](/react/api/WagmiProvider#context).

# Configuration
<!--
<script setup>
const docsPath = 'react'
const packageName = 'wagmi'
const connectorsPackageName = 'wagmi/connectors'
</script>
-->

## createConfig

Creates new [`Config`](#config) object.

### Import

```ts-vue
import { createConfig } from '{{packageName}}'
```

### Usage

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

::: tip Integrating a Viem Client

Instead of using [`transports`](#transports), it's possible to provide a function that returns a Viem [`Client`](https://viem.sh/docs/clients/custom.html) via the [`client`](#client) property for more fine-grained control over Wagmi's internal `Client` creation.

```ts-vue {3,7-9}
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'
import { createClient } from 'viem'

const config = createConfig({
  chains: [mainnet, sepolia],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
})
```
:::

### Parameters

```ts-vue
import { type CreateConfigParameters } from '{{packageName}}'
```

#### chains

`readonly [Chain, ...Chain[]]`

- Chains used by the `Config`.
- See <a :href="`/${docsPath}/api/chains`">Chains</a> for more details about built-in chains and the `Chain` type.

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia], // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

#### connectors

`CreateConnectorFn[] | undefined`

<a :href="`/${docsPath}/api/connectors`">Connectors</a> used by the `Config`.

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'
import { injected } from '{{connectorsPackageName}}' // [!code focus]

const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()], // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

#### multiInjectedProviderDiscovery

`boolean | undefined`

- Enables discovery of injected providers via [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) using the [`mipd`](https://github.com/wevm/mipd) library and converting to <a :href="`/${docsPath}/api/connectors/injected`">injected</a> connectors.
- Defaults to `true`.

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  multiInjectedProviderDiscovery: false, // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

#### ssr

`boolean | undefined`

Flag to indicate if the config is being used in a server-side rendering environment. Defaults to `false`.

```ts-vue
import { createConfig, http } from '{{packageName}}' // [!code focus]
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  ssr: true, // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

#### storage

`Storage | null | undefined`

- <a :href="`/${docsPath}/api/createStorage#storage`">`Storage`</a> used by the config. Persists `Config`'s [`State`](#state-1) between sessions.
- Defaults to `createStorage({ storage: typeof window !== 'undefined' && window.localStorage ? window.localStorage : noopStorage })`.

```ts-vue
import { createConfig, createStorage, http } from '{{packageName}}' // [!code focus]
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  storage: createStorage({ storage: window.localStorage }), // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

#### syncConnectedChain

`boolean | undefined`

- Keep the [`State['chainId']`](#chainid) in sync with the current connection.
- Defaults to `true`.

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  syncConnectedChain: false, // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

---

#### batch

`{ multicall?: boolean | { batchSize?: number | undefined; wait?: number | undefined } | undefined } | { [_ in chains[number]["id"]]?: { multicall?: boolean | { batchSize?: number | undefined; wait?: number | undefined } | undefined } | undefined } | undefined`

- Batch settings. See [Viem docs](https://viem.sh/docs/clients/custom.html#batch-optional) for more info.
- Defaults to `{ multicall: true }`.

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  batch: { multicall: true }, // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

#### cacheTime

`number | { [_ in chains[number]['id']]?: number | undefined } | undefined`

- Frequency in milliseconds for polling enabled features. See [Viem docs](https://viem.sh/docs/clients/public.html#cachetime-optional) for more info.
- Defaults to [`pollingInterval`](#pollinginterval) or `4_000`.

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  cacheTime: 4_000, // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

#### pollingInterval

`number | { [_ in chains[number]['id']]?: number | undefined } | undefined`

- Frequency in milliseconds for polling enabled features. See [Viem docs](https://viem.sh/docs/clients/custom.html#pollinginterval-optional) for more info.
- Defaults to `4_000`.

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  pollingInterval: 4_000, // [!code focus]
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

#### transports

`Record<chains[number]['id'], Transport>`

Mapping of [chain IDs](#chains) to <a :href="`/${docsPath}/api/transports`">`Transport`</a>s. This mapping is used internally when creating chain-aware Viem [`Client`](https://viem.sh/docs/clients/custom.html) objects. See the <a :href="`/${docsPath}/api/transports`">Transport docs</a> for more info.

```ts-vue
import { createConfig, fallback, http } from '{{packageName}}' // [!code focus]
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: { // [!code focus]
    [mainnet.id]: fallback([ // [!code focus]
      http('https://...'), // [!code focus]
      http('https://...'), // [!code focus]
    ]), // [!code focus]
    [sepolia.id]: http('https://...'), // [!code focus]
  }, // [!code focus]
})
```

---

#### client

`(parameters: { chain: chains[number] }) => Client<Transport, chains[number]>`

Function for creating new Viem [`Client`](https://viem.sh/docs/clients/custom.html) to be used internally. Exposes more control over the internal `Client` creation logic versus using the [`transports`](#transports) property.

```ts-vue
import { createClient, http } from 'viem' // [!code focus]
import { createConfig } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  client({ chain }) { // [!code focus]
    return createClient({ chain, transport: http('https://...') }) // [!code focus]
  }, // [!code focus]
})
```

::: warning
When using this option, you likely want to pass `parameters.chain` straight through to [`createClient`](https://viem.sh/docs/clients/custom.html#createclient) to ensure the Viem `Client` is in sync with any active connections.
:::

### Return Type

```ts-vue
import { type Config } from '{{packageName}}'
```

### Config

Object responsible for managing Wagmi state and internals.

```ts-vue
import { type Config } from '{{packageName}}'
```

#### chains

`readonly [Chain, ...Chain[]]`

[`chains`](#chains) passed to `createConfig`.

#### connectors

`readonly Connector[]`

Connectors set up from passing [`connectors`](#connectors) and [`multiInjectedProviderDiscovery`](#multiinjectedproviderdiscovery) to `createConfig`.

#### state

`State<chains>`

The `Config` object's internal state. See [`State`](#state-1) for more info.

#### storage

`Storage | null`

[`storage`](#storage) passed to `createConfig`.

#### getClient

`(parameters?: { chainId?: chainId | chains[number]['id'] | undefined }): Client<transports[chainId], Extract<chains[number], { id: chainId }>>`

Creates new Viem [`Client`](https://viem.sh/docs/clients/custom.html) object.

::: code-group
```ts-vue [index.ts]
import { config } from './config'

const client = config.getClient({ chainId: 1 })
```

```ts-vue [config.ts]
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

:::

#### setState

`(value: State<chains> | ((state: State<chains>) => State<chains>)) => void`

Updates the `Config` object's internal state. See [`State`](#state-1) for more info.

::: code-group
```ts-vue [index.ts]
import { mainnet } from '{{packageName}}/chains'
import { config } from './config'

config.setState((x) => ({
  ...x,
  chainId: x.current ? x.chainId : mainnet.id,
}))
```

```ts-vue [config.ts]
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

:::

::: warning
Exercise caution when using this method. It is intended for internal and advanced use-cases only. Manually setting state can cause unexpected behavior.
:::

#### subscribe

`(selector: (state: State<chains>) => state, listener: (selectedState: state, previousSelectedState: state) => void, options?: { emitImmediately?: boolean | undefined; equalityFn?: ((a: state, b: state) => boolean) | undefined } | undefined) => (() => void)`

Listens for state changes matching the `selector` function. Returns a function that can be called to unsubscribe the listener.

::: code-group
```ts-vue [index.ts]
import { config } from './config'

const unsubscribe = config.subscribe(
  (state) => state.chainId,
  (chainId) => console.log(`Chain ID changed to ${chainId}`),
)
unsubscribe()
```

```ts-vue [config.ts]
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
```

:::

### State

```ts-vue
import { type State } from '{{packageName}}'
```

#### chainId

`chains[number]['id']`

Current chain ID. When `syncConnectedChain` is `true`, `chainId` is kept in sync with the current connection. Defaults to first chain in [`chains`](#chains).

#### connections

`Map<string, Connection>`

Mapping of unique connector identifier to [`Connection`](#connection) object.

#### current

`string | undefined`

Unique identifier of the current connection.

#### status

`'connected' | 'connecting' | 'disconnected' | 'reconnecting'`

Current connection status.

- `'connecting'` attempting to establish connection.
- `'reconnecting'` attempting to re-establish connection to one or more connectors.
- `'connected'` at least one connector is connected.
- `'disconnected'` no connection to any connector.

### Connection

```ts-vue
import { type Connection } from '{{packageName}}'
```

#### accounts

`readonly [Address, ...Address[]]`

Array of addresses associated with the connection.

#### chainId

`number`

Chain ID associated with the connection.

#### connector

`Connector`

Connector associated with the connection.

<!--
<script setup>
const docsPath = 'react'
const packageName = 'wagmi'
</script>
-->

## createStorage

Creates new [`Storage`](#storage) object.

### Import

```ts-vue
import { createStorage } from '{{packageName}}'
```

### Usage

```ts-vue
import { createStorage } from '{{packageName}}'

const storage = createStorage({ storage: localStorage })
```

### Parameters

```ts-vue
import { type CreateStorageParameters } from '{{packageName}}'
```

#### deserialize

`(<T>(value: string) => T) | undefined`

- Function to deserialize data from storage.
- Defaults to <a :href="`/${docsPath}/api/utilities/deserialize`">`deserialize`</a>.

```ts-vue
import { createStorage, deserialize } from '{{packageName}}' // [!code focus]

const storage = createStorage({
  deserialize, // [!code focus]
  storage: localStorage,
})
```

::: warning
If you use a custom `deserialize` function, make sure it can handle `bigint` and `Map` values.
:::

#### key

`string | undefined`

- Key prefix to use when persisting data.
- Defaults to `'wagmi'`.

```ts-vue
import { createStorage } from '{{packageName}}'

const storage = createStorage({
  key: 'my-app', // [!code focus]
  storage: localStorage,
})
```

#### serialize

`(<T>(value: T) => string) | undefined`

- Function to serialize data for storage.
- Defaults to <a :href="`/${docsPath}/api/utilities/serialize`">`serialize`</a>.

```ts-vue
import { createStorage, serialize } from '{{packageName}}' // [!code focus]

const storage = createStorage({
  serialize, // [!code focus]
  storage: localStorage,
})
```

::: warning
If you use a custom `serialize` function, make sure it can handle `bigint` and `Map` values.
:::

#### storage

`{ getItem(key: string): string | null | undefined | Promise<string | null | undefined>; setItem(key: string, value: string): void | Promise<void>; removeItem(key: string): void | Promise<void>; }`

- Storage interface to use for persisting data.
- Defaults to `localStorage`.
- Supports synchronous and asynchronous storage methods.

```ts-vue
import { createStorage } from '{{packageName}}'
// Using IndexedDB via https://github.com/jakearchibald/idb-keyval // [!code focus]
import { del, get, set } from 'idb-keyval' // [!code focus]

const storage = createStorage({
  storage: { // [!code focus]
    async getItem(name) { // [!code focus]
      return get(name)// [!code focus]
    }, // [!code focus]
    async setItem(name, value) { // [!code focus]
      await set(name, value) // [!code focus]
    }, // [!code focus]
    async removeItem(name) { // [!code focus]
      await del(name) // [!code focus]
    }, // [!code focus]
  }, // [!code focus]
})
```

### Return Type

```ts-vue
import { type Storage } from '{{packageName}}'
```

### Storage

Object responsible for persisting Wagmi <a :href="`/${docsPath}/api/createConfig#state-1`">`State`</a> and other data.

```ts-vue
import { type Storage } from '{{packageName}}'
```

#### getItem

`getItem(key: string, defaultValue?: value | null | undefined): value | null | Promise<value | null>`

```ts-vue
import { createStorage } from '{{packageName}}'

const storage = createStorage({ storage: localStorage })
const recentConnectorId = storage.getItem('recentConnectorId') // [!code focus]
```

#### setItem

`setItem(key: string, value: any): void | Promise<void>`

```ts-vue
import { createStorage } from '{{packageName}}'

const storage = createStorage({ storage: localStorage })
storage.setItem('recentConnectorId', 'foo') // [!code focus]
```

#### removeItem

`removeItem(key: string): void | Promise<void>`

```ts-vue
import { createStorage } from '{{packageName}}'

const storage = createStorage({ storage: localStorage })
storage.removeItem('recentConnectorId') // [!code focus]
```

<script setup>
import packageJson from '../../../package.json'
import SearchChains from '../../components/SearchChains.vue'

const viemVersion = packageJson.devDependencies.viem
</script>

## Chains

### Import

Import via the `'@wagmi/core/chains'` entrypoint (proxies all chains from `'viem/chains'`).

```ts
import { mainnet } from '@wagmi/core/chains'
```

### Available Chains

Chain definitions as of `viem@{{viemVersion}}`. For `viem@latest`, visit the [Viem repo](https://github.com/wevm/viem/blob/main/src/chains/index.ts).

<SearchChains />

<!--@include: @shared/create-chain.md-->

### Create Chain

Import the `Chain` type from Viem and create a new object that is asserted `as const` and `satisfies` the type. You can also use the `defineChain` function from Viem.

::: code-group
```ts twoslash [as const satisfies Chain]
// @errors: 1360
import { type Chain } from 'viem'

export const mainnet = {} as const satisfies Chain
```
```ts twoslash [defineChain]
// @errors: 2345
import { defineChain } from 'viem'

export const mainnet = defineChain({})
```
:::

Now, add the missing required properties to the object until the error goes away.

::: code-group
```ts twoslash [as const satisfies Chain]
import { type Chain } from 'viem'

export const mainnet = {
  id: 1,
  name: 'Ethereum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://cloudflare-eth.com'] },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://etherscan.io' },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    ensUniversalResolver: {
      address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
      blockCreated: 16773775,
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601,
    },
  },
} as const satisfies Chain
```
```ts twoslash [defineChain]
import { defineChain } from 'viem'

export const mainnet = defineChain({
  id: 1,
  name: 'Ethereum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://cloudflare-eth.com'] },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://etherscan.io' },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    ensUniversalResolver: {
      address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
      blockCreated: 16773775,
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601,
    },
  },
})
```
:::

The more properties you add, the better the chain will be to use with Wagmi. Most of these attributes exist within the [`ethereum-lists/chains` repository](https://github.com/ethereum-lists/chains/tree/3fbd4eeac7ce116579634bd042b84e2b1d89886a/_data/chains).

- `id`: The chain ID for the network. This can be found by typing the network name into [ChainList](https://chainlist.org). Example: "Ethereum Mainnet" has a Chain ID of `1`.
- `name`: Human-readable name for the chain. Example: "Ethereum Mainnet"
- `nativeCurrency`: The native currency of the chain. Found from [`ethereum-lists/chains`](https://github.com/ethereum-lists/chains/blob/3fbd4eeac7ce116579634bd042b84e2b1d89886a/_data/chains/eip155-56.json#L20-L24).
- `rpcUrls`: At least one public, credible RPC URL. Found from [`ethereum-lists/chains`](https://github.com/ethereum-lists/chains/blob/3fbd4eeac7ce116579634bd042b84e2b1d89886a/_data/chains/eip155-56.json#L4-L18).
- `blockExplorers`: A set of block explorers for the chain. Found from [`ethereum-lists/chains`](https://github.com/ethereum-lists/chains/blob/3fbd4eeac7ce116579634bd042b84e2b1d89886a/_data/chains/eip155-56.json#L30-L36).
- `contracts`: A set of deployed contracts for the chain. If you are deploying one of the following contracts yourself, make sure it is verified.
  - `multicall3` is optional, but it's address is most likely `0xca11bde05977b3631167028862be2a173976ca11` – you can find the deployed block number on the block explorer. Check out [`mds1/multicall`](https://github.com/mds1/multicall#multicall3-contract-addresses) for more info.
  - `ensRegistry` is optional – not all Chains have a ENS Registry. See [ENS Deployments](https://docs.ens.domains/ens-deployments) for more info.
  - `ensUniversalResolver` is optional – not all Chains have a ENS Universal Resolver.
- `sourceId`: Source Chain ID (e.g. the L1 chain).
- `testnet`: Whether the chain is a testnet.



<script setup>
import { getSidebar } from '../../.vitepress/sidebar'

const connectors = getSidebar()['/core']
  .find(x => x.text.includes('Configuration')).items
  .find(x => x.text.includes('Connectors')).items
  .sort((a, b) => a.text.localeCompare(b.text))
</script>

## Connectors

Connectors for popular wallet providers and protocols.

### Import

```ts
import { injected } from 'wagmi/connectors'
```


<!-- <script setup>
const packageName = 'wagmi'
const connectorsPackageName = 'wagmi/connectors'
</script> -->

### coinbaseWallet

Connector for the [Coinbase Wallet SDK](https://github.com/coinbase/coinbase-wallet-sdk).

#### Import

```ts-vue
import { coinbaseWallet } from '{{connectorsPackageName}}'
```

#### Usage

```ts-vue
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'
import { coinbaseWallet } from '{{connectorsPackageName}}' // [!code hl]

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [coinbaseWallet()], // [!code hl]
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

:::warning
Before going to production, it is highly recommended to set an [`appName`](#appname) and [`appLogoUrl`](#applogourl) for your application that can be displayed upon connection to the wallet.
:::

#### Parameters

```ts-vue
import { type CoinbaseWalletParameters } from '{{connectorsPackageName}}'
```

Check out the [Coinbase Wallet SDK docs](https://github.com/coinbase/coinbase-wallet-sdk) for more info.

##### appName

`string`

Application name.

```ts-vue
import { coinbaseWallet } from '{{connectorsPackageName}}'

const connector = coinbaseWallet({
  appName: 'My Wagmi App', // [!code focus]
})
```

##### appLogoUrl

`string | null | undefined`

Application logo image URL; favicon is used if unspecified.

```ts-vue
import { coinbaseWallet } from '{{connectorsPackageName}}'

const connector = coinbaseWallet({
  appName: 'My Wagmi App',
  appLogoUrl: 'https://example.com/myLogoUrl.png', // [!code focus]
})
```

##### headlessMode <Badge type="warning" text="deprecated" />

`boolean | undefined`

- Whether or not onboarding overlay popup should be displayed.
- `headlessMode` will be removed in the next major version. Upgrade to [`version: '4'`](#version).

```ts-vue
import { coinbaseWallet } from '{{connectorsPackageName}}'

const connector = coinbaseWallet({
  appName: 'My Wagmi App',
  headlessMode: false, // [!code focus]
})
```

##### preference <Badge text=">=2.9.0" />

`"all" | "eoaOnly" | "smartWalletOnly"`

Preference for the type of wallet to display.

- `'eoaOnly'`: Uses EOA Browser Extension or Mobile Coinbase Wallet.
- `'smartWalletOnly'`: Displays Smart Wallet popup.
- `'all'` (default): Supports both `'eoaOnly'` and `'smartWalletOnly'` based on context.

```ts-vue
import { coinbaseWallet } from '{{connectorsPackageName}}'

const connector = coinbaseWallet({
  appName: 'My Wagmi App',
  preference: 'smartWalletOnly', // [!code focus]
})
```

##### version <Badge text=">=2.9.0" />

- Coinbase Wallet SDK version
- Defaults to `'4'`. If [`headlessMode: true`](#headlessmode), defaults to `'3'`.

```ts-vue
import { coinbaseWallet } from '{{connectorsPackageName}}'

const connector = coinbaseWallet({
  appName: 'My Wagmi App',
  version: '4', // [!code focus]
})
```
<!-- <script setup>
const docsPath = 'react'
const packageName = 'wagmi'
const connectorsPackageName = 'wagmi/connectors'
</script> -->

### injected

Connector for [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) Ethereum Providers.

#### Import

```ts-vue
import { injected } from '{{connectorsPackageName}}'
```

#### Usage

```ts-vue{3,7}
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'
import { injected } from '{{connectorsPackageName}}'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

#### Parameters

```ts-vue
import { type InjectedParameters } from '{{connectorsPackageName}}'
```

##### shimDisconnect

`boolean | undefined`

- MetaMask and other injected providers do not support programmatic disconnect.
- This flag simulates the disconnect behavior by keeping track of connection status in storage. See [GitHub issue](https://github.com/MetaMask/metamask-extension/issues/10353) for more info.
- Defaults to `true`.

```ts-vue
import { injected } from '{{connectorsPackageName}}'

const connector = injected({
  shimDisconnect: false, // [!code focus]
})
```

##### target

`TargetId | (TargetMap[TargetId] & { id: string }) | (() => (TargetMap[TargetId] & { id: string }) | undefined) | undefined`

- [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) Ethereum Provider to target.
- [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) supported via `createConfig`'s <a :href="`/${docsPath}/api/createConfig#multiinjectedproviderdiscovery`">`multiInjectedProviderDiscovery`</a> property.

```ts-vue
import { injected } from '{{connectorsPackageName}}'

const connector = injected({
  target() { // [!code focus]
    return { // [!code focus]
      id: 'windowProvider', // [!code focus]
      name: 'Window Provider', // [!code focus]
      provider: window.ethereum, // [!code focus]
    } // [!code focus]
  }, // [!code focus]
})
```

##### unstable_shimAsyncInject

`boolean | number | undefined`

Watches for async provider injection via the `ethereum#initialized` event. When `true`, defaults to `1_000` milliseconds. Otherwise, uses a provided value of milliseconds.

```ts-vue
import { injected } from '{{connectorsPackageName}}'

const connector = injected({
  unstable_shimAsyncInject: 2_000, // [!code focus]
})
```

<!-- <script setup>
const docsPath = 'react'
const packageName = 'wagmi'
const connectorsPackageName = 'wagmi/connectors'
</script> -->

### metaMask

Connector for the [MetaMask SDK](https://github.com/MetaMask/metamask-sdk).

#### Import

```ts-vue
import { metaMask } from '{{connectorsPackageName}}'
```

#### Usage

```ts-vue{3,7}
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'
import { metaMask } from '{{connectorsPackageName}}'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

#### Parameters

```ts-vue
import { type MetaMaskParameters } from '{{connectorsPackageName}}'
```
Check out the [MetaMask SDK docs](https://github.com/MetaMask/metamask-sdk?tab=readme-ov-file#sdk-options) for more info. A few options are omitted that Wagmi manages internally.

##### communicationLayerPreference

`CommunicationLayerPreference | undefined`

The preferred communication layer to use for the SDK.

##### communicationServerUrl

`string | undefined`

The URL of the communication server to use for the SDK.

##### dappMetadata

`DappMetadata | undefined`

- Metadata about the dapp using the SDK.
- Defaults to `{ name: 'wagmi' }`.

##### enableAnalytics

`boolean | undefined`

- Send anonymous analytics to MetaMask to help us improve the SDK.
- Defaults to `false`.

##### extensionOnly

`boolean | undefined`

- If MetaMask browser extension is detected, directly use it.
- Defaults to `true`.

##### forceDeleteProvider

`boolean | undefined`

If true, the SDK will force delete the provider from the global `window` object.


##### forceInjectProvider

`boolean | undefined`

If true, the SDK will force inject the provider into the global `window` object.

##### infuraAPIKey

`string | undefined`

The Infura API key to use for RPC requests.

##### injectProvider

`boolean | undefined`

If true, the SDK will inject the provider into the global `window` object.

##### logging

`SDKLoggingOptions | undefined`

Options for customizing the logging behavior of the SDK.

##### modals

`RemoteConnectionProps['modals'] | undefined`

An object that allows you to customize or translate each of the displayed modals. See the nodejs example for more information.

##### openDeeplink

`((arg: string) => void) | undefined`

A function that will be called to open a deeplink to the MetaMask Mobile app.

##### preferDesktop

`boolean | undefined`

If true, the SDK will prefer the desktop version of MetaMask over the mobile version.

##### shouldShimWeb3

`boolean | undefined`

If true, the SDK will shim the window.web3 object with the provider returned by the SDK (useful for compatibility with older browser).

##### storage

`StorageManagerProps | undefined`

Options for customizing the storage manager used by the SDK.

##### timer

`any | undefined`

A timer object to use for scheduling tasks.

##### transports

`string[] | undefined`

An array of transport protocols to use for communication with the MetaMask wallet.

##### ui

`SDKUIOptions | undefined`

Options for customizing the SDK UI.

##### useDeeplink

`boolean | undefined`

- If `true`, the SDK will use deeplinks to connect with MetaMask Mobile. If `false`, the SDK will use universal links to connect with MetaMask Mobile.
- Defaults to `true`.

::: warning
Setting `useDeeplink` to `false` can negatively impact performance on iOS Safari as Universal Link connections are canceled if they do not occur within ~500ms of an interaction (e.g. button press).
:::

##### wakeLockType

`WakeLockStatus | undefined`

The type of wake lock to use when the SDK is running in the background.

<!-- <script setup>
const packageName = 'wagmi'
const connectorsPackageName = 'wagmi/connectors'
</script> -->

### mock

Connector for mocking Wagmi functionality.

#### Import

```ts-vue
import { mock } from '{{connectorsPackageName}}'
```

#### Usage

```ts-vue{3,8-14}
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'
import { mock } from '{{connectorsPackageName}}'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    mock({
      accounts: [
        '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
        '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
      ],
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

#### Parameters

```ts-vue
import { type MockParameters } from '{{connectorsPackageName}}'
```

##### accounts

`readonly [Address, ...Address[]]`

Accounts to use with the connector.

```ts-vue
import { mock } from '{{connectorsPackageName}}'

const connector = mock({
  accounts: [ // [!code focus]
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', // [!code focus]
    '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', // [!code focus]
    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC', // [!code focus]
    '0x90F79bf6EB2c4f870365E785982E1f101E93b906', // [!code focus]
    '0x15d34aaf54267db7d7c367839aaf71a00a2c6a65', // [!code focus]
    '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc', // [!code focus]
    '0x976EA74026E726554dB657fA54763abd0C3a0aa9', // [!code focus]
    '0x14dC79964da2C08b23698B3D3cc7Ca32193d9955', // [!code focus]
    '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f', // [!code focus]
    '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720', // [!code focus]
  ], // [!code focus]
})
```

##### features

`{ connectError?: boolean | Error | undefined; reconnect?: boolean | undefined; signMessageError?: boolean | Error | undefined; signTypedDataError?: boolean | Error | undefined; switchChainError?: boolean | Error | undefined; } | undefined`

Feature flags that change behavior of Wagmi internals.

```ts-vue
import { mock } from '{{connectorsPackageName}}'
import { UserRejectedRequestError } from 'viem'

const connector = mock({
  accounts: [
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  ],
  features: { // [!code focus]
    connectError: new UserRejectedRequestError(new Error('Failed to connect.')), // [!code focus]
    reconnect: false, // [!code focus]
  }, // [!code focus]
})
```

###### connectError

`boolean | Error | undefined`

Whether to throw an error when `connector.connect` is called.

###### reconnect

`boolean | undefined`

Enables reconnecting to connector.

###### signMessageError

`boolean | Error | undefined`

Whether to throw an error when `'personal_sign'` is called.

###### signTypedDataError

`boolean | Error | undefined`

Whether to throw an error when `'eth_signTypedData_v4'` is called.

###### switchChainError

`boolean | Error | undefined`

Whether to throw an error when `connector.switchChain` is called.

<!-- <script setup>
const packageName = 'wagmi'
const connectorsPackageName = 'wagmi/connectors'
</script> -->

### safe

Connector for [Safe Apps SDK](https://github.com/safe-global/safe-apps-sdk).

#### Import

```ts-vue
import { safe } from '{{connectorsPackageName}}'
```

#### Usage

```ts-vue{3,7}
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'
import { safe } from '{{connectorsPackageName}}'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [safe()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

#### Parameters

```ts-vue
import { type SafeParameters } from '{{connectorsPackageName}}'
```

Check out the [Safe docs](https://github.com/safe-global/safe-apps-sdk/tree/main/packages/safe-apps-sdk) for more info.
##### allowedDomains

`RegExp[] | undefined`

```ts-vue
import { safe } from '{{connectorsPackageName}}'

const connector = safe({
  allowedDomains: [/app.safe.global$/], // [!code focus]
})
```

##### debug

`boolean | undefined`

```ts-vue
import { safe } from '{{connectorsPackageName}}'

const connector = safe({
  debug: true, // [!code focus]
})
```

##### shimDisconnect

`boolean | undefined`

- This flag simulates disconnect behavior by keeping track of connection status in storage.
- Defaults to `false`.

```ts-vue
import { safe } from '{{connectorsPackageName}}'

const connector = safe({
  shimDisconnect: true, // [!code focus]
})
```

<!-- <script setup>
const packageName = 'wagmi'
const connectorsPackageName = 'wagmi/connectors'
</script> -->

### walletConnect

Connector for [WalletConnect](https://walletconnect.com).

#### Import

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'
```

#### Usage

```ts-vue{3,8-10}
import { createConfig, http } from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'
import { walletConnect } from '{{connectorsPackageName}}'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    walletConnect({
      projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

#### Parameters

```ts-vue
import { type WalletConnectParameters } from '{{connectorsPackageName}}'
```

Check out the [WalletConnect docs](https://github.com/WalletConnect/walletconnect-monorepo/tree/v2.0/providers/ethereum-provider) for more info. A few options are omitted that Wagmi manages internally.

##### disableProviderPing

`boolean | undefined`

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'

const connector = walletConnect({
  disableProviderPing: false, // [!code focus]
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

##### isNewChainsStale

`boolean | undefined`

- If a new chain is added to a previously existing configured connector `chains`, this flag
  will determine if that chain should be considered as stale. A stale chain is a chain that
  WalletConnect has yet to establish a relationship with (e.g. the user has not approved or
  rejected the chain).
- Defaults to `true`.

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'

const connector = walletConnect({
  isNewChainsStale: true, // [!code focus]
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

::: details More info
Preface: Whereas WalletConnect v1 supported dynamic chain switching, WalletConnect v2 requires
the user to pre-approve a set of chains up-front. This comes with consequent UX nuances (see below) when
a user tries to switch to a chain that they have not approved.

This flag mainly affects the behavior when a wallet does not support dynamic chain authorization
with WalletConnect v2.

If `true` (default), the new chain will be treated as a stale chain. If the user
has yet to establish a relationship (approved/rejected) with this chain in their WalletConnect
session, the connector will disconnect upon the dapp auto-connecting, and the user will have to
reconnect to the dapp (revalidate the chain) in order to approve the newly added chain.
This is the default behavior to avoid an unexpected error upon switching chains which may
be a confusing user experience (e.g. the user will not know they have to reconnect
unless the dapp handles these types of errors).

If `false`, the new chain will be treated as a validated chain. This means that if the user
has yet to establish a relationship with the chain in their WalletConnect session, wagmi will successfully
auto-connect the user. This comes with the trade-off that the connector will throw an error
when attempting to switch to the unapproved chain. This may be useful in cases where a dapp constantly
modifies their configured chains, and they do not want to disconnect the user upon
auto-connecting. If the user decides to switch to the unapproved chain, it is important that the
dapp handles this error and prompts the user to reconnect to the dapp in order to approve
the newly added chain.
:::

##### metadata

`CoreTypes.Metadata | undefined`

Metadata related to the app requesting the connection.

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'

const connector = walletConnect({
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
  metadata: { // [!code focus]
    name: 'Example', // [!code focus]
    description: 'Example website', // [!code focus]
    url: 'https://example.com', // [!code focus]
  }, // [!code focus]
})
```

##### projectId

`string`

WalletConnect Cloud project identifier. You can find your `projectId` on your [WalletConnect dashboard](https://cloud.walletconnect.com/sign-in).

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'

const connector = walletConnect({
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68', // [!code focus]
})
```

##### qrModalOptions

`QrModalOptions | undefined`

Options for rendering QR modal.

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'

const connector = walletConnect({
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
  qrModalOptions: { // [!code focus]
    themeMode: 'dark', // [!code focus]
  }, // [!code focus]
})
```

##### relayUrl

`string | undefined`

- WalletConnect relay URL to use.
- Defaults to `'wss://relay.walletconnect.com'`.

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'

const connector = walletConnect({
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
  relayUrl: 'wss://relay.walletconnect.org', // [!code focus]
})
```

##### storageOptions

`KeyValueStorageOptions | undefined`

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'

const connector = walletConnect({
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
  storageOptions: {}, // [!code focus]
})
```

##### showQrModal

`boolean | undefined`

- Whether to show the QR code modal upon calling `connector.connect()`.
- Defaults to `true`.

```ts-vue
import { walletConnect } from '{{connectorsPackageName}}'

const connector = walletConnect({
  projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
  showQrModal: true, // [!code focus]
})
```

::: tip
This can be disabled and you can listen for a `'message'` event with payload `{ type: 'display_uri'; data: string }` if you want to render your own QR code.
:::

<script setup>
import { getSidebar } from '../../.vitepress/sidebar'

const transports = getSidebar()['/core']
  .find(x => x.text.includes('Configuration')).items
  .find(x => x.text.includes('Transports')).items
  .sort((a, b) => a.text.localeCompare(b.text))
</script>

## Transports

[`createConfig`](/react/api/createConfig) can be instantiated with a set of Transports for each chain. A Transport is the intermediary layer that is responsible for executing outgoing JSON-RPC requests to the RPC Provider (e.g. Alchemy, Infura, etc).

### Import

```ts
import { http } from 'wagmi'
```

<!-- <script setup>
const packageName = 'wagmi'
</script> -->

### custom

The `custom` Transport connects to a JSON-RPC API via custom. Wraps Viem's [`custom` Transport](https://viem.sh/docs/clients/transports/custom.html).

#### Import

```ts-vue
import { custom } from '{{packageName}}'
```

#### Usage

```ts-vue
import { 
  createConfig, 
  custom // [!code hl]
} from '{{packageName}}'
import { mainnet } from '{{packageName}}/chains'
import { customRpc } from './rpc'

export const config = createConfig({
  chains: [mainnet],
  connectors: [injected()],
  transports: {
    [mainnet.id]: custom({ // [!code hl]
      async request({ method, params }) { // [!code hl]
        const response = await customRpc.request(method, params) // [!code hl]
        return response // [!code hl]
      } // [!code hl]
    }) // [!code hl]
  },
})
```

#### Parameters

##### provider

`{ request({ method: string, params: unknown[] }): Promise<unknown> }`

An [EIP-1193 `request` function](https://eips.ethereum.org/EIPS/eip-1193#request) function.

```ts
import { customRpc } from './rpc'

const transport = custom({
  async request({ method, params }) { // [!code focus:3]
    const response = await customRpc.request(method, params)
    return response
  }
})
```

##### key (optional)

`string`

A key for the Transport. Defaults to `"custom"`.

```ts
const transport = custom(
  provider,
  { 
    key: 'windowProvider', // [!code focus]
  }
)
```

##### name (optional)

`string`

A name for the Transport. Defaults to `"Ethereum Provider"`.

```ts
const transport = custom(
  provider,
  { 
    name: 'Window Ethereum Provider', // [!code focus]
  }
)
```

##### retryCount (optional)

`number`

The max number of times to retry when a request fails. Defaults to `3`.

```ts
const transport = custom(provider, {
  retryCount: 5, // [!code focus]
})
```

##### retryDelay (optional)

`number`

The base delay (in ms) between retries. By default, the Transport will use [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) (`~~(1 << count) * retryDelay`), which means the time between retries is not constant.

```ts
const transport = custom(provider, {
  retryDelay: 100, // [!code focus]
})
```

<!-- <script setup>
const packageName = 'wagmi'
</script> -->

### fallback

The `fallback` Transport consumes **multiple** Transports. If a Transport request fails, it will fall back to the next one in the list. Wraps Viem's [`fallback` Transport](https://viem.sh/docs/clients/transports/fallback.html).

#### Import

```ts-vue
import { fallback } from '{{packageName}}'
```

#### Usage

```ts-vue
import { 
  createConfig, 
  fallback, // [!code hl]
  http,
} from '{{packageName}}'
import { mainnet } from '{{packageName}}/chains'

export const config = createConfig({
  chains: [mainnet],
  connectors: [injected()],
  transports: {
    [mainnet.id]: fallback([ // [!code hl]
      http('https://eth-mainnet.g.alchemy.com/v2/...'), // [!code hl]
      http('https://mainnet.infura.io/v3/...'), // [!code hl]
    ]) // [!code hl]
  },
})
```


<!-- <script setup>
const packageName = 'wagmi'
</script> -->

### http

The `http` Transport connects to a JSON-RPC API via HTTP. Wraps Viem's [`http` Transport](https://viem.sh/docs/clients/transports/http.html).

#### Import

```ts-vue
import { http } from '{{packageName}}'
```

#### Usage

```ts-vue
import { 
  createConfig, 
  http // [!code hl]
} from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/...'), // [!code hl]
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/...'), // [!code hl]
  },
})
```

::: warning
If no URL is provided, then the transport will fall back to a public RPC URL on the chain. It is highly recommended to provide an authenticated RPC URL to prevent rate-limiting.
:::

##### Batch JSON-RPC

The `http` Transport supports Batch JSON-RPC. This means that multiple JSON-RPC requests can be sent in a single HTTP request.

The Transport will batch up Actions over a given period and execute them in a single Batch JSON-RPC HTTP request. By default, this period is a [zero delay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#zero_delays) meaning that the batch request will be executed at the end of the current [JavaScript message queue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#queue). Consumers can specify a custom time period `wait` (in ms).

You can enable Batch JSON-RPC by setting the `batch` flag to `true`:

```ts 
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  batch: true // [!code hl]
})
```

#### Parameters

##### url

`string`

URL of the JSON-RPC API. Defaults to `chain.rpcUrls.default.http[0]`.

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...')
```

##### batch

`boolean | BatchOptions`

Toggle to enable Batch JSON-RPC. Defaults to `false`

```ts 
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  batch: true // [!code focus]
})
```

##### batch.batchSize

`number`

The maximum number of JSON-RPC requests to send in a batch. Defaults to `1_000`.

```ts 
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  batch: {
    batchSize: 2_000 // [!code focus]
  }
})
```

##### batch.wait

`number`

The maximum number of milliseconds to wait before sending a batch. Defaults to `0` ([zero delay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#zero_delays)).

```ts 
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  batch: {
    wait: 16 // [!code focus]
  }
})
```

##### fetchOptions

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

[Fetch options](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to pass to the internal `fetch` function. Useful for passing auth headers or cache options.

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  fetchOptions: { // [!code focus:5]
    headers: {
      'Authorization': 'Bearer ...'
    }
  }
})
```

##### key

`string`

A key for the Transport. Defaults to `"http"`.

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  key: 'alchemy', // [!code focus]
})
```

##### name

`string`

A name for the Transport. Defaults to `"HTTP JSON-RPC"`.

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  name: 'Alchemy HTTP Provider', // [!code focus]
})
```

##### retryCount

`number`

The max number of times to retry when a request fails. Defaults to `3`.

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  retryCount: 5, // [!code focus]
})
```

##### retryDelay

`number`

The base delay (in ms) between retries. By default, the Transport will use [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) (`~~(1 << count) * retryDelay`), which means the time between retries is not constant.

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  retryDelay: 100, // [!code focus]
})
```

##### timeout

`number`

The timeout for requests. Defaults to `10_000`.

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  timeout: 60_000, // [!code focus]
})
```

<!-- <script setup>
const docsPath = 'core'
const packageName = 'wagmi'
</script> -->

### unstable_connector

The `unstable_connector` Transport connects to a JSON-RPC API via the provided <a :href="`/${docsPath}/api/connectors`">Connector</a>.

For example, if the provided Connector is <a :href="`/${docsPath}/api/connectors/injected`">`injected`</a> and the end-user uses MetaMask, then outgoing JSON-RPC requests will be sent via the MetaMask EIP-1193 Provider (`window.ethereum`).

#### Import

```ts-vue
import { unstable_connector } from '{{packageName}}'
```

#### Usage

```ts-vue
import { 
  createConfig, 
  fallback,
  unstable_connector, // [!code hl]
} from '{{packageName}}'
import { mainnet } from '{{packageName}}/chains'

export const config = createConfig({
  chains: [mainnet],
  connectors: [injected()],
  transports: {
    [mainnet.id]: fallback([
      unstable_connector(injected), // [!code hl]
      http('https://eth-mainnet.g.alchemy.com/v2/...')
    ])
  },
})
```

::: warning
It is **highly recommended** to use the `unstable_connector` Transport inside of a <a :href="`/${docsPath}/api/transports/fallback`">`fallback` Transport</a>. This ensures that if the Connector request fails, the Transport will fall back to a different Transport in the fallback set.

Some common cases for a Connector request to fail are:

- Chain ID mismatches,
- Connector RPC not supporting the requested method and/or only supporting a subset of methods for connected accounts,
- Rate-limiting of Connector RPC.
  :::

#### Parameters

##### connector

`Connector`

The Connector to use for the Transport.

```ts
import { unstable_connector } from 'wagmi'
import { safe } from 'wagmi/connectors'

const transport = unstable_connector(safe) // [!code focus]
```

##### key (optional)

`string`

A key for the Transport. Defaults to `"connector"`.

```ts
import { unstable_connector } from 'wagmi'
import { injected } from 'wagmi/connectors'

const transport = unstable_connector(injected, { 
  key: 'injected',  // [!code focus]
})
```

##### name (optional)

`string`

A name for the Transport. Defaults to `"Connector"`.

```ts
import { unstable_connector } from 'wagmi'
import { injected } from 'wagmi/connectors'

const transport = unstable_connector(injected, { 
  name: 'Injected',  // [!code focus]
})
```

##### retryCount (optional)

`number`

The max number of times to retry when a request fails. Defaults to `3`.

```ts
import { unstable_connector } from 'wagmi'
import { injected } from 'wagmi/connectors'

const transport = unstable_connector(injected, {
  retryCount: 5, // [!code focus]
})
```

##### retryDelay (optional)

`number`

The base delay (in ms) between retries. By default, the Transport will use [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) (`~~(1 << count) * retryDelay`), which means the time between retries is not constant.

```ts
import { unstable_connector } from 'wagmi'
import { injected } from 'wagmi/connectors'

const transport = unstable_connector(injected, {
  retryDelay: 100, // [!code focus]
})
```

<!-- <script setup>
const packageName = 'wagmi'
</script> -->

### webSocket

The `webSocket` Transport connects to a JSON-RPC API via a WebSocket. Wraps Viem's [`webSocket` Transport](https://viem.sh/docs/clients/transports/webSocket.html).

#### Import

```ts-vue
import { webSocket } from '{{packageName}}'
```

#### Usage

```ts-vue
import { 
  createConfig, 
  webSocket // [!code hl]
} from '{{packageName}}'
import { mainnet, sepolia } from '{{packageName}}/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: webSocket('wss://eth-mainnet.g.alchemy.com/v2/...'), // [!code hl]
    [sepolia.id]: webSocket('wss://eth-sepolia.g.alchemy.com/v2/...'), // [!code hl]
  },
})
```

::: warning
If no URL is provided, then the transport will fall back to a public RPC URL on the chain. It is highly recommended to provide an authenticated RPC URL to prevent rate-limiting.
:::

#### Parameters

##### url

`string`

URL of the JSON-RPC API.

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...')
```

##### key (optional)

`string`

A key for the Transport. Defaults to `"webSocket"`.

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', { 
  key: 'alchemy',  // [!code focus]
})
```

##### name (optional)

`string`

A name for the Transport. Defaults to `"WebSocket JSON-RPC"`.

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', { 
  name: 'Alchemy WebSocket Provider',  // [!code focus]
})
```

##### retryCount (optional)

`number`

The max number of times to retry when a request fails. Defaults to `3`.

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', {
  retryCount: 5, // [!code focus]
})
```

##### retryDelay (optional)

`number`

The base delay (in ms) between retries. By default, the Transport will use [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) (`~~(1 << count) * retryDelay`), which means the time between retries is not constant.

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', {
  retryDelay: 100, // [!code focus]
})
```

##### timeout (optional)

`number`

The timeout for async WebSocket requests. Defaults to `10_000`.

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', {
  timeout: 60_000, // [!code focus]
})
```

## WagmiProvider

React Context Provider for Wagmi.

### Import

```ts
import { WagmiProvider } from 'wagmi'
```

### Usage

::: code-group
```tsx [app.tsx]
import { WagmiProvider } from 'wagmi'
import { config } from './config' 

function App() {
  return (
    <WagmiProvider config={config}> 
      {/** ... */}
    </WagmiProvider>
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### Parameters

```ts
import { type WagmiProviderProps } from 'wagmi'
```

#### config

[`Config`](/react/api/createConfig#config) object to inject with context.

::: code-group
```tsx [app.tsx]
import { WagmiProvider } from 'wagmi'
import { config } from './config' 

function App() {
  return (
    <WagmiProvider
      config={config} // [!code focus]
    >
      {/** ... */}
    </WagmiProvider>
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### initialState

`State | undefined`

- Initial state to hydrate into the [Wagmi Config](/react/api/createConfig). Useful for SSR.

::: code-group
```tsx [app.tsx]
import { WagmiProvider } from 'wagmi'
import { config } from './config' 

function App() {
  return (
    <WagmiProvider
      config={config}
      initialState={/* ... /*} // [!code focus]
    >
      {/** ... */}
    </WagmiProvider>
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### reconnectOnMount

`boolean | undefined`

- Whether or not to reconnect previously connected [connectors](/react/api/createConfig#connectors) on mount.
- Defaults to `true`.

::: code-group
```tsx [app.tsx]
import { WagmiProvider } from 'wagmi'
import { config } from './config' 

function App() {
  return (
    <WagmiProvider
      config={config}
      reconnectOnMount={false} // [!code focus]
    >
      {/** ... */}
    </WagmiProvider>
  )
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### Context

```ts
import { type WagmiContext } from 'wagmi'
```

<script setup>
import { getSidebar } from '../../.vitepress/sidebar'

const hooks = getSidebar()['/react']
  .find(x => x.text === 'Hooks').items
  .sort((a, b) => a.text.localeCompare(b.text))
</script>

# Hooks

React Hooks for accounts, wallets, contracts, transactions, signing, ENS, and more.

## Import

```ts
import { useAccount } from 'wagmi'
```

---
title: useAccount
description: Hook for getting current account.
---

## useAccount

Hook for getting current account.

### Import

```ts
import { useAccount } from 'wagmi'
```

### Usage

::: code-group
```tsx [index.tsx]
import { useAccount } from 'wagmi'

function App() {
  const account = useAccount()
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### Parameters

```ts
import { type UseAccountParameters } from 'wagmi'
```

#### config

`Config | undefined`

[`Config`](/react/api/createConfig#config) to use instead of retrieving from the from nearest [`WagmiProvider`](/react/api/WagmiProvider).

::: code-group
```tsx [index.tsx]
import { useAccount } from 'wagmi'
import { config } from './config' // [!code focus]

function App() {
  const account = useAccount({
    config, // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### Return Type

```ts
import { type UseAccountReturnType } from 'wagmi'
```

<!--@include: @shared/getAccount-return-type.md-->

### Action

- [`getAccount`](/core/api/actions/getAccount)

---
title: useAccountEffect
description: Hook for listening to account lifecycle events.
---

## useAccountEffect

Hook for listening to account lifecycle events.

### Import

```ts
import { useAccountEffect } from 'wagmi'
```

### Usage

::: code-group
```tsx [index.tsx]
import { useAccountEffect } from 'wagmi'

function App() {
  useAccountEffect({
    onConnect(data) {
      console.log('Connected!', data)
    },
    onDisconnect() {
      console.log('Disconnected!')
    },
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### Parameters

```ts
import { type UseAccountEffectParameters } from 'wagmi'
```

#### config

`Config | undefined`

[`Config`](/react/api/createConfig#config) to use instead of retrieving from the from nearest [`WagmiProvider`](/react/api/WagmiProvider).

::: code-group
```tsx [index.tsx]
import { useAccountEffect } from 'wagmi'
import { config } from './config' // [!code focus]

function App() {
  useAccountEffect({
    config, // [!code focus]
    onConnect(data) {
      console.log('Connected!', data)
    },
    onDisconnect() {
      console.log('Disconnected!')
    },
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### onConnect

`` ((data: { address: `0x${string}`; addresses: readonly [`0x${string}`, ...`0x${string}`[]]; chain: Chain | undefined chainId: number; connector: Connector; isReconnected: boolean }) => void) | undefined ``

Callback that is called when accounts are connected.

::: code-group
```tsx [index.tsx]
import { useAccountEffect } from 'wagmi'

function App() {
  useAccountEffect({
    onConnect(data) { // [!code focus]
      console.log('Connected!', data) // [!code focus]
    }, // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### onDisconnect

`(() => void) | undefined`

Callback that is called when no more accounts are connected.

::: code-group
```tsx [index.tsx]
import { useAccountEffect } from 'wagmi'

function App() {
  useAccountEffect({
    onDisconnect() { // [!code focus]
      console.log('Disconnected!') // [!code focus]
    }, // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### Action

- [`getAccount`](/core/api/actions/getAccount)
- [`watchAccount`](/core/api/actions/watchAccount)

---
title: useBalance
description: Hook for fetching native currency or token balance.
---

<script setup>
const packageName = 'wagmi'
const actionName = 'getBalance'
const typeName = 'GetBalance'
const TData = '{ decimals: number; formatted: string; symbol: string; value: bigint; }'
const TError = 'GetBalanceErrorType'
</script>

## useBalance

Hook for fetching native currency or token balance.

### Import

```ts
import { useBalance } from 'wagmi'
```

### Usage

::: code-group
```tsx [index.tsx]
import { useBalance } from 'wagmi'

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### Parameters

```ts
import { type UseBalanceParameters } from 'wagmi'
```

#### address

`Address | undefined`

Address to get balance for. [`enabled`](#enabled) set to `false` if `address` is `undefined`.

::: code-group
```tsx [index.tsx]
import { useBalance } from 'wagmi'
import { mainnet } from 'wagmi/chains'

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48', // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

---

#### blockNumber

`bigint | undefined`

Block number to get balance at.

::: code-group
```ts [index.ts]
import { useBalance } from 'wagmi'

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
    blockNumber: 17829139n, // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### blockTag

`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`

Block tag to get balance at.

::: code-group
```ts [index.ts]
import { useBalance } from 'wagmi'

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
    blockTag: 'latest', // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

---

#### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```tsx [index.tsx]
import { useBalance } from 'wagmi'
import { mainnet } from 'wagmi/chains' // [!code focus]

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
    chainId: mainnet.id, // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### config

`Config | undefined`

[`Config`](/react/api/createConfig#config) to use instead of retrieving from the from nearest [`WagmiProvider`](/react/api/WagmiProvider).

::: code-group
```tsx [index.tsx]
import { useBalance } from 'wagmi'
import { config } from './config' // [!code focus]

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
    config, // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### scopeKey

`string | undefined`

Scopes the cache to a given context. Hooks that have identical context will share the same cache.

::: code-group
```tsx [index.tsx]
import { useBalance } from 'wagmi'

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
    scopeKey: 'foo', // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### token <Badge type="warning">[deprecated](/react/guides/migrate-from-v1-to-v2#deprecated-usebalance-token-parameter)</Badge>

`Address | undefined`

ERC-20 token address to get balance for.

::: code-group
```ts [index.ts]
import { useBalance } from 'wagmi'

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
    token: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

#### unit <Badge type="warning">[deprecated](/react/guides/migrate-from-v1-to-v2#deprecated-usebalance-unit-parameter-and-formatted-return-value)</Badge>

`'ether' | 'gwei' | 'wei' | number | undefined`

- Units to use when formatting result.
- Defaults to `'ether'`.

::: code-group
```ts [index.ts]
import { useBalance } from 'wagmi'

function App() {
  const result = useBalance({
    address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
    unit: 'ether', // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

<!--@include: @shared/query-options.md-->

### Return Type

```ts
import { type UseBalanceReturnType } from 'wagmi'
```

<!--@include: @shared/query-result.md-->

<!--@include: @shared/query-imports.md-->

### Action

- [`getBalance`](/core/api/actions/getBalance)

