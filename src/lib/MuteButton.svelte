<script lang="ts">
    import { fade } from 'svelte/transition';
    import FaVolumeMute from 'svelte-icons/fa/FaVolumeMute.svelte';
    import FaVolumeUp from 'svelte-icons/fa/FaVolumeUp.svelte';
    import { initialPlaygroundSize } from './stores';

    export let audioRefs: HTMLAudioElement[] = [];

    const STORAGE_KEY = 'muted';
    let soundOn: boolean = !localStorage.getItem(STORAGE_KEY);

    function onToggle() {
        if (soundOn) {
            localStorage.setItem(STORAGE_KEY, '1');
        } else {
            localStorage.removeItem(STORAGE_KEY);
        }

        for (const audio of audioRefs) {
            audio.muted = soundOn;
        }

        soundOn = !soundOn;
    }

    $: style = `height: ${$initialPlaygroundSize.y * 0.1}px; width: ${
        $initialPlaygroundSize.x * 0.07
    }px; padding: ${$initialPlaygroundSize.x * 0.01}px;`;
</script>

{#key soundOn}
    <div transition:fade={{ duration: 200 }} on:click={onToggle} {style}>
        {#if soundOn}
            <FaVolumeUp />
        {:else}
            <FaVolumeMute />
        {/if}
    </div>
{/key}

<style>
    div {
        user-select: none;
        background-color: rgba(0, 0, 255, 0.185);
        border-width: 0.15vw;
        border-color: rgb(27, 27, 27);
        border-style: solid;
        border-top: 0;
        border-right: 0;
        border-bottom-left-radius: 0.5vw;
        position: absolute;

        display: flex;
        right: 0;
        align-items: center;
        z-index: 10;
        color: black;
    }
</style>
