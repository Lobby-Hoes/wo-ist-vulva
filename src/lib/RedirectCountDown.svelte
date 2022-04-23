<script lang="ts">
    import { onMount } from 'svelte';

    export let url: string = '';
    export let seconds: number = 0;

    let secondsLeft = seconds;

    onMount(() => {
        setTimeout(() => (window.location.href = url), seconds * 1000);
        setInterval(() => secondsLeft > 0 && secondsLeft--, 1000);
    });
</script>

<p>{secondsLeft}</p>
