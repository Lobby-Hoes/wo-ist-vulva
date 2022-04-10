<script>
    import { windowHeight, windowWidth } from './stores';
</script>

<svelte:window bind:innerWidth={$windowWidth} bind:innerHeight={$windowHeight} />
