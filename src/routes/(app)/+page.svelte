<script lang="ts">
    import { onMount } from "svelte"

    import DeviceItem from "$lib/components/DeviceItem.svelte";

    let devices = $state<Devices>([])

    onMount(async () => {
        // TODO: Fetch devices from /api and render items

        // TODO: Handle WebSocket message events ("devices", "device")
        window.ws.events.addListener("message", async (data) => {
            switch (data.type) {
                case "devices":
                    {
                        console.debug(`ws "devices" event:`, data.data)
                        // ...
                    }
                    break

                case "device":
                    {
                        console.debug(`ws "device" event:`, data.data)
                        // ...
                    }
                    break
            }
        })
    })
</script>

<svelte:head>
    <title>PicoW LED | Devices</title>
</svelte:head>

<ul>

    <!-- NOTE: Test item -->
    <DeviceItem {
        ...{ 
            addr: "192.168.178.50:3000", 
            name: "Test Device", 
            color: [0,0,0,0], 
            pins:[1,2,3,4], 
            active_color: [255,255,255,255], 
            power: 0 
        }
    } />

    {#each devices as device}
        <DeviceItem {...device} />
    {/each}
</ul>

<style>
    ul {
        padding-top: var(--ui-app-bar-height);
    }
</style>
