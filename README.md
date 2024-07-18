# Icons8 Line Awesome icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/lia)](https://jsr.io/@preact-icons/lia)

**License** [MIT](https://icons8.com/license)

**Project** [https://ionicons.com/](https://ionicons.com/)

[See available icons here](https://react-icons.deno.dev/lia)

## install the module

```bash
deno add @preact-icons/lia
dnpx jsr add @preact-icons/lia
pnpm dlx jsr add @preact-icons/lia
bunx jsr add @preact-icons/lia
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { Lia500Px } from "@preact-icons/lia"
```

## import a single icon, downloading just one icon

```ts
import { Lia500Px } from "react-icons/lia/Lia500Px"
```

or using default export

```ts
import Lia500Px from "react-icons/lia/Lia500Px.ts"
```
