<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import FixedSizeText from './FixedSizeText.svelte';
    import { playgroundSize } from './stores';

    export let found: number = 0;
    export let of: number = 0;
</script>

<div in:fade style="padding: {$playgroundSize.x * 0.01}px">
    <FixedSizeText
        width={$playgroundSize.x * 0.1}
        height={$playgroundSize.y * 0.1}
        text="{found} / {of}"
    />
    {#key found}
        <img
            in:fly={{ y: -50 }}
            src="favicon.png"
            style="width: {$playgroundSize.x * 0.03}px; margin-left: {$playgroundSize.x * 0.01}px;"
        />
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
        border-bottom-right-radius: 0.8rem;
        position: absolute;
        display: flex;
        align-items: center;
        z-index: 10;
        text-shadow: 0 0.1vw 0.2vw white, 0.1vw 0 0.2vw white, 0 -0.1vw 0.2vw white,
            -0.1vw 0 0.2vw white;
    }
</style>
