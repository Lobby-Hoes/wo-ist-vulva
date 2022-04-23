<script lang="ts">
    import { fly, fade } from 'svelte/transition';

    export let found: number = 0;
    export let of: number = 0;
</script>

<div in:fade>
    {#key found}
        {found} / {of} <img in:fly={{ y: -50 }} src="favicon.png" />
    {/key}
</div>

<style>
    div {
        background-color: rgba(0, 0, 255, 0.185);
        border-width: 0.15vw;
        border-color: rgb(27, 27, 27);
        border-style: solid;
        border-top: 0;
        border-left: 0;
        padding: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        position: absolute;
        font-size: max(3vh, 3vw);
        display: flex;
        align-items: center;
        z-index: 10;
        text-shadow: 0 0.1vw 0.2vw white, 0.1vw 0 0.2vw white, 0 -0.1vw 0.2vw white,
            -0.1vw 0 0.2vw white;
        height: 3rem;
    }

    img {
        width: max(3vh, 3vw);
        height: max(3vh, 3vw);
        padding-left: max(1vh, 1vw);
    }
</style>
