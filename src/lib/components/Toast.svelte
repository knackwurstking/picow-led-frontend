<script lang="ts">
    import type { Snippet } from "svelte";
    import type { ToastDataTypes } from "../store/toasts";

    let {
        type,
        timeout = 0, // If number is 0 or lower, timeout handler is ignored
        ondismiss,
        children,
    }: {
        type: ToastDataTypes;
        timeout?: number;
        ondismiss: () => void | Promise<void>;
        children: Snippet<[]>;
    } = $props();

    const timeoutRunning = $derived(
        timeout <= 0
            ? null
            : setTimeout(() => {
                  if (timeoutRunning) {
                      clearTimeout(timeoutRunning);
                  }

                  ondismiss();
              }, timeout),
    );
</script>

{#if type === "info"}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="toast toast-info ui-backdrop ui-border" onclick={ondismiss}>
        {@render children()}
    </div>
{:else if type === "warning"}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="toast toast-warning ui-backdrop ui-border" onclick={ondismiss}>
        {@render children()}
    </div>
{:else if type === "error"}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="toast toast-error ui-backdrop ui-border" onclick={ondismiss}>
        {@render children()}
    </div>
{/if}

<style>
    .toast {
        width: fit-content;
        height: fit-content;
        padding: var(--ui-spacing);
    }

    .toast-warning {
        color: var(--ui-warning-text);
        background-color: var(--ui-warning);
    }

    .toast-error {
        color: var(--ui-error-text);
        background-color: var(--ui-error);
    }
</style>
