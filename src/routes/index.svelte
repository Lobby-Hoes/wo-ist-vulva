<script lang="ts">
    import Level from '$lib/Level.svelte';
    import { onMount } from 'svelte';
    import { preloadAssets } from '$lib/preloadAssets';
    import { isMobile } from '$lib/stores';
    import BindWindowSize from '$lib/BindWindowSize.svelte';
    import GameEndScreen from '$lib/GameEndScreen.svelte';
    import { levelConfigs } from '../lib/levelConfigs';

    let activeLevel = 0;
    let loadingAssets = true;
    let loadingIndicator = 3;
    let gameEnded = false;

    onMount(async () => {
        const assetSrcs = [
            'images/background-1.jpg',
            'images/background-2.jpg',
            'images/background-3.jpg',
            'images/background-4.jpg',
            'audio/background-music.mp3',
            'audio/vulva-found.wav',
            'audio/new-level.wav',
            'images/vulva-sprite-sheet.png'
        ];

        const intervalHandle = setInterval(() => loadingIndicator++, 250);

        await preloadAssets(assetSrcs);
        loadingAssets = false;

        clearInterval(intervalHandle);

        if ($isMobile) {
            onpointerdown = () => document.body.requestFullscreen();
        }
    });

    function levelCompletedCb() {
        if (activeLevel + 1 === levelConfigs.length) {
            return (gameEnded = true);
        }

        activeLevel++;
    }

    $: loadingText = `lade${'.'.repeat(loadingIndicator % 4)}`;
</script>

<svelte:head>
    {#if loadingAssets}
        <title>{loadingText}</title>
    {:else}
        <title>Wo Ist Vulva?</title>
    {/if}
</svelte:head>

{#if loadingAssets}
    <h1>{loadingText}</h1>
{:else}
    <Level {...levelConfigs[activeLevel]} {levelCompletedCb} />
{/if}

{#if gameEnded}
    <GameEndScreen />
{/if}

<BindWindowSize />

<style>
    h1 {
        text-align: center;
        width: 100vw;
    }
</style>
