<script lang="ts">
    import { fly } from 'svelte/transition';

    export let found: number = 0;
    export let of: number = 0;
</script>

{#key found}
    <div>
        {found} / {of} <img in:fly={{ y: -50 }} src="favicon.png" />
    </div>
{/key}

<style>
    div {
        background-color: rgba(0, 0, 255, 0.185);
        border-width: 2px;
        border-color: rgb(27, 27, 27);
        border-style: solid;
        padding: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        position: absolute;
        font-size: max(3vh, 3vw);
        display: flex;
        align-items: center;
        z-index: 10;
        text-shadow: 0 max(0.1vw, 0.1vw) max(0.2vw, 0.2vw) white,
            max(0.1vw, 0.1vw) 0 max(0.2vw, 0.2vw) white,
            0 min(-0.1vw, -0.1vw) max(0.2vw, 0.2vw) white,
            min(-0.1vw, -0.1vw) 0 max(0.2vw, 0.2vw) white;
    }

    img {
        width: max(3vh, 3vw);
        height: max(3vh, 3vw);
        padding-left: max(1vh, 1vw);
    }
</style>
