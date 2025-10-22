import { DemoEventName } from "./types/@laihoe/demoparse2/event"
import { parseEvent, parseHeader, parseTicks } from "@laihoe/demoparser2"
import type { DemoHeader } from "./types/@laihoe/demoparse2/header"
import { DemoGameStateProperties } from "./types/@laihoe/demoparse2/match"
import { DemoPlayerStateProperties } from "./types/@laihoe/demoparse2/player"

/**
 * Tiny wrapper around the `demoparser2` library to make it easier to use.
 */
export class ParsedDemo {
    private path: string

    constructor(path: string){
        this.path = path
    }

    getAllEvents<
        T extends DemoEventName,
        P extends readonly DemoPlayerStateProperties[],
        G extends readonly DemoGameStateProperties[]
    >(args: {
        name: T
        includePlayerProperties: P
        includeGameProperties: G
    }){
        return parseEvent(
            this.path, 
            args.name, 
            args.includePlayerProperties, 
            args.includeGameProperties
        )
    }

    get lastTickNumber(): number {
        const events = this.getAllEvents({
            name: "round_end",
            includePlayerProperties: [],
            includeGameProperties: []
        })
        return Math.max(...events.map(event => event.tick))
    }

    getTicks<P extends readonly DemoPlayerStateProperties[]>(args: {
        playerProperties: P
        ticks: number[]
    }){
        return parseTicks(this.path, args.playerProperties, args.ticks)
    }

    private getHeader(): DemoHeader {
        return parseHeader(this.path)
    }

    getHeaderKey<K extends keyof DemoHeader>(key: K): DemoHeader[K] {
        return this.getHeader()[key]
    }


}