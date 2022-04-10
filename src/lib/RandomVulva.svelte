<script lang="ts">
    import SlicedSpriteSheet from './SlicedSpriteSheet.svelte';

    export let randomNumber: number;
    export let style: string = '';

    const SPRITE_COUNT_X = 6;
    const SPRITE_COUNT_Y = 6;
</script>

<div {style}>
    <SlicedSpriteSheet
        src="images/vulva-sprite-sheet.png"
        x={(((randomNumber + Math.random()) / 2) * SPRITE_COUNT_X) | 0}
        y={(((randomNumber + Math.random()) / 2) * SPRITE_COUNT_Y) | 0}
        xSlices={SPRITE_COUNT_X}
        ySlices={SPRITE_COUNT_Y}
        innerStyle="width: 15vw; height: 15vw;"
        style="position: relative; transform: translate(-50%, -50%) ;"
        on:click
    />
</div>
