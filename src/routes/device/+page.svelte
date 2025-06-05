<script lang="ts">
    import "ui/dist/ui.css";

    import { onMount } from "svelte";
    import * as ui from "ui";

    import { api, utils } from "$lib";

    import ColorRangeSlider from "$lib/components/ColorRangeSlider.svelte";
    import OnlineIndicator from "$lib/components/OnlineIndicator.svelte";
    import ColorStorageItem from "$lib/components/ColorStorageItem.svelte";

    const queryAddr = utils.urlQueryParam("addr");
    const ws = new ui.WS<WSMessageData>("/ws", true);

    let device = $state<Device | undefined>(undefined);
    let colors = $state<Colors | undefined>(undefined);
    let onlineIndicator_DataState = $state<"offline" | "online">("offline");

    async function powerOFF() {
        // TODO: ...
    }

    async function powerON() {
        // TODO: ...
    }

    onMount(async () => {
        device = await api.device.get(queryAddr);

        await ws.connect();

        console.debug("Adding all WebSocket event listeners");

        ws.events.addListener("open", () => {
            console.debug("ws open...");
            onlineIndicator_DataState = "online";
        });

        ws.events.addListener("close", () => {
            console.debug("ws close...");
            onlineIndicator_DataState = "offline";
        });

        colors = await api.colors.get();
    });
</script>

<svelte:head>
    <title>PicoW LED | {queryAddr}</title>
</svelte:head>

<main class="ui-container">
    <div class="ui-flex column gap">
        <span class="power ui-flex gap justify-between align-center">
            <span>Power</span>

            <span>
                <button
                    class="off"
                    data-ui-color="destructive"
                    onclick={powerOFF}
                >
                    OFF
                </button>

                <button class="on" onclick={powerON}>ON</button>
            </span>
        </span>

        <h2>Color Storage</h2>

        {#if device && device.pins.length > 3}
            <div class="range-sliders ui-flex column gap nowrap">
                {#each device.pins.slice(3) as pin, index}
                    <ColorRangeSlider
                        {pin}
                        bind:value={device.color[index + 3]}
                    />
                {/each}
            </div>
        {/if}

        <br />

        {#if colors && colors.length > 0}
            <div class="color-storage-container ui-flex row gap wrap">
                {#each colors as color}
                    <ColorStorageItem {color} />
                {/each}
            </div>
        {/if}

        <button class="new-color ui-flex-item">
            New Color

            <input type="color" />
        </button>
    </div>
</main>

<div class="ui-app-bar" data-ui-position="top">
    <span class="ui-app-bar-left">
        <OnlineIndicator state={onlineIndicator_DataState} />
    </span>

    <span class="ui-app-bar-center">
        <h4>{device?.name || queryAddr}</h4>
    </span>

    <span class="ui-app-bar-right"></span>
</div>

<style>
    main {
        padding-top: calc(var(--ui-app-bar-height) + var(--ui-spacing));
    }

    main button.new-color input[type="color"] {
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
