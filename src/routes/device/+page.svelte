<script lang="ts">
    import { utils } from "$lib"

    const queryAddr = utils.urlQueryParam("addr")
</script>

<svelte:head>
    <title>PicoW LED | {queryAddr}</title>
</svelte:head>
