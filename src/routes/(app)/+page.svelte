<script lang="ts">
    import "ui/dist/ui.css"

    import { onMount } from "svelte"
    import * as ui from "ui"

    import { api } from "$lib";

    import DeviceItem from "$lib/components/DeviceItem.svelte";
    import OnlineIndicator from "$lib/components/OnlineIndicator.svelte";

    const ws = new ui.WS<WSMessageData>("/ws", true)

    let devices = $state<Devices>([])
    let onlineIndicator_DataState = $state<"offline" | "online">("offline")

    onMount(async () => {
        // Fetch devices from /api and render items
        devices = await api.devices.get()

        await ws.connect()

        console.debug("Adding all WebSocket event listeners")

        ws.events.addListener("open", () => {
            console.debug("ws open...")
            onlineIndicator_DataState = "online"
        })

        ws.events.addListener("close", () => {
            console.debug("ws close...")
            onlineIndicator_DataState = "offline"
        })

        // Handle WebSocket message events ("devices", "device")
        ws.events.addListener("message", async (data) => {
            switch (data.type) {
                case "devices":
                    {
                        console.debug(`ws "devices" event:`, data.data)

                        devices = data.data
                    }
                    break

                case "device":
                    {
                        console.debug(`ws "device" event:`, data.data)

                        for (let x = 0; x < devices.length; x++) {
                            const device = devices[x]
                            if (device.addr === data.data.addr) {
                                devices[x] = data.data
                            }
                        }
                    }
                    break
            }
        })
    })
</script>

<svelte:head>
    <link rel="manifest" href="./manifest.json">
    <title>PicoW LED | Devices</title>
</svelte:head>

<main class="ui-container">
    <ul>
        {#each devices as device}
            <DeviceItem {...device} />
        {/each}
    </ul>
</main>

<div class="ui-app-bar" data-ui-position="top">
    <span class="ui-app-bar-left">
        <OnlineIndicator state={onlineIndicator_DataState} />
    </span>

    <span class="ui-app-bar-center">
        <h4>Devices</h4>
    </span>

    <span class="ui-app-bar-right"></span>
</div>

<style>
    main {
        padding-top: calc(var(--ui-app-bar-height) + var(--ui-spacing));
    }
</style>
