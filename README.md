# Yet another opinionated ESLint configuration

Feel free to extend it.  
Initially made at Gojob, see [@gojob/eslint-config](https://github.com/gojob-1337/eslint-config).

## TypeScript

With the [deprecation of TSLint](https://medium.com/palantir/tslint-in-2019-1a144c2317a9) (we'll miss you, buddy), we decided to progressively switch all our linting processes to [ESLint](https://eslint.org/).

### Installation

You can extend our default configuration, in your own ESLint configuration (e.g. `.eslintrc`):

```javascript
{
  "extends": [
    "@vinceops/eslint-config/typescript" // or typescript-react
  ],
}
```

_Assuming you already installed `typescript`..._

```bash
yarn add --dev eslint @vinceops/eslint-config prettier
# or
npm install --save-dev eslint @vinceops/eslint-config prettier
```

### Integration with VSCode

At the present time, the ESLint plugin for VSCode has difficulties parsing/fixing TypeScript. Adding the following configuration to VSCode settings (`.vscode/settings.json` in your project) solves the problem:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    "typescriptreact"
  ],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
