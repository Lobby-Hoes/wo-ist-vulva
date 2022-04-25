<script lang="ts">
    import RandomVulva from './RandomVulva.svelte';
    import { fade } from 'svelte/transition';
    import ScoreDisplay from './ScoreDisplay.svelte';
    import MuteButton from './MuteButton.svelte';
    import { calcPlaygroundSize, assetUrls, playgroundSize } from './stores';
    import { onMount } from 'svelte';

    export let vulvaPositions: [x: number, y: number][] = [];
    export let backgroundImage: string = '';
    export let music: string = '';
    export let vulvaFoundSound: string = '';
    export let levelCompletedSound: string = '';
    export let levelCompletedCb: () => void = () => 0;

    let innerWidth: number;
    let innerHeight: number;

    let imgRef: HTMLImageElement;
    let backgroundAudioRef: HTMLAudioElement;
    let vulvaFoundAudioRef: HTMLAudioElement;
    let levelCompletedAudioRef: HTMLAudioElement;

    $: [x, y] = vulvaPositions[vulvaPositionIndex] ?? [];

    let randomNumber = Math.random();

    let vulvaPositionIndex = 0;

    function handleClick() {
        vulvaFoundAudioRef.currentTime = 0;
        vulvaFoundAudioRef.play();

        vulvaPositionIndex++;
        randomNumber = Math.random();

        if (vulvaPositionIndex === vulvaPositions.length) {
            vulvaPositionIndex = 0;
            levelCompletedAudioRef.currentTime = 0;
            levelCompletedAudioRef.play();

            levelCompletedCb();
        }
    }

    let imgWidth: number;
    let imgHeight: number;

    $: imgRef &&
        (imgRef.onload = () => {
            imgWidth = imgRef.naturalWidth;
            imgHeight = imgRef.naturalHeight;
        });

    $: !isNaN(imgWidth) && !isNaN(imgHeight) && $calcPlaygroundSize(imgWidth, imgHeight);

    $: levelStyle = `position: relative; width: ${$playgroundSize.x}px; height: ${$playgroundSize.y}px`;

    onMount(() => {
        if (backgroundAudioRef.paused) {
            window.addEventListener('pointerdown', () => {
                backgroundAudioRef.play();
            });
        }

        backgroundAudioRef.volume = vulvaFoundAudioRef.volume = levelCompletedAudioRef.volume = 0.1;
    });
</script>

<div style={levelStyle}>
    <ScoreDisplay found={vulvaPositionIndex} of={vulvaPositions.length} />
    {#if backgroundAudioRef && vulvaFoundAudioRef && levelCompletedAudioRef}
        <MuteButton audioRefs={[backgroundAudioRef, vulvaFoundAudioRef, levelCompletedAudioRef]} />
    {/if}

    {#key backgroundImage}
        <img in:fade bind:this={imgRef} src={$assetUrls[backgroundImage]} alt="background Image"/>
    {/key}

    {#if imgRef}
        {#key vulvaPositionIndex}
            <div in:fade style="position: absolute; left: {x}%; top: {y}%; ">
                <RandomVulva
                    on:click={handleClick}
                    {randomNumber}
                    playgroundSize={$playgroundSize}
                />
            </div>
        {/key}
    {/if}
</div>

<audio bind:this={backgroundAudioRef} src={$assetUrls[music]} autoplay loop />
<audio bind:this={vulvaFoundAudioRef} src={$assetUrls[vulvaFoundSound]} />
<audio bind:this={levelCompletedAudioRef} src={$assetUrls[levelCompletedSound]} />

<svelte:window bind:innerWidth bind:innerHeight />

<style>
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        position: relative;
    }

    audio {
        display: none;
    }
</style>
