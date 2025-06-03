<script lang="ts">
    import "ui/dist/ui.css"

    import { onMount, type Snippet } from "svelte";
    import * as ui from "ui"

    import OnlineIndicator from "$lib/components/OnlineIndicator.svelte";

    const { 
        children
    }: {
        children: Snippet<[]>
    } = $props()

    let onlineIndicator_DataState = $state<"offline" | "online">("offline")

    window.ws = new ui.WS<WSMessageData>("/ws", true)

    onMount(async () => {
        await window.ws.connect()

        console.debug("Adding all WebSocket event listeners")

        window.ws.events.addListener("open", () => {
            console.debug("ws open...")
            onlineIndicator_DataState = "online"
        })

        window.ws.events.addListener("close", () => {
            console.debug("ws close...")
            onlineIndicator_DataState = "offline"
        })
    })
</script>

<main class="ui-container">
    {@render children()}
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
