<script lang="ts">
    import { onMount } from "svelte"

    import { api } from "$lib";

    import DeviceItem from "$lib/components/DeviceItem.svelte";

    let devices = $state<Devices>([])

    onMount(async () => {
        // Fetch devices from /api and render items
        devices = await api.devices.get()

        // TODO: Handle WebSocket message events ("devices", "device")
        window.ws.events.addListener("message", async (data) => {
            switch (data.type) {
                case "devices":
                    {
                        console.debug(`ws "devices" event:`, data.data)
                        // TODO: Update device list
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
    <title>PicoW LED | Devices</title>
</svelte:head>

<ul>
    {#each devices as device}
        <DeviceItem {...device} />
    {/each}
</ul>

<style>
    ul {
        padding-top: var(--ui-app-bar-height);
    }
</style>
