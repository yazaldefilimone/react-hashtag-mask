 <p align="center">
  <img src="https://img.shields.io/static/v1?label=react-mask&message=Welcome&color=FFFFFF&labelColor=110C2F" alt="Unsplash welcome!" />
  <img alt="License" src="https://img.shields.io/static/v1?label=version&message=1.0&color=FFFFFF&labelColor=110C2F">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=FFFFFF&labelColor=110C2F">
  <img alt="Stars" src="https://img.shields.io/github/stars/yazaldefilimonepinto/react-mask?color=FFFFFF&labelColor=110C2F">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/yazaldefilimonepinto/react-mask?color=FFFFFF&labelColor=110C2F">
</p>
<p align="center" >
Tiny input mask library for React.js (directive)
<P/>

## Quick Start

1. Initialization

```bash
npm install react-mask
# or
yarn add react-mask
```

2. Usage

```ts
import { InputMask } from 'react-mask';

export const MyComponent = () => {
  return (
    <div>
      <InputMask type="number" mask="##/##/#### ##:##" placeholder="Write here..." />
    </div>
  );
};
```

_Notice:_ returns a pure HTML input, you could put css or do what you would do with a normal input tag

## Exemple

![Mask Exemple](.assets/mask.png)

## License

[MIT](https://github.com/yazaldefilimonepinto/react-mask/blob/main/LICENSE) © [Yazalde Filimone](https://www.linkedin.com/in/yazalde-filimone/)
