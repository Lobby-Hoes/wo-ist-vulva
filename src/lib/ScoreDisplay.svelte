<script lang="ts">
    import { fly, fade } from 'svelte/transition';

    export let found: number = 0;
    export let of: number = 0;
</script>

<div in:fade>
    <span>{found} / {of}</span>
    {#key found}
        <img alt="favicon" in:fly={{ y: -50 }} src="favicon.png" />
    {/key}
</div>

<style>
    img {
        width: 7vh;
        margin-left: 1vh;
    }

    span {
        font-size: 6vh;
    }

    div {
        height: 7vh;

        background-color: rgba(0, 0, 255, 0.185);
        border-width: 0.15vw;
        border-color: rgb(27, 27, 27);
        border-style: solid;
        border-top: 0;
        border-left: 0;
        border-bottom-right-radius: 0.5vw;
        position: absolute;
        display: flex;
        align-items: center;
        z-index: 10;
        text-shadow: 0 0.1vw 0.2vw white, 0.1vw 0 0.2vw white, 0 -0.1vw 0.2vw white,
            -0.1vw 0 0.2vw white;
    }
</style>
