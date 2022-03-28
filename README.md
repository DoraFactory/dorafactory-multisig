# dorafactory-multisig
This poject is an MVP based on [this design](https://www.figma.com/file/NBavL709zClLkDMAqP1maR/Substrate-Multisig-Frontend-MVP?node-id=225%3A1575). The frontend framework consists of Vue3+Vite+ElementPlus.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Test with Docker
1. Build the image,  
```docker build -t dorafactory-multsig:evaluate . ```  
2. Run a container,  
```docker run -p 3000:3000 dorafactory-multsig:evaluate ```
3. Run the tests following [the guide](./docs/test-guide.md)

## Known issues
1. Vue build does not support some of our polkadot packages, it'll always fail. This is a known issue to be fixed.
https://github.com/vitejs/vite/issues/7364 Currently, our project can only be view under development mode.
2. You may have found that our account icon/avatar won't change, as the `vue-identicon` dose not support Vue3 yet. 
It's logged https://github.com/polkadot-js/ui/issues/611, we'll update our code once it's upgraded. Also, we can add PR for it when we're free.
