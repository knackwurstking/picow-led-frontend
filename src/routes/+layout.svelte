<script lang="ts">
    import "./bootstrap-icons.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="stylesheet" href="../../node_modules/ui/dist/ui.css" />
</svelte:head>

{@render children()}

<!-- TODO: Add in app notifications container here + 
           some $lib.notification utils for adding new notifications -->
