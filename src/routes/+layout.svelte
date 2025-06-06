<script lang="ts">
    import "ui/dist/ui.css";
    import "./bootstrap-icons.css";

    let { children } = $props();
</script>

{@render children()}

<!-- TODO: Add in app notifications container here + 
           some $lib.notification utils for adding new notifications -->
