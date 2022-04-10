<script lang="ts">
    import { fly } from 'svelte/transition';

    export let found: number = 0;
    export let of: number = 0;

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

{#key found}
    <div on:click={toggle}>{soundOn ? 'Mute' : 'Unmute'}</div>
{/key}

<style>
    div {
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
        font-size: max(3vh, 3vw);
        display: flex;
        right: 0;
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
