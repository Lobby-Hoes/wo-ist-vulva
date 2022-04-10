<script lang="ts">
    import FaVolumeMute from 'svelte-icons/fa/FaVolumeMute.svelte';
    import FaVolumeUp from 'svelte-icons/fa/FaVolumeUp.svelte';

    export let audioRefs: HTMLAudioElement[] = [];

    let soundOn = true;

    localStorage.setItem('sound', '1');

    setVolume(Number(localStorage.getItem('sound')));

    function toggle() {
        let newVolume;

        if (localStorage.getItem('sound') == '0') {
            newVolume = 1;
            soundOn = true;
        } else {
            newVolume = 0;
            soundOn = false;
        }

        setVolume(newVolume);
    }

    function setVolume(volume: number) {
        let players: HTMLAudioElement[] = document.getElementsByClassName('mutablePlayer');

        localStorage.setItem('sound', volume);

        for (let index = 0; index < players.length; index++) {
            const player = players[index];
            player.volume = volume;
        }
    }
</script>

{#key soundOn}
    <div on:click={toggle}>
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
