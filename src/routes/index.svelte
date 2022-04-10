<script lang="ts">
    import Level from '$lib/Level.svelte';
    import { onMount } from 'svelte';
    import { preloadAssets } from '$lib/preloadAssets';
    import { shuffle } from '$lib/shuffleArray';
    import { isMobile } from '../lib/stores';
    import BindWindowSize from '../lib/BindWindowSize.svelte';

    let activeLevel = 0;
    const levelConfigs = [
        {
            backgroundImage: 'images/background-1.jpg',
            music: 'audio/background-music.mp3',
            vulvaFoundSound: 'audio/vulva-found.wav',
            levelCompletedSound: 'audio/new-level.wav',
            vulvaPositions: shuffle([
                [38.46153846153847, 83.78378378378379],
                [92.3076923076923, 29.440154440154444],
                [75.84427767354597, 52.02702702702703],
                [9.00562851782364, 43.91891891891892],
                [38.930581613508444, 59.55598455598455],
                [57.78611632270169, 29.150579150579148],
                [84.3558282208589, 88.53838065194533],
                [56.39059304703476, 42.16614090431125],
                [18.865030674846626, 41.6403785488959],
                [14.263803680981596, 94.42691903259727]
            ])
        },
        {
            backgroundImage: 'images/background-2.jpg',
            music: 'audio/background-music.mp3',
            vulvaFoundSound: 'audio/vulva-found.wav',
            levelCompletedSound: 'audio/new-level.wav',
            vulvaPositions: shuffle([
                [13.847780126849896, 13.361611876988336],
                [32.66384778012685, 6.362672322375397],
                [70.29598308668076, 22.375397667020145],
                [37.52642706131078, 24.814422057264053],
                [5.9196617336152215, 29.16224814422057],
                [74.4186046511628, 97.03075291622481],
                [12.050739957716702, 79.00318133616119],
                [85.41226215644821, 58.21845174973489],
                [38.16067653276956, 35.949098621421],
                [37.315010570824526, 49.840933191940614]
            ])
        },
        {
            backgroundImage: 'images/background-3.jpg',
            music: 'audio/background-music.mp3',
            vulvaFoundSound: 'audio/vulva-found.wav',
            levelCompletedSound: 'audio/new-level.wav',
            vulvaPositions: shuffle([
                [63.45454545454545, 10.550458715596331],
                [84.95454545454545, 36.972477064220186],
                [73.36363636363636, 49.357798165137616],
                [51.81818181818182, 61.92660550458715],
                [28.363636363636363, 90.36697247706422],
                [25.90909090909091, 74.40366972477064],
                [6.409090909090908, 20.18348623853211],
                [74.45454545454545, 18.34862385321101],
                [56.63636363636364, 3.9449541284403673],
                [51.227272727272734, 5.871559633027523]
            ])
        },
        {
            backgroundImage: 'images/background-4.jpg',
            music: 'audio/background-music.mp3',
            vulvaFoundSound: 'audio/vulva-found.wav',
            levelCompletedSound: 'audio/new-level.wav',
            vulvaPositions: [...new Array(10)].map(() => [
                Math.random() * 90 + 5,
                Math.random() * 90 + 5
            ])
        }
    ];

    let loadingAssets = true;
    let loadingIndicator = 3;
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
        activeLevel++;
        activeLevel %= levelConfigs.length;
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

<BindWindowSize />

<style>
    h1 {
        text-align: center;
        width: 100vw;
    }
</style>
