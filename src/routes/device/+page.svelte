<script lang="ts">
    import { api, utils } from "$lib"
    import { onMount } from "svelte";

    const queryAddr = utils.urlQueryParam("addr")

    let device = $state<Device | undefined>(undefined)

    async function powerOFF() {
        // TODO: ...
    }

    async function powerON() {
        // TODO: ...
    }

    onMount(async () => {
        // Fetch device from api
        device = await api.device.get(queryAddr)

        // TODO: Fetch colors from the api
    })
</script>

<svelte:head>
    <title>PicoW LED | {queryAddr}</title>
</svelte:head>

<div class="ui-flex column gap">
    <span class="power ui-flex gap justify-between align-center">
        <span>Power</span>

        <span>
            <button class="off" data-ui-color="destructive" onclick={powerOFF}>
                OFF
            </button>

            <button class="on" onclick={powerON}>ON</button>
        </span>
    </span>

    <h2>Color Storage</h2>

    {#if device && device.pins.length > 3}
        <div
            class="range-sliders ui-flex column gap nowrap"
            style="display: none"
        >
            {#each device.pins.slice(3) as pin}
            {/each}
        </div>
    {/if}

    <br />

    <div class="color-storage-container ui-flex row gap wrap">
    </div>

    <button class="new-color ui-flex-item">
        New Color

        <input type="color" />
    </button>
</div>

<style>
    button.new-color input[type="color"] {
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
