<script lang="ts">
    // TODO: Continue here, Active and input, change color, handler
    let { color }: { color: Color } = $props();
</script>

<div
    class="color-storage-item ui-border ui-padding"
    style="width: 7rem; height: 3.5rem"
    data-color
>
    <div
        style="
                background-color: currentColor;
                color: inherit;
                width: 100%;
                height: 100%;
                border-radius: inherit;
            "
    ></div>
    <input type="color" />
    <button
        class="delete"
        style="
                --wght: 850;
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(50%, -50%);
                border-radius: 50%;
                padding: 0 !important;
            "
        data-ui-variant="ghost"
        data-ui-icon
    >
        x
    </button>
</div>

<style>
</style>
