<script lang="ts">
    import FaVolumeMute from 'svelte-icons/fa/FaVolumeMute.svelte';
    import FaVolumeUp from 'svelte-icons/fa/FaVolumeUp.svelte';

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
    <div on:click={onToggle}>
        {#if soundOn}
            <FaVolumeUp />
        {:else}
            <FaVolumeMute />
        {/if}
    </div>
{/key}

<style>
    div {
        height: 3rem;
        width: 3rem;
        user-select: none;
        background-color: rgba(0, 0, 255, 0.185);
        border-width: 2px;
        border-color: rgb(27, 27, 27);
        border-style: solid;
        border-top: 0;
        border-right: 0;
        padding: 0.8rem;
        border-bottom-left-radius: 0.8rem;
        position: absolute;

        display: flex;
        right: 0;
        align-items: center;
        z-index: 10;
        color: black;
    }
</style>
