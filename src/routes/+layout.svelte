<script lang="ts">
    import "./bootstrap-icons.css";

    import Toasts from "$lib/components/Toasts.svelte";

    let { children } = $props();

    // NOTE: This part is just for testing toasts
    //
    //onMount(async () => {
    //    let data: Partial<ToastData>[] = [
    //        { type: "info", message: "Info test message" },
    //        { type: "warning", message: "Warning test message" },
    //        { type: "error", message: "Warning test message" },
    //        {
    //            type: "info",
    //            message:
    //                "A very long info test message, I want to test the line break here.",
    //        },
    //    ];
    //    const timeoutHandler = (d: Partial<ToastData> | undefined) => {
    //        if (!d) {
    //            return;
    //        }
    //        addToast(d.type!, d.message!, 0);
    //        setTimeout(() => timeoutHandler(data.shift()), 1000);
    //    };
    //    setTimeout(() => timeoutHandler(data.shift()), 1000);
    //});
</script>

{@render children()}

<Toasts />
