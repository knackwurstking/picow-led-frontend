<script lang="ts">
    import type { ToastDataTypes } from "../store/toasts";

    let {
        type,
        message,
        timeout = 0, // If number is 0 or lower, timeout handler is ignored
        ondismiss,
    }: {
        type: ToastDataTypes;
        message: string;
        timeout?: number;
        ondismiss: () => void | Promise<void>;
    } = $props();
</script>
