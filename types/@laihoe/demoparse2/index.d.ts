// Tells TypeScript this is a module AUGMENTATION, not a replacement. Ensures that the only 
// the parseEvent function is overridden with our typed version.
import "@laihoe/demoparser2"

import type { DemoEventName, DemoEventMap } from "./event"
import type { DemoPlayerState, DemoPlayerStateProperties } from "./player"
import type { DemoMatchState, DemoGameStateProperties } from "./match"
import type { DemoHeader, DemoHeaderProperties } from "./header"
import type { TickCommon } from "./ticks"

// Note(tyrus): Many of the bindings have been manually written and not 1:1 with what's expected 
// from the original bindings. Maybe when parsing player demos we can use `zod` to validate the 
// data and figure out what's missing from certain types
declare module "@laihoe/demoparser2" {
    export type { DemoPlayerState, DemoPlayerStateProperties } from "../types/@laihoe/demoparse2/player"
    export type { DemoMatchState, DemoGameStateProperties } from "../types/@laihoe/demoparse2/match"
    export type { DemoHeader, DemoHeaderProperties } from "../types/@laihoe/demoparse2/header"
    export type { DemoEventName, DemoEventMap } from "../types/@laihoe/demoparse2/event"
    export type { TickCommon } from "../types/@laihoe/demoparse2/ticks"

    export function parseEvent<
        EventName extends DemoEventName, 
        PlayerProperties extends readonly DemoPlayerStateProperties[], 
        GameProperties extends readonly DemoGameStateProperties[]
    >(
        pathOrBuf: string | Buffer, 
        eventName: EventName, 
        playerExtra?: PlayerProperties, 
        otherExtra?: GameProperties, 
        gameEventListBytes?: Buffer | undefined | null
    ): Array<
        DemoEventMap[EventName] & 
        Partial<Pick<DemoPlayerState, PlayerProperties[number]>> & 
        Partial<Pick<DemoMatchState, GameProperties[number]>>
    >

    export function parseTicks<PlayerProperties extends readonly DemoPlayerStateProperties[]>(
        pathOrBuf: string | Buffer,
        playerProperties: PlayerProperties,
        ticks?: Array<number> | undefined | null,
    ): Array<
        TickCommon & Partial<Pick<DemoPlayerState, PlayerProperties[number]>>
    >

    export function parseHeader(pathOrBuf: string | Buffer): DemoHeader
}