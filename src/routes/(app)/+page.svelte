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
    {#each devices as device}
        <DeviceItem {...device} />
    {/each}
</ul>
