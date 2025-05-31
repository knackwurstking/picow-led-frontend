<script lang="ts">
    import "ui/dist/ui.css"

    const onlineIndicator_DataState: "offline" | "online" = $state("offline")

    // TODO: Setup global websocket handler, store and api handlers,
    //       or maybe use "./+layout.ts" for this
</script>

<div class="ui-app-bar">
    <span class="ui-app-bar-left">
        <span class="online-indicator" data-state={onlineIndicator_DataState}></span>

        <slot name="app-bar-left"></slot>
    </span>

    <span class="ui-app-bar-center">
        <h4><slot name="app-bar-title"></slot></h4>
    </span>

    <span class="ui-app-bar-right">
        <slot name="app-bar-right"></slot>
    </span>
</div>

<slot></slot>

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
