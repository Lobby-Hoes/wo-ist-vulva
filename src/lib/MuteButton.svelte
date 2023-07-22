<script lang="ts">
    import { fade } from 'svelte/transition';
    import FaVolumeMute from 'svelte-icons/fa/FaVolumeMute.svelte';
    import FaVolumeUp from 'svelte-icons/fa/FaVolumeUp.svelte';
    import { screenSize } from './stores';

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
</script>

{#key soundOn}
    <div class="container" transition:fade={{ duration: 200 }} on:click={onToggle}>
        <div class="inner">
            {#if soundOn}
                <FaVolumeUp />
            {:else}
                <FaVolumeMute />
            {/if}
        </div>
    </div>
{/key}

<style>
    div.container {
        user-select: none;
        background-color: rgba(0, 0, 255, 0.185);
        border-width: 0.15vw;
        border-color: rgb(27, 27, 27);
        border-style: solid;
        border-top: 0;
        border-right: 0;
        border-bottom-left-radius: 0.5vw;
        position: absolute;

        right: 0;
        z-index: 10;
        color: black;

        height: 7vh;
        width: 7vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.inner {
        height: 5vh;
        width: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
