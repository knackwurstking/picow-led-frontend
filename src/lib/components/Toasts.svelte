<script lang="ts">
    // NOTE: https://svelte.dev/playground/0091c8b604b74ed88bb7b6d174504f50?version=3.35.0

    import { toasts } from "../store/toasts";

    import Toast from "./Toast.svelte";
</script>

<section class="toasts">
    {#each $toasts as toast}
        <Toast
            type={toast.type}
            message={toast.message}
            timeout={toast.timeout}
            ondismiss={async () => {
                // TODO: Remove from $toasts
            }}
        />
    {/each}
</section>

<style>
    .toasts {
        z-index: 999;
        position: absolute;
        bottom: var(--ui-spacing);
        right: var(--ui-spacing);
        width: fit-content;
        max-width: calc(100% - var(--ui-spacing) * 2);
        height: fit-content;
        max-height: calc(100% - var(--ui-spacing) * 2);
    }

    .toasts > * {
        width: fit-content;
        height: fit-content;
        padding: var(--ui-spacing);
    }
</style>
