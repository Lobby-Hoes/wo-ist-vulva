<script lang="ts">
    import Level from '$lib/Level.svelte';
    import { onMount } from 'svelte';
    import { preloadAsset, preloadAssets } from '$lib/preloadAssets';
    import { isMobile } from '$lib/stores';
    import BindWindowSize from '$lib/BindWindowSize.svelte';
    import GameEndScreen from '$lib/GameEndScreen.svelte';
    import { gameConfig } from '$lib/gameConfig';

    let activeLevel = 0;
    let gameEnded = false;
    let loadingIndicatorDots = 0;
    let maxLevel = -1;

    const onUnhandledRejection = (e) => alert('something went wrong:\n' + e.reason);

    onMount(async () => {
        setInterval(() => {
            loadingIndicatorDots++;
        }, 500);

        await preloadAssets([
            gameConfig.levels[0].backgroundImage,
            gameConfig.music,
            gameConfig.levelCompletedSound,
            gameConfig.vulvaFoundSound,
            gameConfig.vulvaSpriteSheet
        ]);

        maxLevel = 0;

        if ($isMobile) {
            onpointerdown = () => document.body.requestFullscreen();
        }

        for (const src of gameConfig.levels.slice(1).map((l) => l.backgroundImage)) {
            await preloadAsset(src);
            maxLevel++;
        }

        const gameEndImg = new Image();
        gameEndImg.src = gameConfig.gameEndImage;
        'load' in gameEndImg && gameEndImg.load();
    });

    function levelCompletedCb() {
        if (activeLevel + 1 === gameConfig.levels.length) {
            return (gameEnded = true);
        }

        activeLevel++;
    }

    $: loadingText = 'lade level ' + (maxLevel + 2) + '.'.repeat(loadingIndicatorDots % 4);

    const { levels, vulvaSpriteSheet, gameEndImage, ...partialLevelConfig } = gameConfig;
    $: levelConfig = { ...partialLevelConfig, ...levels[activeLevel], levelCompletedCb };
</script>

<svelte:head>
    {#if maxLevel < activeLevel}
        {#key loadingText}
            <title>{loadingText}</title>
        {/key}
    {:else}
        <title>Wo Ist Vulva?</title>
    {/if}
</svelte:head>

{#if maxLevel < activeLevel}
    <h1>{loadingText}</h1>
{:else}
    <Level {...levelConfig} />
{/if}

{#if gameEnded}
    <GameEndScreen />
{/if}

<BindWindowSize />
<svelte:window on:unhandledRejection={onUnhandledRejection} />

<style>
    h1 {
        text-align: center;
        width: 100vw;
    }
</style>
