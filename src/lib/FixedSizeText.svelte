<script lang="ts">
    export let width: number;
    export let height: number;
    export let text: string;
    export let style: string = '';

    let measureTextRef: HTMLDivElement;
    let calculatedFontSize: string;

    function calcWidth(width: number) {
        let fontSize = width;
        let currentWidth: number;

        measureTextRef.style.fontSize = `${fontSize}px`;

        while (
            (currentWidth = measureTextRef.getBoundingClientRect().width) > width &&
            currentWidth > 0 &&
            fontSize > 0
        ) {
            measureTextRef.style.fontSize = `${fontSize--}px`;
        }

        calculatedFontSize = measureTextRef.style.fontSize;
    }

    $: width && calcWidth(width);
</script>

<div bind:this={measureTextRef} style="visibility: hidden; position: fixed; top: 100vh;">
    {text}
</div>

<div style="width: {width}px; height: {height}px; font-size: {calculatedFontSize}; {style}">
    {text}
</div>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
