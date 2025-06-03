<script lang="ts">
    import { utils } from "$lib"
    import { onMount } from "svelte";

    const queryAddr = utils.urlQueryParam("addr")

    onMount(async () => {
        // TODO: Fetch colors from the api
    })
</script>

<svelte:head>
    <title>PicoW LED | {queryAddr}</title>
</svelte:head>

<!-- TODO: Continue here, page building -->
