<script>
    // TODO: Setup global websocket handler, store and api handlers,
    //       or maybe use "./+layout.ts" for this
</script>

<div class="ui-app-bar">
    <span class="ui-app-bar-left">
        <slot name="left"></slot>
    </span>

    <span class="ui-app-bar-center">
        <h4><slot name="title"></slot></h4>
    </span>

    <span class="ui-app-bar-right">
        <slot name="left"></slot>
    </span>
</div>

<slot></slot>
