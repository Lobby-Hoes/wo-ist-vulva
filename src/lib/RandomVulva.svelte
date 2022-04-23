<script lang="ts">
    import SlicedSpriteSheet from './SlicedSpriteSheet.svelte';
    import { gameConfig } from './gameConfig';
    import { assetUrls } from './stores';

    export let randomNumber: number;
    export let style: string = '';
    export let playgroundSize: { x: number; y: number };

    const SPRITE_COUNT_X = 6;
    const SPRITE_COUNT_Y = 6;

    $: vulvaSize = (playgroundSize.x + playgroundSize.y) * 0.0175;
</script>

<div {style}>
    <SlicedSpriteSheet
        src={$assetUrls[gameConfig.vulvaSpriteSheet]}
        x={(((randomNumber + Math.random()) / 2) * SPRITE_COUNT_X) | 0}
        y={(((randomNumber + Math.random()) / 2) * SPRITE_COUNT_Y) | 0}
        xSlices={SPRITE_COUNT_X}
        ySlices={SPRITE_COUNT_Y}
        style="position: relative; transform: translate(-50%, -50%);"
        size={vulvaSize}
        on:click
    />
</div>
