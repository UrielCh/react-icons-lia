# Icons8 Line Awesome icons for deno / Preact

**License** [MIT](https://icons8.com/license)

**Project** [https://ionicons.com/](https://ionicons.com/)

[See available icons here](https://react-icons.deno.dev/lia)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/lia":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-lia@1.0.10/mod.ts",
    "react-icons/lia/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-lia@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib lia

```ts
import { Lia500Px } from "https://deno.land/x/react_icons_lia@1.0.10/mod.ts"
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

