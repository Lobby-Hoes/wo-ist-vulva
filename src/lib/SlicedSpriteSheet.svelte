<script lang="ts">
    import { onMount } from 'svelte';

    export let xSlices: number = 1;
    export let ySlices: number = 1;
    export let src: string = '';
    export let x: number = 0;
    export let y: number = 0;
    export let style: string = '';
    export let innerStyle: string = '';

    let img: HTMLImageElement;
    let width: number;
    let height: number;

    onMount(() => {
        if (img.width && img.height) {
            width = img.width;
            height = img.height;
            return;
        }

        const loadListener = () => {
            width = img.width;
            height = img.height;
            img.removeEventListener('load', loadListener);
        };

        img.addEventListener('load', loadListener);
    });

    $: sliceWidth = (width / xSlices) | 0;
    $: sliceHeight = (height / ySlices) | 0;
    $: imgStyle =
        (sliceWidth && sliceHeight && `left: -${x * sliceWidth}px; top: -${y * sliceHeight}px;`) ??
        'display: none';
</script>

<div on:click style="width: {sliceWidth}px; height: {sliceHeight}px; {style}">
    <img bind:this={img} {src} style={imgStyle + innerStyle} />
</div>

<style>
    img {
        position: relative;
        user-select: none;
    }

    div {
        overflow: hidden;
    }
</style>
