## Setup

```bash
bun install
```

```bash
bun run examples/playground.ts
```

## Description

Small patch/hack to add better TypeScript typing to `@laihoe/demoparser2`'s core functions (`parseEvent` and `parseTicks`) as they’re currently typed to return `any` (making it difficult to achieve meaningful DX)

Core changes are creating types and overriding function definition types. Take a look at `index.d.ts` (inside of the `types/@laihoe/demoparser2` directory).

```tsx
import { ParsedDemo } from "../ParsedDemo";

const path = "../demos/donk.dem"

// ParsedDemo is a light `demoparse2` class wrapper I created
const demo = new ParsedDemo(path)

const events = demo.getAllEvents({
    name: "item_purchase",
    includePlayerProperties: [],
    includeGameProperties: ["total_rounds_played"]
});

const event = events[0]
event.
// Get editor intellisense to surface `item_purchase`'s event properties:
// `cost`
// `inventory_slot`
// `item_name`
// `paint_seed`
// `skin`
// `total_rounds_played` (via game properties array)
```

## Usage

Just copy the `index.d.ts` and related files from `types` directory into your local repo. Regardless of where the files are placed, as long as the `index.d.ts` file has the `declare module "@laihoe/demoparser2"` statement, the function signatures will be overridden

This is not very professional, but this 

## How were the types generated?

1. Parsed a few demos with `listGameEvents` function to get the list of all gave events in demo
    
    ```jsx
    import { listGameEvents } from "@laihoe/demoparser2";
    
    const filePath = "./demos/donk.dem";
    const events = listGameEvents(filePath);
    
    console.log("Available events:", events);
    
    ```
    
2. Build out types for each event and property name using documentation in `demoparser2` (package) and online (ex. https://cs2.poggu.me/dumped-data/game-events/)

## Some callouts

- Ideally these types are initialized in Rust and are ported over/generated when creating JavaScript bindings. This feels the most correct approach, but I don’t know enough about Rust or how bindings work to have the will to go down the journey
- The generated types can drift from what’s available in game. Ex. If valve decide to release a new event type, the package is currently not in form to automatically pick up/fail when this happens
- The typing support is bare bones and doesn’t account for complex more complex return types. For example, when passing `playerProperties: ["X", "Y"]`, it’s possible for the returned object to have related, but differently named fields (ex. `team_X`, not real just an example).
    - Since we’re only modifying the types and not any compiled/run time code, you can just log out the returned object to see the actual fields being returned. Ex. if you know the key exist you can still fetch the value
