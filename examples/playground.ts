import { parseEvent, parseHeader } from "@laihoe/demoparser2";
import { ParsedDemo } from "../ParsedDemo";

// Define all event names we're interested in
const path = "../demos/donk.dem"
const demo = new ParsedDemo(path)

// Parse round_end events with additional context
const roundEndEvents = demo.getAllEvents({
    name: "player_death",
    includePlayerProperties: ["X", "Y", "Z"],
    includeGameProperties: []
});

const lastEventIndex = roundEndEvents.length - 1
const lastEvent = roundEndEvents[lastEventIndex]
const lastTick = demo.getLastTickNumber()

const players = demo.getTicks({
    ticks: [lastTick],
    playerProperties: [
        "kills_total", 
        "deaths_total", 
        "mvps", 
        "headshot_kills_total", 
        "ace_rounds_total", 
        "score"],
})

const serverName = demo.getHeaderKey("server_name")
const mapName = demo.getHeaderKey("map_name")


console.log(serverName, mapName)
