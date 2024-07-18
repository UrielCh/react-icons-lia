# Icons8 Line Awesome icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/lia)](https://jsr.io/@preact-icons/lia)

**License** [MIT](https://icons8.com/license)

**Project** [https://ionicons.com/](https://ionicons.com/)

[See available icons here](https://react-icons.deno.dev/lia)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/lia": "jsr:@preact-icons/lia@^1.0.11/mod.ts",
    "react-icons/lia/": "jsr:@preact-icons/lia@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib lia

```ts
import { Lia500Px } from "jsr:preact-icons/lia@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { Lia500Px } from "react-icons/lia"
```

## import a single icon, downloading just one icon

```ts
import { Lia500Px } from "react-icons/lia/Lia500Px.ts"
```

or using default export

```ts
import Lia500Px from "react-icons/lia/Lia500Px.ts"
```

