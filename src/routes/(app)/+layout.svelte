<script>
    import "ui/dist/ui.css"

    // TODO: Setup global websocket handler, store and api handlers,
    //       or maybe use "./+layout.ts" for this
</script>

<div class="ui-app-bar">
    <span class="ui-app-bar-left">
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
