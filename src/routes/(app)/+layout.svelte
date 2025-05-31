<script lang="ts">
    import "ui/dist/ui.css"

    import { onMount, type Snippet } from "svelte";
    import * as ui from "ui"

    const { 
        appBarTitle, appBarLeft, appBarRight, children
    }: {
        appBarTitle: Snippet, appBarLeft: Snippet, appBarRight: Snippet, children: Snippet<[]>
    } = $props()

    let onlineIndicator_DataState = $state<"offline" | "online">("offline")

    const ws = new ui.WS<WSMessageData>("/ws", true)

    onMount(async () => {
        await ws.connect()

        console.debug("Adding all WebSocket event listeners now")

        ws.events.addListener("open", () => {
            console.debug("ws open...")
            onlineIndicator_DataState = "online"
        })

        ws.events.addListener("close", () => {
            console.debug("ws close...")
            onlineIndicator_DataState = "offline"
        })

        ws.events.addListener("error", () => {
            console.debug("ws error...")
        })
    })
</script>

<div class="ui-app-bar">
    <span class="ui-app-bar-left">
        <span class="online-indicator" data-state={onlineIndicator_DataState}></span>

        {#if appBarLeft}
            {@render appBarLeft()}
        {/if}
    </span>

    <span class="ui-app-bar-center">
        <h4>
            {#if appBarTitle}
                {@render appBarTitle()}
            {:else}
                Devices
            {/if}
        </h4>
    </span>

    <span class="ui-app-bar-right">
        {#if appBarRight}
            {@render appBarRight()}
        {/if}
    </span>
</div>

{@render children()}

<style>
    .online-indicator {
        --mono: 1;
        --wght: 650;
        font-size: 0.75rem;
    }

    .online-indicator[data-state="online"] {
        color: green;
    }

    .online-indicator[data-state="online"]::after {
        content: "Online";
        color: green;
    }

    .online-indicator[data-state="offline"] {
        color: red;
    }

    .online-indicator[data-state="offline"]::after {
        content: "Offline";
        color: red;
    }
</style>
